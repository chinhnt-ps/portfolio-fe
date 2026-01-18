import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { walletApi } from '../api/walletApi';
import { handleApiError } from '../api/walletApi';
import type { Receivable, CreateReceivableRequest, UpdateReceivableRequest, PaginatedResponse } from '../api/types';
import { Icon } from '../components/icons';
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
 * Receivables Page
 * 
 * Quản lý các khoản cho vay (CRUD)
 */
export const Receivables = () => {
  const [receivables, setReceivables] = useState<Receivable[]>([]);
  const [pagination, setPagination] = useState<PaginatedResponse<Receivable> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReceivable, setEditingReceivable] = useState<Receivable | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const [formData, setFormData] = useState<CreateReceivableRequest>({
    counterpartyName: '',
    amount: 0,
    currency: 'VND',
    occurredAt: new Date().toISOString().split('T')[0],
    dueAt: '',
    note: '',
  });

  const loadReceivables = useCallback(async (page: number = 0) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await walletApi.receivables.getAll(page, 10);
      setReceivables(result.content);
      setPagination(result);
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadReceivables(currentPage);
  }, [currentPage, loadReceivables]);

  const handleOpenModal = (receivable?: Receivable) => {
    if (receivable) {
      setEditingReceivable(receivable);
      setFormData({
        counterpartyName: receivable.counterpartyName,
        amount: receivable.amount,
        currency: receivable.currency,
        occurredAt: receivable.occurredAt.split('T')[0],
        dueAt: receivable.dueAt ? receivable.dueAt.split('T')[0] : '',
        note: receivable.note || '',
      });
    } else {
      setEditingReceivable(null);
      setFormData({
        counterpartyName: '',
        amount: 0,
        currency: 'VND',
        occurredAt: new Date().toISOString().split('T')[0],
        dueAt: '',
        note: '',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingReceivable(null);
    setFormData({
      counterpartyName: '',
      amount: 0,
      currency: 'VND',
      occurredAt: new Date().toISOString().split('T')[0],
      dueAt: '',
      note: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSaving(true);

    try {
      if (editingReceivable) {
        const data: UpdateReceivableRequest = {
          counterpartyName: formData.counterpartyName,
          amount: formData.amount,
          currency: formData.currency,
          occurredAt: formData.occurredAt ? new Date(formData.occurredAt).toISOString() : undefined,
          dueAt: formData.dueAt ? new Date(formData.dueAt).toISOString() : undefined,
          note: formData.note || undefined,
        };
        await walletApi.receivables.update(editingReceivable.id, data);
      } else {
        const data: CreateReceivableRequest = {
          counterpartyName: formData.counterpartyName,
          amount: formData.amount,
          currency: formData.currency,
          occurredAt: formData.occurredAt ? new Date(formData.occurredAt).toISOString() : undefined,
          dueAt: formData.dueAt ? new Date(formData.dueAt).toISOString() : undefined,
          note: formData.note || undefined,
        };
        await walletApi.receivables.create(data);
      }
      await loadReceivables(currentPage);
      handleCloseModal();
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (receivable: Receivable) => {
    if (!window.confirm(`Bạn có chắc muốn xóa khoản cho vay "${receivable.counterpartyName}"?`)) {
      return;
    }

    try {
      await walletApi.receivables.delete(receivable.id);
      await loadReceivables(currentPage);
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

  if (isLoading && receivables.length === 0) {
    return (
      <ReceivablesWrapper className="receivables-wrapper">
        <div className="header">
          <h1 className="title">Cho vay</h1>
          <Button onClick={() => handleOpenModal()} className="gap-2">
            <Icon icon="Add" size={18} color="currentColor" />
            <span>Thêm khoản cho vay</span>
          </Button>
        </div>
        <div className="loading-state">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-32 w-full" />
        </div>
      </ReceivablesWrapper>
    );
  }

  return (
    <>
      <ReceivablesWrapper className="receivables-wrapper">
        <div className="header">
          <h1 className="title">Cho vay</h1>
          <Button onClick={() => handleOpenModal()} className="gap-2">
            <Icon icon="Add" size={18} color="currentColor" />
            <span>Thêm khoản cho vay</span>
          </Button>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {receivables.length === 0 ? (
          <div className="empty-state">
            <p>Chưa có khoản cho vay nào</p>
            <Button onClick={() => handleOpenModal()} className="gap-2">
              <Icon icon="Add" size={18} color="currentColor" />
              <span>Thêm khoản cho vay đầu tiên</span>
            </Button>
          </div>
        ) : (
          <>
            <div className="receivables-grid">
              {receivables.map((receivable) => (
                <Card 
                  key={receivable.id} 
                  className={`receivable-card ${receivable.isOverdue ? 'receivable-card--overdue' : ''}`}
                  onClick={() => handleOpenModal(receivable)}
                >
                  <div className="receivable-header">
                    <h3 className="receivable-name">{receivable.counterpartyName}</h3>
                    <Badge variant={receivable.status === 'PAID' ? 'default' : receivable.isOverdue ? 'destructive' : 'secondary'} className={`status-badge status-badge--${receivable.status.toLowerCase()}`}>
                      {getStatusLabel(receivable.status)}
                    </Badge>
                  </div>
                  <div className="receivable-details">
                    <div>Số tiền: {formatCurrency(receivable.amount, receivable.currency)}</div>
                    <div>Đã trả: {formatCurrency(receivable.paidAmount ?? 0, receivable.currency)}</div>
                    <div>Còn lại: {formatCurrency(receivable.remainingAmount ?? 0, receivable.currency)}</div>
                    {receivable.dueAt && (
                      <div>Hạn thanh toán: {formatDate(receivable.dueAt)}</div>
                    )}
                    {receivable.note && <div>Ghi chú: {receivable.note}</div>}
                  </div>
                  <div className="receivable-amount">
                    {formatCurrency(receivable.remainingAmount ?? 0, receivable.currency)}
                  </div>
                  <div className="receivable-actions" onClick={(e) => e.stopPropagation()}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="icon-button"
                      onClick={() => handleOpenModal(receivable)}
                      title="Sửa"
                    >
                      <Icon icon="Edit" size={16} color="currentColor" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="icon-button"
                      onClick={() => handleDelete(receivable)}
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
      </ReceivablesWrapper>

      {/* Add/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => !open && handleCloseModal()}>
        <StyledDialogContent className="modal-content">
          <DialogHeader>
            <DialogTitle className="modal-title">{editingReceivable ? 'Sửa khoản cho vay' : 'Thêm khoản cho vay'}</DialogTitle>
            <DialogDescription>
              {editingReceivable ? 'Cập nhật thông tin khoản cho vay' : 'Thêm khoản cho vay mới vào danh sách'}
            </DialogDescription>
          </DialogHeader>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <Label className="label">Tên người vay *</Label>
              <Input
                className="input"
                type="text"
                value={formData.counterpartyName}
                onChange={(e) => setFormData({ ...formData, counterpartyName: e.target.value })}
                placeholder="Nhập tên người vay"
                required
              />
            </div>

            <div className="form-group">
              <Label className="label">Số tiền *</Label>
              <Input
                className="input"
                type="number"
                step="0.01"
                min="0"
                value={formData.amount || ''}
                onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) || 0 })}
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
              <Label className="label">Ngày cho vay</Label>
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
                {isSaving ? 'Đang lưu...' : editingReceivable ? 'Lưu thay đổi' : 'Tạo khoản cho vay'}
              </Button>
            </DialogFooter>
          </form>
        </StyledDialogContent>
      </Dialog>
    </>
  );
};

const ReceivablesWrapper = styled.div`
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

  .receivables-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.spacing[4]};

    .receivable-card {
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

      .receivable-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${({ theme }) => theme.spacing[3]};

        .receivable-name {
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

      .receivable-details {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[2]};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        color: ${({ theme }) => theme.colors.text.secondary};
      }

      .receivable-amount {
        font-size: ${({ theme }) => theme.typography.fontSize.xl};
        font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
        color: ${({ theme }) => theme.colors.text.primary};
        margin-top: ${({ theme }) => theme.spacing[2]};
      }

      .receivable-actions {
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
`;
