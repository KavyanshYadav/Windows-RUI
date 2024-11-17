import React, { ReactNode } from 'react';
import { ThemeStyle } from '../types/ThemeStyleType';
type Theme = 'light' | 'dark';
interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
    themeStyles: ThemeStyle;
    setThemeStyle: (newStyle: ThemeStyle) => void;
}
interface ThemeProviderProps {
    children: ReactNode;
}
export declare const ThemeProvider: ({ children }: ThemeProviderProps) => React.JSX.Element;
export declare const useTheme: () => ThemeContextProps;
export {};
