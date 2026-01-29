import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleTheme } from '@/store/slices/themeSlice';

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.components.iconButtonSize};
  height: ${({ theme }) => theme.components.iconButtonSize};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }
`;

const Icon = styled.svg`
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
`;

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <ToggleButton 
      onClick={handleToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Icon viewBox="0 0 20 20" fill="none">
          <path
            d="M10 3V1M10 19V17M17 10H19M1 10H3M15.657 15.657L17.071 17.071M2.929 2.929L4.343 4.343M15.657 4.343L17.071 2.929M2.929 17.071L4.343 15.657M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Icon>
      ) : (
        <Icon viewBox="0 0 20 20" fill="none">
          <path
            d="M17.293 13.293C16.3784 14.2074 15.2781 14.9149 14.0726 15.3664C12.8671 15.8179 11.5845 16.0019 10.3058 15.9054C9.02708 15.8089 7.78318 15.4344 6.66061 14.8096C5.53803 14.1848 4.56208 13.3235 3.79772 12.2859C3.03336 11.2483 2.49947 10.0586 2.23519 8.79781C1.9709 7.53705 1.98212 6.23405 2.26796 4.97889C2.5538 3.72373 3.10734 2.54489 3.88462 1.52504C4.6619 0.505189 5.64465 -0.231477 6.75207 -0.778203C7.85949 -1.32493 9.06401 -1.66993 10.306 -1.791C9.56024 0.168859 9.88436 2.29039 11.1822 3.98819C12.4801 5.68599 14.6048 6.78505 16.966 6.83005C15.3076 8.33178 13.7738 9.96019 12.377 11.7C12.0017 12.6004 11.7745 13.5567 11.7047 14.529C11.6349 15.5013 11.7235 16.4776 11.9665 17.421C12.2095 18.3644 12.6036 19.2633 13.133 20.085C12.1154 19.8446 11.1341 19.4281 10.229 18.8501C9.32393 18.2721 8.50708 17.5399 7.81096 16.6801C7.11484 15.8203 6.54846 14.8435 6.133 13.785"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Icon>
      )}
    </ToggleButton>
  );
};


