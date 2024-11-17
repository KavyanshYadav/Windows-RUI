import React, { ReactElement, ReactNode } from 'react';
import './input.scss';
import { useTheme } from '../../hooks/useThemeHook';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value ?: string;
  onChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder : string
  Icon ? : ReactElement
};

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, disabled = false,Icon, ...props }) => {
  const theme = useTheme();
  console.log(theme.theme)
  const inputBackStyle: React.CSSProperties = {
    '--input-backgroundcolor': theme.theme=="light" ? "#FEFEFE" : "#2D2D2D",
    '--inputback-color': theme.themeStyles.colors.primary,
    '--input-radius':theme.themeStyles.breakpoints.lg
  } as React.CSSProperties;

  return (
    <div className="input-wrapper" style={inputBackStyle} {...props}>
      <div className="inputback"></div>
      <input
        className="input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      {Icon ? 
      <div className='inputIconHolder'>
        {Icon && <div className="icon">{Icon}</div>}
      </div> : ""}
    </div>
  );
};

export default Input;
