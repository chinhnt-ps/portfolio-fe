import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/layout/Container';
import { MetaTags } from '@/components/seo/MetaTags';
import { Projects as ProjectsSection } from '@/components/sections/Projects';

const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[16]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[24]} 0;
  }
`;

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <MetaTags
        title="Projects"
        description="Portfolio projects showcasing fullstack development skills"
        keywords="Projects, Portfolio, ReactJS, Java Spring Boot, Web Development"
      />
      <Container>
        <ProjectsSection />
      </Container>
    </PageWrapper>
  );
};
