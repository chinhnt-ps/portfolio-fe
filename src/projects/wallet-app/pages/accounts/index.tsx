import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { AmountInput } from '../../components/AmountInput';
import { useAccounts } from '../../api/hooks';
import { handleApiError } from '../../api/walletApi';
import { PageHeader, EmptyState, LoadingState } from '../../components/shared';
import { AccountCard } from './AccountCard';
import { AccountModal } from './AccountModal';
import type { Account, CreateAccountRequest } from '../../api/types';
import { cardGrid } from '../../styles/mixins';

/**
 * Accounts Page
 * 
 * Quản lý tài khoản/ví (CRUD) sử dụng SWR
 */
export const Accounts = () => {
  // SWR hook - automatic caching & deduplication
  const {
    accounts,
    isLoading,
    createAccount,
    updateAccount,
    deleteAccount,
    adjustAccountBalance,
  } = useAccounts();

  // Local UI state
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState<Account | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [adjustingAccount, setAdjustingAccount] = useState<Account | null>(null);
  const [adjustActualBalance, setAdjustActualBalance] = useState<number>(0);
  const [adjustNote, setAdjustNote] = useState<string>('');
  const [isAdjusting, setIsAdjusting] = useState(false);

  const handleOpenModal = useCallback((account?: Account) => {
    setEditingAccount(account || null);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setEditingAccount(null);
  }, []);

  const handleSubmit = useCallback(async (formData: CreateAccountRequest) => {
    setError(null);
    setIsSaving(true);

    try {
      if (editingAccount) {
        await updateAccount(editingAccount.id, formData);
      } else {
        await createAccount(formData);
      }
      handleCloseModal();
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsSaving(false);
    }
  }, [editingAccount, updateAccount, createAccount, handleCloseModal]);

  const handleDelete = useCallback(async (account: Account) => {
    if (!window.confirm(`Bạn có chắc muốn xóa tài khoản "${account.name}"?`)) {
      return;
    }

    try {
      await deleteAccount(account.id);
    } catch (err) {
      setError(handleApiError(err));
    }
  }, [deleteAccount]);

  const handleOpenAdjustModal = useCallback((account: Account) => {
    setAdjustingAccount(account);
    setAdjustActualBalance(account.currentBalance ?? 0);
    setAdjustNote('');
  }, []);

  const handleCloseAdjustModal = useCallback(() => {
    setAdjustingAccount(null);
    setAdjustActualBalance(0);
    setAdjustNote('');
  }, []);

  const handleSubmitAdjust = useCallback(async () => {
    if (!adjustingAccount) return;
    setError(null);
    setIsAdjusting(true);
    try {
      if (Number.isNaN(adjustActualBalance) || adjustActualBalance < 0) {
        throw new Error('Số dư thực tế không hợp lệ');
      }
      await adjustAccountBalance(adjustingAccount.id, adjustActualBalance, adjustNote || undefined);
      handleCloseAdjustModal();
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsAdjusting(false);
    }
  }, [adjustingAccount, adjustActualBalance, adjustNote, adjustAccountBalance, handleCloseAdjustModal]);

  if (isLoading) {
    return (
      <AccountsWrapper className="accounts-wrapper">
        <PageHeader title="Tài khoản" />
        <LoadingState count={6} variant="grid" />
      </AccountsWrapper>
    );
  }

  return (
    <AccountsWrapper className="accounts-wrapper">
      <PageHeader
        title="Tài khoản"
        actionLabel="Thêm tài khoản"
        actionIcon="Plus"
        onAction={() => handleOpenModal()}
      />

      {error && (
        <Alert variant="destructive" className="error-alert">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {accounts.length === 0 ? (
        <EmptyState
          icon="Accounts"
          title="Chưa có tài khoản nào"
          description="Thêm tài khoản đầu tiên để bắt đầu quản lý tài chính"
          actionLabel="Thêm tài khoản đầu tiên"
          onAction={() => handleOpenModal()}
        />
      ) : (
        <div className="accounts-grid">
          {accounts.map((account) => (
            <AccountCard
              key={account.id}
              account={account}
              onClick={() => handleOpenModal(account)}
              onEdit={() => handleOpenModal(account)}
              onDelete={() => handleDelete(account)}
              onAdjustBalance={() => handleOpenAdjustModal(account)}
            />
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      <AccountModal
        open={isModalOpen}
        onOpenChange={(open) => !open && handleCloseModal()}
        account={editingAccount}
        onSubmit={handleSubmit}
        isSaving={isSaving}
      />

      {/* Adjust Balance Modal */}
      {adjustingAccount && (
        <AdjustBalanceModalWrapper className="adjust-balance-modal">
          <div className="adjust-backdrop" onClick={handleCloseAdjustModal} />
          <div className="adjust-content">
            <h3 className="adjust-title">Điều chỉnh số dư</h3>
            <p className="adjust-subtitle">
              Tài khoản: <strong>{adjustingAccount.name}</strong>
            </p>
            <div className="adjust-form-group">
              <label className="adjust-label">Số dư thực tế hiện tại</label>
              <AmountInput
                className="adjust-input"
                value={adjustActualBalance}
                onChange={(value) => setAdjustActualBalance(value)}
                min={0}
              />
            </div>
            <div className="adjust-form-group">
              <label className="adjust-label">Lý do (tuỳ chọn)</label>
              <Textarea
                className="adjust-textarea"
                rows={3}
                value={adjustNote}
                onChange={(e) => setAdjustNote(e.target.value)}
              />
            </div>
            <div className="adjust-actions">
              <Button
                variant="outline"
                type="button"
                onClick={handleCloseAdjustModal}
                disabled={isAdjusting}
              >
                Hủy
              </Button>
              <Button
                type="button"
                onClick={handleSubmitAdjust}
                disabled={isAdjusting}
              >
                {isAdjusting ? 'Đang điều chỉnh...' : 'Xác nhận điều chỉnh'}
              </Button>
            </div>
          </div>
        </AdjustBalanceModalWrapper>
      )}
    </AccountsWrapper>
  );
};

const AccountsWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .error-alert {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .accounts-grid {
    ${cardGrid}
  }
`;

const AdjustBalanceModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 120;
  display: flex;
  align-items: center;
  justify-content: center;

  .adjust-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  .adjust-content {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 420px;
    padding: ${({ theme }) => theme.spacing[6]};
    border-radius: ${({ theme }) => theme.borderRadius.xl || theme.borderRadius['2xl']};
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) =>
      theme.colors.background === '#0a0a0a'
        ? '0 12px 40px rgba(0, 0, 0, 0.7)'
        : '0 12px 40px rgba(0, 0, 0, 0.2)'};
  }

  .adjust-title {
    margin: 0 0 ${({ theme }) => theme.spacing[2]};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .adjust-subtitle {
    margin: 0 0 ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .adjust-form-group {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[2]};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .adjust-label {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .adjust-input,
  .adjust-textarea {
    background: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }

  .adjust-actions {
    display: flex;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.spacing[3]};
    margin-top: ${({ theme }) => theme.spacing[2]};
  }
`;

export default Accounts;
