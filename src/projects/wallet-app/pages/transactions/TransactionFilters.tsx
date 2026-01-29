import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AmountInput } from '../../components/AmountInput';
import type { Account, Category, TransactionFilters as TFilters } from '../../api/types';

interface TransactionFiltersProps {
  filters: TFilters;
  accounts: Account[];
  categories: Category[];
  onFilterChange: (key: keyof TFilters, value: string | number | undefined) => void;
}

/**
 * TransactionFilters Component
 * 
 * Panel bộ lọc nâng cao cho danh sách giao dịch
 */
export const TransactionFilters = ({
  filters,
  accounts,
  categories,
  onFilterChange,
}: TransactionFiltersProps) => {
  const { t } = useTranslation();

  return (
    <TransactionFiltersWrapper>
      <CardContent className="p-6">
        <div className="filters-grid">
          <div className="filter-group">
            <label className="label">{t('wallet.transactions.type')}</label>
            <Select
              value={filters.type || '__all__'}
              onValueChange={(value) => onFilterChange('type', value === '__all__' ? undefined : value)}
            >
              <SelectTrigger className="select">
                <SelectValue placeholder={t('wallet.transactions.all')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__all__">{t('wallet.transactions.all')}</SelectItem>
                <SelectItem value="EXPENSE">{t('wallet.transactions.expense')}</SelectItem>
                <SelectItem value="INCOME">{t('wallet.transactions.income')}</SelectItem>
                <SelectItem value="TRANSFER">{t('wallet.transactions.transfer')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="filter-group">
            <label className="label">{t('wallet.transactions.fromDate')}</label>
            <Input
              className="input"
              type="date"
              value={filters.startDate?.split('T')[0] || ''}
              onChange={(e) => onFilterChange('startDate', e.target.value || undefined)}
            />
          </div>

          <div className="filter-group">
            <label className="label">{t('wallet.transactions.toDate')}</label>
            <Input
              className="input"
              type="date"
              value={filters.endDate?.split('T')[0] || ''}
              onChange={(e) => onFilterChange('endDate', e.target.value || undefined)}
            />
          </div>

          <div className="filter-group">
            <label className="label">{t('wallet.accounts.title')}</label>
            <Select
              value={filters.accountId || '__all__'}
              onValueChange={(value) => onFilterChange('accountId', value === '__all__' ? undefined : value)}
            >
              <SelectTrigger className="select">
                <SelectValue placeholder={t('wallet.transactions.all')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__all__">{t('wallet.transactions.all')}</SelectItem>
                {accounts.map((account) => (
                  <SelectItem key={account.id} value={account.id}>
                    {account.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="filter-group">
            <label className="label">{t('wallet.categories.title')}</label>
            <Select
              value={filters.categoryId || '__all__'}
              onValueChange={(value) => onFilterChange('categoryId', value === '__all__' ? undefined : value)}
            >
              <SelectTrigger className="select">
                <SelectValue placeholder={t('wallet.transactions.all')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__all__">{t('wallet.transactions.all')}</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="filter-group">
            <label className="label">{t('wallet.transactions.minAmount') || 'Tối thiểu'}</label>
            <AmountInput
              className="number-input"
              value={filters.minAmount || 0}
              onChange={(value) => onFilterChange('minAmount', value || undefined)}
              placeholder="0"
              min={0}
            />
          </div>

          <div className="filter-group">
            <label className="label">{t('wallet.transactions.maxAmount') || 'Tối đa'}</label>
            <AmountInput
              className="number-input"
              value={filters.maxAmount || 0}
              onChange={(value) => onFilterChange('maxAmount', value || undefined)}
              placeholder="0"
              min={0}
            />
          </div>

          <div className="filter-group">
            <label className="label">{t('wallet.transactions.sortBy') || 'Sắp xếp theo'}</label>
            <Select
              value={filters.sortBy || 'occurredAt'}
              onValueChange={(value) => onFilterChange('sortBy', value as 'occurredAt' | 'amount' | 'createdAt')}
            >
              <SelectTrigger className="select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="occurredAt">{t('wallet.transactions.sortByDate') || 'Ngày giao dịch'}</SelectItem>
                <SelectItem value="amount">{t('wallet.transactions.sortByAmount') || 'Số tiền'}</SelectItem>
                <SelectItem value="createdAt">{t('wallet.transactions.sortByCreated') || 'Ngày tạo'}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="filter-group">
            <label className="label">{t('wallet.transactions.sortOrder') || 'Thứ tự'}</label>
            <Select
              value={filters.sortOrder || 'desc'}
              onValueChange={(value) => onFilterChange('sortOrder', value as 'asc' | 'desc')}
            >
              <SelectTrigger className="select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desc">{t('wallet.transactions.desc') || 'Giảm dần'}</SelectItem>
                <SelectItem value="asc">{t('wallet.transactions.asc') || 'Tăng dần'}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </TransactionFiltersWrapper>
  );
};

const TransactionFiltersWrapper = styled(Card)`
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl || theme.borderRadius['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  box-shadow: ${({ theme }) =>
    theme.colors.background === '#0a0a0a'
      ? '0 2px 8px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)'
      : '0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)'};
  width: 100%;
  overflow-x: auto;

  .filters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: ${({ theme }) => theme.spacing[4]};

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[2]};

      .label {
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
        color: ${({ theme }) => theme.colors.text.primary};
      }

      .select, .input, .number-input {
        height: 40px;
        padding: 0 ${({ theme }) => theme.spacing[4]};
        background: ${({ theme }) => theme.colors.background};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.borderRadius.lg};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        color: ${({ theme }) => theme.colors.text.primary};
        transition: all 0.2s ease;

        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.colors.primary};
          box-shadow: 0 0 0 3px ${({ theme }) =>
            theme.colors.background === '#0a0a0a'
              ? 'rgba(14, 165, 233, 0.2)'
              : 'rgba(14, 165, 233, 0.1)'};
        }

        &:hover {
          border-color: ${({ theme }) =>
            theme.colors.background === '#0a0a0a'
              ? 'rgba(14, 165, 233, 0.3)'
              : 'rgba(14, 165, 233, 0.2)'};
        }
      }

      .number-input {
        text-align: right;
      }
    }
  }
`;

export default TransactionFilters;
