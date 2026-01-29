import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setLanguage } from '@/store/slices/languageSlice';
import { useTranslation } from 'react-i18next';

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.components.iconButtonSize};
  height: ${({ theme }) => theme.components.iconButtonSize};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
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

export const LanguageToggle = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language.current);
  const { i18n } = useTranslation();

  const handleToggle = () => {
    const newLanguage = language === 'vi' ? 'en' : 'vi';
    dispatch(setLanguage(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  return (
    <ToggleButton 
      onClick={handleToggle}
      aria-label={`Switch to ${language === 'vi' ? 'English' : 'Tiếng Việt'}`}
    >
      {language === 'vi' ? 'EN' : 'VI'}
    </ToggleButton>
  );
};


