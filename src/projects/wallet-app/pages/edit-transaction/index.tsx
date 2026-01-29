import { useState, useEffect, FormEvent } from 'react';
import styled from 'styled-components';
import { useWalletAppRouter } from '../../App';
import { walletApi } from '../../api/walletApi';
import { handleApiError } from '../../api/walletApi';
import { useAccounts, useCategories } from '../../api/hooks';
import type { UpdateTransactionRequest, Transaction } from '../../api/types';
import { Icon } from '../../components/icons';
import { AmountInput } from '../../components/AmountInput';
import { Textarea } from '@/components/ui/textarea';
import { formatForDateTimeLocal, convertDateTimeLocalToISO } from '../../utils/dateUtils';

/**
 * Edit Transaction Page
 * 
 * Form để sửa giao dịch đã có
 * Note: Transaction ID sẽ được lấy từ URL params hoặc state
 */
export const EditTransaction = () => {
  const { navigate } = useWalletAppRouter();
  
  // SWR hooks for data - automatic caching and deduplication
  const { accounts } = useAccounts();
  const { categories } = useCategories();
  
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get transaction ID from sessionStorage (set by Transactions page)
  const [transactionId, setTransactionId] = useState<string | null>(null);

  useEffect(() => {
    // Get transaction ID from sessionStorage
    const id = sessionStorage.getItem('editTransactionId');
    if (id) {
      setTransactionId(id);
      sessionStorage.removeItem('editTransactionId'); // Clear after reading
    } else {
      setError('Không tìm thấy ID giao dịch');
      setIsLoading(false);
    }
  }, []);

  const [formData, setFormData] = useState<UpdateTransactionRequest>({});

  useEffect(() => {
    if (transactionId) {
      loadTransaction();
    }
  }, [transactionId]);

  const loadTransaction = async () => {
    if (!transactionId) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const transactionData = await walletApi.transactions.getById(transactionId);
      setTransaction(transactionData);

      // Populate form with transaction data
      setFormData({
        type: transactionData.type,
        amount: transactionData.amount,
        currency: transactionData.currency,
        accountId: transactionData.accountId,
        categoryId: transactionData.categoryId,
        fromAccountId: transactionData.fromAccountId,
        toAccountId: transactionData.toAccountId,
        occurredAt: formatForDateTimeLocal(transactionData.occurredAt),
        note: transactionData.note,
      });
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSaving(true);

    try {
      if (!transaction) return;

      // Validate TRANSFER
      if ((formData.type || transaction.type) === 'TRANSFER') {
        const fromId = formData.fromAccountId || transaction.fromAccountId;
        const toId = formData.toAccountId || transaction.toAccountId;
        if (!fromId || !toId) {
          throw new Error('Vui lòng chọn tài khoản nguồn và đích');
        }
        if (fromId === toId) {
          throw new Error('Tài khoản nguồn và đích phải khác nhau');
        }
      }

      // Convert datetime-local format to ISO string if occurredAt is present
      const updateData: UpdateTransactionRequest = {
        ...formData,
        occurredAt: formData.occurredAt
          ? convertDateTimeLocalToISO(formData.occurredAt)
          : undefined,
      };

      // Nếu là TRANSFER, không gửi accountId/categoryId để tránh lệch contract
      if ((formData.type || transaction.type) === 'TRANSFER') {
        updateData.accountId = undefined;
        updateData.categoryId = undefined;
      }

      await walletApi.transactions.update(transaction.id, updateData);
      navigate('transactions');
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!transaction || !window.confirm('Bạn có chắc muốn xóa giao dịch này?')) {
      return;
    }

    setIsDeleting(true);
    setError(null);

    try {
      await walletApi.transactions.delete(transaction.id);
      navigate('transactions');
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsDeleting(false);
    }
  };

  const handleChange = (field: keyof UpdateTransactionRequest, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (isLoading) {
    return (
      <EditTransactionWrapper className="edit-transaction-wrapper">
        <h1 className="title">Sửa giao dịch</h1>
        <div className="loading-state">Đang tải dữ liệu...</div>
      </EditTransactionWrapper>
    );
  }

  if (!transaction) {
    return (
      <EditTransactionWrapper className="edit-transaction-wrapper">
        <h1 className="title">Sửa giao dịch</h1>
        <div className="error-message">Không tìm thấy giao dịch</div>
        <button className="cancel-button" onClick={() => navigate('transactions')} style={{ marginTop: '16px' }}>
          Quay lại
        </button>
      </EditTransactionWrapper>
    );
  }

  return (
    <EditTransactionWrapper className="edit-transaction-wrapper">
      <h1 className="title">Sửa giao dịch</h1>

      {error && <div className="error-message">{error}</div>}

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Loại giao dịch *</label>
          <select
            className="select"
            value={formData.type || transaction.type}
            onChange={(e) => handleChange('type', e.target.value)}
            required
          >
            <option value="EXPENSE">Chi tiêu</option>
            <option value="INCOME">Thu nhập</option>
            <option value="TRANSFER">Chuyển khoản</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label">Số tiền *</label>
          <AmountInput
            className="input"
            value={formData.amount || transaction.amount}
            onChange={(value) => handleChange('amount', value)}
            required
            min={0}
          />
        </div>

        <div className="form-group">
          <label className="label">Tiền tệ</label>
          <select
            className="select"
            value={formData.currency || transaction.currency}
            onChange={(e) => handleChange('currency', e.target.value)}
          >
            <option value="VND">VND (₫)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>

        {(formData.type || transaction.type) === 'TRANSFER' ? (
          <div className="transfer-fields">
            <div className="form-group">
              <label className="label">Tài khoản nguồn *</label>
              <select
                className="select"
                value={formData.fromAccountId || transaction.fromAccountId || ''}
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
                value={formData.toAccountId || transaction.toAccountId || ''}
                onChange={(e) => handleChange('toAccountId', e.target.value)}
                required
              >
                <option value="">Chọn tài khoản đích</option>
                {accounts
                  .filter((account) => account.id !== (formData.fromAccountId || transaction.fromAccountId))
                  .map((account) => (
                    <option key={account.id} value={account.id}>
                      {account.name} ({account.type})
                    </option>
                  ))}
              </select>
            </div>
          </div>
        ) : (
          <>
            <div className="form-group">
              <label className="label">Tài khoản *</label>
              <select
                className="select"
                value={formData.accountId || transaction.accountId}
                onChange={(e) => handleChange('accountId', e.target.value)}
                required
              >
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
                value={formData.categoryId || transaction.categoryId || ''}
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
            value={formData.occurredAt || formatForDateTimeLocal(transaction.occurredAt)}
            onChange={(e) => handleChange('occurredAt', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="label">Ghi chú</label>
          <Textarea
            value={formData.note || transaction.note || ''}
            onChange={(e) => handleChange('note', e.target.value || undefined)}
            rows={3}
          />
        </div>

        <div className="button-group">
          <button
            className="cancel-button"
            type="button"
            onClick={() => navigate('transactions')}
            disabled={isSaving || isDeleting}
          >
            Hủy
          </button>
          <button className={`submit-button ${isSaving ? 'submit-button--loading' : ''}`} type="submit" disabled={isSaving || isDeleting}>
            {isSaving ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        </div>

        <button
          className="delete-button"
          type="button"
          onClick={handleDelete}
          disabled={isSaving || isDeleting}
        >
          <Icon icon={isDeleting ? 'Loading' : 'Delete'} size={18} color="currentColor" />
          <span>{isDeleting ? 'Đang xóa...' : 'Xóa giao dịch'}</span>
        </button>
      </form>
    </EditTransactionWrapper>
  );
};

const EditTransactionWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;

  .title {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0 0 ${({ theme }) => theme.spacing[8]} 0;
  }

  .error-message {
    padding: ${({ theme }) => theme.spacing[3]};
    background: ${({ theme }) => theme.colors.error}20;
    border: 1px solid ${({ theme }) => theme.colors.error};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }

  .loading-state {
    padding: ${({ theme }) => theme.spacing[8]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .cancel-button {
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text.primary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border-color: ${({ theme }) => theme.colors.text.secondary};
    }
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
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }
    }

    .delete-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${({ theme }) => theme.spacing[2]};
      padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
      background: ${({ theme }) => theme.colors.error};
      color: white;
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius.md};
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      cursor: pointer;
      transition: all 0.2s ease;
      width: 100%;

      &:hover:not(:disabled) {
        opacity: 0.9;
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }
    }
  }
`;

export default EditTransaction;
