import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { walletApi } from '../api/walletApi';
import { handleApiError } from '../api/walletApi';
import type { Category, CreateCategoryRequest } from '../api/types';
import { Icon, getIconByName } from '../components/icons';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchCategories, addCategory, updateCategory, removeCategory } from '@/store/slices/categoriesSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

/**
 * Categories Page
 * 
 * Quản lý danh mục chi tiêu/thu nhập (CRUD)
 */
export const Categories = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  
  // Redux state
  const categories = useAppSelector((state) => state.categories.items);
  const isLoading = useAppSelector((state) => state.categories.isLoading);
  const categoriesError = useAppSelector((state) => state.categories.error);
  const categoriesLastFetched = useAppSelector((state) => state.categories.lastFetched);
  
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState<CreateCategoryRequest>({
    name: '',
    icon: 'Categories',
    color: '#0ea5e9',
  });

  // Load categories from Redux
  useEffect(() => {
    // Tránh gọi API nếu đang loading hoặc đã có data mới
    if (isLoading) return;
    
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
    
    // Chỉ fetch nếu chưa có data hoặc data đã cũ (hơn 5 phút)
    if (!categoriesLastFetched || categoriesLastFetched < fiveMinutesAgo) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categoriesLastFetched, isLoading]);

  // Combine Redux error with local error
  useEffect(() => {
    if (categoriesError) {
      setError(categoriesError);
    }
  }, [categoriesError]);

  const handleOpenModal = (category?: Category) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name,
        icon: category.icon || '📁',
        color: category.color || '#0ea5e9',
      });
    } else {
      setEditingCategory(null);
      setFormData({
        name: '',
        icon: '📁',
        color: '#0ea5e9',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
    setFormData({
      name: '',
      icon: '📁',
      color: '#0ea5e9',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSaving(true);

    try {
      if (editingCategory) {
        const updated = await walletApi.categories.update(editingCategory.id, formData);
        dispatch(updateCategory(updated));
      } else {
        const created = await walletApi.categories.create(formData);
        dispatch(addCategory(created));
      }
      handleCloseModal();
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = useCallback(async (category: Category) => {
    if (category.isSystem) {
      alert(t('wallet.categories.cannotDeleteSystem') || 'Không thể xóa danh mục hệ thống');
      return;
    }

    if (!window.confirm(t('wallet.categories.confirmDelete', { name: category.name }) || `Bạn có chắc muốn xóa danh mục "${category.name}"?`)) {
      return;
    }

    try {
      await walletApi.categories.delete(category.id);
      dispatch(removeCategory(category.id));
    } catch (err) {
      setError(handleApiError(err));
    }
  }, [dispatch, t]);

  return (
    <CategoriesWrapper className="categories-wrapper">
      <div className="header">
        <h1 className="title">{t('wallet.categories.title')}</h1>
        <Button onClick={() => handleOpenModal()} className="gap-2">
          <Icon icon="Add" size={18} color="currentColor" />
          <span>{t('wallet.categories.add')}</span>
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {isLoading && categories.length === 0 ? (
        <div className="loading-state">
          <div className="skeleton-grid">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="skeleton-card">
                <Skeleton className="h-16 w-16 rounded-full mb-4" />
                <Skeleton className="h-4 w-24" />
              </Card>
            ))}
          </div>
        </div>
      ) : categories.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <Icon icon="Categories" size={48} color="currentColor" />
          </div>
          <p>{t('wallet.categories.noCategories')}</p>
          <Button onClick={() => handleOpenModal()} className="gap-2">
            <Icon icon="Add" size={18} color="currentColor" />
            <span>{t('wallet.categories.addFirst') || 'Thêm danh mục đầu tiên'}</span>
          </Button>
        </div>
      ) : (
        <div className="categories-grid">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="category-card"
              onClick={() => !category.isSystem && handleOpenModal(category)}
            >
              {category.isSystem && (
                <Badge variant="secondary" className="system-badge">
                  {t('wallet.categories.system') || 'Hệ thống'}
                </Badge>
              )}
              <div className="category-icon-wrapper" style={{ '--category-color': category.color || '#0ea5e9' } as React.CSSProperties}>
                {category.icon ? (
                  (() => {
                    const IconComponent = getIconByName(category.icon);
                    if (IconComponent) {
                      return <IconComponent size={40} color={category.color || '#0ea5e9'} strokeWidth={2} />;
                    }
                    return <span className="category-icon-emoji">{category.icon}</span>;
                  })()
                ) : (
                  <Icon icon="Categories" size={40} color={category.color || '#0ea5e9'} />
                )}
              </div>
              <div className="category-name">{category.name}</div>
              {!category.isSystem && (
                <div className="category-actions" onClick={(e) => e.stopPropagation()}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="icon-button"
                    onClick={() => handleOpenModal(category)}
                    title={t('wallet.common.edit')}
                  >
                    <Icon icon="Edit" size={16} color="currentColor" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="icon-button icon-button--danger"
                    onClick={() => handleDelete(category)}
                    title={t('wallet.common.delete')}
                  >
                    <Icon icon="Delete" size={16} color="currentColor" />
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => !open && handleCloseModal()}>
        <DialogContent className="modal-content">
          <DialogHeader>
            <DialogTitle className="modal-title">
              {editingCategory ? t('wallet.categories.edit') : t('wallet.categories.add')}
            </DialogTitle>
            <DialogDescription>
              {editingCategory ? 'Cập nhật thông tin danh mục' : 'Thêm danh mục mới vào danh sách'}
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
                value={formData.icon}
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
                onClick={handleCloseModal} 
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
                  : editingCategory 
                    ? t('wallet.common.save') 
                    : t('wallet.categories.create') || 'Tạo danh mục'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled.div`
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
      font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
      font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      line-height: ${({ theme }) => theme.typography.lineHeight.tight};
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0;
      letter-spacing: -0.02em;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
      }
    }

    .action-button {
      display: inline-flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};
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

  .loading-state {
    padding: ${({ theme }) => theme.spacing[8]};
    text-align: center;
    font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.text.secondary};

    .skeleton-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: ${({ theme }) => theme.spacing[4]};

      .skeleton-card {
        padding: ${({ theme }) => theme.spacing[6]};
        background: ${({ theme }) => theme.colors.surface};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.borderRadius['2xl']};
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({ theme }) => theme.spacing[3]};
        min-height: 180px;

        .skeleton-icon {
          width: 64px;
          height: 64px;
          border-radius: ${({ theme }) => theme.borderRadius.lg};
          background: linear-gradient(
            90deg,
            ${({ theme }) => theme.colors.border} 0%,
            ${({ theme }) => theme.colors.background} 50%,
            ${({ theme }) => theme.colors.border} 100%
          );
          background-size: 200% 100%;
          animation: skeleton-loading 1.5s ease-in-out infinite;
        }

        .skeleton-name {
          width: 80px;
          height: 16px;
          border-radius: ${({ theme }) => theme.borderRadius.md};
          background: linear-gradient(
            90deg,
            ${({ theme }) => theme.colors.border} 0%,
            ${({ theme }) => theme.colors.background} 50%,
            ${({ theme }) => theme.colors.border} 100%
          );
          background-size: 200% 100%;
          animation: skeleton-loading 1.5s ease-in-out infinite;
        }
      }
    }
  }

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .empty-state {
    padding: ${({ theme }) => theme.spacing[12]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[4]};

    .empty-icon {
      color: ${({ theme }) => theme.colors.text.secondary};
      opacity: 0.5;
      margin-bottom: ${({ theme }) => theme.spacing[2]};
    }

    p {
      font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
      font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
      line-height: ${({ theme }) => theme.typography.lineHeight.normal};
      color: ${({ theme }) => theme.colors.text.secondary};
      margin: 0;
    }

    .action-button {
      display: inline-flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};
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

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: ${({ theme }) => theme.spacing[4]};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }

    .category-card {
      padding: ${({ theme }) => theme.spacing[6]};
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.borderRadius['2xl']};
      box-shadow: ${({ theme }) => 
        theme.colors.background === '#0a0a0a' 
          ? '0 2px 8px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)' 
          : '0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)'};
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: relative;
      min-height: 180px;
      cursor: pointer;

      &:hover {
        border-color: ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? 'rgba(14, 165, 233, 0.3)' 
            : 'rgba(14, 165, 233, 0.2)'};
        box-shadow: ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? '0 4px 16px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.3)' 
            : '0 4px 16px rgba(0, 0, 0, 0.1), 0 12px 32px rgba(0, 0, 0, 0.08)'};
        transform: translateY(-4px);

        .category-actions {
          opacity: 1;
        }
      }

      .system-badge {
        position: absolute;
        top: ${({ theme }) => theme.spacing[3]};
        right: ${({ theme }) => theme.spacing[3]};
        padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
        background: ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? 'rgba(115, 115, 115, 0.3)' 
            : 'rgba(115, 115, 115, 0.15)'};
        color: ${({ theme }) => theme.colors.text.secondary};
        border-radius: ${({ theme }) => theme.borderRadius.md};
        font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
        font-size: ${({ theme }) => theme.typography.fontSize.xs};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        line-height: ${({ theme }) => theme.typography.lineHeight.normal};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        z-index: 1;
      }

      .category-icon-wrapper {
        width: 80px;
        height: 80px;
        border-radius: ${({ theme }) => theme.borderRadius.xl || theme.borderRadius['2xl']};
        background: ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? 'rgba(14, 165, 233, 0.15)' 
            : 'rgba(14, 165, 233, 0.1)'};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: ${({ theme }) => theme.spacing[4]};
        transition: all 0.2s ease;

        .category-icon-emoji {
          font-size: 40px;
          line-height: 1;
        }
      }

      &:hover .category-icon-wrapper {
        background: ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? 'rgba(14, 165, 233, 0.25)' 
            : 'rgba(14, 165, 233, 0.15)'};
        transform: scale(1.05);
      }

      .category-name {
        font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        line-height: ${({ theme }) => theme.typography.lineHeight.normal};
        color: ${({ theme }) => theme.colors.text.primary};
        margin-bottom: ${({ theme }) => theme.spacing[3]};
        word-break: break-word;
        flex: 1;
      }

      .category-actions {
        display: flex;
        gap: ${({ theme }) => theme.spacing[1]};
        margin-top: auto;
        opacity: 0;
        transition: opacity 0.2s ease;

        .icon-button {
          padding: ${({ theme }) => theme.spacing[2]};
          background: ${({ theme }) => theme.colors.surface};
          border: 1px solid ${({ theme }) => theme.colors.border};
          border-radius: ${({ theme }) => theme.borderRadius.lg};
          color: ${({ theme }) => theme.colors.text.secondary};
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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

          &--danger:hover {
            border-color: ${({ theme }) => theme.colors.error};
            color: ${({ theme }) => theme.colors.error};
            background: ${({ theme }) => 
              theme.colors.background === '#0a0a0a' 
                ? 'rgba(239, 68, 68, 0.15)' 
                : 'rgba(239, 68, 68, 0.1)'};
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
      max-width: 400px;
      width: 100%;
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

            &::placeholder {
              color: ${({ theme }) => theme.colors.text.secondary};
              opacity: 0.5;
            }
          }

          .form-hint {
            font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
            font-size: ${({ theme }) => theme.typography.fontSize.xs};
            font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
            line-height: ${({ theme }) => theme.typography.lineHeight.normal};
            color: ${({ theme }) => theme.colors.text.secondary};
            margin-top: ${({ theme }) => theme.spacing[1]};
            opacity: 0.7;
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
