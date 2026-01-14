import styled from 'styled-components';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

const AnimatedWrapper = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateY(${({ $isVisible }) => ($isVisible ? '0' : '20px')});
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

interface AnimatedSectionProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export const AnimatedSection = ({ 
  children, 
  threshold = 0.1,
  rootMargin = '0px'
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ 
    threshold, 
    rootMargin,
    triggerOnce: true 
  });

  return (
    <AnimatedWrapper ref={elementRef} $isVisible={isVisible}>
      {children}
    </AnimatedWrapper>
  );
};


