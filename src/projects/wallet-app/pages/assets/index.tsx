import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAssets, useAssetsTotalValue } from '../../api/hooks';
import { handleApiError } from '../../api/walletApi';
import { PageHeader, EmptyState, LoadingState } from '../../components/shared';
import { AssetCard } from './AssetCard';
import { AssetModal } from './AssetModal';
import { formatCurrency } from '../../utils/formatters';
import type { Asset, CreateAssetRequest } from '../../api/types';
import { cardGrid } from '../../styles/mixins';

/**
 * Assets Page
 * 
 * Quản lý tài sản sở hữu (CRUD) sử dụng SWR
 */
export const Assets = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  
  // SWR hooks
  const {
    assets,
    pagination,
    isLoading,
    createAsset,
    updateAsset,
    deleteAsset,
  } = useAssets({ page: currentPage, size: 10 });
  
  const { totalValue, isLoading: totalValueLoading } = useAssetsTotalValue();

  // Local UI state
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleOpenModal = useCallback((asset?: Asset) => {
    setEditingAsset(asset || null);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setEditingAsset(null);
  }, []);

  const handleSubmit = useCallback(async (formData: CreateAssetRequest) => {
    setError(null);
    setIsSaving(true);

    try {
      if (editingAsset) {
        await updateAsset(editingAsset.id, formData);
      } else {
        await createAsset(formData);
      }
      handleCloseModal();
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsSaving(false);
    }
  }, [editingAsset, updateAsset, createAsset, handleCloseModal]);

  const handleDelete = useCallback(async (asset: Asset) => {
    if (!window.confirm(`Bạn có chắc muốn xóa tài sản "${asset.name}"?`)) {
      return;
    }

    try {
      await deleteAsset(asset.id);
    } catch (err) {
      setError(handleApiError(err));
    }
  }, [deleteAsset]);

  if (isLoading && assets.length === 0) {
    return (
      <AssetsWrapper className="assets-wrapper">
        <PageHeader
          title="Tài sản"
          actionLabel="Thêm tài sản"
          actionIcon="Plus"
          onAction={() => handleOpenModal()}
        />
        <LoadingState count={6} variant="grid" />
      </AssetsWrapper>
    );
  }

  return (
    <AssetsWrapper className="assets-wrapper">
      <PageHeader
        title="Tài sản"
        actionLabel="Thêm tài sản"
        actionIcon="Plus"
        onAction={() => handleOpenModal()}
      />

      {error && (
        <Alert variant="destructive" className="error-alert">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Total Value Summary */}
      {!totalValueLoading && totalValue > 0 && (
        <Card className="summary-card">
          <h3 className="summary-title">Tổng giá trị tài sản</h3>
          <div className="summary-value">{formatCurrency(totalValue)}</div>
        </Card>
      )}

      {assets.length === 0 ? (
        <EmptyState
          icon="Assets"
          title="Chưa có tài sản nào"
          description="Thêm tài sản đầu tiên để theo dõi giá trị tài sản của bạn"
          actionLabel="Thêm tài sản đầu tiên"
          onAction={() => handleOpenModal()}
        />
      ) : (
        <>
          <div className="assets-grid">
            {assets.map((asset) => (
              <AssetCard
                key={asset.id}
                asset={asset}
                onClick={() => handleOpenModal(asset)}
                onEdit={() => handleOpenModal(asset)}
                onDelete={() => handleDelete(asset)}
              />
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
              <span className="pagination-info">
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

      {/* Add/Edit Modal */}
      <AssetModal
        open={isModalOpen}
        onOpenChange={(open) => !open && handleCloseModal()}
        asset={editingAsset}
        onSubmit={handleSubmit}
        isSaving={isSaving}
      />
    </AssetsWrapper>
  );
};

const AssetsWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .error-alert {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .summary-card {
    padding: ${({ theme }) => theme.spacing[6]};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius['2xl']};

    .summary-title {
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
      color: ${({ theme }) => theme.colors.text.secondary};
      margin: 0 0 ${({ theme }) => theme.spacing[2]};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .summary-value {
      font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
    }
  }

  .assets-grid {
    ${cardGrid}
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[4]};
    margin-top: ${({ theme }) => theme.spacing[8]};

    .pagination-info {
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      color: ${({ theme }) => theme.colors.text.secondary};
    }

    .pagination-button {
      &--disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`;

export default Assets;
