import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './Container';
import { ThemeToggle } from '../common/ThemeToggle';
import { LanguageToggle } from '../common/LanguageToggle';
import { useTranslation } from 'react-i18next';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(10px);
  background: ${({ theme }) => 
    theme.colors.background === '#0a0a0a' 
      ? 'rgba(10, 10, 10, 0.8)' 
      : 'rgba(255, 255, 255, 0.8)'
  };
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavList = styled.ul`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.primary : theme.colors.text.secondary
  };
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme, $isActive }) => 
    $isActive ? theme.typography.fontWeight.medium : theme.typography.fontWeight.normal
  };
  transition: color 0.2s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ $isActive, theme }) => 
    $isActive && `
      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        height: 2px;
        background: ${theme.colors.primary};
      }
    `
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.components.iconButtonSize};
  height: ${({ theme }) => theme.components.iconButtonSize};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo to="/">Portfolio</Logo>
          
          <NavList>
            {navItems.map((item) => (
              <NavItem key={item.path}>
                <NavLink 
                  to={item.path} 
                  $isActive={location.pathname === item.path}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>

          <Controls>
            <LanguageToggle />
            <ThemeToggle />
            <MobileMenuButton aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </MobileMenuButton>
          </Controls>
        </Nav>
      </Container>
    </StyledHeader>
  );
};
