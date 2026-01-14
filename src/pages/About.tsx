import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/layout/Container';
import { MetaTags } from '@/components/seo/MetaTags';
import { About as AboutSection } from '@/components/sections/About';

const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[16]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[24]} 0;
  }
`;

export const About = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <MetaTags
        title="About"
        description={t('about.description')}
        keywords="About, Fullstack Developer, Experience, Education"
      />
      <Container>
        <AboutSection />
      </Container>
    </PageWrapper>
  );
};
