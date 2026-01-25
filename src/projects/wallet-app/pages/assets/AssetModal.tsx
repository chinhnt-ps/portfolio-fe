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
import type { Asset, CreateAssetRequest, AssetType } from '../../api/types';
import { formGroup, buttonGroup } from '../../styles/mixins';

interface AssetModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  asset?: Asset | null;
  onSubmit: (data: CreateAssetRequest) => Promise<void>;
  isSaving: boolean;
}

const initialFormData: CreateAssetRequest = {
  name: '',
  type: 'OTHER',
  estimatedValue: undefined,
  currency: 'VND',
  acquiredAt: '',
  note: '',
};

/**
 * AssetModal Component
 * 
 * Modal thêm/sửa tài sản
 */
export const AssetModal = ({
  open,
  onOpenChange,
  asset,
  onSubmit,
  isSaving,
}: AssetModalProps) => {
  const [formData, setFormData] = useState<CreateAssetRequest>(initialFormData);

  useEffect(() => {
    if (open && asset) {
      setFormData({
        name: asset.name,
        type: asset.type,
        estimatedValue: asset.estimatedValue,
        currency: asset.currency,
        acquiredAt: asset.acquiredAt ? asset.acquiredAt.split('T')[0] : '',
        note: asset.note || '',
      });
    } else if (open) {
      setFormData(initialFormData);
    }
  }, [open, asset]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data: CreateAssetRequest = {
      name: formData.name,
      type: formData.type,
      acquiredAt: formData.acquiredAt ? new Date(formData.acquiredAt).toISOString() : undefined,
      estimatedValue: formData.estimatedValue || undefined,
      currency: formData.currency,
      note: formData.note || undefined,
    };
    
    await onSubmit(data);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AssetModalContent className="modal-content">
        <DialogHeader>
          <DialogTitle className="modal-title">
            {asset ? 'Sửa tài sản' : 'Thêm tài sản'}
          </DialogTitle>
          <DialogDescription>
            {asset
              ? 'Cập nhật thông tin tài sản của bạn'
              : 'Thêm tài sản mới vào danh sách'}
          </DialogDescription>
        </DialogHeader>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <Label className="label">Tên tài sản *</Label>
            <Input
              className="input"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Nhập tên tài sản"
              required
            />
          </div>

          <div className="form-group">
            <Label className="label">Loại tài sản *</Label>
            <Select
              value={formData.type}
              onValueChange={(value) => setFormData({ ...formData, type: value as AssetType })}
            >
              <SelectTrigger className="select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CASH">Tiền mặt</SelectItem>
                <SelectItem value="ITEM">Vật phẩm</SelectItem>
                <SelectItem value="DEVICE">Thiết bị</SelectItem>
                <SelectItem value="OTHER">Khác</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="form-group">
            <Label className="label">Giá trị ước tính</Label>
            <Input
              className="input"
              type="number"
              step="0.01"
              value={formData.estimatedValue ?? ''}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  estimatedValue: e.target.value ? parseFloat(e.target.value) : undefined,
                })
              }
              placeholder="Nhập giá trị ước tính"
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
            <Label className="label">Ngày mua</Label>
            <Input
              className="input"
              type="date"
              value={formData.acquiredAt || ''}
              onChange={(e) => setFormData({ ...formData, acquiredAt: e.target.value })}
            />
          </div>

          <div className="form-group">
            <Label className="label">Ghi chú</Label>
            <Textarea
              value={formData.note || ''}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              placeholder="Thêm ghi chú cho tài sản này..."
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
              {isSaving ? 'Đang lưu...' : asset ? 'Lưu thay đổi' : 'Tạo tài sản'}
            </Button>
          </DialogFooter>
        </form>
      </AssetModalContent>
    </Dialog>
  );
};

const AssetModalContent = styled(DialogContent)`
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

export default AssetModal;
