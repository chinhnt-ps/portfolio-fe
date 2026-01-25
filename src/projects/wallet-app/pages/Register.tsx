import { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { walletApi, handleApiError } from '../api/walletApi';
import { useWalletAppRouter } from '../App';

/**
 * Register Page
 * 
 * Form đăng ký tài khoản mới với email, password và fullName
 */
export const Register = () => {
  const { t } = useTranslation();
  const { navigate } = useWalletAppRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<{
    score: number;
    feedback: string;
  }>({ score: 0, feedback: '' });

  /**
   * Validate password strength
   */
  const validatePassword = (pwd: string) => {
    let score = 0;
    const feedback: string[] = [];

    if (pwd.length >= 8) {
      score += 1;
    } else {
      feedback.push('Tối thiểu 8 ký tự');
    }

    if (/[a-z]/.test(pwd)) {
      score += 1;
    } else {
      feedback.push('Có chữ thường');
    }

    if (/[A-Z]/.test(pwd)) {
      score += 1;
    } else {
      feedback.push('Có chữ hoa');
    }

    if (/[0-9]/.test(pwd)) {
      score += 1;
    } else {
      feedback.push('Có số');
    }

    return {
      score,
      feedback: feedback.length > 0 ? feedback.join(', ') : 'Mật khẩu mạnh',
    };
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (value.length > 0) {
      setPasswordStrength(validatePassword(value));
    } else {
      setPasswordStrength({ score: 0, feedback: '' });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Validate password strength
    if (passwordStrength.score < 3) {
      setError('Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số');
      return;
    }

    setIsLoading(true);

    try {
      await walletApi.auth.register({
        email,
        password,
        ...(fullName && { fullName }),
      });

      // Đăng ký thành công, chuyển đến màn hình verify email
      // Lưu email vào sessionStorage để dùng ở màn hình verify
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('register_email', email);
      }
      
      navigate('verify-email');
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterWrapper className="register-wrapper">
      <div className="register-card">
        <h1 className="title">{t('wallet.register.title', 'Đăng ký tài khoản')}</h1>
        <p className="description">
          {t('wallet.register.description', 'Tạo tài khoản mới để bắt đầu quản lý chi tiêu')}
        </p>

        <form className="form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label className="label" htmlFor="email">
              {t('wallet.register.email', 'Email')} <span className="required">*</span>
            </label>
            <input
              className="input"
              id="email"
              type="email"
              placeholder={t('wallet.register.emailPlaceholder', 'Nhập email của bạn')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="fullName">
              {t('wallet.register.fullName', 'Họ và tên')} <span className="optional">(Tùy chọn)</span>
            </label>
            <input
              className="input"
              id="fullName"
              type="text"
              placeholder={t('wallet.register.fullNamePlaceholder', 'Nhập họ và tên')}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={isLoading}
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="password">
              {t('wallet.register.password', 'Mật khẩu')} <span className="required">*</span>
            </label>
            <input
              className="input"
              id="password"
              type="password"
              placeholder={t('wallet.register.passwordPlaceholder', 'Nhập mật khẩu')}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              required
              disabled={isLoading}
              autoComplete="new-password"
            />
            {password.length > 0 && (
              <div className="password-strength">
                <div className="strength-bar">
                  <div
                    className={`strength-fill strength-${passwordStrength.score}`}
                    style={{ width: `${(passwordStrength.score / 4) * 100}%` }}
                  />
                </div>
                <span className="strength-feedback">{passwordStrength.feedback}</span>
              </div>
            )}
          </div>

          <button
            className={`register-button ${isLoading ? 'register-button--loading' : ''}`}
            type="submit"
            disabled={isLoading || passwordStrength.score < 3}
          >
            {isLoading
              ? t('wallet.register.registering', 'Đang đăng ký...')
              : t('wallet.register.register', 'Đăng ký')}
          </button>

          <div className="login-link">
            <span>{t('wallet.register.alreadyHaveAccount', 'Đã có tài khoản?')}</span>
            <button
              type="button"
              className="link-button"
              onClick={() => navigate('login')}
              disabled={isLoading}
            >
              {t('wallet.register.signIn', 'Đăng nhập')}
            </button>
          </div>
        </form>
      </div>
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing[6]};

  .register-card {
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

          .required {
            color: ${({ theme }) => theme.colors.error};
          }

          .optional {
            color: ${({ theme }) => theme.colors.text.secondary};
            font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
            font-size: ${({ theme }) => theme.typography.fontSize.xs};
          }
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
          box-sizing: border-box;

          &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.primary};
            box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
          }

          &::placeholder {
            color: ${({ theme }) => theme.colors.text.secondary};
            opacity: 0.6;
          }

          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        }

        .password-strength {
          margin-top: ${({ theme }) => theme.spacing[1]};
          display: flex;
          flex-direction: column;
          gap: ${({ theme }) => theme.spacing[1]};

          .strength-bar {
            width: 100%;
            height: 4px;
            background: ${({ theme }) => theme.colors.border};
            border-radius: 2px;
            overflow: hidden;

            .strength-fill {
              height: 100%;
              transition: width 0.3s ease, background-color 0.3s ease;
              border-radius: 2px;

              &.strength-0,
              &.strength-1 {
                background: ${({ theme }) => theme.colors.error};
              }

              &.strength-2 {
                background: #f59e0b;
              }

              &.strength-3 {
                background: #3b82f6;
              }

              &.strength-4 {
                background: #10b981;
              }
            }
          }

          .strength-feedback {
            font-size: ${({ theme }) => theme.typography.fontSize.xs};
            color: ${({ theme }) => theme.colors.text.secondary};
          }
        }
      }

      .register-button {
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

      .login-link {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${({ theme }) => theme.spacing[2]};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        color: ${({ theme }) => theme.colors.text.secondary};

        .link-button {
          background: none;
          border: none;
          color: ${({ theme }) => theme.colors.primary};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
          cursor: pointer;
          text-decoration: underline;
          padding: 0;

          &:hover:not(:disabled) {
            opacity: 0.8;
          }

          &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
          }
        }
      }
    }
  }
`;
