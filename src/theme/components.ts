/**
 * Component tokens - kích thước thống nhất cho nút, icon button, v.v.
 * Dùng để tránh font-size / padding lệch nhau giữa các section.
 */
export const components = {
  /** Chiều cao nút CTA (Hero, Contact CV, v.v.) */
  buttonHeight: '2.75rem', // 44px
  /** Padding ngang nút CTA */
  buttonPaddingX: '1.5rem', // 24px
  /** Padding dọc nút CTA */
  buttonPaddingY: '0.75rem', // 12px
  /** Nút nhỏ (link-style, Experience ProductLink) */
  buttonSmallHeight: '2.25rem', // 36px
  /** Icon button (social, menu): 40px */
  iconButtonSize: '2.5rem',
} as const;
