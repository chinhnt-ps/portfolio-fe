import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../common/AnimatedSection';

const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => theme.spacing[16]} 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.primary}15 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[24]} 0;
    gap: ${({ theme }) => theme.spacing[10]};
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
  max-width: 800px;
`;

const Greeting = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.text.primary} 0%, ${({ theme }) => theme.colors.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['6xl']};
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

const Introduction = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 700px;
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 14px 0 ${({ theme }) => theme.colors.primary}40;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px 0 ${({ theme }) => theme.colors.primary}60;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}40;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[8]};
  margin-top: ${({ theme }) => theme.spacing[12]};
  padding-top: ${({ theme }) => theme.spacing[12]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  max-width: 600px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection>
      <HeroWrapper>
        <Content>
          <Greeting>👋 {t('hero.greeting', { defaultValue: 'Hello, I am' })}</Greeting>
          <Name>{t('hero.name')}</Name>
          <Title>{t('hero.title')}</Title>
          <Introduction>{t('hero.subtitle')}</Introduction>
          
          <CTAButtons>
            <PrimaryButton to="/projects">
              {t('hero.cta')}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </PrimaryButton>
            <SecondaryButton to="/contact">
              {t('hero.contact', { defaultValue: 'Get in Touch' })}
            </SecondaryButton>
          </CTAButtons>

          <Stats>
            <StatItem>
              <StatValue>3+</StatValue>
              <StatLabel>{t('hero.stats.years', { defaultValue: 'Years Experience' })}</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>10+</StatValue>
              <StatLabel>{t('hero.stats.projects', { defaultValue: 'Projects' })}</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>5+</StatValue>
              <StatLabel>{t('hero.stats.technologies', { defaultValue: 'Technologies' })}</StatLabel>
            </StatItem>
          </Stats>
        </Content>
      </HeroWrapper>
    </AnimatedSection>
  );
};

