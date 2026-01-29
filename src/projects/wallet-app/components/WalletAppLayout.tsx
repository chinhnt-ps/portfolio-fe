import { useState, ReactNode } from 'react';
import styled from 'styled-components';
import { WalletAppHeader } from './WalletAppHeader';
import { WalletAppNavigation } from './WalletAppNavigation';
import { SidebarMenu } from './SidebarMenu';
import { customScrollbar } from '../utils/scrollbarStyles';

interface WalletAppLayoutProps {
  children: ReactNode;
}

/**
 * Wallet App Layout
 * 
 * Wrapper cho tất cả wallet-app pages với header, sidebar menu, và navigation
 */
export const WalletAppLayout = ({ children }: WalletAppLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <WalletAppLayoutWrapper className="wallet-app-layout-wrapper">
      <WalletAppHeader onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
      <div className="content-wrapper">
        <SidebarMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
        <main className="main-content">
          {children}
        </main>
      </div>
      <WalletAppNavigation />
    </WalletAppLayoutWrapper>
  );
};

const WalletAppLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  position: relative;

  .content-wrapper {
    display: flex;
    flex: 1;
    margin-top: 72px; /* Header height với spacing */
    margin-bottom: 0;
    position: relative;
    width: 100%;
    padding-bottom: ${({ theme }) => theme.spacing[6]};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-top: 80px;
      padding-bottom: ${({ theme }) => theme.spacing[8]};
    }

    .main-content {
      flex: 1;
      padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
      overflow-y: auto;
      width: 100%;
      min-width: 0;
      max-width: 100%;
      margin: 0 auto;
      ${customScrollbar}

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-top: ${({ theme }) => theme.spacing[8]};
        padding-bottom: ${({ theme }) => theme.spacing[8]};
        padding-left: 280px; /* Space for sidebar */
        width: 100%;
        max-width: calc(1400px + 280px); /* Content width + sidebar space */
        margin: 0 auto;
        /* Căn giữa: padding-right tự động cân bằng */
        padding-right: max(${({ theme }) => theme.spacing[6]}, calc((100vw - 1400px - 280px) / 2));
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        padding-top: ${({ theme }) => theme.spacing[10]};
        padding-bottom: ${({ theme }) => theme.spacing[10]};
        padding-right: max(${({ theme }) => theme.spacing[8]}, calc((100vw - 1400px - 280px) / 2));
      }
    }
  }
`;

