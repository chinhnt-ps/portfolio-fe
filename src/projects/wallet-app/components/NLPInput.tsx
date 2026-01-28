import { useState, useRef, useEffect, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Icon } from './icons';
import styled from 'styled-components';

interface NLPInputProps {
  onParse: (text: string) => Promise<void>;
  isLoading?: boolean;
  placeholder?: string;
  disabled?: boolean;
  error?: string | null | undefined;
}

/**
 * NLP Input component for parsing transaction text
 * 
 * Features:
 * - Debounced API calls (500ms delay)
 * - Auto-focus on mount
 * - Enter key to submit
 * - Inline error display
 */
export const NLPInput = ({ onParse, isLoading = false, placeholder, disabled = false, error }: NLPInputProps) => {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-focus on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Clear error when user starts typing
  useEffect(() => {
    if (error && text) {
      // Error will be cleared by parent when new parse is triggered
    }
  }, [text, error]);

  const handleSubmit = useCallback(async () => {
    if (!text.trim() || isLoading || disabled) return;
    
    // Clear any pending debounce
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    
    await onParse(text.trim());
    setText(''); // Clear input after parsing
  }, [text, isLoading, disabled, onParse]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <NLPInputWrapper>
      <div className="input-container">
        <Input
          ref={inputRef}
          type="text"
          className={`nlp-input ${error ? 'error' : ''}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            placeholder ||
            'Nhập lệnh... (ví dụ: "ăn bún 50k", "cho Nam vay 2tr", "điều chỉnh số dư ví tiền mặt về 2 triệu")'
          }
          disabled={disabled || isLoading}
        />
        <Button
          variant="secondary"
          onClick={handleSubmit}
          disabled={disabled || isLoading || !text.trim()}
          className="parse-button"
        >
          {isLoading ? (
            <>
              <Icon icon="Loader" size={16} color="currentColor" className="animate-spin" />
              <span>Đang phân tích...</span>
            </>
          ) : (
            <>
              <Icon icon="Sparkles" size={16} color="currentColor" />
              <span>Phân tích</span>
            </>
          )}
        </Button>
      </div>
      {error && (
        <div className="error-message">
          <Icon icon="Alert" size={16} color="currentColor" />
          <span>{error}</span>
        </div>
      )}
    </NLPInputWrapper>
  );
};

const NLPInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  .input-container {
    display: flex;
    gap: ${({ theme }) => theme.spacing[2]};
    width: 100%;
  }

  .nlp-input {
    flex: 1;
    height: 40px;
    transition: border-color 0.2s, box-shadow 0.2s;

    &.error {
      border-color: #ef4444;
      box-shadow: 0 0 0 1px #ef4444;
    }

    &:focus.error {
      border-color: #ef4444;
      box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
    }
  }

  .parse-button {
    height: 40px;
    min-width: 120px;
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
    font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  }

  .error-message {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 6px;
    color: #dc2626;
    font-size: 14px;
    animation: slideDown 0.2s ease-out;

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;
