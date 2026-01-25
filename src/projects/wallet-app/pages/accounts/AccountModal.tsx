import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import type { Account, CreateAccountRequest, AccountType } from '../../api/types';
import { formGroup, buttonGroup } from '../../styles/mixins';

interface AccountModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  account?: Account | null;
  onSubmit: (data: CreateAccountRequest) => Promise<void>;
  isSaving: boolean;
}

const initialFormData: CreateAccountRequest = {
  name: '',
  type: 'CASH',
  currency: 'VND',
  openingBalance: 0,
  creditLimit: null,
  note: '',
};

/**
 * AccountModal Component
 * 
 * Modal thêm/sửa tài khoản
 */
export const AccountModal = ({
  open,
  onOpenChange,
  account,
  onSubmit,
  isSaving,
}: AccountModalProps) => {
  const [formData, setFormData] = useState<CreateAccountRequest>(initialFormData);

  // Reset form when modal opens/closes or account changes
  useEffect(() => {
    if (open && account) {
      setFormData({
        name: account.name,
        type: account.type,
        currency: account.currency,
        openingBalance: account.openingBalance,
        creditLimit: account.creditLimit ?? null,
        note: account.note || '',
      });
    } else if (open) {
      setFormData(initialFormData);
    }
  }, [open, account]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AccountModalContent className="modal-content">
        <DialogHeader>
          <DialogTitle className="modal-title">
            {account ? 'Sửa tài khoản' : 'Thêm tài khoản'}
          </DialogTitle>
          <DialogDescription>
            {account
              ? 'Cập nhật thông tin tài khoản của bạn'
              : 'Thêm tài khoản mới vào danh sách'}
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
                <SelectItem value="SAVINGS">Tiết kiệm</SelectItem>
                <SelectItem value="INVESTMENT">Đầu tư</SelectItem>
                <SelectItem value="POSTPAID">Trả sau</SelectItem>
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
            <Label className="label">
              {formData.type === 'POSTPAID' ? 'Dư nợ ban đầu' : 'Số dư ban đầu'}
            </Label>
            <Input
              className="input"
              type="number"
              step="0.01"
              value={formData.openingBalance}
              onChange={(e) =>
                setFormData({ ...formData, openingBalance: parseFloat(e.target.value) || 0 })
              }
            />
          </div>

          {formData.type === 'POSTPAID' && (
            <div className="form-group">
              <Label className="label">Hạn mức (để trống = không giới hạn)</Label>
              <Input
                className="input"
                type="number"
                step="0.01"
                value={formData.creditLimit ?? ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    creditLimit: e.target.value ? parseFloat(e.target.value) : null,
                  })
                }
                placeholder="Ví dụ: 10000000"
              />
            </div>
          )}

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
              onClick={handleClose}
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
              {isSaving ? 'Đang lưu...' : account ? 'Lưu thay đổi' : 'Tạo tài khoản'}
            </Button>
          </DialogFooter>
        </form>
      </AccountModalContent>
    </Dialog>
  );
};

const AccountModalContent = styled(DialogContent)`
  max-width: 500px;

  .form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[4]};
    margin-top: ${({ theme }) => theme.spacing[4]};
  }

  .form-group {
    ${formGroup}
  }

  .button-group {
    ${buttonGroup}
    justify-content: flex-end;
  }

  .submit-button {
    min-width: 120px;

    &--loading {
      opacity: 0.7;
    }
  }
`;

export default AccountModal;
