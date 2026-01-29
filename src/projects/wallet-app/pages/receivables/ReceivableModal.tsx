import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { walletApi, handleApiError } from '../../api/walletApi';
import type {
  Receivable,
  CreateReceivableRequest,
  UpdateReceivableRequest,
  Settlement,
  Account,
} from '../../api/types';
import { AmountInput } from '../../components/AmountInput';
import { formatCurrency, formatDate } from '../../utils/formatters';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

interface ReceivableModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  receivable: Receivable | null;
  accounts: Account[];
  onSuccess: () => void;
}

/**
 * ReceivableModal Component
 * 
 * Modal cho thêm/sửa khoản cho vay với phần ghi nhận thu nợ
 */
export const ReceivableModal = ({
  open,
  onOpenChange,
  receivable,
  accounts,
  onSuccess,
}: ReceivableModalProps) => {
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [settlements, setSettlements] = useState<Settlement[]>([]);
  const [isLoadingSettlements, setIsLoadingSettlements] = useState(false);
  const [isSavingSettlement, setIsSavingSettlement] = useState(false);

  const [formData, setFormData] = useState<CreateReceivableRequest>({
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
    accountId: accounts[0]?.id || '',
    occurredAt: new Date().toISOString().split('T')[0],
    note: '',
  });

  const loadSettlements = useCallback(async (receivableId: string) => {
    setIsLoadingSettlements(true);
    try {
      const data = await walletApi.settlements.getByReceivableId(receivableId);
      setSettlements(data);
    } catch (err) {
      console.error('Load settlements error:', err);
    } finally {
      setIsLoadingSettlements(false);
    }
  }, []);

  useEffect(() => {
    if (open && receivable) {
      setFormData({
        counterpartyName: receivable.counterpartyName,
        amount: receivable.amount,
        currency: receivable.currency,
        occurredAt: receivable.occurredAt.split('T')[0],
        dueAt: receivable.dueAt ? receivable.dueAt.split('T')[0] : '',
        accountId: receivable.accountId || '',
        note: receivable.note || '',
      });
      setSettlementForm({
        amount: 0,
        accountId: accounts[0]?.id || '',
        occurredAt: new Date().toISOString().split('T')[0],
        note: '',
      });
      loadSettlements(receivable.id);
    } else if (open) {
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
    setError(null);
  }, [open, receivable, accounts, loadSettlements]);

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleCreateSettlement = async () => {
    if (!receivable) return;
    if (settlementForm.amount <= 0) {
      setError('Số tiền thu phải lớn hơn 0');
      return;
    }

    setError(null);
    setIsSavingSettlement(true);

    try {
      const occurredAtIso = settlementForm.occurredAt
        ? new Date(settlementForm.occurredAt).toISOString()
        : new Date().toISOString();

      await walletApi.transactions.create({
        type: 'RECEIVABLE_SETTLEMENT',
        amount: settlementForm.amount,
        currency: receivable.currency,
        accountId: settlementForm.accountId || undefined,
        receivableId: receivable.id,
        occurredAt: occurredAtIso,
        note: settlementForm.note || undefined,
      });

      onSuccess();
      handleClose();
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
      if (receivable) {
        const data: UpdateReceivableRequest = {
          counterpartyName: formData.counterpartyName,
          amount: formData.amount,
          currency: formData.currency,
          occurredAt: formData.occurredAt ? new Date(formData.occurredAt).toISOString() : undefined,
          dueAt: formData.dueAt ? new Date(formData.dueAt).toISOString() : undefined,
          accountId: formData.accountId || undefined,
          note: formData.note || undefined,
        };
        await walletApi.receivables.update(receivable.id, data);
      } else {
        const data: CreateReceivableRequest = {
          counterpartyName: formData.counterpartyName,
          amount: formData.amount,
          currency: formData.currency,
          occurredAt: formData.occurredAt ? new Date(formData.occurredAt).toISOString() : undefined,
          dueAt: formData.dueAt ? new Date(formData.dueAt).toISOString() : undefined,
          accountId: formData.accountId || undefined,
          note: formData.note || undefined,
        };
        await walletApi.receivables.create(data);
      }
      onSuccess();
      handleClose();
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <StyledDialogContent>
        <DialogHeader>
          <DialogTitle>{receivable ? 'Sửa khoản cho vay' : 'Thêm khoản cho vay'}</DialogTitle>
          <DialogDescription>
            {receivable ? 'Cập nhật thông tin khoản cho vay' : 'Thêm khoản cho vay mới vào danh sách'}
          </DialogDescription>
        </DialogHeader>

        {error && <div className="error-message">{error}</div>}

        {receivable && (
          <div className="settlement-section">
            <div className="settlement-header">
              <h3 className="settlement-title">Lịch sử thu nợ</h3>
            </div>

            <div className="settlement-history">
              {isLoadingSettlements ? (
                <div className="settlement-loading">Đang tải...</div>
              ) : settlements.length === 0 ? (
                <div className="settlement-empty">Chưa có lần thu nợ nào.</div>
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
                        <span className="settlement-value">{formatDate(settlement.occurredAt)}</span>
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
              <h4 className="settlement-form-title">Thu nợ một phần</h4>
              <div className="settlement-form-grid">
                <div className="form-group">
                  <Label>Số tiền *</Label>
                  <AmountInput
                    value={settlementForm.amount}
                    onChange={(value) => setSettlementForm({ ...settlementForm, amount: value })}
                    placeholder="0"
                  />
                </div>
                <div className="form-group">
                  <Label>Tài khoản nhận</Label>
                  <Select
                    value={settlementForm.accountId || undefined}
                    onValueChange={(value) => setSettlementForm({ ...settlementForm, accountId: value || '' })}
                  >
                    <SelectTrigger>
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
                  <Label>Ngày thu</Label>
                  <Input
                    type="date"
                    value={settlementForm.occurredAt}
                    onChange={(e) => setSettlementForm({ ...settlementForm, occurredAt: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group">
                <Label>Ghi chú</Label>
                <Textarea
                  value={settlementForm.note}
                  onChange={(e) => setSettlementForm({ ...settlementForm, note: e.target.value })}
                  placeholder="Ví dụ: Thu lần 1, tiền mặt..."
                  rows={2}
                />
              </div>
              <Button
                type="button"
                disabled={isSavingSettlement}
                onClick={handleCreateSettlement}
                className="w-full"
              >
                {isSavingSettlement ? 'Đang ghi nhận...' : 'Ghi nhận lần thu này'}
              </Button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Label>Tên con nợ *</Label>
            <Input
              type="text"
              value={formData.counterpartyName}
              onChange={(e) => setFormData({ ...formData, counterpartyName: e.target.value })}
              placeholder="Nhập tên con nợ"
              required
            />
          </div>

          <div className="form-group">
            <Label>Số tiền *</Label>
            <AmountInput
              value={formData.amount}
              onChange={(value) => setFormData({ ...formData, amount: value })}
              placeholder="0"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <Label>Tiền tệ</Label>
              <Select
                value={formData.currency}
                onValueChange={(value) => setFormData({ ...formData, currency: value })}
              >
                <SelectTrigger>
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
              <Label>Tài khoản</Label>
              <Select
                value={formData.accountId || undefined}
                onValueChange={(value) => setFormData({ ...formData, accountId: value || '' })}
              >
                <SelectTrigger>
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
          </div>

          <div className="form-row">
            <div className="form-group">
              <Label>Ngày cho vay</Label>
              <Input
                type="date"
                value={formData.occurredAt || ''}
                onChange={(e) => setFormData({ ...formData, occurredAt: e.target.value })}
              />
            </div>

            <div className="form-group">
              <Label>Hạn thu</Label>
              <Input
                type="date"
                value={formData.dueAt || ''}
                onChange={(e) => setFormData({ ...formData, dueAt: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <Label>Ghi chú</Label>
            <Textarea
              value={formData.note || ''}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              placeholder="Thêm ghi chú..."
              rows={3}
            />
          </div>

          <DialogFooter className="button-group">
            <Button variant="outline" type="button" onClick={handleClose} disabled={isSaving}>
              Hủy
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? 'Đang lưu...' : receivable ? 'Lưu thay đổi' : 'Tạo khoản cho vay'}
            </Button>
          </DialogFooter>
        </form>
      </StyledDialogContent>
    </Dialog>
  );
};

const StyledDialogContent = styled(DialogContent)`
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;

  .error-message {
    padding: ${({ theme }) => theme.spacing[3]};
    background: ${({ theme }) => theme.colors.error}20;
    color: ${({ theme }) => theme.colors.error};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }

  .form-group {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing[4]};
  }

  .button-group {
    margin-top: ${({ theme }) => theme.spacing[6]};
    display: flex;
    gap: ${({ theme }) => theme.spacing[3]};
    justify-content: flex-end;
  }

  .settlement-section {
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: ${({ theme }) => theme.spacing[4]};
    margin-bottom: ${({ theme }) => theme.spacing[6]};

    .settlement-header {
      margin-bottom: ${({ theme }) => theme.spacing[3]};

      .settlement-title {
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        color: ${({ theme }) => theme.colors.text.primary};
        margin: 0;
      }
    }

    .settlement-history {
      margin-bottom: ${({ theme }) => theme.spacing[4]};

      .settlement-loading,
      .settlement-empty {
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        color: ${({ theme }) => theme.colors.text.secondary};
        padding: ${({ theme }) => theme.spacing[3]};
        text-align: center;
      }

      .settlement-list {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[2]};

        .settlement-item {
          padding: ${({ theme }) => theme.spacing[3]};
          background: ${({ theme }) => theme.colors.surface};
          border-radius: ${({ theme }) => theme.borderRadius.md};

          .settlement-row {
            display: flex;
            justify-content: space-between;
            font-size: ${({ theme }) => theme.typography.fontSize.base};

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
      border-top: 1px solid ${({ theme }) => theme.colors.border};
      padding-top: ${({ theme }) => theme.spacing[4]};

      .settlement-form-title {
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        color: ${({ theme }) => theme.colors.text.primary};
        margin: 0 0 ${({ theme }) => theme.spacing[3]} 0;
      }

      .settlement-form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: ${({ theme }) => theme.spacing[3]};
        margin-bottom: ${({ theme }) => theme.spacing[3]};

        @media (max-width: 600px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;

export default ReceivableModal;
