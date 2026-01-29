import styled from 'styled-components';
import { Button } from '@/components/ui/button';
import { Icon, type IconName } from '@/projects/wallet-app/components/icons';

interface EmptyStateProps {
  icon?: IconName;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

/**
 * EmptyState Component
 * 
 * Hiển thị khi danh sách trống
 */
export const EmptyState = ({
  icon = 'Inbox',
  title,
  description,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) => {
  return (
    <EmptyStateWrapper className={className}>
      <div className="empty-icon">
        <Icon name={icon} size={48} />
      </div>
      <h3 className="empty-title">{title}</h3>
      {description && <p className="empty-description">{description}</p>}
      {actionLabel && onAction && (
        <Button onClick={onAction} className="empty-action">
          <Icon name="Plus" size={18} />
          <span>{actionLabel}</span>
        </Button>
      )}
    </EmptyStateWrapper>
  );
};

const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[12]};
  text-align: center;
  min-height: 300px;

  .empty-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    background: ${({ theme }) =>
      theme.colors.background === '#0a0a0a'
        ? 'rgba(255, 255, 255, 0.05)'
        : 'rgba(0, 0, 0, 0.03)'};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .empty-title {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0 0 ${({ theme }) => theme.spacing[2]};
  }

  .empty-description {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0 0 ${({ theme }) => theme.spacing[6]};
    max-width: 300px;
  }

  .empty-action {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary[600] || '#0284c7'};
      transform: translateY(-1px);
    }
  }
`;

export default EmptyState;
