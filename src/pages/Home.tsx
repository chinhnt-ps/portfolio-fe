import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/layout/Container';
import { MetaTags } from '@/components/seo/MetaTags';
import { PersonSchema } from '@/components/seo/StructuredData';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

const HomeWrapper = styled.div`
  width: 100%;
`;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[16]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[24]} 0;
  }
`;

export const Home = () => {
  const { t } = useTranslation();

  return (
    <HomeWrapper>
      <MetaTags
        title="Home"
        description={t('hero.subtitle')}
        keywords="Fullstack Developer, ReactJS, TypeScript, Java Spring Boot, Portfolio"
      />
      <PersonSchema />
      
      <Section>
        <Container>
          <Hero />
        </Container>
      </Section>

      <Section>
        <Container>
          <About />
        </Container>
      </Section>

      <Section>
        <Container>
          <Skills />
        </Container>
      </Section>

      <Section>
        <Container>
          <Experience />
        </Container>
      </Section>

      <Section>
        <Container>
          <Projects />
        </Container>
      </Section>

      <Section>
        <Container>
          <Contact />
        </Container>
      </Section>
    </HomeWrapper>
  );
};
