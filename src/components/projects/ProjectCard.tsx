import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Project } from '@/types/project';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;

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

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ThumbnailWrapper = styled.div`
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

  ${CardWrapper}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

const SourceCodeLink = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: auto;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/projects/${project.slug}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  // Get localized text
  const name = project.name[currentLanguage as 'en' | 'vi'] || project.name.en;
  const shortDescription = project.shortDescription[currentLanguage as 'en' | 'vi'] || project.shortDescription.en;

  // Truncate tech stack if too many (show max 5)
  const displayedTechStack = project.techStack.slice(0, 5);
  const hasMoreTech = project.techStack.length > 5;

  return (
    <CardWrapper
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${name} project details`}
    >
      <ThumbnailWrapper>
        <ImageWithFallback
          src={project.thumbnail}
          alt={name}
          fallback="/images/placeholder.jpg"
        />
      </ThumbnailWrapper>

      <ProjectName>{name}</ProjectName>

      <ProjectDescription>{shortDescription}</ProjectDescription>

      {project.techStack.length > 0 && (
        <TechStack>
          {displayedTechStack.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
          {hasMoreTech && (
            <TechTag>+{project.techStack.length - 5}</TechTag>
          )}
        </TechStack>
      )}

      {project.sourceCodeUrl && (
        <SourceCodeLink
          href={project.sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`View ${name} source code on GitHub`}
        >
          View Source Code →
        </SourceCodeLink>
      )}
    </CardWrapper>
  );
};

