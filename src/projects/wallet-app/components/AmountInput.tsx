import { useState, useEffect, useCallback } from 'react';
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
 */
export const formatNumberWithCommas = (value: number): string => {
  if (value === 0 || isNaN(value)) return '';
  return value.toLocaleString('vi-VN');
};

/**
 * Loại bỏ dấu phẩy và chuyển về số
 */
export const parseFormattedNumber = (value: string): number => {
  // Loại bỏ tất cả ký tự không phải số, dấu chấm, dấu phẩy
  const cleanValue = value.replace(/[^\d.,]/g, '');
  // Thay thế dấu phẩy bằng rỗng (format VN dùng dấu . cho decimal)
  const normalizedValue = cleanValue.replace(/\./g, '').replace(',', '.');
  const parsed = parseFloat(normalizedValue);
  return isNaN(parsed) ? 0 : parsed;
};

/**
 * AmountInput Component
 * 
 * Input cho số tiền với auto-format dấu phẩy ngăn cách hàng nghìn.
 * - Hiển thị số với format (ví dụ: 1,000,000)
 * - Khi nhập, cho phép nhập số thuần
 * - onChange trả về giá trị number
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

  // Sync displayValue when value prop changes (from outside)
  useEffect(() => {
    if (!isFocused) {
      setDisplayValue(value ? formatNumberWithCommas(value) : '');
    }
  }, [value, isFocused]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Cho phép nhập số và dấu phẩy/chấm
    const cleanInput = inputValue.replace(/[^\d.,]/g, '');
    setDisplayValue(cleanInput);
    
    // Parse và emit giá trị number
    const numericValue = parseFormattedNumber(cleanInput);
    onChange(numericValue);
  }, [onChange]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    // Khi focus, hiển thị giá trị không có format để dễ chỉnh sửa
    if (value) {
      setDisplayValue(value.toString());
    }
  }, [value]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    // Khi blur, format lại giá trị
    setDisplayValue(value ? formatNumberWithCommas(value) : '');
  }, [value]);

  return (
    <Input
      type="text"
      inputMode="numeric"
      value={displayValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      className={cn('text-right', className)}
      disabled={disabled}
      required={required}
      min={min}
    />
  );
};

export default AmountInput;
