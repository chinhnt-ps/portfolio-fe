import styled from 'styled-components';
import { Project } from '@/types/project';
import { ShowcaseContent } from './ShowcaseContent';
import { SubAppContent } from './SubAppContent';

const ContentWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing[12]};
`;

interface ProjectContentProps {
  project: Project;
}

export const ProjectContent = ({ project }: ProjectContentProps) => {
  // Sub-app: Render full app (no wrapper padding)
  if (project.type === 'sub-app') {
    return <SubAppContent project={project} />;
  }

  // Showcase/Demo: Render with wrapper
  return (
    <ContentWrapper>
      <ShowcaseContent project={project} />
    </ContentWrapper>
  );
};

