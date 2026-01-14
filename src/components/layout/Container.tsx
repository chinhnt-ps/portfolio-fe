import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
}

const StyledContainer = styled.div<{ maxWidth: string }>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing[8]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.spacing[12]};
  }
`;

export const Container = ({ children, maxWidth = '1280px' }: ContainerProps) => {
  return <StyledContainer maxWidth={maxWidth}>{children}</StyledContainer>;
};


