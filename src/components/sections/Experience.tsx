import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../common/AnimatedSection';

const ExperienceWrapper = styled.div``;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[8]} 0;
  text-align: center;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing[8]};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing[10]};
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &::before {
    content: '';
    position: absolute;
    left: -${({ theme }) => theme.spacing[8]};
    top: ${({ theme }) => theme.spacing[6]};
    width: 16px;
    height: 16px;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background: ${({ theme }) => theme.colors.primary};
    border: 3px solid ${({ theme }) => theme.colors.background};
    margin-left: -8px;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary}20;
  }
`;

const Company = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const CompanyIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}20, ${({ theme }) => theme.colors.primary}10);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

const Period = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const Role = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const Description = styled.ul`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
  padding: 0;
  list-style: none;
`;

const DescriptionItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  padding-left: ${({ theme }) => theme.spacing[1]};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 2px;
  }
`;

const ProductLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding-top: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ProductLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}dd;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const experiences = [
  {
    company: 'Sapo Technology JSC',
    period: '2022 - 2026',
    role: 'Fullstack Developer - Sapo GO/ Chat OmniAI',
    description: [
      'Phát triển và bảo trì tính năng Social Channel hỗ trợ bán hàng trên Facebook, Instagram, Zalo và TikTok',
      'Sử dụng Java Spring Boot, ReactJS, Redux, Kafka, RabbitMQ, MongoDB',
      'Thực hiện nâng cấp phiên bản Node từ 14 lên 18 và React từ 16 lên 18',
      'Tích hợp Sentry để theo dõi và xử lý lỗi thời gian thực',
    ],
    links: [
      {
        label: 'Chat OmniAI',
        url: 'https://www.sapo.vn/chat-da-kenh.html',
      },
    ],
  },
  {
    company: 'Sapo Technology JSC',
    period: '2024 - 2025',
    role: 'Front-end Developer - Facebook Shopping',
    description: [
      'Phát triển giao diện cho tính năng Facebook Catalog và Facebook Live Shopping',
      'Sử dụng TypeScript để tích hợp giao diện vào hệ thống Sapo',
    ],
    links: [
      {
        label: 'Facebook Shopping',
        url: 'https://www.sapo.vn/facebook-live-shopping.html',
      },
    ],
  },
  {
    company: 'Sapo Technology JSC',
    period: '01/2025 - 06/2025',
    role: 'Front-end Developer - Sapo Social Mobile',
    description: [
      'Sử dụng React Native để xây dựng giao diện và tích hợp API cho ứng dụng di động',
    ],
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.sapo.social.omniai&hl=en',
      },
      {
        label: 'App Store',
        url: 'https://apps.apple.com/vn/app/sapo-chat-omniai/id6743422741?l=vi',
      },
    ],
  },
];

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection>
      <ExperienceWrapper>
        <Title>{t('experience.title')}</Title>
        <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <Company>
              <CompanyIcon>🏢</CompanyIcon>
              {exp.company}
            </Company>
            <Period>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 0C3.134 0 0 3.134 0 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 12.6c-3.09 0-5.6-2.51-5.6-5.6S3.91 1.4 7 1.4s5.6 2.51 5.6 5.6-2.51 5.6-5.6 5.6z" fill="currentColor"/>
                <path d="M7 3.5v3.5h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {exp.period}
            </Period>
            <Role>{exp.role}</Role>
            <Description>
              {exp.description.map((item, idx) => (
                <DescriptionItem key={idx}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '8px', flexShrink: 0 }}>
                    <path d="M8 0L10.163 5.674L16 6.292L12 10.326L12.944 16L8 13.674L3.056 16L4 10.326L0 6.292L5.837 5.674L8 0Z" fill="currentColor"/>
                  </svg>
                  {item}
                </DescriptionItem>
              ))}
            </Description>
            {exp.links && exp.links.length > 0 && (
              <ProductLinks>
                {exp.links.map((link, linkIdx) => (
                  <ProductLink
                    key={linkIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V6M14 2L9 7M14 2H10M14 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {link.label}
                  </ProductLink>
                ))}
              </ProductLinks>
            )}
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceWrapper>
    </AnimatedSection>
  );
};

