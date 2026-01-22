import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { walletApi } from '../api/walletApi';
import { Icon } from '../components/icons';
import { handleApiError } from '../api/walletApi';
import type { Account, CreateAccountRequest, AccountType } from '../api/types';
import { customScrollbar } from '../utils/scrollbarStyles';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchWalletAccounts, addWalletAccount, updateWalletAccount, removeWalletAccount } from '@/store/slices/accountsSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

/**
 * Accounts Page
 * 
 * Quản lý tài khoản/ví (CRUD)
 */
export const Accounts = () => {
  const dispatch = useAppDispatch();
  
  // Redux state
  const accounts = useAppSelector((state) => state.walletAccounts.items);
  const isLoading = useAppSelector((state) => state.walletAccounts.isLoading);
  const accountsError = useAppSelector((state) => state.walletAccounts.error);
  const accountsLastFetched = useAppSelector((state) => state.walletAccounts.lastFetched);
  
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState<Account | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState<CreateAccountRequest>({
    name: '',
    type: 'CASH',
    currency: 'VND',
    openingBalance: 0,
    note: '',
  });

  // Load accounts from Redux (only if not fetched recently)
  useEffect(() => {
    // Tránh gọi API nếu đang loading
    if (isLoading) return;
    
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
    
    if (!accountsLastFetched || accountsLastFetched < fiveMinutesAgo) {
      dispatch(fetchWalletAccounts());
    }
  }, [dispatch, accountsLastFetched, isLoading]);

  // Combine Redux error with local error
  useEffect(() => {
    if (accountsError) {
      setError(accountsError);
    }
  }, [accountsError]);

  const handleOpenModal = (account?: Account) => {
    if (account) {
      setEditingAccount(account);
      setFormData({
        name: account.name,
        type: account.type,
        currency: account.currency,
        openingBalance: account.openingBalance,
        note: account.note || '',
      });
    } else {
      setEditingAccount(null);
      setFormData({
        name: '',
        type: 'CASH',
        currency: 'VND',
        openingBalance: 0,
        note: '',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingAccount(null);
    setFormData({
      name: '',
      type: 'CASH',
      currency: 'VND',
      openingBalance: 0,
      note: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSaving(true);

    try {
      if (editingAccount) {
        const updated = await walletApi.accounts.update(editingAccount.id, formData);
        dispatch(updateWalletAccount(updated));
      } else {
        const created = await walletApi.accounts.create(formData);
        dispatch(addWalletAccount(created));
      }
      handleCloseModal();
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (account: Account) => {
    if (!window.confirm(`Bạn có chắc muốn xóa tài khoản "${account.name}"?`)) {
      return;
    }

    try {
      await walletApi.accounts.delete(account.id);
      dispatch(removeWalletAccount(account.id));
    } catch (err) {
      setError(handleApiError(err));
    }
  };

  const formatCurrency = (amount: number, currency: string = 'VND') => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const getTypeLabel = (type: AccountType): string => {
    const labels: Record<AccountType, string> = {
      CASH: 'Tiền mặt',
      BANK: 'Ngân hàng',
      E_WALLET: 'Ví điện tử',
      OTHER: 'Khác',
    };
    return labels[type] || type;
  };

  if (isLoading) {
    return (
      <AccountsWrapper className="accounts-wrapper">
        <h1 className="title">Tài khoản</h1>
        <div className="loading-state">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-32 w-full" />
        </div>
      </AccountsWrapper>
    );
  }

  return (
    <AccountsWrapper className="accounts-wrapper">
      <div className="header">
        <h1 className="title">Tài khoản</h1>
        <Button onClick={() => handleOpenModal()} className="gap-2">
          <Icon icon="Add" size={18} color="currentColor" />
          <span>Thêm tài khoản</span>
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {accounts.length === 0 ? (
        <div className="empty-state">
          <p>Chưa có tài khoản nào</p>
          <Button onClick={() => handleOpenModal()} className="gap-2" style={{ marginTop: '16px' }}>
            Thêm tài khoản đầu tiên
          </Button>
        </div>
      ) : (
        <div className="accounts-grid">
          {accounts.map((account) => (
            <Card 
              key={account.id} 
              className="account-card"
              onClick={() => handleOpenModal(account)}
            >
              <div className="account-header">
                <h3 className="account-name">{account.name}</h3>
                <span className="account-type">{getTypeLabel(account.type)}</span>
              </div>
              <div className="account-balance">
                {formatCurrency(account.currentBalance ?? account.openingBalance ?? 0, account.currency)}
              </div>
              <div className="account-details">
                <div>Tiền tệ: {account.currency}</div>
                {account.note && <div>{account.note}</div>}
              </div>
              <div className="account-actions" onClick={(e) => e.stopPropagation()}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="icon-button"
                  onClick={() => handleOpenModal(account)}
                  title="Sửa"
                >
                  <Icon icon="Edit" size={16} color="currentColor" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="icon-button"
                  onClick={() => handleDelete(account)}
                  title="Xóa"
                >
                  <Icon icon="Delete" size={16} color="currentColor" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => !open && handleCloseModal()}>
        <DialogContent className="modal-content">
          <DialogHeader>
            <DialogTitle className="modal-title">{editingAccount ? 'Sửa tài khoản' : 'Thêm tài khoản'}</DialogTitle>
            <DialogDescription>
              {editingAccount ? 'Cập nhật thông tin tài khoản của bạn' : 'Thêm tài khoản mới vào danh sách'}
            </DialogDescription>
          </DialogHeader>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <Label className="label">Tên tài khoản *</Label>
              <Input
                className="input"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ví dụ: Ví tiền mặt, Tài khoản ngân hàng..."
                required
              />
            </div>

            <div className="form-group">
              <Label className="label">Loại *</Label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value as AccountType })}
              >
                <SelectTrigger className="select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CASH">Tiền mặt</SelectItem>
                  <SelectItem value="BANK">Ngân hàng</SelectItem>
                  <SelectItem value="E_WALLET">Ví điện tử</SelectItem>
                  <SelectItem value="OTHER">Khác</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="form-group">
              <Label className="label">Tiền tệ *</Label>
              <Select
                value={formData.currency}
                onValueChange={(value) => setFormData({ ...formData, currency: value })}
              >
                <SelectTrigger className="select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="VND">VND (₫)</SelectItem>
                  <SelectItem value="USD">USD ($)</SelectItem>
                  <SelectItem value="EUR">EUR (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="form-group">
              <Label className="label">Số dư ban đầu</Label>
              <Input
                className="input"
                type="number"
                step="0.01"
                value={formData.openingBalance}
                onChange={(e) => setFormData({ ...formData, openingBalance: parseFloat(e.target.value) || 0 })}
              />
            </div>

            <div className="form-group">
              <Label className="label">Ghi chú</Label>
              <Textarea
                value={formData.note || ''}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                placeholder="Thêm ghi chú cho tài khoản này..."
                rows={3}
              />
            </div>

            <DialogFooter className="button-group">
              <Button 
                variant="outline" 
                type="button" 
                onClick={handleCloseModal} 
                disabled={isSaving}
                className="cancel-button"
              >
                Hủy
              </Button>
              <Button 
                type="submit" 
                disabled={isSaving}
                className={`submit-button ${isSaving ? 'submit-button--loading' : ''}`}
              >
                {isSaving ? 'Đang lưu...' : editingAccount ? 'Lưu thay đổi' : 'Tạo tài khoản'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </AccountsWrapper>
  );
};

const AccountsWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing[8]};
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing[4]};

    .title {
      font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0;
      letter-spacing: -0.02em;
      line-height: 1.2;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
      }
    }

    .action-button {
      display: inline-flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};
      padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 2px 8px ${({ theme }) => 
        theme.colors.background === '#0a0a0a' 
          ? 'rgba(14, 165, 233, 0.3)' 
          : 'rgba(14, 165, 233, 0.25)'};

      &:hover {
        background: ${({ theme }) => theme.colors.primary[600] || '#0284c7'};
        transform: translateY(-2px);
        box-shadow: 0 4px 16px ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? 'rgba(14, 165, 233, 0.4)' 
            : 'rgba(14, 165, 233, 0.35)'};
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  .error-message {
    padding: ${({ theme }) => theme.spacing[3]};
    background: ${({ theme }) => theme.colors.error}20;
    border: 1px solid ${({ theme }) => theme.colors.error};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .loading-state {
    padding: ${({ theme }) => theme.spacing[8]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .empty-state {
    padding: ${({ theme }) => theme.spacing[8]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .accounts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacing[4]};

    .account-card {
      padding: ${({ theme }) => theme.spacing[6]};
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.borderRadius['2xl']};
      box-shadow: ${({ theme }) => 
        theme.colors.background === '#0a0a0a' 
          ? '0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)' 
          : '0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.05)'};
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primary}80);
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      &:hover {
        border-color: ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? 'rgba(14, 165, 233, 0.3)' 
            : 'rgba(14, 165, 233, 0.2)'};
        box-shadow: ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? '0 4px 16px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)' 
            : '0 4px 16px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.08)'};
        transform: translateY(-2px);

        &::before {
          opacity: 1;
        }
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: ${({ theme }) => theme.spacing[8]};
      }

      .account-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${({ theme }) => theme.spacing[4]};

        .account-name {
          font-size: ${({ theme }) => theme.typography.fontSize.lg};
          font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
          color: ${({ theme }) => theme.colors.text.primary};
          margin: 0;
        }

        .account-type {
          padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
          background: ${({ theme }) => 
            theme.colors.background === '#0a0a0a' 
              ? 'rgba(14, 165, 233, 0.2)' 
              : 'rgba(14, 165, 233, 0.1)'};
          color: ${({ theme }) => theme.colors.primary};
          border-radius: ${({ theme }) => theme.borderRadius.md};
          font-size: ${({ theme }) => theme.typography.fontSize.xs};
          font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      }

      .account-balance {
        font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
        font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
        color: ${({ theme }) => theme.colors.text.primary};
        margin-bottom: ${({ theme }) => theme.spacing[2]};
      }

      .account-details {
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        color: ${({ theme }) => theme.colors.text.secondary};
        margin-bottom: ${({ theme }) => theme.spacing[4]};
      }

      .account-actions {
        display: flex;
        gap: ${({ theme }) => theme.spacing[2]};

        .icon-button {
          padding: ${({ theme }) => theme.spacing[2]};
          background: ${({ theme }) => theme.colors.surface};
          border: 1px solid ${({ theme }) => theme.colors.border};
          border-radius: ${({ theme }) => theme.borderRadius.lg};
          color: ${({ theme }) => theme.colors.text.secondary};
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            border-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.primary};
            background: ${({ theme }) => 
              theme.colors.background === '#0a0a0a' 
                ? 'rgba(14, 165, 233, 0.15)' 
                : 'rgba(14, 165, 233, 0.1)'};
            transform: translateY(-1px);
          }

          &:active {
            transform: translateY(0);
          }
        }
      }
    }
  }

  .modal {
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

    &--open {
      display: flex;
      opacity: 1;
    }

    .modal-content {
      background: ${({ theme }) => theme.colors.surface};
      border-radius: ${({ theme }) => theme.borderRadius['2xl']};
      padding: ${({ theme }) => theme.spacing[6]};
      max-width: 500px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: ${({ theme }) => 
        theme.colors.background === '#0a0a0a' 
          ? '0 20px 60px rgba(0, 0, 0, 0.5)' 
          : '0 20px 60px rgba(0, 0, 0, 0.3)'};
      ${customScrollbar}

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: ${({ theme }) => theme.spacing[8]};
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${({ theme }) => theme.spacing[6]};

        .modal-title {
          font-size: ${({ theme }) => theme.typography.fontSize.xl};
          font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
          color: ${({ theme }) => theme.colors.text.primary};
          margin: 0;
        }

        .close-button {
          padding: ${({ theme }) => theme.spacing[2]};
          background: transparent;
          border: none;
          color: ${({ theme }) => theme.colors.text.secondary};
          cursor: pointer;
          font-size: 24px;
          line-height: 1;

          &:hover {
            color: ${({ theme }) => theme.colors.text.primary};
          }
        }
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
            font-size: ${({ theme }) => theme.typography.fontSize.sm};
            font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
            color: ${({ theme }) => theme.colors.text.primary};
          }

          .input {
            padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
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

          .select {
            padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
            background: ${({ theme }) => theme.colors.background};
            border: 1px solid ${({ theme }) => theme.colors.border};
            border-radius: ${({ theme }) => theme.borderRadius.lg};
            font-size: ${({ theme }) => theme.typography.fontSize.base};
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

        .button-group {
          display: flex;
          gap: ${({ theme }) => theme.spacing[4]};
          margin-top: ${({ theme }) => theme.spacing[6]} !important;

          .submit-button {
            flex: 1;
            padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
            background: ${({ theme }) => theme.colors.primary};
            color: white;
            border: none;
            border-radius: ${({ theme }) => theme.borderRadius.lg};
            font-size: ${({ theme }) => theme.typography.fontSize.base};
            font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
            cursor: pointer;
            opacity: 1;
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
            padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
            background: ${({ theme }) => theme.colors.surface};
            color: ${({ theme }) => theme.colors.text.primary};
            border: 1px solid ${({ theme }) => theme.colors.border};
            border-radius: ${({ theme }) => theme.borderRadius.lg};
            font-size: ${({ theme }) => theme.typography.fontSize.base};
            font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

            &:hover {
              border-color: ${({ theme }) => theme.colors.text.secondary};
              background: ${({ theme }) => theme.colors.hover};
              transform: translateY(-1px);
            }

            &:active {
              transform: translateY(0);
            }
          }
        }
      }
    }
  }
`;
