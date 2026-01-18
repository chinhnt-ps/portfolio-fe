import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '@/components/layout/Container';
import { MetaTags } from '@/components/seo/MetaTags';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { getProjectBySlug } from '@/data/projects';
import { ProjectHeader } from '@/components/projects/ProjectHeader';
import { ProjectContent } from '@/components/projects/ProjectContent';
import { NotFound } from '@/pages/NotFound';

const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[16]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[24]} 0;
  }
`;

const SubAppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <NotFound />;
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFound />;
  }

  // Sub-app: Render như một app độc lập với floating back button
  if (project.type === 'sub-app') {
    return (
      <SubAppWrapper>
        <MetaTags
          title={project.name.en}
          description={project.description.en}
          keywords={project.techStack.join(', ')}
        />
        {/* <FloatingBackButton
          onClick={handleBack}
          aria-label="Back to portfolio"
          title="Back to portfolio"
        >
          <Icon icon="Back" size={20} color="currentColor" />
        </FloatingBackButton> */}
        <ProjectContent project={project} />
      </SubAppWrapper>
    );
  }

  // Showcase/Demo: Render với ProjectHeader và layout thông thường
  return (
    <PageWrapper>
      <MetaTags
        title={project.name.en}
        description={project.description.en}
        keywords={project.techStack.join(', ')}
      />
      <Container>
        <AnimatedSection>
          <ProjectHeader project={project} />
          <ProjectContent project={project} />
        </AnimatedSection>
      </Container>
    </PageWrapper>
  );
};

