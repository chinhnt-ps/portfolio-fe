import { useState } from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const StyledImage = styled.img<{ $loaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

export const ImageWithFallback = ({ 
  src, 
  alt, 
  fallback = '/images/placeholder.jpg',
  className 
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc !== fallback) {
      setImgSrc(fallback);
      setHasError(true);
    }
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  if (hasError && imgSrc === fallback) {
    return (
      <ImageWrapper className={className}>
        <span>Image not available</span>
      </ImageWrapper>
    );
  }

  return (
    <StyledImage
      src={imgSrc}
      alt={alt}
      onError={handleError}
      onLoad={handleLoad}
      $loaded={loaded}
      className={className}
      loading="lazy"
    />
  );
};

