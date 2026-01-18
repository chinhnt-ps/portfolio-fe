import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Project } from '@/types/project';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';

const HeaderWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[12]};
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 400px;
  }
`;

const StyledImage = styled(ImageWithFallback)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin: 0 0 ${({ theme }) => theme.spacing[8]} 0;
`;

const TechStackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const TechTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
`;

const FeaturesWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const FeaturesTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.primary}40;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  &.secondary {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.primary}10;
    }
  }
`;

interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'vi';

  return (
    <HeaderWrapper>
      <ThumbnailWrapper>
        <StyledImage
          src={project.thumbnail}
          alt={project.name[currentLang]}
        />
      </ThumbnailWrapper>

      <Title>{project.name[currentLang]}</Title>

      <Description>{project.description[currentLang]}</Description>

      {project.techStack && project.techStack.length > 0 && (
        <TechStackWrapper>
          {project.techStack.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </TechStackWrapper>
      )}

      {project.features && project.features.length > 0 && (
        <FeaturesWrapper>
          <FeaturesTitle>Key Features</FeaturesTitle>
          <FeaturesList>
            {project.features.map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
          </FeaturesList>
        </FeaturesWrapper>
      )}

      <LinksWrapper>
        {project.sourceCodeUrl && (
          <LinkButton
            href={project.sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
          >
            <span>📦</span>
            Source Code
          </LinkButton>
        )}
        {project.demoUrl && (
          <LinkButton
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary"
            aria-label="View live demo"
          >
            <span>🚀</span>
            Live Demo
          </LinkButton>
        )}
      </LinksWrapper>
    </HeaderWrapper>
  );
};

