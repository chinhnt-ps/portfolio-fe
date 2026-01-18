import { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { useWalletAppRouter } from '../App';
import { MenuToggleButton } from './SidebarMenu';
import { Icon } from './icons';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useTranslation } from 'react-i18next';

interface WalletAppHeaderProps {
  onMenuToggle: () => void;
}

/**
 * Wallet App Header
 * 
 * Header riêng cho wallet-app với logo, menu toggle, và user section
 */
export const WalletAppHeader = ({ onMenuToggle }: WalletAppHeaderProps) => {
  const { user, logout } = useAuth();
  const { navigate } = useWalletAppRouter();
  const { t } = useTranslation();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      navigate('login');
    } catch (error) {
      console.error('Logout error:', error);
      // Still navigate to login even if logout API fails
      navigate('login');
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleBackToPortfolio = () => {
    // Navigate back to portfolio root
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  return (
    <WalletAppHeaderWrapper className="wallet-app-header-wrapper">
      <div className="header-content">
        <div className="branding-section">
          <MenuToggleButton onClick={onMenuToggle} />
          <button 
            className="back-to-portfolio-button"
            onClick={handleBackToPortfolio}
            title={t('wallet.header.backToPortfolio') || 'Về Portfolio'}
          >
            <Icon icon="Home" size={20} color="currentColor" />
          </button>
          <div className="logo" onClick={() => navigate('dashboard')}>
            <Icon icon="Wallet" size={24} color="currentColor" />
            <span>{t('wallet.app.title')}</span>
          </div>
        </div>
        <div className="user-section">
          <LanguageToggle />
          <ThemeToggle />
          <span className="user-name">{user?.fullName || user?.email || 'User'}</span>
          <button 
            className={`logout-button ${isLoggingOut ? 'logout-button--loading' : ''}`}
            onClick={handleLogout} 
            disabled={isLoggingOut}
          >
            <Icon icon={isLoggingOut ? 'Loading' : 'Logout'} size={16} color="currentColor" />
            <span>{isLoggingOut ? t('wallet.header.loggingOut') : t('wallet.header.logout')}</span>
          </button>
        </div>
      </div>
    </WalletAppHeaderWrapper>
  );
};

const WalletAppHeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(12px) saturate(180%);
  background: ${({ theme }) =>
    theme.colors.background === '#0a0a0a'
      ? 'rgba(10, 10, 10, 0.8)'
      : 'rgba(255, 255, 255, 0.8)'};
  box-shadow: 0 1px 0 0 ${({ theme }) => 
    theme.colors.background === '#0a0a0a' 
      ? 'rgba(255, 255, 255, 0.05)' 
      : 'rgba(0, 0, 0, 0.05)'};

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    padding: 0 ${({ theme }) => theme.spacing[4]};
    max-width: 1600px;
    margin: 0 auto;
    gap: ${({ theme }) => theme.spacing[4]};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 80px;
      padding: 0 ${({ theme }) => theme.spacing[6]};
    }

    .branding-section {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[4]};
    }

    .back-to-portfolio-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0;
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      color: ${({ theme }) => theme.colors.text.secondary};
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? 'rgba(14, 165, 233, 0.15)' 
            : 'rgba(14, 165, 233, 0.1)'};
        transform: translateY(-1px);
      }

      &:active {
        transform: translateY(0);
      }

      svg {
        color: currentColor;
      }
    }

    .logo {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[3]};
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.text.primary};
      cursor: pointer;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.8;
      }

      svg {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .user-section {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[4]};

      .user-name {
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
        color: ${({ theme }) => theme.colors.text.primary};
        display: none;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          display: inline;
        }
      }

      .logout-button {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing[2]};
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
        background: ${({ theme }) => theme.colors.surface};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.borderRadius.lg};
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
        cursor: pointer;
        opacity: 1;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          border-color: ${({ theme }) => theme.colors.error};
          color: ${({ theme }) => theme.colors.error};
          background: ${({ theme }) => 
            theme.colors.background === '#0a0a0a' 
              ? 'rgba(239, 68, 68, 0.1)' 
              : 'rgba(239, 68, 68, 0.05)'};
          transform: translateY(-1px);
        }

        &:active:not(:disabled) {
          transform: translateY(0);
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        &--loading {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }
    }
  }
`;

