import { useState, useEffect, createContext, useContext } from 'react';
import { WalletAppLayout } from './components/WalletAppLayout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Transactions } from './pages/Transactions';
import { AddTransaction } from './pages/AddTransaction';
import { EditTransaction } from './pages/EditTransaction';
import { Accounts } from './pages/Accounts';
import { Categories } from './pages/Categories';
import { Budgets } from './pages/Budgets';
import { Receivables } from './pages/Receivables';
import { Liabilities } from './pages/Liabilities';
import { Assets } from './pages/Assets';
import { Settings } from './pages/Settings';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Toaster } from '@/components/ui/toaster';

// Wallet App Route Types
type WalletAppRoute = 
  | 'login' 
  | 'dashboard' 
  | 'transactions' 
  | 'transactions/add'
  | 'transactions/edit'
  | 'accounts'
  | 'categories'
  | 'budgets'
  | 'receivables'
  | 'liabilities'
  | 'assets'
  | 'settings';

interface WalletAppRouterContextType {
  currentRoute: WalletAppRoute;
  navigate: (route: WalletAppRoute) => void;
}

const WalletAppRouterContext = createContext<WalletAppRouterContextType | null>(null);

export const useWalletAppRouter = () => {
  const context = useContext(WalletAppRouterContext);
  if (!context) {
    throw new Error('useWalletAppRouter must be used within WalletAppRouter');
  }
  return context;
};

/**
 * Wallet App Router (State-based routing)
 * 
 * Routes:
 * - login - Login page
 * - dashboard - Dashboard (protected)
 * - transactions - Transactions list (protected)
 * - transactions/add - Add transaction (protected)
 * 
 * Note: Dùng state-based routing thay vì MemoryRouter để tránh conflict với React Router v6
 */
const WalletAppRouter = () => {
  const { isAuthenticated, isLoading } = useAuth();

  // Parse initial route from hash (e.g., #dashboard)
  const getInitialRoute = (): WalletAppRoute => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.slice(1); // Remove #
      const validRoutes: WalletAppRoute[] = [
        'login', 'dashboard', 'transactions', 'transactions/add', 'transactions/edit',
        'accounts', 'categories', 'budgets', 'receivables', 'liabilities', 'assets', 'settings'
      ];
      if (validRoutes.includes(hash as WalletAppRoute)) {
        return hash as WalletAppRoute;
      }
    }
    return isAuthenticated ? 'dashboard' : 'login';
  };

  const [currentRoute, setCurrentRoute] = useState<WalletAppRoute>(getInitialRoute);

  // Sync route với hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.hash = currentRoute;
    }
  }, [currentRoute]);

  // Listen to hash changes (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const validRoutes: WalletAppRoute[] = [
        'login', 'dashboard', 'transactions', 'transactions/add', 'transactions/edit',
        'accounts', 'categories', 'budgets', 'receivables', 'liabilities', 'assets', 'settings'
      ];
      if (validRoutes.includes(hash as WalletAppRoute)) {
        setCurrentRoute(hash as WalletAppRoute);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: WalletAppRoute) => {
    setCurrentRoute(route);
  };

  // Redirect logic
  useEffect(() => {
    if (!isAuthenticated && currentRoute !== 'login') {
      setCurrentRoute('login');
    } else if (isAuthenticated && currentRoute === 'login') {
      setCurrentRoute('dashboard');
    }
  }, [isAuthenticated, currentRoute]);

  const renderPage = () => {
    switch (currentRoute) {
      case 'login':
        return <Login />;
      case 'dashboard':
        return <Dashboard />;
      case 'transactions':
        return <Transactions />;
      case 'transactions/add':
        return <AddTransaction />;
      case 'transactions/edit':
        return <EditTransaction />;
      case 'accounts':
        return <Accounts />;
      case 'categories':
        return <Categories />;
      case 'budgets':
        return <Budgets />;
      case 'receivables':
        return <Receivables />;
      case 'liabilities':
        return <Liabilities />;
      case 'assets':
        return <Assets />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        background: '#0a0a0a'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            border: '3px solid rgba(14, 165, 233, 0.2)',
            borderTopColor: '#0ea5e9',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite'
          }} />
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
          <span style={{
            color: '#a3a3a3',
            fontSize: '14px',
            fontWeight: 500
          }}>Đang tải...</span>
        </div>
      </div>
    );
  }

  return (
    <WalletAppRouterContext.Provider value={{ currentRoute, navigate }}>
      {currentRoute === 'login' ? (
        renderPage()
      ) : (
        <WalletAppLayout>
          {renderPage()}
        </WalletAppLayout>
      )}
      <Toaster />
    </WalletAppRouterContext.Provider>
  );
};

/**
 * Wallet App với Auth Provider
 */
const WalletAppWithAuth = () => {
  return (
    <AuthProvider>
      <WalletAppRouter />
    </AuthProvider>
  );
};

export default WalletAppWithAuth;

