import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../common/AnimatedSection';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[12]};
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[6]} 0;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}30, ${({ theme }) => theme.colors.primary}10);
  border: 3px solid ${({ theme }) => theme.colors.primary}40;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, ${({ theme }) => theme.colors.primary}20, transparent);
    animation: rotate 3s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0;
  }
`;

const Goals = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
`;

const GoalItem = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0 0 ${({ theme }) => theme.spacing[3]} 0;
`;

const EducationSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing[8]};
  padding-top: ${({ theme }) => theme.spacing[8]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
`;

const EducationItem = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
`;

const CertificationsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
`;

export const About = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection>
      <AboutWrapper>
        <ProfileImage />
        <Content>
          <Title>{t('about.title')}</Title>
          <Description>{t('about.description')}</Description>
          
          <Goals>
            <GoalItem>{t('about.shortTermGoal')}</GoalItem>
            <GoalItem>{t('about.longTermGoal')}</GoalItem>
          </Goals>

          <EducationSection>
            <SectionTitle>{t('about.education.title')}</SectionTitle>
            <EducationItem>{t('about.education.university')}</EducationItem>
            <EducationItem>{t('about.education.program')}</EducationItem>
            <EducationItem>{t('about.education.degree')}</EducationItem>
          </EducationSection>

          <CertificationsSection>
            <SectionTitle>{t('about.certifications.title')}</SectionTitle>
            <EducationItem>{t('about.certifications.toeic')}</EducationItem>
          </CertificationsSection>
        </Content>
      </AboutWrapper>
    </AnimatedSection>
  );
};

