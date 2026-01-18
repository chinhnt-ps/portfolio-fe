import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { walletApi } from '../api/walletApi';
import { handleApiError } from '../api/walletApi';
import type { Asset, CreateAssetRequest, UpdateAssetRequest, PaginatedResponse, AssetType } from '../api/types';
import { Icon } from '../components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

/**
 * Assets Page
 * 
 * Quản lý tài sản sở hữu (CRUD)
 */
export const Assets = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [pagination, setPagination] = useState<PaginatedResponse<Asset> | null>(null);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const [formData, setFormData] = useState<CreateAssetRequest>({
    name: '',
    type: 'OTHER',
    estimatedValue: undefined,
    currency: 'VND',
    acquiredAt: '',
    note: '',
  });

  const loadAssets = useCallback(async (page: number = 0) => {
    setIsLoading(true);
    setError(null);

    try {
      const [assetsResult, totalValueResult] = await Promise.all([
        walletApi.assets.getAll(page, 10),
        walletApi.assets.getTotalValue().catch(() => 0), // Fallback to 0 if error
      ]);
      setAssets(assetsResult.content);
      setPagination(assetsResult);
      setTotalValue(totalValueResult ?? 0);
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAssets(currentPage);
  }, [currentPage, loadAssets]);

  const handleOpenModal = (asset?: Asset) => {
    if (asset) {
      setEditingAsset(asset);
      setFormData({
        name: asset.name,
        type: asset.type,
        estimatedValue: asset.estimatedValue,
        currency: asset.currency,
        acquiredAt: asset.acquiredAt ? asset.acquiredAt.split('T')[0] : '',
        note: asset.note || '',
      });
    } else {
      setEditingAsset(null);
      setFormData({
        name: '',
        type: 'OTHER',
        estimatedValue: undefined,
        currency: 'VND',
        acquiredAt: '',
        note: '',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingAsset(null);
    setFormData({
      name: '',
      type: 'OTHER',
      estimatedValue: undefined,
      currency: 'VND',
      acquiredAt: '',
      note: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSaving(true);

    try {
      if (editingAsset) {
        const data: UpdateAssetRequest = {
          name: formData.name,
          type: formData.type,
          acquiredAt: formData.acquiredAt ? new Date(formData.acquiredAt).toISOString() : undefined,
          estimatedValue: formData.estimatedValue || undefined,
          currency: formData.currency,
          note: formData.note || undefined,
        };
        await walletApi.assets.update(editingAsset.id, data);
      } else {
        const data: CreateAssetRequest = {
          name: formData.name,
          type: formData.type,
          acquiredAt: formData.acquiredAt ? new Date(formData.acquiredAt).toISOString() : undefined,
          estimatedValue: formData.estimatedValue || undefined,
          currency: formData.currency,
          note: formData.note || undefined,
        };
        await walletApi.assets.create(data);
      }
      await loadAssets(currentPage);
      handleCloseModal();
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (asset: Asset) => {
    if (!window.confirm(`Bạn có chắc muốn xóa tài sản "${asset.name}"?`)) {
      return;
    }

    try {
      await walletApi.assets.delete(asset.id);
      await loadAssets(currentPage);
    } catch (err) {
      setError(handleApiError(err));
    }
  };

  const formatCurrency = (amount: number | undefined, currency: string = 'VND') => {
    if (amount === undefined || amount === null) return 'Chưa có';
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

  const getTypeLabel = (type: AssetType) => {
    const labels: Record<AssetType, string> = {
      CASH: 'Tiền mặt',
      ITEM: 'Vật phẩm',
      DEVICE: 'Thiết bị',
      OTHER: 'Khác',
    };
    return labels[type] || type;
  };

  if (isLoading && assets.length === 0) {
    return (
      <AssetsWrapper className="assets-wrapper">
        <div className="header">
          <h1 className="title">Tài sản</h1>
          <Button onClick={() => handleOpenModal()} className="gap-2">
            <Icon icon="Add" size={18} color="currentColor" />
            <span>Thêm tài sản</span>
          </Button>
        </div>
        <div className="loading-state">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-32 w-full" />
        </div>
      </AssetsWrapper>
    );
  }

  return (
    <>
      <AssetsWrapper className="assets-wrapper">
        <div className="header">
          <h1 className="title">Tài sản</h1>
          <Button onClick={() => handleOpenModal()} className="gap-2">
            <Icon icon="Add" size={18} color="currentColor" />
            <span>Thêm tài sản</span>
          </Button>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Total Value Summary */}
        {totalValue > 0 && (
          <Card className="summary-card">
            <h3 className="summary-title">Tổng giá trị tài sản</h3>
            <div className="summary-value">{formatCurrency(totalValue, 'VND')}</div>
          </Card>
        )}

        {assets.length === 0 ? (
          <div className="empty-state">
            <p>Chưa có tài sản nào</p>
            <Button onClick={() => handleOpenModal()} className="gap-2">
              <Icon icon="Add" size={18} color="currentColor" />
              <span>Thêm tài sản đầu tiên</span>
            </Button>
          </div>
        ) : (
          <>
            <div className="assets-grid">
              {assets.map((asset) => (
                <Card 
                  key={asset.id} 
                  className="asset-card"
                  onClick={() => handleOpenModal(asset)}
                >
                  <div className="asset-header">
                    <h3 className="asset-name">{asset.name}</h3>
                    <Badge variant="secondary" className={`type-badge type-badge--${asset.type.toLowerCase()}`}>
                      {getTypeLabel(asset.type)}
                    </Badge>
                  </div>
                  <div className="asset-details">
                    {asset.estimatedValue !== undefined && (
                      <div>Giá trị ước tính: {formatCurrency(asset.estimatedValue, asset.currency)}</div>
                    )}
                    {asset.acquiredAt && (
                      <div>Ngày mua: {formatDate(asset.acquiredAt)}</div>
                    )}
                    {asset.note && <div>Ghi chú: {asset.note}</div>}
                  </div>
                  {asset.estimatedValue !== undefined && (
                    <div className="asset-value">
                      {formatCurrency(asset.estimatedValue, asset.currency)}
                    </div>
                  )}
                  <div className="asset-actions" onClick={(e) => e.stopPropagation()}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="icon-button"
                      onClick={() => handleOpenModal(asset)}
                      title="Sửa"
                    >
                      <Icon icon="Edit" size={16} color="currentColor" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="icon-button"
                      onClick={() => handleDelete(asset)}
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
      </AssetsWrapper>

      {/* Add/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => !open && handleCloseModal()}>
        <StyledDialogContent className="modal-content">
          <DialogHeader>
            <DialogTitle className="modal-title">{editingAsset ? 'Sửa tài sản' : 'Thêm tài sản'}</DialogTitle>
            <DialogDescription>
              {editingAsset ? 'Cập nhật thông tin tài sản của bạn' : 'Thêm tài sản mới vào danh sách'}
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
                min="0"
                value={formData.estimatedValue || ''}
                onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value ? parseFloat(e.target.value) : undefined })}
                placeholder="0"
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
                {isSaving ? 'Đang lưu...' : editingAsset ? 'Lưu thay đổi' : 'Tạo tài sản'}
              </Button>
            </DialogFooter>
          </form>
        </StyledDialogContent>
      </Dialog>
    </>
  );
};

const AssetsWrapper = styled.div`
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

  .summary-card {
    padding: ${({ theme }) => theme.spacing[4]};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    box-shadow: ${({ theme }) => theme.shadows.md};

    .summary-title {
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
      color: ${({ theme }) => theme.colors.text.secondary};
      margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
    }

    .summary-value {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.primary};
    }
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

  .assets-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.spacing[4]};

    .asset-card {
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

      .asset-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${({ theme }) => theme.spacing[3]};

        .asset-name {
          font-size: ${({ theme }) => theme.typography.fontSize.lg};
          font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
          color: ${({ theme }) => theme.colors.text.primary};
          margin: 0;
        }

        .type-badge {
          padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
          color: white;
          border-radius: ${({ theme }) => theme.borderRadius.sm};
          font-size: ${({ theme }) => theme.typography.fontSize.xs};
          font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

          &--cash {
            background: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
          }

          &--device {
            background: ${({ theme }) => theme.colors.primary || '#0ea5e9'};
          }

          &--item {
            background: ${({ theme }) => theme.colors.warning?.[500] || '#f59e0b'};
          }

          &--other {
            background: ${({ theme }) => theme.colors.text.secondary};
          }
        }
      }

      .asset-details {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[2]};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        color: ${({ theme }) => theme.colors.text.secondary};
      }

      .asset-value {
        font-size: ${({ theme }) => theme.typography.fontSize.xl};
        font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
        color: ${({ theme }) => theme.colors.text.primary};
        margin-top: ${({ theme }) => theme.spacing[2]};
      }

      .asset-actions {
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
