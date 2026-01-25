import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useCategories } from '../../api/hooks';
import { handleApiError } from '../../api/walletApi';
import { PageHeader, EmptyState, LoadingState } from '../../components/shared';
import { CategoryCard } from './CategoryCard';
import { CategoryModal } from './CategoryModal';
import type { Category, CreateCategoryRequest } from '../../api/types';

/**
 * Categories Page
 * 
 * Quản lý danh mục chi tiêu/thu nhập (CRUD) sử dụng SWR
 */
export const Categories = () => {
  const { t } = useTranslation();
  
  // SWR hook
  const {
    categories,
    isLoading,
    createCategory,
    updateCategory,
    deleteCategory,
  } = useCategories();

  // Local UI state
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleOpenModal = useCallback((category?: Category) => {
    setEditingCategory(category || null);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setEditingCategory(null);
  }, []);

  const handleSubmit = useCallback(async (formData: CreateCategoryRequest) => {
    setError(null);
    setIsSaving(true);

    try {
      if (editingCategory) {
        await updateCategory(editingCategory.id, formData);
      } else {
        await createCategory(formData);
      }
      handleCloseModal();
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsSaving(false);
    }
  }, [editingCategory, updateCategory, createCategory, handleCloseModal]);

  const handleDelete = useCallback(async (category: Category) => {
    if (category.isSystem) {
      alert(t('wallet.categories.cannotDeleteSystem') || 'Không thể xóa danh mục hệ thống');
      return;
    }

    if (!window.confirm(
      t('wallet.categories.confirmDelete', { name: category.name }) ||
      `Bạn có chắc muốn xóa danh mục "${category.name}"?`
    )) {
      return;
    }

    try {
      await deleteCategory(category.id);
    } catch (err) {
      setError(handleApiError(err));
    }
  }, [deleteCategory, t]);

  if (isLoading && categories.length === 0) {
    return (
      <CategoriesWrapper className="categories-wrapper">
        <PageHeader
          title={t('wallet.categories.title')}
          actionLabel={t('wallet.categories.add')}
          actionIcon="Plus"
          onAction={() => handleOpenModal()}
        />
        <LoadingState count={8} variant="grid" />
      </CategoriesWrapper>
    );
  }

  return (
    <CategoriesWrapper className="categories-wrapper">
      <PageHeader
        title={t('wallet.categories.title')}
        actionLabel={t('wallet.categories.add')}
        actionIcon="Plus"
        onAction={() => handleOpenModal()}
      />

      {error && (
        <Alert variant="destructive" className="error-alert">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {categories.length === 0 ? (
        <EmptyState
          icon="Categories"
          title={t('wallet.categories.noCategories') || 'Chưa có danh mục nào'}
          description="Thêm danh mục để phân loại giao dịch của bạn"
          actionLabel={t('wallet.categories.addFirst') || 'Thêm danh mục đầu tiên'}
          onAction={() => handleOpenModal()}
        />
      ) : (
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => !category.isSystem && handleOpenModal(category)}
              onEdit={() => handleOpenModal(category)}
              onDelete={() => handleDelete(category)}
            />
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      <CategoryModal
        open={isModalOpen}
        onOpenChange={(open) => !open && handleCloseModal()}
        category={editingCategory}
        onSubmit={handleSubmit}
        isSaving={isSaving}
      />
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .error-alert {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: ${({ theme }) => theme.spacing[4]};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
`;

export default Categories;
