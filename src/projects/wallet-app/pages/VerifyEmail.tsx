import { useState, FormEvent, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { walletApi, handleApiError } from '../api/walletApi';
import { useWalletAppRouter } from '../App';

/**
 * Verify Email Page
 * 
 * Form xác nhận email với mã 6 chữ số
 */
export const VerifyEmail = () => {
  const { t } = useTranslation();
  const { navigate } = useWalletAppRouter();
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  // Lấy email từ sessionStorage hoặc query param
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ưu tiên lấy từ sessionStorage (sau khi đăng ký)
      const storedEmail = sessionStorage.getItem('register_email');
      if (storedEmail) {
        setEmail(storedEmail);
      } else {
        // Fallback: lấy từ query param
        const params = new URLSearchParams(window.location.search);
        const emailParam = params.get('email');
        if (emailParam) {
          setEmail(emailParam);
        }
      }
    }
  }, []);

  // Countdown cho resend
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => {
        setResendCooldown(resendCooldown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleCodeChange = (value: string) => {
    // Chỉ cho phép nhập số và tối đa 6 ký tự
    const numericValue = value.replace(/\D/g, '').slice(0, 6);
    setVerificationCode(numericValue);
    setError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (verificationCode.length !== 6) {
      setError('Vui lòng nhập đầy đủ 6 chữ số');
      return;
    }

    if (!email) {
      setError('Email không hợp lệ');
      return;
    }

    setIsLoading(true);

    try {
      const response = await walletApi.auth.verifyEmail({
        email,
        verificationCode,
      });

      // Xác nhận thành công
      // Clear email từ sessionStorage
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('register_email');
      }
      
      // Nếu có token trong response, token đã được lưu vào storage bởi verifyEmail API
      // Reload page để AuthContext tự động check token và set user
      if (response.accessToken && response.refreshToken) {
        // Reload để AuthContext tự động check token
        window.location.reload();
      } else {
        // Không có token, chuyển đến màn hình đăng nhập
        navigate('login');
      }
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
      // Reset mã nếu lỗi
      setVerificationCode('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!email || resendCooldown > 0) {
      return;
    }

    setIsResending(true);
    setError(null);

    try {
      // Gọi API resend code (nếu có) hoặc đăng ký lại
      // Tạm thời dùng register lại để gửi mã mới
      await walletApi.auth.register({
        email,
        password: 'temp', // Backend sẽ không tạo user mới nếu đã tồn tại
        fullName: '',
      });
      
      // Set cooldown 60 giây
      setResendCooldown(60);
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsResending(false);
    }
  };

  return (
    <VerifyEmailWrapper className="verify-email-wrapper">
      <div className="verify-card">
        <h1 className="title">{t('wallet.verifyEmail.title', 'Xác nhận email')}</h1>
        <p className="description">
          {t(
            'wallet.verifyEmail.description',
            'Chúng tôi đã gửi mã xác nhận 6 chữ số đến email của bạn. Vui lòng kiểm tra và nhập mã để kích hoạt tài khoản.'
          )}
        </p>

        {email && (
          <div className="email-display">
            <span className="email-label">{t('wallet.verifyEmail.email', 'Email:')}</span>
            <span className="email-value">{email}</span>
          </div>
        )}

        <form className="form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label className="label" htmlFor="verificationCode">
              {t('wallet.verifyEmail.code', 'Mã xác nhận')} <span className="required">*</span>
            </label>
            <input
              className="input code-input"
              id="verificationCode"
              type="text"
              inputMode="numeric"
              placeholder={t('wallet.verifyEmail.codePlaceholder', 'Nhập 6 chữ số')}
              value={verificationCode}
              onChange={(e) => handleCodeChange(e.target.value)}
              required
              disabled={isLoading}
              autoComplete="one-time-code"
              maxLength={6}
            />
            <div className="code-hint">
              {verificationCode.length}/6
            </div>
          </div>

          <button
            className={`verify-button ${isLoading ? 'verify-button--loading' : ''}`}
            type="submit"
            disabled={isLoading || verificationCode.length !== 6}
          >
            {isLoading
              ? t('wallet.verifyEmail.verifying', 'Đang xác nhận...')
              : t('wallet.verifyEmail.verify', 'Xác nhận')}
          </button>

          <div className="resend-section">
            <span className="resend-text">
              {t('wallet.verifyEmail.notReceived', 'Không nhận được mã?')}
            </span>
            {resendCooldown > 0 ? (
              <span className="cooldown-text">
                {t('wallet.verifyEmail.resendIn', 'Gửi lại sau {{seconds}}s', {
                  seconds: resendCooldown,
                })}
              </span>
            ) : (
              <button
                type="button"
                className="resend-button"
                onClick={handleResendCode}
                disabled={isResending || !email}
              >
                {isResending
                  ? t('wallet.verifyEmail.resending', 'Đang gửi...')
                  : t('wallet.verifyEmail.resend', 'Gửi lại mã')}
              </button>
            )}
          </div>

          <div className="back-link">
            <button
              type="button"
              className="link-button"
              onClick={() => navigate('login')}
              disabled={isLoading}
            >
              {t('wallet.verifyEmail.backToLogin', '← Quay lại đăng nhập')}
            </button>
          </div>
        </form>
      </div>
    </VerifyEmailWrapper>
  );
};

const VerifyEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing[6]};

  .verify-card {
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
      margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
      text-align: center;
      line-height: 1.5;
    }

    .email-display {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${({ theme }) => theme.spacing[2]};
      padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
      background: ${({ theme }) => theme.colors.background};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      margin-bottom: ${({ theme }) => theme.spacing[4]};

      .email-label {
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        color: ${({ theme }) => theme.colors.text.secondary};
      }

      .email-value {
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
        color: ${({ theme }) => theme.colors.text.primary};
      }
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
        }

        .code-input {
          width: 100%;
          padding: ${({ theme }) => theme.spacing[4]};
          background: ${({ theme }) => theme.colors.background};
          border: 2px solid ${({ theme }) => theme.colors.border};
          border-radius: ${({ theme }) => theme.borderRadius.md};
          font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
          font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
          color: ${({ theme }) => theme.colors.text.primary};
          text-align: center;
          letter-spacing: 0.5em;
          transition: all 0.2s ease;
          box-sizing: border-box;

          &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.primary};
            box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
          }

          &::placeholder {
            color: ${({ theme }) => theme.colors.text.secondary};
            opacity: 0.4;
            letter-spacing: normal;
          }

          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        }

        .code-hint {
          text-align: center;
          font-size: ${({ theme }) => theme.typography.fontSize.xs};
          color: ${({ theme }) => theme.colors.text.secondary};
          margin-top: ${({ theme }) => theme.spacing[1]};
        }
      }

      .verify-button {
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

      .resend-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({ theme }) => theme.spacing[2]};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        color: ${({ theme }) => theme.colors.text.secondary};

        .resend-text {
          text-align: center;
        }

        .cooldown-text {
          color: ${({ theme }) => theme.colors.text.secondary};
        }

        .resend-button {
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

      .back-link {
        display: flex;
        justify-content: center;
        margin-top: ${({ theme }) => theme.spacing[2]};

        .link-button {
          background: none;
          border: none;
          color: ${({ theme }) => theme.colors.text.secondary};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          cursor: pointer;
          text-decoration: none;
          padding: 0;

          &:hover:not(:disabled) {
            color: ${({ theme }) => theme.colors.text.primary};
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
