import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../common/AnimatedSection';

const SkillsWrapper = styled.div``;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[8]} 0;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillCategory = styled.div``;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const SkillTag = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  cursor: default;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}10;
    transform: translateY(-2px);
  }
`;

export const Skills = () => {
  const { t } = useTranslation();

  const languages = ['HTML/CSS', 'JavaScript', 'TypeScript', 'Java', 'Python'];
  const frameworks = ['Spring Boot', 'ReactJS', 'Node.js'];
  const databases = ['MySQL', 'MongoDB'];
  const devops = ['Git', 'Grafana', 'Portainer', 'nginx'];
  const messaging = ['RabbitMQ', 'Kafka'];
  const other = ['English Reading', 'Agile Scrum'];

  return (
    <AnimatedSection>
      <SkillsWrapper>
        <Title>{t('skills.title')}</Title>
        <SkillsGrid>
        <SkillCategory>
          <CategoryTitle>{t('skills.languages')}</CategoryTitle>
          <SkillList>
            {languages.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <CategoryTitle>{t('skills.frameworks')}</CategoryTitle>
          <SkillList>
            {frameworks.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <CategoryTitle>{t('skills.databases')}</CategoryTitle>
          <SkillList>
            {databases.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <CategoryTitle>{t('skills.devops')}</CategoryTitle>
          <SkillList>
            {devops.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <CategoryTitle>{t('skills.messaging')}</CategoryTitle>
          <SkillList>
            {messaging.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <CategoryTitle>{t('skills.other')}</CategoryTitle>
          <SkillList>
            {other.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillList>
        </SkillCategory>
      </SkillsGrid>
    </SkillsWrapper>
    </AnimatedSection>
  );
};

