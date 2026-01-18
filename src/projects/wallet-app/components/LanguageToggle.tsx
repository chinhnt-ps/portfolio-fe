import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setLanguage } from '@/store/slices/languageSlice';
import { useTranslation } from 'react-i18next';

/**
 * Language Toggle Component for Wallet App
 * 
 * Toggle giữa tiếng Việt và tiếng Anh
 */
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
    <LanguageToggleWrapper 
      className="language-toggle-wrapper"
      onClick={handleToggle}
      aria-label={`Switch to ${language === 'vi' ? 'English' : 'Tiếng Việt'}`}
    >
      {language === 'vi' ? 'VI' : 'EN'}
    </LanguageToggleWrapper>
  );
};

const LanguageToggleWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }
`;
