import styled from 'styled-components';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Icon } from '@/projects/wallet-app/components/icons';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

/**
 * ErrorMessage Component
 * 
 * Hiển thị lỗi với option retry
 */
export const ErrorMessage = ({
  message,
  onRetry,
  className,
}: ErrorMessageProps) => {
  return (
    <ErrorMessageWrapper className={className}>
      <Alert variant="destructive" className="error-alert">
        <Icon name="AlertCircle" size={18} className="error-icon" />
        <AlertDescription>{message}</AlertDescription>
        {onRetry && (
          <button onClick={onRetry} className="retry-button">
            <Icon name="RefreshCw" size={14} />
            <span>Thử lại</span>
          </button>
        )}
      </Alert>
    </ErrorMessageWrapper>
  );
};

const ErrorMessageWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  .error-alert {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
    background: ${({ theme }) => theme.colors.error}20;
    border: 1px solid ${({ theme }) => theme.colors.error};
    border-radius: ${({ theme }) => theme.borderRadius.md};

    .error-icon {
      flex-shrink: 0;
      color: ${({ theme }) => theme.colors.error};
    }
  }

  .retry-button {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[1]};
    margin-left: auto;
    padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
    background: transparent;
    border: 1px solid currentColor;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.error};
      color: white;
    }
  }
`;

export default ErrorMessage;
