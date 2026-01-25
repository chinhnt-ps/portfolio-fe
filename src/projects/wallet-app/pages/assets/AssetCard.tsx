import styled from 'styled-components';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icon } from '../../components/icons';
import type { Asset, AssetType } from '../../api/types';
import { formatCurrency, formatDate } from '../../utils/formatters';
import { cardBase, cardHover } from '../../styles/mixins';

interface AssetCardProps {
  asset: Asset;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const getTypeLabel = (type: AssetType): string => {
  const labels: Record<AssetType, string> = {
    CASH: 'Tiền mặt',
    ITEM: 'Vật phẩm',
    DEVICE: 'Thiết bị',
    OTHER: 'Khác',
  };
  return labels[type] || type;
};

/**
 * AssetCard Component
 * 
 * Card hiển thị thông tin một tài sản
 */
export const AssetCard = ({ asset, onClick, onEdit, onDelete }: AssetCardProps) => {
  return (
    <AssetCardWrapper className="asset-card" onClick={onClick}>
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
          onClick={onEdit}
          title="Sửa"
        >
          <Icon icon="Edit" size={16} color="currentColor" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="icon-button"
          onClick={onDelete}
          title="Xóa"
        >
          <Icon icon="Delete" size={16} color="currentColor" />
        </Button>
      </div>
    </AssetCardWrapper>
  );
};

const AssetCardWrapper = styled(Card)`
  ${cardBase}
  ${cardHover}

  .asset-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing[4]};

    .asset-name {
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0;
    }

    .type-badge {
      font-size: ${({ theme }) => theme.typography.fontSize.xs};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  .asset-details {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[1]};
  }

  .asset-value {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .asset-actions {
    display: flex;
    gap: ${({ theme }) => theme.spacing[2]};

    .icon-button {
      width: 36px;
      height: 36px;
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      color: ${({ theme }) => theme.colors.text.secondary};

      &:hover {
        background: ${({ theme }) =>
          theme.colors.background === '#0a0a0a'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.05)'};
        color: ${({ theme }) => theme.colors.text.primary};
      }
    }
  }
`;

export default AssetCard;
