import { ReactNode } from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

interface ProjectsGridProps {
  children: ReactNode;
  className?: string;
}

export const ProjectsGrid = ({ children, className }: ProjectsGridProps) => {
  return (
    <GridWrapper className={className}>
      {children}
    </GridWrapper>
  );
};

