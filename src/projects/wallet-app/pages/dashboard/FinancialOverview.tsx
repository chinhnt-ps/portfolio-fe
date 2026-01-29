import { useMemo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useAccounts, useReceivables, useLiabilities } from '../../api/hooks';
import { isPostpaidAccount } from '../../api/types';
import { formatCurrency } from '../../utils/formatters';

/**
 * Financial Overview Metrics
 */
interface FinancialMetrics {
  totalAssets: number;
  currentCash: number;
  totalSavingsInvestment: number;
  totalReceivables: number;
  totalLiabilities: number;
}

/**
 * FinancialOverview Component
 * 
 * Section 1: Tổng quan tài chính (5 metrics)
 */
export const FinancialOverview = () => {
  const { t } = useTranslation();
  
  // SWR hooks - automatic deduplication & caching
  const { accounts, isLoading: accountsLoading } = useAccounts();
  const { receivables, isLoading: receivablesLoading } = useReceivables({ page: 0, size: 1000 });
  const { liabilities, isLoading: liabilitiesLoading } = useLiabilities({ page: 0, size: 1000 });
  
  const isLoading = accountsLoading || receivablesLoading || liabilitiesLoading;

  // Calculate financial metrics
  const metrics = useMemo<FinancialMetrics | null>(() => {
    if (accounts.length === 0) return null;

    const regularAccounts = accounts.filter((acc) => !isPostpaidAccount(acc));
    const postpaidAccounts = accounts.filter((acc) => isPostpaidAccount(acc));
    
    const totalAccountsAll = regularAccounts.reduce((sum, acc) => sum + (acc.currentBalance || 0), 0);
    const currentCash = regularAccounts
      .filter((acc) => acc.type !== 'SAVINGS' && acc.type !== 'INVESTMENT')
      .reduce((sum, acc) => sum + (acc.currentBalance || 0), 0);
    const totalSavingsInvestment = regularAccounts
      .filter((acc) => acc.type === 'SAVINGS' || acc.type === 'INVESTMENT')
      .reduce((sum, acc) => sum + (acc.currentBalance || 0), 0);
    const totalReceivables = receivables.reduce(
      (sum, rec) => sum + (rec.remainingAmount || 0),
      0
    );
    const liabilitiesDebt = liabilities.reduce(
      (sum, liab) => sum + (liab.remainingAmount || 0),
      0
    );
    const postpaidDebt = postpaidAccounts.reduce(
      (sum, acc) => sum + (acc.currentDebt || 0),
      0
    );
    const totalLiabilities = liabilitiesDebt + postpaidDebt;
    const totalAssets = totalAccountsAll + totalReceivables - totalLiabilities;

    return {
      totalAssets,
      currentCash,
      totalSavingsInvestment,
      totalReceivables,
      totalLiabilities,
    };
  }, [accounts, receivables, liabilities]);

  if (isLoading) {
    return (
      <FinancialOverviewWrapper className="financial-overview">
        <div className="section-header">
          <h2 className="section-title">{t('wallet.dashboard.financialOverview') || 'Tổng quan tài chính'}</h2>
        </div>
        <div className="financial-grid">
          {[...Array(5)].map((_, i) => (
            <Card
              key={i}
              className={`financial-card ${i <= 1 ? 'financial-card--half' : 'financial-card--third'}`}
            >
              <CardContent className="p-6">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-8 w-32" />
              </CardContent>
            </Card>
          ))}
        </div>
      </FinancialOverviewWrapper>
    );
  }

  return (
    <FinancialOverviewWrapper className="financial-overview">
      <div className="section-header">
        <h2 className="section-title">{t('wallet.dashboard.financialOverview') || 'Tổng quan tài chính'}</h2>
      </div>
      <div className="financial-grid">
        <Card className="financial-card financial-card--half">
          <CardContent className="p-6">
            <div className="stat-label">{t('wallet.dashboard.totalAssets') || 'Tổng tài sản'}</div>
            <div className="stat-value">
              {metrics ? formatCurrency(metrics.totalAssets) : '0 ₫'}
            </div>
          </CardContent>
        </Card>

        <Card className="financial-card financial-card--half">
          <CardContent className="p-6">
            <div className="stat-label">{t('wallet.dashboard.currentCash') || 'Tiền hiện có'}</div>
            <div className="stat-value stat-value--positive">
              {metrics ? formatCurrency(metrics.currentCash) : '0 ₫'}
            </div>
          </CardContent>
        </Card>

        <Card className="financial-card financial-card--third">
          <CardContent className="p-6">
            <div className="stat-label">{t('wallet.dashboard.totalSavingsInvestment') || 'Tiết kiệm/Đầu tư'}</div>
            <div className="stat-value stat-value--positive">
              {metrics ? formatCurrency(metrics.totalSavingsInvestment) : '0 ₫'}
            </div>
          </CardContent>
        </Card>

        <Card className="financial-card financial-card--third">
          <CardContent className="p-6">
            <div className="stat-label">{t('wallet.dashboard.totalReceivables') || 'Khoản cho vay'}</div>
            <div className="stat-value stat-value--positive">
              {metrics ? formatCurrency(metrics.totalReceivables) : '0 ₫'}
            </div>
          </CardContent>
        </Card>

        <Card className="financial-card financial-card--third">
          <CardContent className="p-6">
            <div className="stat-label">{t('wallet.dashboard.totalLiabilities') || 'Khoản nợ'}</div>
            <div className="stat-value stat-value--negative">
              {metrics ? formatCurrency(metrics.totalLiabilities) : '0 ₫'}
            </div>
          </CardContent>
        </Card>
      </div>
    </FinancialOverviewWrapper>
  );
};

const FinancialOverviewWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing[10]};

  .section-header {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }

  .section-title {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    letter-spacing: -0.01em;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    }
  }

  .financial-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[4]};

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      grid-template-columns: repeat(6, 1fr);
    }

    .financial-card {
      @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        &--half {
          grid-column: span 3;
        }
        &--third {
          grid-column: span 2;
        }
      }
    }

    .stat-label {
      font-size: ${({ theme }) => theme.typography.fontSize.base};
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

export default FinancialOverview;
