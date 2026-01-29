import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useWalletAppRouter } from '../App';
import { Icons, Icon } from './icons';
import { customScrollbar } from '../utils/scrollbarStyles';

interface MenuItemConfig {
  route: string;
  icon: keyof typeof Icons;
  label: string;
  section?: string;
}

interface SidebarMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Sidebar Menu
 * 
 * Navigation menu cho wallet-app với tất cả các pages
 */
export const SidebarMenu = ({ isOpen, onToggle }: SidebarMenuProps) => {
  const { t } = useTranslation();
  const { currentRoute, navigate } = useWalletAppRouter();

  const menuItems: MenuItemConfig[] = [
    { route: 'dashboard', icon: 'Dashboard', label: t('wallet.navigation.dashboard'), section: 'main' },
    { route: 'transactions', icon: 'Transactions', label: t('wallet.navigation.transactions'), section: 'main' },
    { route: 'accounts', icon: 'Accounts', label: t('wallet.navigation.accounts'), section: 'main' },
    { route: 'categories', icon: 'Categories', label: t('wallet.navigation.categories'), section: 'main' },
    { route: 'budgets', icon: 'Budgets', label: t('wallet.navigation.budgets'), section: 'main' },
    { route: 'receivables', icon: 'Receivables', label: t('wallet.navigation.receivables'), section: 'debts' },
    { route: 'liabilities', icon: 'Liabilities', label: t('wallet.navigation.liabilities'), section: 'debts' },
    { route: 'assets', icon: 'Assets', label: t('wallet.navigation.assets'), section: 'assets' },
    { route: 'settings', icon: 'Settings', label: t('wallet.navigation.settings'), section: 'settings' },
  ];

  const handleNavigate = (route: string) => {
    navigate(route as any);
    onToggle(); // Close menu on mobile after navigation
  };

  const groupedItems = menuItems.reduce((acc, item) => {
    const section = item.section || 'other';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(item);
    return acc;
  }, {} as Record<string, MenuItemConfig[]>);

  const sectionLabels: Record<string, string> = {
    main: t('wallet.sidebar.main'),
    debts: t('wallet.sidebar.debts'),
    assets: t('wallet.sidebar.assets'),
    settings: t('wallet.sidebar.settings'),
  };

  return (
    <>
      <Overlay className={`overlay ${isOpen ? 'overlay--open' : ''}`} onClick={onToggle} />
      <SidebarMenuWrapper className={`sidebar-menu-wrapper ${isOpen ? 'sidebar-menu-wrapper--open' : ''}`}>
        <ul className="menu-list">
          {Object.entries(groupedItems).map(([section, items]) => (
            <div key={section}>
              <div className="menu-section">{sectionLabels[section] || section}</div>
              {items.map((item) => (
                <li key={item.route} className="menu-item">
                  <button
                    className={`menu-link ${currentRoute === item.route ? 'menu-link--active' : ''}`}
                    onClick={() => handleNavigate(item.route)}
                  >
                    <div className="menu-icon-wrapper">
                      <Icon icon={item.icon} size={20} color="currentColor" />
                    </div>
                    <span className="menu-label">{item.label}</span>
                  </button>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </SidebarMenuWrapper>
    </>
  );
};

/**
 * Menu Toggle Button
 * 
 * Button để mở/đóng sidebar menu (mobile)
 */
export const MenuToggleButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <MenuToggleButtonWrapper className="menu-toggle-button-wrapper" onClick={onClick} aria-label="Toggle menu">
      <Icon icon="Menu" size={20} color="currentColor" />
    </MenuToggleButtonWrapper>
  );
};

const SidebarMenuWrapper = styled.aside`
  position: fixed;
  top: 72px;
  left: 0;
  bottom: 0;
  width: 280px;
  max-width: 280px;
  background: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 90;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
  box-shadow: none;
  ${customScrollbar}

  &--open {
    transform: translateX(0);
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 0;
    transform: translateX(0);
    box-shadow: none;
    padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[4]};
  }

  .menu-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[1]};

    .menu-item {
      /* No specific styles needed */

      .menu-link {
        width: 100%;
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing[3]};
        padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
        background: transparent;
        border: none;
        border-radius: ${({ theme }) => theme.borderRadius.lg};
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
        cursor: pointer;
        text-align: left;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          background: ${({ theme }) => theme.colors.primary};
          border-radius: 0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md} 0;
          transition: height 0.2s ease;
        }

        &:hover {
          background: ${({ theme }) => 
            theme.colors.background === '#0a0a0a' 
              ? 'rgba(14, 165, 233, 0.1)' 
              : 'rgba(14, 165, 233, 0.05)'};
          color: ${({ theme }) => theme.colors.primary};
          transform: translateX(2px);
        }

        &:active {
          transform: translateX(0);
        }

        &--active {
          background: ${({ theme }) => 
            theme.colors.background === '#0a0a0a' 
              ? 'rgba(14, 165, 233, 0.15)' 
              : 'rgba(14, 165, 233, 0.1)'};
          color: ${({ theme }) => theme.colors.primary};
          font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

          &::before {
            height: 24px;
          }
        }

        .menu-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .menu-label {
          flex: 1;
        }
      }
    }

    .menu-section {
      margin-top: ${({ theme }) => theme.spacing[3]};
      margin-bottom: ${({ theme }) => theme.spacing[3]};
      padding: 0 ${({ theme }) => theme.spacing[4]};
      font-size: ${({ theme }) => theme.typography.fontSize.xs};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      color: ${({ theme }) => theme.colors.text.muted};
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 85;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &--open {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MenuToggleButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
