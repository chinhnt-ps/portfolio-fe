import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import type { Category, CreateCategoryRequest } from '../../api/types';
import { formGroup, buttonGroup } from '../../styles/mixins';

interface CategoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category?: Category | null;
  onSubmit: (data: CreateCategoryRequest) => Promise<void>;
  isSaving: boolean;
}

const initialFormData: CreateCategoryRequest = {
  name: '',
  icon: 'Categories',
  color: '#0ea5e9',
};

/**
 * CategoryModal Component
 * 
 * Modal thêm/sửa danh mục
 */
export const CategoryModal = ({
  open,
  onOpenChange,
  category,
  onSubmit,
  isSaving,
}: CategoryModalProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<CreateCategoryRequest>(initialFormData);

  useEffect(() => {
    if (open && category) {
      setFormData({
        name: category.name,
        icon: category.icon || 'Categories',
        color: category.color || '#0ea5e9',
      });
    } else if (open) {
      setFormData(initialFormData);
    }
  }, [open, category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <CategoryModalContent className="modal-content">
        <DialogHeader>
          <DialogTitle className="modal-title">
            {category ? t('wallet.categories.edit') : t('wallet.categories.add')}
          </DialogTitle>
          <DialogDescription>
            {category ? 'Cập nhật thông tin danh mục' : 'Thêm danh mục mới vào danh sách'}
          </DialogDescription>
        </DialogHeader>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <Label className="label">{t('wallet.categories.name') || 'Tên danh mục'} *</Label>
            <Input
              className="input"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t('wallet.categories.namePlaceholder') || 'Ví dụ: Ăn uống, Mua sắm...'}
              required
            />
          </div>

          <div className="form-group">
            <Label className="label">{t('wallet.categories.icon') || 'Icon'}</Label>
            <Input
              className="input"
              type="text"
              value={formData.icon || ''}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              placeholder="Categories"
            />
            <div className="form-hint">
              {t('wallet.categories.iconHint') || 'Nhập tên icon từ Lucide (ví dụ: Utensils, Car, ShoppingBag)'}
            </div>
          </div>

          <DialogFooter className="button-group">
            <Button
              variant="outline"
              type="button"
              onClick={handleClose}
              disabled={isSaving}
              className="cancel-button"
            >
              {t('wallet.common.cancel')}
            </Button>
            <Button
              type="submit"
              disabled={isSaving}
              className={`submit-button ${isSaving ? 'submit-button--loading' : ''}`}
            >
              {isSaving
                ? t('wallet.common.saving') || 'Đang lưu...'
                : category
                  ? t('wallet.common.save')
                  : t('wallet.categories.create') || 'Tạo danh mục'}
            </Button>
          </DialogFooter>
        </form>
      </CategoryModalContent>
    </Dialog>
  );
};

const CategoryModalContent = styled(DialogContent)`
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

  .form-hint {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-top: ${({ theme }) => theme.spacing[1]};
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

export default CategoryModal;
