import { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { useWalletAppRouter } from '../App';
import { handleApiError } from '../api/walletApi';

/**
 * Login Page
 * 
 * Form đăng nhập với email và password
 */
export const Login = () => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const { navigate } = useWalletAppRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await login({ email, password });
      // Navigate to dashboard on success
      navigate('dashboard');
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginWrapper className="login-wrapper">
      <div className="login-card">
        <h1 className="title">{t('wallet.login.title')}</h1>
        <p className="description">
          {t('wallet.login.description')}
        </p>

        <form className="form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label className="label" htmlFor="email">{t('wallet.login.email')}</label>
            <input
              className="input"
              id="email"
              type="email"
              placeholder={t('wallet.login.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="password">{t('wallet.login.password')}</label>
            <input
              className="input"
              id="password"
              type="password"
              placeholder={t('wallet.login.passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              autoComplete="current-password"
            />
          </div>

          <button className={`login-button ${isLoading ? 'login-button--loading' : ''}`} type="submit" disabled={isLoading}>
            {isLoading ? t('wallet.login.signingIn') : t('wallet.login.signIn')}
          </button>
        </form>
      </div>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing[6]};

  .login-card {
    width: 100%;
    max-width: 400px;
    padding: ${({ theme }) => theme.spacing[8]};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.lg};

    .title {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
      text-align: center;
    }

    .description {
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      color: ${({ theme }) => theme.colors.text.secondary};
      margin: 0 0 ${({ theme }) => theme.spacing[6]} 0;
      text-align: center;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[4]};

      .error-message {
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
        background: ${({ theme }) => theme.colors.error}20;
        border: 1px solid ${({ theme }) => theme.colors.error};
        border-radius: ${({ theme }) => theme.borderRadius.md};
        color: ${({ theme }) => theme.colors.error};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[1]};

        .label {
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
          color: ${({ theme }) => theme.colors.text.primary};
        }

        .input {
          width: 100%;
          padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
          background: ${({ theme }) => theme.colors.background};
          border: 1px solid ${({ theme }) => theme.colors.border};
          border-radius: ${({ theme }) => theme.borderRadius.md};
          font-size: ${({ theme }) => theme.typography.fontSize.base};
          color: ${({ theme }) => theme.colors.text.primary};
          transition: all 0.2s ease;

          &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.primary};
            box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
          }

          &::placeholder {
            color: ${({ theme }) => theme.colors.text.secondary};
            opacity: 0.6;
          }
        }
      }

      .login-button {
        width: 100%;
        padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
        background: ${({ theme }) => theme.colors.primary};
        color: white;
        border: none;
        border-radius: ${({ theme }) => theme.borderRadius.md};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        cursor: pointer;
        opacity: 1;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px ${({ theme }) => theme.colors.primary}40;
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        &--loading {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }
    }
  }
`;

