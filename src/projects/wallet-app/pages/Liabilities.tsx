import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { walletApi } from '../api/walletApi';
import { handleApiError } from '../api/walletApi';
import type {
  Liability,
  CreateLiabilityRequest,
  UpdateLiabilityRequest,
  PaginatedResponse,
  Settlement,
} from '../api/types';
import { Icon } from '../components/icons';
import { AmountInput } from '../components/AmountInput';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchWalletAccounts } from '@/store/slices/accountsSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

/**
 * Liabilities Page
 * 
 * Quản lý các khoản nợ (CRUD)
 */
export const Liabilities = () => {
  const dispatch = useAppDispatch();
  
  // Redux state for accounts
  const accounts = useAppSelector((state) => state.walletAccounts.items);
  const accountsLastFetched = useAppSelector((state) => state.walletAccounts.lastFetched);
  const accountsLoading = useAppSelector((state) => state.walletAccounts.isLoading);
  
  const [liabilities, setLiabilities] = useState<Liability[]>([]);
  const [pagination, setPagination] = useState<PaginatedResponse<Liability> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLiability, setEditingLiability] = useState<Liability | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [settlements, setSettlements] = useState<Settlement[]>([]);
  const [isLoadingSettlements, setIsLoadingSettlements] = useState(false);
  const [isSavingSettlement, setIsSavingSettlement] = useState(false);

  const [formData, setFormData] = useState<CreateLiabilityRequest>({
    counterpartyName: '',
    amount: 0,
    currency: 'VND',
    occurredAt: new Date().toISOString().split('T')[0],
    dueAt: '',
    accountId: '',
    note: '',
  });

  const [settlementForm, setSettlementForm] = useState<{
    amount: number;
    accountId: string;
    occurredAt: string;
    note: string;
  }>({
    amount: 0,
    accountId: '', // Optional: empty string = không có tài khoản
    occurredAt: new Date().toISOString().split('T')[0],
    note: '',
  });

  const loadLiabilities = useCallback(async (page: number = 0) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await walletApi.liabilities.getAll(page, 10);
      setLiabilities(result.content);
      setPagination(result);
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load accounts from Redux (only if not fetched recently)
  useEffect(() => {
    // Tránh gọi API nếu đang loading
    if (accountsLoading) return;
    
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
    if (!accountsLastFetched || accountsLastFetched < fiveMinutesAgo) {
      dispatch(fetchWalletAccounts());
    }
  }, [dispatch, accountsLastFetched, accountsLoading]);

  // Set default settlement account when accounts are loaded
  useEffect(() => {
    if (accounts.length > 0) {
      setSettlementForm((prev) => ({
        ...prev,
        accountId: prev.accountId || accounts[0].id,
      }));
    }
  }, [accounts]);

  const loadSettlements = useCallback(
    async (liabilityId: string) => {
      setIsLoadingSettlements(true);
      try {
        const data = await walletApi.settlements.getByLiabilityId(liabilityId);
        setSettlements(data);
      } catch (err) {
        console.error('Load settlements error:', err);
        setError(handleApiError(err));
      } finally {
        setIsLoadingSettlements(false);
      }
    },
    [setError],
  );

  useEffect(() => {
    loadLiabilities(currentPage);
  }, [currentPage, loadLiabilities]);

  const handleOpenModal = (liability?: Liability) => {
    if (liability) {
      setEditingLiability(liability);
      setFormData({
        counterpartyName: liability.counterpartyName,
        amount: liability.amount,
        currency: liability.currency,
        occurredAt: liability.occurredAt.split('T')[0],
        dueAt: liability.dueAt ? liability.dueAt.split('T')[0] : '',
        accountId: liability.accountId || '',
        note: liability.note || '',
      });
      setSettlementForm({
        amount: 0,
        accountId: settlementForm.accountId || accounts[0]?.id || '',
        occurredAt: new Date().toISOString().split('T')[0],
        note: '',
      });
      void loadSettlements(liability.id);
    } else {
      setEditingLiability(null);
      setFormData({
        counterpartyName: '',
        amount: 0,
        currency: 'VND',
        occurredAt: new Date().toISOString().split('T')[0],
        dueAt: '',
        accountId: '',
        note: '',
      });
      setSettlements([]);
      setSettlementForm({
        amount: 0,
        accountId: accounts[0]?.id || '',
        occurredAt: new Date().toISOString().split('T')[0],
        note: '',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingLiability(null);
    setFormData({
      counterpartyName: '',
      amount: 0,
      currency: 'VND',
      occurredAt: new Date().toISOString().split('T')[0],
      dueAt: '',
      accountId: '',
      note: '',
    });
    setSettlements([]);
    setSettlementForm({
      amount: 0,
      accountId: accounts[0]?.id || '',
      occurredAt: new Date().toISOString().split('T')[0],
      note: '',
    });
  };

  const handleCreateSettlement = async () => {
    if (!editingLiability) {
      return;
    }
    if (settlementForm.amount <= 0) {
      setError('Số tiền trả phải lớn hơn 0');
      return;
    }
    // accountId là optional, không cần validate

    setError(null);
    setIsSavingSettlement(true);

    try {
      const occurredAtIso = settlementForm.occurredAt
        ? new Date(settlementForm.occurredAt).toISOString()
        : new Date().toISOString();

      await walletApi.transactions.create({
        type: 'LIABILITY_SETTLEMENT',
        amount: settlementForm.amount,
        currency: editingLiability.currency,
        accountId: settlementForm.accountId || undefined, // Empty string -> undefined
        liabilityId: editingLiability.id,
        occurredAt: occurredAtIso,
        note: settlementForm.note || undefined,
      });

      await loadLiabilities(currentPage);

      // Đóng modal sau khi ghi nhận thành công
      handleCloseModal();
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsSavingSettlement(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSaving(true);

    try {
      if (editingLiability) {
        const data: UpdateLiabilityRequest = {
          counterpartyName: formData.counterpartyName,
          amount: formData.amount,
          currency: formData.currency,
          occurredAt: formData.occurredAt ? new Date(formData.occurredAt).toISOString() : undefined,
          dueAt: formData.dueAt ? new Date(formData.dueAt).toISOString() : undefined,
          accountId: formData.accountId || undefined,
          note: formData.note || undefined,
        };
        await walletApi.liabilities.update(editingLiability.id, data);
      } else {
        const data: CreateLiabilityRequest = {
          counterpartyName: formData.counterpartyName,
          amount: formData.amount,
          currency: formData.currency,
          occurredAt: formData.occurredAt ? new Date(formData.occurredAt).toISOString() : undefined,
          dueAt: formData.dueAt ? new Date(formData.dueAt).toISOString() : undefined,
          accountId: formData.accountId || undefined,
          note: formData.note || undefined,
        };
        await walletApi.liabilities.create(data);
      }
      await loadLiabilities(currentPage);
      handleCloseModal();
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (liability: Liability) => {
    if (!window.confirm(`Bạn có chắc muốn xóa khoản nợ "${liability.counterpartyName}"?`)) {
      return;
    }

    try {
      await walletApi.liabilities.delete(liability.id);
      await loadLiabilities(currentPage);
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      OPEN: 'Mở',
      PARTIALLY_PAID: 'Đã trả một phần',
      PAID: 'Đã trả đủ',
      OVERDUE: 'Quá hạn',
    };
    return labels[status] || status;
  };

  if (isLoading && liabilities.length === 0) {
    return (
      <LiabilitiesWrapper className="liabilities-wrapper">
        <div className="header">
          <h1 className="title">Nợ</h1>
          <Button onClick={() => handleOpenModal()} className="gap-2">
            <Icon icon="Add" size={18} color="currentColor" />
            <span>Thêm khoản nợ</span>
          </Button>
        </div>
        <div className="loading-state">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-32 w-full" />
        </div>
      </LiabilitiesWrapper>
    );
  }

  return (
    <>
      <LiabilitiesWrapper className="liabilities-wrapper">
        <div className="header">
          <h1 className="title">Nợ</h1>
          <Button onClick={() => handleOpenModal()} className="gap-2">
            <Icon icon="Add" size={18} color="currentColor" />
            <span>Thêm khoản nợ</span>
          </Button>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {liabilities.length === 0 ? (
          <div className="empty-state">
            <p>Chưa có khoản nợ nào</p>
            <Button onClick={() => handleOpenModal()} className="gap-2">
              <Icon icon="Add" size={18} color="currentColor" />
              <span>Thêm khoản nợ đầu tiên</span>
            </Button>
          </div>
        ) : (
          <>
            <div className="liabilities-grid">
              {liabilities.map((liability) => (
                <Card 
                  key={liability.id} 
                  className={`liability-card ${liability.isOverdue ? 'liability-card--overdue' : ''}`}
                  onClick={() => handleOpenModal(liability)}
                >
                  <div className="liability-header">
                    <h3 className="liability-name">{liability.counterpartyName}</h3>
                    <Badge variant={liability.status === 'PAID' ? 'default' : liability.isOverdue ? 'destructive' : 'secondary'} className={`status-badge status-badge--${liability.status.toLowerCase()}`}>
                      {getStatusLabel(liability.status)}
                    </Badge>
                  </div>
                  <div className="liability-details">
                    <div>Số tiền: {formatCurrency(liability.amount, liability.currency)}</div>
                    <div>Đã trả: {formatCurrency(liability.paidAmount ?? 0, liability.currency)}</div>
                    <div>Còn lại: {formatCurrency(liability.remainingAmount ?? 0, liability.currency)}</div>
                    {liability.dueAt && (
                      <div>Hạn thanh toán: {formatDate(liability.dueAt)}</div>
                    )}
                    {liability.note && <div>Ghi chú: {liability.note}</div>}
                  </div>
                  <div className="liability-amount">
                    {formatCurrency(liability.remainingAmount ?? 0, liability.currency)}
                  </div>
                  <div className="liability-actions" onClick={(e) => e.stopPropagation()}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="icon-button"
                      onClick={() => handleOpenModal(liability)}
                      title="Sửa"
                    >
                      <Icon icon="Edit" size={16} color="currentColor" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="icon-button"
                      onClick={() => handleDelete(liability)}
                      title="Xóa"
                    >
                      <Icon icon="Delete" size={16} color="currentColor" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {pagination && pagination.totalPages > 1 && (
              <div className="pagination">
                <Button
                  variant="outline"
                  className={`pagination-button ${!pagination.hasPrevious ? 'pagination-button--disabled' : ''}`}
                  onClick={() => setCurrentPage(pagination.page - 1)}
                  disabled={!pagination.hasPrevious}
                >
                  ← Trước
                </Button>
                <span>
                  Trang {pagination.page + 1} / {pagination.totalPages}
                </span>
                <Button
                  variant="outline"
                  className={`pagination-button ${!pagination.hasNext ? 'pagination-button--disabled' : ''}`}
                  onClick={() => setCurrentPage(pagination.page + 1)}
                  disabled={!pagination.hasNext}
                >
                  Sau →
                </Button>
              </div>
            )}
          </>
        )}
      </LiabilitiesWrapper>

      {/* Add/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => !open && handleCloseModal()}>
        <StyledDialogContent className="modal-content">
          <DialogHeader>
            <DialogTitle className="modal-title">{editingLiability ? 'Sửa khoản nợ' : 'Thêm khoản nợ'}</DialogTitle>
            <DialogDescription>
              {editingLiability ? 'Cập nhật thông tin khoản nợ' : 'Thêm khoản nợ mới vào danh sách'}
            </DialogDescription>
          </DialogHeader>

          {editingLiability && (
            <div className="settlement-section">
              <div className="settlement-header">
                <h3 className="settlement-title">Lịch sử trả nợ</h3>
                <p className="settlement-subtitle">
                  Xem các lần bạn đã trả tiền cho khoản nợ này.
                </p>
              </div>

              <div className="settlement-history">
                {isLoadingSettlements ? (
                  <div className="settlement-loading">Đang tải lịch sử trả nợ...</div>
                ) : settlements.length === 0 ? (
                  <div className="settlement-empty">Chưa có lần trả nợ nào.</div>
                ) : (
                  <div className="settlement-list">
                    {settlements.map((settlement) => (
                      <div key={settlement.id} className="settlement-item">
                        <div className="settlement-row">
                          <span className="settlement-label">Số tiền</span>
                          <span className="settlement-value">
                            {formatCurrency(settlement.amount, settlement.currency)}
                          </span>
                        </div>
                        <div className="settlement-row">
                          <span className="settlement-label">Ngày</span>
                          <span className="settlement-value">
                            {formatDate(settlement.occurredAt)}
                          </span>
                        </div>
                        {settlement.note && (
                          <div className="settlement-row">
                            <span className="settlement-label">Ghi chú</span>
                            <span className="settlement-value">{settlement.note}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="settlement-form">
                <h4 className="settlement-form-title">Trả nợ một phần</h4>
                <div className="settlement-form-grid">
                  <div className="settlement-form-field">
                    <Label className="label">Số tiền *</Label>
                    <AmountInput
                      className="input"
                      value={settlementForm.amount}
                      onChange={(value) =>
                        setSettlementForm({
                          ...settlementForm,
                          amount: value,
                        })
                      }
                      placeholder="0"
                    />
                  </div>
                  <div className="settlement-form-field">
                    <Label className="label">Tài khoản trả</Label>
                    <Select
                      value={settlementForm.accountId || undefined}
                      onValueChange={(value) =>
                        setSettlementForm({
                          ...settlementForm,
                          accountId: value || '',
                        })
                      }
                    >
                      <SelectTrigger className="select settlement-account-select">
                        <SelectValue placeholder="Không có tài khoản" />
                      </SelectTrigger>
                      <SelectContent>
                        {accounts.map((account) => (
                          <SelectItem key={account.id} value={account.id}>
                            {account.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="settlement-form-field">
                    <Label className="label">Ngày trả</Label>
                    <Input
                      className="input"
                      type="date"
                      value={settlementForm.occurredAt}
                      onChange={(e) =>
                        setSettlementForm({
                          ...settlementForm,
                          occurredAt: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="settlement-form-note">
                  <Label className="label">Ghi chú</Label>
                  <Textarea
                    value={settlementForm.note}
                    onChange={(e) =>
                      setSettlementForm({
                        ...settlementForm,
                        note: e.target.value,
                      })
                    }
                    placeholder="Ví dụ: Trả lần 1, chuyển khoản..."
                    rows={2}
                  />
                </div>
                <div className="settlement-form-actions">
                  <Button
                    type="button"
                    className="settlement-submit-button"
                    disabled={isSavingSettlement}
                    onClick={handleCreateSettlement}
                  >
                    {isSavingSettlement ? 'Đang ghi nhận...' : 'Ghi nhận lần trả này'}
                  </Button>
                </div>
              </div>
            </div>
          )}

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <Label className="label">Tên chủ nợ *</Label>
              <Input
                className="input"
                type="text"
                value={formData.counterpartyName}
                onChange={(e) => setFormData({ ...formData, counterpartyName: e.target.value })}
                placeholder="Nhập tên chủ nợ"
                required
              />
            </div>

            <div className="form-group">
              <Label className="label">Số tiền *</Label>
              <AmountInput
                className="input"
                value={formData.amount}
                onChange={(value) => setFormData({ ...formData, amount: value })}
                placeholder="0"
                required
              />
            </div>

            <div className="form-group">
              <Label className="label">Tiền tệ</Label>
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
              <Label className="label">Tài khoản trả tiền</Label>
              <Select
                value={formData.accountId || undefined}
                onValueChange={(value) => setFormData({ ...formData, accountId: value || '' })}
              >
                <SelectTrigger className="select">
                  <SelectValue placeholder="Không có tài khoản" />
                </SelectTrigger>
                <SelectContent>
                  {accounts.map((account) => (
                    <SelectItem key={account.id} value={account.id}>
                      {account.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="form-group">
              <Label className="label">Ngày vay</Label>
              <Input
                className="input"
                type="date"
                value={formData.occurredAt || ''}
                onChange={(e) => setFormData({ ...formData, occurredAt: e.target.value })}
              />
            </div>

            <div className="form-group">
              <Label className="label">Hạn thanh toán</Label>
              <Input
                className="input"
                type="date"
                value={formData.dueAt || ''}
                onChange={(e) => setFormData({ ...formData, dueAt: e.target.value })}
              />
            </div>

            <div className="form-group">
              <Label className="label">Ghi chú</Label>
              <Textarea
                value={formData.note || ''}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                placeholder="Thêm ghi chú..."
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
                {isSaving ? 'Đang lưu...' : editingLiability ? 'Lưu thay đổi' : 'Tạo khoản nợ'}
              </Button>
            </DialogFooter>
          </form>
        </StyledDialogContent>
      </Dialog>
    </>
  );
};

const LiabilitiesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing[4]};

    .title {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0;
    }

    .action-button {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};
      padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius.md};
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px ${({ theme }) => theme.colors.primary}40;
      }
    }
  }

  .error-state {
    padding: ${({ theme }) => theme.spacing[4]};
    background: ${({ theme }) => theme.colors.error}20;
    border: 1px solid ${({ theme }) => theme.colors.error};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    color: ${({ theme }) => theme.colors.error};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .empty-state {
    padding: ${({ theme }) => theme.spacing[8]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[4]};

    .action-button {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};
      padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius.md};
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px ${({ theme }) => theme.colors.primary}40;
      }
    }
  }

  .loading-state {
    padding: ${({ theme }) => theme.spacing[8]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .liabilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.spacing[4]};

    .liability-card {
      padding: ${({ theme }) => theme.spacing[4]};
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      box-shadow: ${({ theme }) => theme.shadows.md};
      transition: all 0.2s ease;
      position: relative;
      cursor: pointer;

      &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: ${({ theme }) => theme.shadows.lg};
        transform: translateY(-2px);
      }

      &--overdue {
        border-color: ${({ theme }) => theme.colors.error};
      }

      .liability-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${({ theme }) => theme.spacing[3]};

        .liability-name {
          font-size: ${({ theme }) => theme.typography.fontSize.lg};
          font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
          color: ${({ theme }) => theme.colors.text.primary};
          margin: 0;
        }

        .status-badge {
          padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
          color: white;
          border-radius: ${({ theme }) => theme.borderRadius.sm};
          font-size: ${({ theme }) => theme.typography.fontSize.xs};
          font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

          &--paid {
            background: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
          }

          &--overdue {
            background: ${({ theme }) => theme.colors.error || '#ef4444'};
          }

          &--partially_paid {
            background: ${({ theme }) => theme.colors.warning?.[500] || '#f59e0b'};
          }

          &--open {
            background: ${({ theme }) => theme.colors.text.secondary};
          }
        }
      }

      .liability-details {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[2]};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        color: ${({ theme }) => theme.colors.text.secondary};
      }

      .liability-amount {
        font-size: ${({ theme }) => theme.typography.fontSize.xl};
        font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
        color: ${({ theme }) => theme.colors.text.primary};
        margin-top: ${({ theme }) => theme.spacing[2]};
      }

      .liability-actions {
        display: flex;
        gap: ${({ theme }) => theme.spacing[2]};
        margin-top: ${({ theme }) => theme.spacing[3]};

        .icon-button {
          padding: ${({ theme }) => theme.spacing[2]};
          background: transparent;
          border: 1px solid ${({ theme }) => theme.colors.border};
          border-radius: ${({ theme }) => theme.borderRadius.md};
          color: ${({ theme }) => theme.colors.text.primary};
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            border-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing[2]};
    margin-top: ${({ theme }) => theme.spacing[6]};

    .pagination-button {
      padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius.md};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      cursor: pointer;
      opacity: 1;
      transition: all 0.2s ease;

      &:hover:not(:disabled) {
        opacity: 0.9;
      }

      &:disabled,
      &--disabled {
        background: ${({ theme }) => theme.colors.surface};
        color: ${({ theme }) => theme.colors.text.secondary};
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
`;

// Styled DialogContent with modal styles
const StyledDialogContent = styled(DialogContent)`
  max-height: 90vh;
  max-width: 600px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  .modal-title {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
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
        border-radius: ${({ theme }) => theme.borderRadius.md};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        color: ${({ theme }) => theme.colors.text.primary};

        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.colors.primary};
          box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
        }
      }

      .select {
        padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
        background: ${({ theme }) => theme.colors.background};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.borderRadius.md};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        color: ${({ theme }) => theme.colors.text.primary};
        cursor: pointer;

        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.colors.primary};
          box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
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
        border-radius: ${({ theme }) => theme.borderRadius.md};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        cursor: pointer;
        opacity: 1;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          opacity: 0.9;
        }

        &:disabled,
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
        border-radius: ${({ theme }) => theme.borderRadius.md};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          border-color: ${({ theme }) => theme.colors.text.secondary};
        }
      }
    }
  }

  .settlement-section {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    padding: ${({ theme }) => theme.spacing[4]};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[4]};

    .settlement-header {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[1]};

      .settlement-title {
        font-size: ${({ theme }) => theme.typography.fontSize.lg};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        color: ${({ theme }) => theme.colors.text.primary};
        margin: 0;
      }

      .settlement-subtitle {
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        color: ${({ theme }) => theme.colors.text.secondary};
        margin: 0;
      }
    }

    .settlement-history {
      .settlement-loading,
      .settlement-empty {
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        color: ${({ theme }) => theme.colors.text.secondary};
      }

      .settlement-list {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[3]};

        .settlement-item {
          padding: ${({ theme }) => theme.spacing[3]};
          border-radius: ${({ theme }) => theme.borderRadius.md};
          background: ${({ theme }) => theme.colors.background};
          border: 1px solid ${({ theme }) => theme.colors.border};
          display: flex;
          flex-direction: column;
          gap: ${({ theme }) => theme.spacing[1]};

          .settlement-row {
            display: flex;
            justify-content: space-between;
            gap: ${({ theme }) => theme.spacing[2]};
            font-size: ${({ theme }) => theme.typography.fontSize.sm};

            .settlement-label {
              color: ${({ theme }) => theme.colors.text.secondary};
            }

            .settlement-value {
              color: ${({ theme }) => theme.colors.text.primary};
              font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
            }
          }
        }
      }
    }

    .settlement-form {
      border-top: 1px dashed ${({ theme }) => theme.colors.border};
      padding-top: ${({ theme }) => theme.spacing[4]};
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[3]};

      .settlement-form-title {
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        color: ${({ theme }) => theme.colors.text.primary};
        margin: 0;
      }

      .settlement-form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: ${({ theme }) => theme.spacing[3]};

        .settlement-form-field {
          display: flex;
          flex-direction: column;
          gap: ${({ theme }) => theme.spacing[1]};
        }
      }

      .settlement-form-note {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[1]};
      }

      .settlement-form-actions {
        display: flex;
        justify-content: flex-end;

        .settlement-submit-button {
          min-width: 180px;
        }
      }
    }
  }
`;
