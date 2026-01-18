import { ReactNode, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useWalletAppRouter } from '../App';
import styled from 'styled-components';

interface AuthGuardProps {
  children: ReactNode;
}

/**
 * Auth Guard Component
 * 
 * Protect routes that require authentication
 * Redirects to login if user is not authenticated
 */
export const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const { navigate } = useWalletAppRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('login');
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return <AuthGuardWrapper className="auth-guard-wrapper">Loading...</AuthGuardWrapper>;
  }

  if (!isAuthenticated) {
    return <AuthGuardWrapper className="auth-guard-wrapper">Redirecting to login...</AuthGuardWrapper>;
  }

  return <>{children}</>;
};

const AuthGuardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
`;
