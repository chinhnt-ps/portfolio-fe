import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Project } from '@/types/project';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme?.colors?.background || '#ffffff'};
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: ${({ theme }) => theme?.typography?.fontSize?.lg || '18px'};
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#666'};
`;

const PlaceholderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme?.spacing?.[16] || '64px'};
  text-align: center;
`;

const PlaceholderIcon = styled.div`
  font-size: 64px;
  margin-bottom: ${({ theme }) => theme?.spacing?.[6] || '24px'};
`;

const PlaceholderTitle = styled.h2`
  font-size: ${({ theme }) => theme?.typography?.fontSize?.['2xl'] || '1.5rem'};
  font-weight: ${({ theme }) => theme?.typography?.fontWeight?.bold || 'bold'};
  color: ${({ theme }) => theme?.colors?.text?.primary || '#000'};
  margin: 0 0 ${({ theme }) => theme?.spacing?.[4] || '16px'} 0;
`;

const PlaceholderDescription = styled.p`
  font-size: ${({ theme }) => theme?.typography?.fontSize?.lg || '1.125rem'};
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#666'};
  margin: 0;
  max-width: 600px;
  line-height: 1.6;
`;

interface SubAppContentProps {
  project: Project;
}

// Lazy load wallet-app
const WalletApp = lazy(() => import('@/projects/wallet-app'));

/**
 * SubAppContent component
 * 
 * Renders sub-applications (e.g., wallet-app) as standalone apps
 * Uses lazy loading để optimize bundle size
 */
export const SubAppContent = ({ project }: SubAppContentProps) => {
  // Wallet-app: Lazy load và render
  if (project.slug === 'wallet-app') {
    return (
      <ErrorBoundary>
        <AppContainer>
          <Suspense fallback={<LoadingWrapper>Loading Wallet App...</LoadingWrapper>}>
            <WalletApp />
          </Suspense>
        </AppContainer>
      </ErrorBoundary>
    );
  }

  // Other sub-apps: Placeholder
  return (
    <ErrorBoundary>
      <AppContainer>
        <PlaceholderWrapper>
          <PlaceholderIcon>📱</PlaceholderIcon>
          <PlaceholderTitle>Sub-Application</PlaceholderTitle>
          <PlaceholderDescription>
            This sub-application will be available soon.
          </PlaceholderDescription>
        </PlaceholderWrapper>
      </AppContainer>
    </ErrorBoundary>
  );
};

