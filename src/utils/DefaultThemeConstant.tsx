
import { ThemeStyle } from "../types/ThemeStyleType";

const sampleTheme: ThemeStyle = {
  typography: {
    fontFamily: 'Roboto, sans-serif',  // A commonly used font in Material UI
    fontSize: '14px',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    lineHeight: '1.6',
    letterSpacing: '0.015em',
  },
  colors: {
    primary: '#6200ea',  // Purple
    secondary: '#b00020',  // Teal
    error: '#b00020',  // Red
    background: '#f5f5f5',  // Light Gray for background
    textPrimary: '#000000',  // Black text
    textSecondary: '#888888',  // Gray text for secondary elements
    border: '#e0e0e0',  // Light Gray border color
    surface: '#ffffff',  // White surface color for cards and containers
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xLarge: '32px',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',  // Small shadow
    medium: '0 4px 8px rgba(0, 0, 0, 0.2)',  // Medium shadow
    large: '0 6px 12px rgba(0, 0, 0, 0.3)',  // Large shadow
  },
  breakpoints: {
    xs: '0',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
  button: {
    primary: {
      backgroundColor: '#6200ea',
      color: '#ffffff',
      borderRadius: '4px',
      padding: '12px 24px',
    },
    secondary: {
      backgroundColor: '#03dac6',
      color: '#ffffff',
      borderRadius: '4px',
      padding: '12px 24px',
    },
  },
};
export default sampleTheme;