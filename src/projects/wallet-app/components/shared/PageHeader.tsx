import styled from 'styled-components';
import { Button } from '@/components/ui/button';
import { Icon, type IconName } from '@/projects/wallet-app/components/icons';

interface PageHeaderProps {
  title: string;
  actionLabel?: string;
  actionIcon?: IconName;
  onAction?: () => void;
  className?: string;
}

/**
 * PageHeader Component
 * 
 * Header chung cho các pages với title và action button
 */
export const PageHeader = ({
  title,
  actionLabel,
  actionIcon = 'Plus',
  onAction,
  className,
}: PageHeaderProps) => {
  return (
    <PageHeaderWrapper className={className}>
      <h1 className="page-title">{title}</h1>
      {actionLabel && onAction && (
        <Button onClick={onAction} className="action-button">
          <Icon name={actionIcon} size={20} />
          <span>{actionLabel}</span>
        </Button>
      )}
    </PageHeaderWrapper>
  );
};

const PageHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .page-title {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    letter-spacing: -0.02em;
    line-height: 1.2;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    }
  }

  .action-button {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
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
`;

export default PageHeader;
