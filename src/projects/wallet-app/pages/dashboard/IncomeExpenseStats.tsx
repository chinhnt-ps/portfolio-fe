import { useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useReports } from '../../api/hooks';
import { formatCurrency, formatLocalDateTime } from '../../utils/formatters';

interface DateFilter {
  startDate?: string;
  endDate?: string;
  period?: '30days' | 'month' | 'custom';
}

interface IncomeExpenseStatsProps {
  dateFilter: DateFilter;
  onFilterChange: (filter: DateFilter) => void;
}

/**
 * IncomeExpenseStats Component
 * 
 * Section 2: Thu/Chi với filters
 */
export const IncomeExpenseStats = ({ dateFilter, onFilterChange }: IncomeExpenseStatsProps) => {
  const { t } = useTranslation();
  
  // Calculate date range based on filter
  const dateRange = useMemo(() => {
    let startDate: string | undefined;
    let endDate: string | undefined;
    const now = new Date();
    
    if (dateFilter.period === '30days') {
      const thirtyDaysAgo = new Date(now);
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      startDate = formatLocalDateTime(thirtyDaysAgo, true);
      endDate = formatLocalDateTime(now, false);
    } else if (dateFilter.period === 'month') {
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
      startDate = formatLocalDateTime(firstDay, true);
      endDate = formatLocalDateTime(now, false);
    } else if (dateFilter.period === 'custom') {
      if (dateFilter.startDate) {
        startDate = `${dateFilter.startDate}T00:00:00`;
      }
      if (dateFilter.endDate) {
        endDate = `${dateFilter.endDate}T23:59:59`;
      }
    }

    return { startDate, endDate };
  }, [dateFilter]);

  // SWR hook for reports
  const { report, isLoading } = useReports({
    period: dateFilter.period === 'month' ? 'month' : 'day',
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
  });

  const handleQuickFilter = useCallback((period: '30days' | 'month') => {
    onFilterChange({ period });
  }, [onFilterChange]);

  const handleCustomDateChange = useCallback((field: 'startDate' | 'endDate', value: string) => {
    const newFilter = { ...dateFilter, [field]: value, period: 'custom' as const };
    onFilterChange(newFilter);
  }, [dateFilter, onFilterChange]);

  return (
    <IncomeExpenseStatsWrapper className="income-expense-stats">
      <div className="section-header">
        <h2 className="section-title">{t('wallet.dashboard.incomeExpense') || 'Thu/Chi'}</h2>
        <div className="filter-controls">
          <Button
            variant={dateFilter.period === '30days' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleQuickFilter('30days')}
          >
            {t('wallet.dashboard.last30Days') || '30 ngày gần nhất'}
          </Button>
          <Button
            variant={dateFilter.period === 'month' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleQuickFilter('month')}
          >
            {t('wallet.dashboard.thisMonth') || 'Tháng này'}
          </Button>
          <div className="date-range-picker">
            <Input
              type="date"
              className="date-input"
              value={dateFilter.startDate || ''}
              onChange={(e) => handleCustomDateChange('startDate', e.target.value)}
              placeholder={t('wallet.dashboard.fromDate') || 'Từ ngày'}
            />
            <span className="date-separator">-</span>
            <Input
              type="date"
              className="date-input"
              value={dateFilter.endDate || ''}
              onChange={(e) => handleCustomDateChange('endDate', e.target.value)}
              placeholder={t('wallet.dashboard.toDate') || 'Đến ngày'}
            />
          </div>
        </div>
      </div>
      
      {isLoading ? (
        <div className="stats-grid">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-8 w-32" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="stats-grid">
          <Card>
            <CardContent className="p-6">
              <div className="stat-label">{t('wallet.dashboard.totalIncome')}</div>
              <div className="stat-value stat-value--positive">
                {report ? formatCurrency(report.totalIncome ?? 0) : '0 ₫'}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="stat-label">{t('wallet.dashboard.totalExpense')}</div>
              <div className="stat-value stat-value--negative">
                {report ? formatCurrency(report.totalExpense ?? 0) : '0 ₫'}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="stat-label">{t('wallet.dashboard.netSavings')}</div>
              <div className="stat-value">
                {report ? formatCurrency(report.netSavings ?? 0) : '0 ₫'}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </IncomeExpenseStatsWrapper>
  );
};

const IncomeExpenseStatsWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing[10]};

  .section-header {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[4]};
    margin-bottom: ${({ theme }) => theme.spacing[6]};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  .section-title {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    letter-spacing: -0.01em;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    }
  }

  .filter-controls {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing[2]};
    align-items: center;

    button {
      height: 36px;
    }

    .date-range-picker {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};

      .date-input {
        width: auto;
        min-width: 150px;
        height: 36px;

        &[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0.7;
          filter: ${({ theme }) =>
            theme.colors.background === '#0a0a0a' || theme.colors.background === '#1a1a1a'
              ? 'invert(1) brightness(1.2)'
              : 'none'};
        }
      }

      .date-separator {
        color: ${({ theme }) => theme.colors.text.secondary};
      }
    }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[4]};

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-template-columns: repeat(3, 1fr);
    }

    .stat-label {
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
      color: ${({ theme }) => theme.colors.text.secondary};
      margin-bottom: ${({ theme }) => theme.spacing[3]};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .stat-value {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.text.primary};
      line-height: 1.2;
      letter-spacing: -0.02em;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
      }

      &--positive {
        color: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
      }

      &--negative {
        color: ${({ theme }) => theme.colors.error || '#ef4444'};
      }
    }
  }
`;

export default IncomeExpenseStats;
