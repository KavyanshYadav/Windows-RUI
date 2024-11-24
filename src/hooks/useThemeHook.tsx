import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeStyle } from '../types/ThemeStyleType';
import sampleTheme from '../utils/DefaultThemeConstant';
import generateAccentColors from '../utils/AccentColorGenerator';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  themeStyles: ThemeStyle; 
  setThemeStyle: (newStyle:ThemeStyle)=>void
  setAccent: (color:string) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');
  

  const [themeStyles,setthemestyle] = useState<ThemeStyle>(sampleTheme);
  
  const setAccent =(color:string)=>{
      const n = generateAccentColors(color)
      setthemestyle(e => ({ ...e, Accent:n})); 
    }

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const setThemeStyle = (newStyle:ThemeStyle) => {
    setthemestyle(e => ({ ...e, ...newStyle})); 
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme ,themeStyles , setThemeStyle,setAccent,}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
