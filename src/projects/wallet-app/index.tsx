import { lazy, Suspense } from 'react';

// Lazy load wallet app để optimize bundle size
const WalletAppRouter = lazy(() => import('./App'));

/**
 * Loading fallback component
 * 
 * Simple loading state không phụ thuộc vào theme
 */
const LoadingWrapper = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontSize: '18px',
      color: '#666',
    }}>
      Loading Wallet App...
    </div>
  );
};

/**
 * Wallet App Entry Point
 * 
 * Lazy load để optimize bundle size
 * 
 * Note: ErrorBoundary được handle ở SubAppContent level
 * Note: Không dùng MemoryRouter vì React Router v6 không cho phép nested Router
 * Wallet-app sẽ dùng state-based routing hoặc hash routing
 */
const WalletApp = () => {
  return (
    <Suspense fallback={<LoadingWrapper />}>
      <WalletAppRouter />
    </Suspense>
  );
};

export default WalletApp;

