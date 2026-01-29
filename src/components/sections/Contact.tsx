import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../common/AnimatedSection';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[6]};
  width: 100%;
  max-width: 600px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContactItem = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
`;

const ContactLabel = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.muted};
  margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
`;

const ContactValue = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.components.iconButtonSize};
  height: ${({ theme }) => theme.components.iconButtonSize};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ theme }) => theme.components.buttonHeight};
  padding: ${({ theme }) => theme.components.buttonPaddingY} ${({ theme }) => theme.components.buttonPaddingX};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition: opacity 0.2s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection>
      <ContactWrapper>
        <Title>{t('contact.title')}</Title>
        <Subtitle>{t('contact.getInTouch')}</Subtitle>

      <ContactInfo>
        <ContactItem>
          <ContactLabel>{t('contact.email')}</ContactLabel>
          <ContactValue href="mailto:nguyenthechinhk25@gmail.com">
            nguyenthechinhk25@gmail.com
          </ContactValue>
        </ContactItem>

        <ContactItem>
          <ContactLabel>{t('contact.phone')}</ContactLabel>
          <ContactValue href="tel:0566113369">0566113369</ContactValue>
        </ContactItem>

        <ContactItem>
          <ContactLabel>{t('contact.location')}</ContactLabel>
          <ContactValue>Hà Nội</ContactValue>
        </ContactItem>

        <ContactItem>
          <ContactLabel>{t('contact.facebook')}</ContactLabel>
          <ContactValue 
            href="https://facebook.com/min.bro.35" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            facebook.com/min.bro.35
          </ContactValue>
        </ContactItem>
      </ContactInfo>

      <SocialLinks>
        <SocialLink href="https://github.com/chinhnt113" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/chinhnt113/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.056 2.063-2.056 1.14 0 2.064.918 2.064 2.056 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </SocialLink>
      </SocialLinks>

      <CVButton href="/cv.pdf" download>
        {t('contact.downloadCV')}
      </CVButton>
    </ContactWrapper>
    </AnimatedSection>
  );
};

