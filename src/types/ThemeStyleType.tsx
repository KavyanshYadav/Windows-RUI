export interface ThemeTypography {
    fontFamily: string;
    fontSize: string;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    lineHeight: string;
    letterSpacing: string;
  }
  
  export interface ThemeColors {
    primary: string;
    secondary: string;
    error: string;
    background: string;
    textPrimary: string;
    textSecondary: string;
    border: string;
    surface: string;
  }
  
  export interface ThemeSpacing {
    small: string;
    medium: string;
    large: string;
    xLarge: string;
  }
  
  export interface ThemeShadows {
    small: string;
    medium: string;
    large: string;
  }
  
  export interface ThemeBreakpoints {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }
  
  export interface ThemeButton {
    primary: {
      backgroundColor: string;
      color: string;
      borderRadius: string;
      padding: string;
    };
    secondary: {
      backgroundColor: string;
      color: string;
      borderRadius: string;
      padding: string;
    };
  }
  
  export interface ThemeStyle {
    typography: ThemeTypography;
    colors: ThemeColors;
    spacing: ThemeSpacing;
    shadows: ThemeShadows;
    breakpoints: ThemeBreakpoints;
    button: ThemeButton;
  }
  