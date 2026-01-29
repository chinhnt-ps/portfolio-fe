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

// Dùng Firebase Storage URL (firebasestorage.googleapis.com) để áp dụng Firebase Rules; URL GCS (storage.googleapis.com) không dùng Rules.
const AVATAR_URL =
  'https://firebasestorage.googleapis.com/v0/b/chinhnt-ps.firebasestorage.app/o/uploads%2Fa9fa3867d97f4a4b87beba53e68126bf-1769702403691.jpg?alt=media';

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 3px solid ${({ theme }) => theme.colors.primary}40;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  .avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0;
  }
`;

const Goals = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
`;

const GoalItem = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
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
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
`;

const EducationItem = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
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
        <ProfileImage>
          <img src={AVATAR_URL} alt={t('about.avatarAlt')} className="avatar-img" />
        </ProfileImage>
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

