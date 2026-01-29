import { useState, useEffect, FormEvent } from 'react';
import styled from 'styled-components';
import { useWalletAppRouter } from '../../App';
import { walletApi } from '../../api/walletApi';
import { handleApiError } from '../../api/walletApi';
import { useAccounts, useCategories, useReceivables, useLiabilities } from '../../api/hooks';
import type {
  CreateTransactionRequest,
  TransactionType,
} from '../../api/types';
import { Icon } from '../../components/icons';
import { AmountInput } from '../../components/AmountInput';
import { Textarea } from '@/components/ui/textarea';
import { formatForDateTimeLocal, convertDateTimeLocalToISO } from '../../utils/dateUtils';

/**
 * Add Transaction Page
 * 
 * Form để thêm giao dịch mới (EXPENSE, INCOME, hoặc TRANSFER)
 */
export const AddTransaction = () => {
  const { navigate } = useWalletAppRouter();
  
  // SWR hooks for data - automatic caching and deduplication
  const { accounts } = useAccounts();
  const { categories } = useCategories();
  const { receivables } = useReceivables({ page: 0, size: 100 });
  const { liabilities } = useLiabilities({ page: 0, size: 100 });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<CreateTransactionRequest>({
    type: 'EXPENSE',
    amount: 0,
    currency: 'VND',
    accountId: '',
    occurredAt: formatForDateTimeLocal(new Date().toISOString()),
  });

  // Set default account when accounts are loaded
  useEffect(() => {
    // Chỉ set default account cho các type cần accountId
    if ((formData.type === 'EXPENSE' || formData.type === 'INCOME') && accounts.length > 0 && !formData.accountId) {
      setFormData((prev) => ({
        ...prev,
        accountId: accounts[0].id,
      }));
    }
  }, [accounts, formData.accountId, formData.type]);

  useEffect(() => {
    // Reset transfer fields when type changes
    if (formData.type !== 'TRANSFER') {
      setFormData((prev) => ({
        ...prev,
        fromAccountId: undefined,
        toAccountId: undefined,
      }));
    } else {
      // TRANSFER không dùng accountId/categoryId
      setFormData((prev) => ({
        ...prev,
        accountId: '',
        categoryId: undefined,
      }));
    }

    if (formData.type !== 'RECEIVABLE_SETTLEMENT') {
      setFormData((prev) => ({
        ...prev,
        receivableId: undefined,
      }));
    }

    if (formData.type !== 'LIABILITY_SETTLEMENT') {
      setFormData((prev) => ({
        ...prev,
        liabilityId: undefined,
      }));
    }
  }, [formData.type]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Validate form
      if (formData.amount <= 0) {
        throw new Error('Số tiền phải lớn hơn 0');
      }

      if (formData.type === 'TRANSFER') {
        if (!formData.fromAccountId || !formData.toAccountId) {
          throw new Error('Vui lòng chọn tài khoản nguồn và đích');
        }
        if (formData.fromAccountId === formData.toAccountId) {
          throw new Error('Tài khoản nguồn và đích phải khác nhau');
        }
      } else if (formData.type === 'EXPENSE' || formData.type === 'INCOME') {
        // EXPENSE/INCOME require accountId
        if (!formData.accountId) {
          throw new Error('Vui lòng chọn tài khoản');
        }
      } else if (formData.type === 'RECEIVABLE_SETTLEMENT') {
        if (!formData.receivableId) {
          throw new Error('Vui lòng chọn khoản cho vay cần ghi nhận');
        }
        // accountId là optional cho settlement
      } else if (formData.type === 'LIABILITY_SETTLEMENT') {
        if (!formData.liabilityId) {
          throw new Error('Vui lòng chọn khoản nợ cần ghi nhận');
        }
        // accountId là optional cho settlement
      }

      // Convert datetime-local format to ISO string
      const occurredAt = formData.occurredAt
        ? convertDateTimeLocalToISO(formData.occurredAt)
        : new Date().toISOString();

      // Build payload theo từng loại để tránh gửi dư field (đặc biệt TRANSFER)
      if (formData.type === 'TRANSFER') {
        await walletApi.transactions.create({
          type: 'TRANSFER',
          amount: formData.amount,
          currency: formData.currency,
          occurredAt,
          fromAccountId: formData.fromAccountId,
          toAccountId: formData.toAccountId,
          note: formData.note,
        });
      } else if (formData.type === 'RECEIVABLE_SETTLEMENT') {
        await walletApi.transactions.create({
          type: 'RECEIVABLE_SETTLEMENT',
          amount: formData.amount,
          currency: formData.currency,
          occurredAt,
          accountId: formData.accountId || undefined,
          receivableId: formData.receivableId,
          note: formData.note,
        });
      } else if (formData.type === 'LIABILITY_SETTLEMENT') {
        await walletApi.transactions.create({
          type: 'LIABILITY_SETTLEMENT',
          amount: formData.amount,
          currency: formData.currency,
          occurredAt,
          accountId: formData.accountId || undefined,
          liabilityId: formData.liabilityId,
          note: formData.note,
        });
      } else {
        await walletApi.transactions.create({
          type: formData.type,
          amount: formData.amount,
          currency: formData.currency,
          occurredAt,
          accountId: formData.accountId || undefined,
          categoryId: formData.categoryId,
          note: formData.note,
        });
      }

      // Navigate back to transactions list
      navigate('transactions');
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: keyof CreateTransactionRequest, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBack = () => {
    navigate('transactions');
  };

  return (
    <AddTransactionWrapper className="add-transaction-wrapper">
      <div className="page-header">
        <button className="back-button" onClick={handleBack} title="Quay lại">
          <Icon icon="Back" size={20} color="currentColor" />
        </button>
        <h1 className="title">Thêm giao dịch</h1>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Loại giao dịch *</label>
          <select
            className="select"
            value={formData.type}
            onChange={(e) => handleChange('type', e.target.value as TransactionType)}
            required
          >
            <option value="EXPENSE">Chi tiêu</option>
            <option value="INCOME">Thu nhập</option>
            <option value="TRANSFER">Chuyển khoản</option>
            <option value="RECEIVABLE_SETTLEMENT">Nhận tiền cho vay</option>
            <option value="LIABILITY_SETTLEMENT">Trả nợ</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label">Số tiền *</label>
          <AmountInput
            className="input"
            value={formData.amount}
            onChange={(value) => handleChange('amount', value)}
            placeholder="0"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Tiền tệ</label>
          <select
            className="select"
            value={formData.currency}
            onChange={(e) => handleChange('currency', e.target.value)}
          >
            <option value="VND">VND (₫)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>

        {formData.type === 'TRANSFER' ? (
          <div className="transfer-fields">
            <div className="form-group">
              <label className="label">Tài khoản nguồn *</label>
              <select
                className="select"
                value={formData.fromAccountId || ''}
                onChange={(e) => handleChange('fromAccountId', e.target.value)}
                required
              >
                <option value="">Chọn tài khoản nguồn</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.name} ({account.type})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="label">Tài khoản đích *</label>
              <select
                className="select"
                value={formData.toAccountId || ''}
                onChange={(e) => handleChange('toAccountId', e.target.value)}
                required
              >
                <option value="">Chọn tài khoản đích</option>
                {accounts
                  .filter((account) => account.id !== formData.fromAccountId)
                  .map((account) => (
                    <option key={account.id} value={account.id}>
                      {account.name} ({account.type})
                    </option>
                  ))}
              </select>
            </div>
          </div>
        ) : formData.type === 'RECEIVABLE_SETTLEMENT' ? (
          <>
            <div className="form-group">
              <label className="label">Tài khoản</label>
              <select
                className="select"
                value={formData.accountId || ''}
                onChange={(e) => handleChange('accountId', e.target.value || undefined)}
              >
                <option value="">Không có tài khoản</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.name} ({account.type})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="label">Khoản cho vay *</label>
              <select
                className="select"
                value={formData.receivableId || ''}
                onChange={(e) => handleChange('receivableId', e.target.value || undefined)}
                required
              >
                <option value="">Chọn khoản cho vay</option>
                {receivables.map((rec) => (
                  <option key={rec.id} value={rec.id}>
                    {rec.counterpartyName} - Còn lại:{' '}
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: rec.currency,
                    }).format(rec.remainingAmount)}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : formData.type === 'LIABILITY_SETTLEMENT' ? (
          <>
            <div className="form-group">
              <label className="label">Tài khoản</label>
              <select
                className="select"
                value={formData.accountId || ''}
                onChange={(e) => handleChange('accountId', e.target.value || undefined)}
              >
                <option value="">Không có tài khoản</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.name} ({account.type})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="label">Khoản nợ *</label>
              <select
                className="select"
                value={formData.liabilityId || ''}
                onChange={(e) => handleChange('liabilityId', e.target.value || undefined)}
                required
              >
                <option value="">Chọn khoản nợ</option>
                {liabilities.map((liab) => (
                  <option key={liab.id} value={liab.id}>
                    {liab.counterpartyName} - Còn lại:{' '}
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: liab.currency,
                    }).format(liab.remainingAmount)}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : (
          <>
            <div className="form-group">
              <label className="label">Tài khoản *</label>
              <select
                className="select"
                value={formData.accountId}
                onChange={(e) => handleChange('accountId', e.target.value)}
                required
              >
                <option value="">Chọn tài khoản</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.name} ({account.type})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="label">Danh mục</label>
              <select
                className="select"
                value={formData.categoryId || ''}
                onChange={(e) => handleChange('categoryId', e.target.value || undefined)}
              >
                <option value="">Không có</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        <div className="form-group">
          <label className="label">Ngày và giờ giao dịch</label>
          <input
            className="input"
            type="datetime-local"
            value={formData.occurredAt || ''}
            onChange={(e) => handleChange('occurredAt', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="label">Ghi chú</label>
          <Textarea
            value={formData.note || ''}
            onChange={(e) => handleChange('note', e.target.value || undefined)}
            placeholder="Thêm ghi chú cho giao dịch này..."
            rows={3}
          />
        </div>

        <div className="button-group">
          <button
            className="cancel-button"
            type="button"
            onClick={() => navigate('transactions')}
            disabled={isLoading}
          >
            Hủy
          </button>
          <button className={`submit-button ${isLoading ? 'submit-button--loading' : ''}`} type="submit" disabled={isLoading}>
            {isLoading ? 'Đang lưu...' : 'Lưu giao dịch'}
          </button>
        </div>
      </form>
    </AddTransactionWrapper>
  );
};

const AddTransactionWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;

  .page-header {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[4]};
    margin-bottom: ${({ theme }) => theme.spacing[8]};

    .back-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0;
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      color: ${({ theme }) => theme.colors.text.secondary};
      cursor: pointer;
      transition: all 0.2s ease;
      flex-shrink: 0;

      &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? 'rgba(14, 165, 233, 0.15)' 
            : 'rgba(14, 165, 233, 0.1)'};
        transform: translateY(-1px);
      }
    }

    .title {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0;
      flex: 1;
    }
  }

  .error-message {
    padding: ${({ theme }) => theme.spacing[3]};
    background: ${({ theme }) => theme.colors.error}20;
    border: 1px solid ${({ theme }) => theme.colors.error};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[6]};

    .form-group {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[2]};

      .label {
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
        color: ${({ theme }) => theme.colors.text.primary};
      }

      .input, .select {
        padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
        background: ${({ theme }) => theme.colors.background};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.borderRadius.md};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        color: ${({ theme }) => theme.colors.text.primary};
        transition: all 0.2s ease;

        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.colors.primary};
          box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
        }
      }
    }

    .transfer-fields {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[4]};
      padding: ${({ theme }) => theme.spacing[4]};
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.borderRadius.md};
    }

    .button-group {
      display: flex;
      gap: ${({ theme }) => theme.spacing[4]};
      margin-top: ${({ theme }) => theme.spacing[6]} !important;

      .submit-button, .cancel-button {
        flex: 1;
        padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
        border-radius: ${({ theme }) => theme.borderRadius.md};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .submit-button {
        background: ${({ theme }) => theme.colors.primary};
        color: white;
        border: none;

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }

      .cancel-button {
        background: ${({ theme }) => theme.colors.surface};
        color: ${({ theme }) => theme.colors.text.primary};
        border: 1px solid ${({ theme }) => theme.colors.border};

        &:hover {
          border-color: ${({ theme }) => theme.colors.text.secondary};
        }
      }
    }
  }
`;

export default AddTransaction;
