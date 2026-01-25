import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Alert, AlertDescription } from '@/components/ui/alert';
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
  } = useAccounts();

  // Local UI state
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState<Account | null>(null);
  const [isSaving, setIsSaving] = useState(false);

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

export default Accounts;
