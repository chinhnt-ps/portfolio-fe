/**
 * Date utility functions for transaction timestamp handling
 * 
 * Converts between ISO datetime strings and datetime-local input format
 */

/**
 * Convert ISO datetime string to datetime-local format (YYYY-MM-DDTHH:mm)
 * Used for populating datetime-local input fields
 * 
 * Backend trả về LocalDateTime dạng "YYYY-MM-DDTHH:mm:ss" (không có timezone)
 * hoặc có thể có timezone. Cần parse đúng để hiển thị local time.
 * 
 * @param isoString - ISO datetime string từ backend (e.g., "2024-01-15T14:30:00" hoặc "2024-01-15T14:30:00.000Z")
 * @returns datetime-local format string (e.g., "2024-01-15T14:30")
 */
export function formatForDateTimeLocal(isoString: string | undefined | null): string {
  if (!isoString) {
    // Return current datetime if no input
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  try {
    // Backend có thể trả về:
    // 1. "2024-01-15T14:30:00" (LocalDateTime, không có timezone) - parse như local time
    // 2. "2024-01-15T14:30:00.000Z" (với Z) - parse như UTC, cần convert sang local
    // 3. "2024-01-15T14:30:00+07:00" (với timezone offset) - parse đúng timezone
    
    let date: Date;
    
    // Nếu không có timezone indicator (Z hoặc +/-), parse như local time
    if (!isoString.includes('Z') && !isoString.match(/[+-]\d{2}:\d{2}$/)) {
      // Format: "YYYY-MM-DDTHH:mm:ss" hoặc "YYYY-MM-DDTHH:mm"
      // Parse như local time (không convert timezone)
      const parts = isoString.split('T');
      if (parts.length === 2) {
        const datePart = parts[0];
        const timePart = parts[1].split('.')[0]; // Remove milliseconds if any
        const timeParts = timePart.split(':');
        
        const year = parseInt(datePart.split('-')[0], 10);
        const month = parseInt(datePart.split('-')[1], 10) - 1; // Month is 0-indexed
        const day = parseInt(datePart.split('-')[2], 10);
        const hours = parseInt(timeParts[0] || '0', 10);
        const minutes = parseInt(timeParts[1] || '0', 10);
        const seconds = parseInt(timeParts[2] || '0', 10);
        
        // Create date in local timezone (không convert)
        date = new Date(year, month, day, hours, minutes, seconds);
      } else {
        // Fallback to Date constructor
        date = new Date(isoString);
      }
    } else {
      // Có timezone indicator, parse bình thường (sẽ convert sang local timezone)
      date = new Date(isoString);
    }
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      // Invalid date, return current datetime
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    // Extract local time components (đã được convert sang local timezone nếu cần)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  } catch (error) {
    console.error('Error formatting datetime for datetime-local:', error);
    // Fallback to current datetime
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
}

/**
 * Convert datetime-local format to ISO string (without timezone, local time)
 * Used when submitting forms with datetime-local inputs
 * 
 * Backend sử dụng LocalDateTime (không có timezone), nên cần gửi local time
 * format thay vì UTC để giữ nguyên thời gian user chọn
 * 
 * @param dateTimeLocal - datetime-local format string (e.g., "2024-01-15T14:30")
 * @returns ISO datetime string without timezone (e.g., "2024-01-15T14:30:00")
 */
export function convertDateTimeLocalToISO(dateTimeLocal: string | undefined | null): string {
  if (!dateTimeLocal) {
    // Return current datetime in local time format (no timezone)
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  try {
    // datetime-local format: "YYYY-MM-DDTHH:mm"
    // Backend sử dụng LocalDateTime, nên cần gửi local time format (không có timezone)
    // Thêm seconds nếu chưa có
    let formatted = dateTimeLocal;
    if (!formatted.includes(':')) {
      // Invalid format
      console.error('Invalid datetime-local format:', dateTimeLocal);
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    }

    // Ensure format is "YYYY-MM-DDTHH:mm:ss"
    const parts = formatted.split('T');
    if (parts.length === 2) {
      const timePart = parts[1];
      const timeParts = timePart.split(':');
      if (timeParts.length === 2) {
        // Add seconds if missing
        formatted = `${parts[0]}T${timePart}:00`;
      } else if (timeParts.length === 3) {
        // Already has seconds, keep as is
        formatted = formatted;
      } else {
        // Invalid time format
        console.error('Invalid time format in datetime-local:', dateTimeLocal);
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      }
    }

    return formatted;
  } catch (error) {
    console.error('Error converting datetime-local to ISO:', error);
    // Fallback to current datetime in local time format
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }
}
