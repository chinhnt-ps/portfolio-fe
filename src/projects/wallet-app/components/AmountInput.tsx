import { useState, useEffect, useCallback, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface AmountInputProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  className?: string;
  min?: number;
  disabled?: boolean;
  required?: boolean;
}

/**
 * Format số với dấu phẩy ngăn cách hàng nghìn
 * Format real-time khi đang nhập
 */
export const formatNumberWithCommas = (value: number | string): string => {
  if (value === 0 || value === '' || value === null || value === undefined) return '';
  if (typeof value === 'string') {
    // Nếu là string, parse trước rồi format
    const num = parseFormattedNumber(value);
    if (num === 0 || isNaN(num)) return value; // Giữ nguyên nếu không parse được
    return num.toLocaleString('vi-VN');
  }
  if (isNaN(value)) return '';
  return value.toLocaleString('vi-VN');
};

/**
 * Loại bỏ dấu phẩy và chuyển về số
 * Tự động trim số 0 ở đầu
 */
export const parseFormattedNumber = (value: string): number => {
  if (!value) return 0;
  
  // Loại bỏ tất cả ký tự không phải số, dấu chấm, dấu phẩy
  let cleanValue = value.replace(/[^\d.,]/g, '');
  
  // Trim số 0 ở đầu (nhưng giữ lại nếu là số thập phân như 0.5)
  cleanValue = cleanValue.replace(/^0+(?=\d)/, '');
  
  // Thay thế dấu phẩy bằng rỗng (format VN dùng dấu . cho decimal)
  const normalizedValue = cleanValue.replace(/\./g, '').replace(',', '.');
  const parsed = parseFloat(normalizedValue);
  return isNaN(parsed) ? 0 : parsed;
};

/**
 * AmountInput Component
 * 
 * Input cho số tiền với auto-format dấu phẩy ngăn cách hàng nghìn.
 * - Format real-time khi đang nhập (ví dụ: 1,000,000)
 * - Tự động bôi đen toàn bộ text khi focus
 * - Tự động trim số 0 ở đầu
 * - Căn trái
 * - Không hiện nút tăng giảm (dùng type="text")
 */
export const AmountInput = ({
  value,
  onChange,
  placeholder = '0',
  className,
  min = 0,
  disabled = false,
  required = false,
}: AmountInputProps) => {
  const [displayValue, setDisplayValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync displayValue when value prop changes (from outside)
  useEffect(() => {
    if (!isFocused) {
      // Khi không focus, format với dấu phẩy
      setDisplayValue(value && value !== 0 ? formatNumberWithCommas(value) : '');
    } else {
      // Khi đang focus, vẫn format real-time nhưng giữ cursor position
      if (value && value !== 0) {
        const formatted = formatNumberWithCommas(value);
        setDisplayValue(formatted);
      }
    }
  }, [value, isFocused]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Cho phép nhập số và dấu phẩy/chấm
    let cleanInput = inputValue.replace(/[^\d.,]/g, '');
    
    // Trim số 0 ở đầu (nhưng giữ lại nếu là số thập phân như 0.5)
    cleanInput = cleanInput.replace(/^0+(?=\d)/, '');
    
    // Parse giá trị số
    const numericValue = parseFormattedNumber(cleanInput);
    
    // Format lại với dấu phẩy (real-time formatting)
    // Format ngay khi đang nhập để dễ đọc
    const formatted = cleanInput ? formatNumberWithCommas(cleanInput) : '';
    
    setDisplayValue(formatted);
    onChange(numericValue);
  }, [onChange]);

  const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    
    // Tự động bôi đen toàn bộ text khi focus
    setTimeout(() => {
      e.target.select();
    }, 0);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    // Khi blur, format lại giá trị và trim số 0
    const trimmedValue = value && value !== 0 ? value : 0;
    setDisplayValue(trimmedValue ? formatNumberWithCommas(trimmedValue) : '');
    // Emit giá trị đã trim
    if (trimmedValue !== value) {
      onChange(trimmedValue);
    }
  }, [value, onChange]);

  return (
    <Input
      ref={inputRef}
      type="text"
      inputMode="numeric"
      value={displayValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      className={cn('text-left', className)}
      disabled={disabled}
      required={required}
      min={min}
    />
  );
};

export default AmountInput;
