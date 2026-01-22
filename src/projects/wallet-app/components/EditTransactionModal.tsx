import { useState, useEffect, FormEvent, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { walletApi } from '../api/walletApi';
import { handleApiError } from '../api/walletApi';
import type { UpdateTransactionRequest, Transaction } from '../api/types';
import { Icon } from './icons';
import { AmountInput } from './AmountInput';
import { useAppSelector } from '@/store/hooks';
import { Textarea } from '@/components/ui/textarea';
import { formatForDateTimeLocal, convertDateTimeLocalToISO } from '../utils/dateUtils';

interface EditTransactionModalProps {
  transactionId: string;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  onDelete?: () => void;
}

/**
 * Edit Transaction Modal
 * 
 * Modal để sửa giao dịch đã có
 */
export const EditTransactionModal = ({
  transactionId,
  isOpen,
  onClose,
  onSuccess,
  onDelete,
}: EditTransactionModalProps) => {
  const { t } = useTranslation();
  
  // Redux state
  const accounts = useAppSelector((state) => state.walletAccounts.items);
  const categories = useAppSelector((state) => state.categories.items);
  
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<UpdateTransactionRequest>({});

  // Load transaction data when modal opens
  useEffect(() => {
    if (isOpen && transactionId) {
      loadTransaction();
    } else {
      // Reset state when modal closes
      setTransaction(null);
      setFormData({});
      setError(null);
      setIsLoading(false);
    }
  }, [isOpen, transactionId]);

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

      // Convert datetime-local format to ISO string if occurredAt is present
      const updateData: UpdateTransactionRequest = {
        ...formData,
        occurredAt: formData.occurredAt
          ? convertDateTimeLocalToISO(formData.occurredAt)
          : undefined,
      };

      await walletApi.transactions.update(transaction.id, updateData);
      onSuccess?.();
      onClose();
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = useCallback(async () => {
    if (!transaction || !window.confirm(t('wallet.transactions.confirmDelete') || 'Bạn có chắc muốn xóa giao dịch này?')) {
      return;
    }

    setIsDeleting(true);
    setError(null);

    try {
      await walletApi.transactions.delete(transaction.id);
      onDelete?.();
      onClose();
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsDeleting(false);
    }
  }, [transaction, onDelete, onClose, t]);

  const handleChange = (field: keyof UpdateTransactionRequest, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <EditTransactionModalWrapper className="modal--open" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{t('wallet.transactions.edit') || 'Sửa giao dịch'}</h2>
          <button className="close-button" onClick={onClose}>
            <Icon icon="Close" size={20} color="currentColor" />
          </button>
        </div>

        {isLoading ? (
          <div className="loading-state">{t('wallet.common.loading')}</div>
        ) : !transaction ? (
          <div className="error-message">{t('wallet.transactions.notFound') || 'Không tìm thấy giao dịch'}</div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label className="label">{t('wallet.transactions.type')} *</label>
              <select
                className="select"
                value={formData.type || transaction.type}
                onChange={(e) => handleChange('type', e.target.value)}
                required
              >
                <option value="EXPENSE">{t('wallet.transactions.expense')}</option>
                <option value="INCOME">{t('wallet.transactions.income')}</option>
                <option value="TRANSFER">{t('wallet.transactions.transfer')}</option>
              </select>
            </div>

            <div className="form-group">
              <label className="label">{t('wallet.transactions.amount') || 'Số tiền'} *</label>
              <AmountInput
                className="input"
                value={formData.amount ?? transaction.amount}
                onChange={(value) => handleChange('amount', value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="label">{t('wallet.transactions.currency') || 'Tiền tệ'}</label>
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
                  <label className="label">{t('wallet.transactions.fromAccount') || 'Tài khoản nguồn'} *</label>
                  <select
                    className="select"
                    value={formData.fromAccountId || transaction.fromAccountId || ''}
                    onChange={(e) => handleChange('fromAccountId', e.target.value)}
                    required
                  >
                    <option value="">{t('wallet.transactions.selectFromAccount') || 'Chọn tài khoản nguồn'}</option>
                    {accounts.map((account) => (
                      <option key={account.id} value={account.id}>
                        {account.name} ({account.type})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="label">{t('wallet.transactions.toAccount') || 'Tài khoản đích'} *</label>
                  <select
                    className="select"
                    value={formData.toAccountId || transaction.toAccountId || ''}
                    onChange={(e) => handleChange('toAccountId', e.target.value)}
                    required
                  >
                    <option value="">{t('wallet.transactions.selectToAccount') || 'Chọn tài khoản đích'}</option>
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
                  <label className="label">{t('wallet.accounts.title')} *</label>
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
                  <label className="label">{t('wallet.categories.title')}</label>
                  <select
                    className="select"
                    value={formData.categoryId || transaction.categoryId || ''}
                    onChange={(e) => handleChange('categoryId', e.target.value || undefined)}
                  >
                    <option value="">{t('wallet.transactions.noCategory') || 'Không có'}</option>
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
              <label className="label">{t('wallet.transactions.date') || 'Ngày và giờ giao dịch'}</label>
              <input
                className="input"
                type="datetime-local"
                value={formData.occurredAt || formatForDateTimeLocal(transaction.occurredAt)}
                onChange={(e) => handleChange('occurredAt', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="label">{t('wallet.transactions.note') || 'Ghi chú'}</label>
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
                onClick={onClose}
                disabled={isSaving || isDeleting}
              >
                {t('wallet.common.cancel')}
              </button>
              <button 
                className={`submit-button ${isSaving ? 'submit-button--loading' : ''}`} 
                type="submit" 
                disabled={isSaving || isDeleting}
              >
                {isSaving ? t('wallet.common.saving') : t('wallet.common.save')}
              </button>
            </div>

            <button
              className="delete-button"
              type="button"
              onClick={handleDelete}
              disabled={isSaving || isDeleting}
            >
              <Icon icon={isDeleting ? 'Loading' : 'Delete'} size={18} color="currentColor" />
              <span>{isDeleting ? t('wallet.common.deleting') || 'Đang xóa...' : t('wallet.transactions.delete') || 'Xóa giao dịch'}</span>
            </button>
          </form>
        )}
      </div>
    </EditTransactionModalWrapper>
  );
};

const EditTransactionModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => 
    theme.colors.background === '#0a0a0a' 
      ? 'rgba(0, 0, 0, 0.8)' 
      : 'rgba(0, 0, 0, 0.5)'};
  backdrop-filter: blur(4px);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing[4]};
  opacity: 0;
  transition: opacity 0.2s ease;

  &.modal--open {
    display: flex;
    opacity: 1;
  }

  .modal-content {
    background: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.borderRadius['2xl']};
    padding: ${({ theme }) => theme.spacing[6]};
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: ${({ theme }) => 
      theme.colors.background === '#0a0a0a' 
        ? '0 20px 60px rgba(0, 0, 0, 0.5)' 
        : '0 20px 60px rgba(0, 0, 0, 0.3)'};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: ${({ theme }) => theme.spacing[8]};
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: ${({ theme }) => theme.spacing[6]};

      .modal-title {
        font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
        font-size: ${({ theme }) => theme.typography.fontSize.xl};
        font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
        line-height: ${({ theme }) => theme.typography.lineHeight.tight};
        color: ${({ theme }) => theme.colors.text.primary};
        margin: 0;
      }

      .close-button {
        padding: ${({ theme }) => theme.spacing[2]};
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.colors.text.secondary};
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${({ theme }) => theme.borderRadius.md};
        transition: all 0.2s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.text.primary};
          background: ${({ theme }) => 
            theme.colors.background === '#0a0a0a' 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(0, 0, 0, 0.05)'};
        }
      }
    }

    .loading-state {
      padding: ${({ theme }) => theme.spacing[8]};
      text-align: center;
      font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
      line-height: ${({ theme }) => theme.typography.lineHeight.normal};
      color: ${({ theme }) => theme.colors.text.secondary};
    }

    .error-message {
      padding: ${({ theme }) => theme.spacing[4]};
      background: ${({ theme }) => theme.colors.error}20;
      border: 1px solid ${({ theme }) => theme.colors.error};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
      line-height: ${({ theme }) => theme.typography.lineHeight.normal};
      color: ${({ theme }) => theme.colors.error};
      margin-bottom: ${({ theme }) => theme.spacing[4]};
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[4]};

      .form-group {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[2]};

        .label {
          font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
          line-height: ${({ theme }) => theme.typography.lineHeight.normal};
          color: ${({ theme }) => theme.colors.text.primary};
        }

        .input {
          height: 40px;
          padding: 0 ${({ theme }) => theme.spacing[4]};
          background: ${({ theme }) => theme.colors.background};
          border: 1px solid ${({ theme }) => theme.colors.border};
          border-radius: ${({ theme }) => theme.borderRadius.lg};
          font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
          line-height: 1.5;
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

        .select {
          height: 40px;
          padding: 0 ${({ theme }) => theme.spacing[4]};
          background: ${({ theme }) => theme.colors.background};
          border: 1px solid ${({ theme }) => theme.colors.border};
          border-radius: ${({ theme }) => theme.borderRadius.lg};
          font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
          line-height: 1.5;
          color: ${({ theme }) => theme.colors.text.primary};
          cursor: pointer;
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

      }

      .transfer-fields {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[4]};
        padding: ${({ theme }) => theme.spacing[4]};
        background: ${({ theme }) => theme.colors.surface};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.borderRadius.lg};

        .form-group {
          display: flex;
          flex-direction: column;
          gap: ${({ theme }) => theme.spacing[2]};

          .label {
            font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
            font-size: ${({ theme }) => theme.typography.fontSize.sm};
            font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
            line-height: ${({ theme }) => theme.typography.lineHeight.normal};
            color: ${({ theme }) => theme.colors.text.primary};
          }

          .select {
            height: 40px;
            padding: 0 ${({ theme }) => theme.spacing[4]};
            background: ${({ theme }) => theme.colors.background};
            border: 1px solid ${({ theme }) => theme.colors.border};
            border-radius: ${({ theme }) => theme.borderRadius.lg};
            font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
            font-size: ${({ theme }) => theme.typography.fontSize.sm};
            font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
            line-height: 1.5;
            color: ${({ theme }) => theme.colors.text.primary};
            cursor: pointer;
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
        }
      }

      .button-group {
        display: flex;
        gap: ${({ theme }) => theme.spacing[4]};
        margin-top: ${({ theme }) => theme.spacing[6]} !important;

        .submit-button {
          flex: 1;
          height: 40px;
          padding: 0 ${({ theme }) => theme.spacing[6]};
          background: ${({ theme }) => theme.colors.primary};
          color: white;
          border: none;
          border-radius: ${({ theme }) => theme.borderRadius.lg};
          font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
          line-height: 1.5;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px ${({ theme }) => 
            theme.colors.background === '#0a0a0a' 
              ? 'rgba(14, 165, 233, 0.3)' 
              : 'rgba(14, 165, 233, 0.25)'};

          &:hover:not(:disabled) {
            background: ${({ theme }) => theme.colors.primary[600] || '#0284c7'};
            transform: translateY(-1px);
            box-shadow: 0 4px 12px ${({ theme }) => 
              theme.colors.background === '#0a0a0a' 
                ? 'rgba(14, 165, 233, 0.4)' 
                : 'rgba(14, 165, 233, 0.35)'};
          }

          &:active:not(:disabled) {
            transform: translateY(0);
          }

          &:disabled {
            cursor: not-allowed;
            opacity: 0.7;
          }

          &--loading {
            cursor: not-allowed;
            opacity: 0.7;
          }
        }

        .cancel-button {
          flex: 1;
          height: 40px;
          padding: 0 ${({ theme }) => theme.spacing[6]};
          background: ${({ theme }) => theme.colors.surface};
          color: ${({ theme }) => theme.colors.text.primary};
          border: 1px solid ${({ theme }) => theme.colors.border};
          border-radius: ${({ theme }) => theme.borderRadius.lg};
          font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
          line-height: 1.5;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

          &:hover:not(:disabled) {
            border-color: ${({ theme }) => theme.colors.text.secondary};
            background: ${({ theme }) => theme.colors.hover};
            transform: translateY(-1px);
          }

          &:active:not(:disabled) {
            transform: translateY(0);
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
        height: 40px;
        padding: 0 ${({ theme }) => theme.spacing[6]};
        background: ${({ theme }) => theme.colors.error};
        color: white;
        border: none;
        border-radius: ${({ theme }) => theme.borderRadius.lg};
        font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        line-height: 1.5;
        cursor: pointer;
        transition: all 0.2s ease;
        width: 100%;
        margin-top: ${({ theme }) => theme.spacing[4]};

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        &:active:not(:disabled) {
          transform: translateY(0);
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }
    }
  }
`;
