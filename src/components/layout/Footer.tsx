import styled from 'styled-components';
import { Container } from './Container';

const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing[8]} 0;
  margin-top: ${({ theme }) => theme.spacing[16]};
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  margin: 0;
`;

const Links = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <Copyright>
            &copy; {currentYear} Portfolio. All rights reserved.
          </Copyright>
          <Links>
            <FooterLink href="https://github.com/chinhnt113" target="_blank" rel="noopener noreferrer">
              GitHub
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/chinhnt113/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </FooterLink>
          </Links>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};
