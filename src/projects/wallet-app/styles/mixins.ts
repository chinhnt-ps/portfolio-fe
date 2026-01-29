import { css } from 'styled-components';

/**
 * Styled-Components Mixins
 * 
 * Các patterns CSS dùng chung trong wallet-app
 * Import và sử dụng với ${mixinName}
 */

/**
 * Card base styling
 * Used for: Account cards, Asset cards, Transaction cards, etc.
 */
export const cardBase = css`
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) =>
    theme.colors.background === '#0a0a0a'
      ? '0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)'
      : '0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.05)'};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[8]};
  }
`;

/**
 * Card hover effect
 */
export const cardHover = css`
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.primary}80
    );
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    border-color: ${({ theme }) =>
      theme.colors.background === '#0a0a0a'
        ? 'rgba(14, 165, 233, 0.3)'
        : 'rgba(14, 165, 233, 0.2)'};
    box-shadow: ${({ theme }) =>
      theme.colors.background === '#0a0a0a'
        ? '0 4px 16px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)'
        : '0 4px 16px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.08)'};
    transform: translateY(-2px);

    &::before {
      opacity: 1;
    }
  }
`;

/**
 * Form group styling
 * Used for: Form fields with label
 */
export const formGroup = css`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};

  label {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  input,
  textarea,
  select {
    padding: ${({ theme }) => theme.spacing[3]};
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    color: ${({ theme }) => theme.colors.text.primary};
    transition: border-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.secondary};
      opacity: 0.7;
    }
  }
`;

/**
 * Form row - multiple fields in a row
 */
export const formRow = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
`;

/**
 * Button group styling
 * Used for: Form actions, modal footers
 */
export const buttonGroup = css`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

/**
 * Grid layout for cards
 */
export const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
`;

/**
 * Badge/tag styling
 */
export const badge = css`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) =>
    theme.colors.background === '#0a0a0a'
      ? 'rgba(14, 165, 233, 0.2)'
      : 'rgba(14, 165, 233, 0.1)'};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

/**
 * Section title styling
 */
export const sectionTitle = css`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[4]};
`;

/**
 * Amount display styling
 */
export const amountDisplay = css`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  font-variant-numeric: tabular-nums;
`;

/**
 * Amount positive (income/receivable)
 */
export const amountPositive = css`
  color: ${({ theme }) => theme.colors.success || '#10b981'};
`;

/**
 * Amount negative (expense/liability)
 */
export const amountNegative = css`
  color: ${({ theme }) => theme.colors.error || '#ef4444'};
`;

/**
 * Icon button styling
 */
export const iconButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.colors.background === '#0a0a0a'
        ? 'rgba(255, 255, 255, 0.05)'
        : 'rgba(0, 0, 0, 0.05)'};
    color: ${({ theme }) => theme.colors.text.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

/**
 * Action button group (edit/delete buttons in cards)
 */
export const cardActions = css`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

/**
 * Modal/Dialog content styling
 */
export const modalContent = css`
  padding: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[8]};
  }
`;

/**
 * Page wrapper styling
 */
export const pageWrapper = css`
  padding: ${({ theme }) => theme.spacing[4]};
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[6]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[8]};
  }
`;
