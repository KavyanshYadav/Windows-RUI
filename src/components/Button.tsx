import React from 'react';
import './Button.css';

interface ButtonType {
    children : React.ReactNode,
    onClick? : React.MouseEventHandler,
    variant?: "primary" | "secondary"
}


const Button = ({ children, onClick, variant }:ButtonType) => (
  <button className={`btn btn-${variant}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
