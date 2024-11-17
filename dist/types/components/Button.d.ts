import React from 'react';
import './Button.css';
interface ButtonType {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler;
    variant?: "primary" | "secondary";
}
declare const Button: ({ children, onClick, variant }: ButtonType) => React.JSX.Element;
export default Button;
