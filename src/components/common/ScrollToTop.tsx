import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScrollButton = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  bottom: ${({ theme }) => theme?.spacing?.[6] || '24px'};
  right: ${({ theme }) => theme?.spacing?.[6] || '24px'};
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme?.colors?.primary || '#0ea5e9'};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme?.borderRadius?.full || '50%'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: ${({ theme }) => theme?.shadows?.lg || '0 4px 6px rgba(0, 0, 0, 0.1)'};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme?.shadows?.lg || '0 4px 6px rgba(0, 0, 0, 0.1)'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => (theme?.colors?.primary || '#0ea5e9')}40;
  }
`;

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollButton 
      $isVisible={isVisible} 
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 15V5M5 10L10 5L15 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ScrollButton>
  );
};


