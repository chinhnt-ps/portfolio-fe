import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icon, getIconByName } from '../../components/icons';
import type { Category } from '../../api/types';
import { cardBase, cardHover } from '../../styles/mixins';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

/**
 * CategoryCard Component
 * 
 * Card hiển thị thông tin một danh mục
 */
export const CategoryCard = ({ category, onClick, onEdit, onDelete }: CategoryCardProps) => {
  const { t } = useTranslation();

  const handleClick = () => {
    if (!category.isSystem && onClick) {
      onClick();
    }
  };

  return (
    <CategoryCardWrapper
      className={`category-card ${category.isSystem ? 'category-card--system' : ''}`}
      onClick={handleClick}
    >
      {category.isSystem && (
        <Badge variant="secondary" className="system-badge">
          {t('wallet.categories.system') || 'Hệ thống'}
        </Badge>
      )}
      
      <div
        className="category-icon-wrapper"
        style={{ '--category-color': category.color || '#0ea5e9' } as React.CSSProperties}
      >
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
            onClick={onEdit}
            title={t('wallet.common.edit')}
          >
            <Icon icon="Edit" size={16} color="currentColor" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="icon-button icon-button--danger"
            onClick={onDelete}
            title={t('wallet.common.delete')}
          >
            <Icon icon="Delete" size={16} color="currentColor" />
          </Button>
        </div>
      )}
    </CategoryCardWrapper>
  );
};

const CategoryCardWrapper = styled(Card)`
  ${cardBase}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]};
  position: relative;

  &:not(.category-card--system) {
    ${cardHover}
  }

  &.category-card--system {
    cursor: default;
    opacity: 0.8;
  }

  .system-badge {
    position: absolute;
    top: ${({ theme }) => theme.spacing[3]};
    right: ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }

  .category-icon-wrapper {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) =>
      theme.colors.background === '#0a0a0a'
        ? 'rgba(255, 255, 255, 0.05)'
        : 'rgba(0, 0, 0, 0.03)'};
    border-radius: 50%;
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    transition: all 0.2s ease;

    .category-icon-emoji {
      font-size: 40px;
      line-height: 1;
    }
  }

  &:hover:not(.category-card--system) .category-icon-wrapper {
    background: color-mix(in srgb, var(--category-color, #0ea5e9) 15%, transparent);
  }

  .category-name {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .category-actions {
    display: flex;
    gap: ${({ theme }) => theme.spacing[2]};
    opacity: 0;
    transition: opacity 0.2s ease;

    .icon-button {
      width: 32px;
      height: 32px;
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      color: ${({ theme }) => theme.colors.text.secondary};

      &:hover {
        background: ${({ theme }) =>
          theme.colors.background === '#0a0a0a'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.05)'};
        color: ${({ theme }) => theme.colors.text.primary};
      }

      &--danger:hover {
        background: ${({ theme }) => theme.colors.error}20;
        color: ${({ theme }) => theme.colors.error};
      }
    }
  }

  &:hover .category-actions {
    opacity: 1;
  }
`;

export default CategoryCard;
