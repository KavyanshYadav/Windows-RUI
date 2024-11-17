import React from 'react';
import "./input.scss";
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Input: React.FC<InputProps>;
export default Input;
