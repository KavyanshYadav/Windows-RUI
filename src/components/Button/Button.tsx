import React from 'react';
import './Button.scss';
import { useTheme } from '../../hooks/useThemeHook';

interface ButtonType {
    children : React.ReactNode,
    onClick? : React.MouseEventHandler,
    variant?: "primary" | "secondary" | "LightOne" | "LightTwo" | "LightThree"| "DarkOne" | "DarkTwo" | "DarkThree"
    lefticon? : React.ReactElement
}


const Button = ({ children, onClick, variant="primary" }:ButtonType) => {
  const theme = useTheme();

  const AcColors = {
    primary: theme.themeStyles.Accent.LightOne,
    secondary: theme.themeStyles.Accent.DarkOne,
    LightOne: theme.themeStyles.Accent.LightOne,
    LightTwo: theme.themeStyles.Accent.LightTwo,
    LightThree: theme.themeStyles.Accent.LightThree,
    DarkOne: theme.themeStyles.Accent.DarkOne,
    DarkTwo: theme.themeStyles.Accent.DarkTwo,
    DarkThree: theme.themeStyles.Accent.DarkThree,
  };

  const color = AcColors[variant] || AcColors.primary;


  const inputBackStyle: React.CSSProperties = {
    '--button-backgroundcolor': color,
    '--button-color': theme.themeStyles.colors.textPrimary,
    '--button-radius':theme.themeStyles.breakpoints.lg
  } as React.CSSProperties;
  
  return (
  <button className="btn_back" style={inputBackStyle} onClick={onClick}>
    <div className='Btn_wrapper'>
      anme
    </div>
    {children}
  </button>
)};

export default Button;
