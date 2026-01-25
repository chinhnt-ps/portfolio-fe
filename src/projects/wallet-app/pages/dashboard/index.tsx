import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useSWRConfig } from 'swr';
import { FinancialOverview } from './FinancialOverview';
import { IncomeExpenseStats } from './IncomeExpenseStats';
import { QuickAddTransaction } from './QuickAddTransaction';
import { RecentTransactions } from './RecentTransactions';
import { SWR_KEYS } from '../../api/hooks';

interface DateFilter {
  startDate?: string;
  endDate?: string;
  period?: '30days' | 'month' | 'custom';
}

/**
 * Dashboard Page
 * 
 * Hiển thị:
 * - Section 1: Tổng quan tài chính (5 metrics)
 * - Section 2: Thu/Chi với filters
 * - Section 3: Thêm giao dịch mới
 * - Section 4: Giao dịch gần đây
 */
export const Dashboard = () => {
  const { t } = useTranslation();
  const { mutate } = useSWRConfig();
  
  // Shared date filter state for Section 2 and 4
  const [dateFilter, setDateFilter] = useState<DateFilter>({ period: 'month' });

  // Callback when transaction is created via NLP
  const handleTransactionCreated = useCallback(() => {
    // Revalidate relevant data
    mutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.TRANSACTIONS));
    mutate(SWR_KEYS.ACCOUNTS);
    mutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.REPORTS));
    mutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.RECEIVABLES));
    mutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.LIABILITIES));
  }, [mutate]);

  return (
    <DashboardWrapper className="dashboard-wrapper">
      <h1 className="title">{t('wallet.dashboard.title')}</h1>

      {/* Section 1: Tổng quan tài chính */}
      <FinancialOverview />

      {/* Section 2: Thu/Chi với filters */}
      <IncomeExpenseStats 
        dateFilter={dateFilter} 
        onFilterChange={setDateFilter} 
      />

      {/* Section 3: Thêm giao dịch mới */}
      <QuickAddTransaction onTransactionCreated={handleTransactionCreated} />

      {/* Section 4: Giao dịch gần đây */}
      <RecentTransactions dateFilter={dateFilter} />
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .title {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0 0 ${({ theme }) => theme.spacing[10]} 0;
    letter-spacing: -0.02em;
    line-height: 1.2;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    }
  }
`;

export default Dashboard;
