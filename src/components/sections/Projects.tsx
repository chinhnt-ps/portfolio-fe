import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../common/AnimatedSection';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { projectImages } from '@/utils/images';

const ProjectsWrapper = styled.div``;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[8]} 0;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: default;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primary}80);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-8px);
    box-shadow: 0 12px 24px ${({ theme }) => theme.colors.primary}20;

    &::before {
      transform: scaleX(1);
    }
  }
`;

const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};

  img {
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const TechTag = styled.span`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}10;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ProjectLink = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: color 0.2s ease, opacity 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const projects = [
  {
    title: 'Sapo GO - Social Channel',
    descriptionKey: 'projects.description.sapoGo',
    imageUrl: projectImages.sapoGo,
    techStack: ['ReactJS', 'Java Spring Boot', 'MongoDB', 'Kafka', 'RabbitMQ', 'Redux', 'Grafana', 'Portainer'],
    githubUrl: null,
    demoUrl: null,
  },
  {
    title: 'Facebook Shopping',
    descriptionKey: 'projects.description.facebookShopping',
    imageUrl: projectImages.facebookShopping,
    techStack: ['TypeScript', 'ReactJS'],
    githubUrl: null,
    demoUrl: null,
  },
  {
    title: 'Sapo Social Mobile',
    descriptionKey: 'projects.description.sapoMobile',
    imageUrl: projectImages.sapoMobile,
    techStack: ['React Native', 'TypeScript'],
    githubUrl: null,
    demoUrl: null,
  },
  {
    title: 'Hospital Website Application',
    descriptionKey: 'projects.description.hospital',
    imageUrl: projectImages.hospital,
    techStack: ['ReactJS', 'Node.js', 'Python', 'MongoDB', 'nginx'],
    githubUrl: null,
    demoUrl: null,
  },
];

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection>
      <ProjectsWrapper>
        <Title>{t('projects.title')}</Title>
        <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImageWrapper>
              <ImageWithFallback 
                src={project.imageUrl} 
                alt={project.title}
              />
            </ProjectImageWrapper>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{t(project.descriptionKey)}</ProjectDescription>
            <TechStack>
              {project.techStack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechStack>
            {project.githubUrl || project.demoUrl ? (
              <ProjectLinks>
                {project.githubUrl && (
                  <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    {t('projects.viewGithub')}
                  </ProjectLink>
                )}
                {project.demoUrl && (
                  <ProjectLink href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    {t('projects.viewDemo')}
                  </ProjectLink>
                )}
              </ProjectLinks>
            ) : null}
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsWrapper>
    </AnimatedSection>
  );
};

