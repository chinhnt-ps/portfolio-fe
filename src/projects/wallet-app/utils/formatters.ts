/**
 * Utility functions for formatting values
 */

/**
 * Format amount as currency
 */
export function formatCurrency(amount: number, currency: string = 'VND'): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

/**
 * Format date with time
 */
export function formatDateTime(dateString: string): string {
  return new Date(dateString).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Format date only
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

/**
 * Remove timezone from date string for backend (LocalDateTime)
 * Input: "2026-01-10T00:00:00+07:00" or "2026-01-10T00:00:00Z"
 * Output: "2026-01-10T00:00:00"
 */
export function removeTimezoneFromDate(dateString: string | undefined): string {
  if (!dateString) {
    const now = new Date();
    const vnOffset = 7 * 60;
    const vnTime = new Date(now.getTime() + (vnOffset - now.getTimezoneOffset()) * 60000);
    return vnTime.toISOString().slice(0, 19);
  }
  
  return dateString.replace(/[+-]\d{2}:\d{2}$/, '').replace(/Z$/, '').slice(0, 19);
}

/**
 * Format local date time for API
 */
export function formatLocalDateTime(date: Date, isStart: boolean = true): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const time = isStart ? '00:00:00' : '23:59:59';
  return `${year}-${month}-${day}T${time}`;
}
