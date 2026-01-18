import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useWalletAppRouter } from '../App';
import { Icons, Icon } from './icons';

type WalletAppRoute = 'dashboard' | 'transactions' | 'transactions/add';

interface NavItemConfig {
  route: WalletAppRoute;
  icon: keyof typeof Icons;
  label: string;
}

/**
 * Wallet App Navigation
 * 
 * Bottom navigation bar cho mobile-first design
 */
export const WalletAppNavigation = () => {
  const { t } = useTranslation();
  const { currentRoute, navigate } = useWalletAppRouter();

  const navItems: NavItemConfig[] = [
    { route: 'dashboard', icon: 'Dashboard', label: t('wallet.navigation.dashboard') },
    { route: 'transactions', icon: 'Transactions', label: t('wallet.navigation.transactions') },
    { route: 'transactions/add', icon: 'Add', label: t('wallet.navigation.add') },
  ];

  return (
    <WalletAppNavigationWrapper className="wallet-app-navigation-wrapper">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.route} className="nav-item">
            <button
              className={`nav-button ${currentRoute === item.route ? 'nav-button--active' : ''}`}
              onClick={() => navigate(item.route)}
              aria-label={item.label}
            >
              <div className="nav-icon-wrapper">
                <Icon icon={item.icon} size={20} color="currentColor" />
              </div>
              <span className="nav-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </WalletAppNavigationWrapper>
  );
};

const WalletAppNavigationWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${({ theme }) =>
    theme.colors.background === '#0a0a0a'
      ? 'rgba(10, 10, 10, 0.9)'
      : 'rgba(255, 255, 255, 0.9)'};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(10px);
  padding: ${({ theme }) => theme.spacing[2]} 0;
  padding-bottom: env(safe-area-inset-bottom, ${({ theme }) => theme.spacing[2]});

  .nav-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 600px;
    margin: 0 auto;

    .nav-item {
      flex: 1;

      .nav-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({ theme }) => theme.spacing[1]};
        padding: ${({ theme }) => theme.spacing[2]};
        color: ${({ theme }) => theme.colors.text.secondary};
        text-decoration: none;
        font-size: ${({ theme }) => theme.typography.fontSize.xs};
        font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
        transition: all 0.2s ease;
        border-radius: ${({ theme }) => theme.borderRadius.md};
        background: transparent;
        border: none;
        cursor: pointer;
        width: 100%;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
          background: ${({ theme }) => theme.colors.primary}10;
        }

        &--active {
          color: ${({ theme }) => theme.colors.primary};
          font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        }

        .nav-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }

        .nav-label {
          font-size: ${({ theme }) => theme.typography.fontSize.xs};
        }
      }
    }
  }
`;

