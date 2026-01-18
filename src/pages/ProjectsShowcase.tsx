import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/layout/Container';
import { MetaTags } from '@/components/seo/MetaTags';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getActiveProjects } from '@/data/projects';

const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[16]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[24]} 0;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[12]} 0;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[16]} 0;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const EmptyStateTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const EmptyStateDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ProjectsShowcase = () => {
  const { t } = useTranslation();
  const projects = getActiveProjects();

  return (
    <PageWrapper>
      <MetaTags
        title="Projects"
        description="Portfolio projects showcasing fullstack development skills and experience"
        keywords="Projects, Portfolio, ReactJS, TypeScript, Java Spring Boot, Web Development, Fullstack"
      />
      <Container>
        <AnimatedSection>
          <Title>{t('projects.title')}</Title>
          
          {projects.length === 0 ? (
            <EmptyState>
              <EmptyStateTitle>No projects available</EmptyStateTitle>
              <EmptyStateDescription>
                Projects will be added soon. Please check back later.
              </EmptyStateDescription>
            </EmptyState>
          ) : (
            <ProjectsGrid>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ProjectsGrid>
          )}
        </AnimatedSection>
      </Container>
    </PageWrapper>
  );
};

