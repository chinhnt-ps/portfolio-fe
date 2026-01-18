import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from '../common/ScrollToTop';
import { getProjectBySlug } from '@/data/projects';

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
  const location = useLocation();
  
  // Check if current route is a sub-app
  // Path pattern: /projects/:slug where slug matches a sub-app project
  const isSubAppRoute = location.pathname.startsWith('/projects/');
  let shouldHideLayout = false;
  
  if (isSubAppRoute) {
    const slug = location.pathname.split('/projects/')[1];
    const project = getProjectBySlug(slug || '');
    shouldHideLayout = project?.type === 'sub-app';
  }

  // Nếu là sub-app route, không render Header và Footer
  // Không render ScrollToTop trong sub-app vì sub-app có layout riêng
  if (shouldHideLayout) {
    return (
      <LayoutWrapper>
        <Main>
          <Outlet />
        </Main>
      </LayoutWrapper>
    );
  }

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
