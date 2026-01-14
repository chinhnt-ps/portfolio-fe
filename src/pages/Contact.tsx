import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/layout/Container';
import { MetaTags } from '@/components/seo/MetaTags';
import { Contact as ContactSection } from '@/components/sections/Contact';

const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[16]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[24]} 0;
  }
`;

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <MetaTags
        title="Contact"
        description="Get in touch with Nguyen The Chinh - Fullstack Developer"
        keywords="Contact, Email, Phone, LinkedIn, GitHub"
      />
      <Container>
        <ContactSection />
      </Container>
    </PageWrapper>
  );
};
