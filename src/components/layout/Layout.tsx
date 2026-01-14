import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from '../common/ScrollToTop';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
`;

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <ScrollToTop />
    </LayoutWrapper>
  );
};
