import React, { ReactNode } from 'react';
import './Card.css';
interface CardRootProps {
    children: ReactNode;
    width?: string;
}
interface CardBodyProps {
    children: ReactNode;
    gap?: string;
}
interface CardFooterProps {
    children: ReactNode;
    justifyContent?: React.CSSProperties['justifyContent'];
}
interface CardTitleProps {
    children: ReactNode;
    mt?: string;
}
interface CardDescriptionProps {
    children: ReactNode;
}
export declare const Card: {
    Root: React.FC<CardRootProps>;
    Body: React.FC<CardBodyProps>;
    Footer: React.FC<CardFooterProps>;
    Title: React.FC<CardTitleProps>;
    Description: React.FC<CardDescriptionProps>;
};
export default Card;
