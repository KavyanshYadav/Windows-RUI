import React, { ReactElement, ReactNode } from 'react';
import './Card.css';
import { useTheme } from '../../hooks/useThemeHook';

interface CardRootProps {
  children: ReactNode;
  width?: string;
}



const CardRoot: React.FC<CardRootProps> = ({ children, width = '100%' }) => {
  const theme = useTheme()
  

  return (
    <div className="card-root" style={{ width ,color:theme.themeStyles.colors.primary }}>
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: ReactNode;
  gap?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ children, gap = '1rem' }) => {
  return (
    <div className="card-body" style={{ gap }}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: ReactNode;
  justifyContent?: React.CSSProperties['justifyContent'];
}

const CardFooter: React.FC<CardFooterProps> = ({ children, justifyContent = 'space-between' }) => {
  return (
    <div className="card-footer" style={{ justifyContent }}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: ReactNode;
  mt?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, mt = '0' }) => {
  return (
    <h2 className="card-title" style={{ marginTop: mt }}>
      {children}
    </h2>
  );
};

interface CardDescriptionProps {
  children: ReactNode;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => {
  return <p className="card-description">{children}</p>;
};

// Combine subcomponents
export  const Card = {
  Root: CardRoot,
  Body: CardBody,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
};

export default Card;