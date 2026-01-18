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
      ${customScrollbar}

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
        margin-left: 280px;
        width: calc(100% - 280px);
        max-width: 1400px;
        margin-left: 280px;
        margin-right: auto;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        padding: ${({ theme }) => theme.spacing[10]} ${({ theme }) => theme.spacing[8]};
      }
    }
  }
`;

