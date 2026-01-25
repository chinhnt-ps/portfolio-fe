import styled from 'styled-components';
import { Skeleton } from '@/components/ui/skeleton';

interface LoadingStateProps {
  /** Number of skeleton cards to show */
  count?: number;
  /** Variant of loading - 'grid' for cards, 'list' for list items */
  variant?: 'grid' | 'list';
  className?: string;
}

/**
 * LoadingState Component
 * 
 * Skeleton loading cho các pages
 */
export const LoadingState = ({
  count = 3,
  variant = 'grid',
  className,
}: LoadingStateProps) => {
  const items = Array.from({ length: count }, (_, i) => i);

  if (variant === 'list') {
    return (
      <LoadingStateWrapper className={className}>
        <div className="loading-list">
          {items.map((i) => (
            <div key={i} className="loading-list-item">
              <Skeleton className="skeleton-icon" />
              <div className="skeleton-content">
                <Skeleton className="skeleton-title" />
                <Skeleton className="skeleton-subtitle" />
              </div>
              <Skeleton className="skeleton-amount" />
            </div>
          ))}
        </div>
      </LoadingStateWrapper>
    );
  }

  return (
    <LoadingStateWrapper className={className}>
      <div className="loading-grid">
        {items.map((i) => (
          <div key={i} className="loading-card">
            <div className="loading-card-header">
              <Skeleton className="skeleton-title" />
              <Skeleton className="skeleton-badge" />
            </div>
            <Skeleton className="skeleton-amount" />
            <Skeleton className="skeleton-detail" />
            <div className="loading-card-actions">
              <Skeleton className="skeleton-button" />
              <Skeleton className="skeleton-button" />
            </div>
          </div>
        ))}
      </div>
    </LoadingStateWrapper>
  );
};

const LoadingStateWrapper = styled.div`
  .loading-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacing[4]};
  }

  .loading-card {
    padding: ${({ theme }) => theme.spacing[6]};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius['2xl']};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: ${({ theme }) => theme.spacing[8]};
    }

    .loading-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: ${({ theme }) => theme.spacing[4]};
    }

    .skeleton-title {
      width: 120px;
      height: 20px;
    }

    .skeleton-badge {
      width: 60px;
      height: 24px;
      border-radius: ${({ theme }) => theme.borderRadius.md};
    }

    .skeleton-amount {
      width: 150px;
      height: 32px;
      margin-bottom: ${({ theme }) => theme.spacing[2]};
    }

    .skeleton-detail {
      width: 100px;
      height: 16px;
      margin-bottom: ${({ theme }) => theme.spacing[4]};
    }

    .loading-card-actions {
      display: flex;
      gap: ${({ theme }) => theme.spacing[2]};
    }

    .skeleton-button {
      width: 80px;
      height: 36px;
      border-radius: ${({ theme }) => theme.borderRadius.lg};
    }
  }

  .loading-list {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[3]};
  }

  .loading-list-item {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[4]};
    padding: ${({ theme }) => theme.spacing[4]};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.lg};

    .skeleton-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .skeleton-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[1]};

      .skeleton-title {
        width: 60%;
        height: 18px;
      }

      .skeleton-subtitle {
        width: 40%;
        height: 14px;
      }
    }

    .skeleton-amount {
      width: 80px;
      height: 20px;
    }
  }
`;

export default LoadingState;
