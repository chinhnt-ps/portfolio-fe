import { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${({ theme }) => theme?.spacing?.[8] || '32px'};
  text-align: center;
`;

const ErrorTitle = styled.h1`
  font-size: ${({ theme }) => theme?.typography?.fontSize?.['4xl'] || '2rem'};
  font-weight: ${({ theme }) => theme?.typography?.fontWeight?.bold || 'bold'};
  color: ${({ theme }) => theme?.colors?.text?.primary || '#000'};
  margin: 0 0 ${({ theme }) => theme?.spacing?.[4] || '16px'} 0;
`;

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme?.typography?.fontSize?.base || '1rem'};
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#666'};
  margin: 0 0 ${({ theme }) => theme?.spacing?.[6] || '24px'} 0;
`;

const ErrorButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme?.spacing?.[3] || '12px'} ${({ theme }) => theme?.spacing?.[6] || '24px'};
  background: ${({ theme }) => theme?.colors?.primary || '#0ea5e9'};
  color: white;
  text-decoration: none;
  border: none;
  border-radius: ${({ theme }) => theme?.borderRadius?.md || '8px'};
  font-size: ${({ theme }) => theme?.typography?.fontSize?.base || '1rem'};
  font-weight: ${({ theme }) => theme?.typography?.fontWeight?.medium || '500'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Có thể log to error tracking service (Sentry, etc.) ở đây
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorContainer>
          <ErrorTitle>Something went wrong</ErrorTitle>
          <ErrorMessage>
            {this.state.error?.message || 'An unexpected error occurred'}
          </ErrorMessage>
          <ErrorButton onClick={() => {
            window.location.href = '/';
          }}>
            Go to Home
          </ErrorButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}


