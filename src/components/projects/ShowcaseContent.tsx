import styled from 'styled-components';
import { Project } from '@/types/project';

const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[8]} 0;
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[6]} 0;
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

const SectionContent = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;

  p {
    margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const InfoLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InfoValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
`;

interface ShowcaseContentProps {
  project: Project;
}

export const ShowcaseContent = ({ project }: ShowcaseContentProps) => {

  return (
    <ContentWrapper>
      <Section>
        <SectionTitle>Project Overview</SectionTitle>
        <SectionContent>
          <p>
            This is a showcase project demonstrating various technologies and
            development practices. The project highlights key features and
            technical implementations.
          </p>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Project Information</SectionTitle>
        <InfoGrid>
          <InfoItem>
            <InfoLabel>Status</InfoLabel>
            <InfoValue>
              {project.status === 'active' ? 'Active' : 
               project.status === 'coming-soon' ? 'Coming Soon' : 
               'Archived'}
            </InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Created</InfoLabel>
            <InfoValue>
              {new Date(project.createdAt).toLocaleDateString()}
            </InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Last Updated</InfoLabel>
            <InfoValue>
              {new Date(project.updatedAt).toLocaleDateString()}
            </InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Type</InfoLabel>
            <InfoValue>
              {project.type === 'showcase' ? 'Showcase' :
               project.type === 'demo' ? 'Demo' :
               'Sub-Application'}
            </InfoValue>
          </InfoItem>
        </InfoGrid>
      </Section>
    </ContentWrapper>
  );
};

