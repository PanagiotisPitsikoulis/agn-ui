import React from 'react';
import { cn } from '../utils';

export type H1Props = {
  children?: React.ReactNode;
  className?: string;
};

function H1({ children, className }: H1Props) {
  return (
    <h1
      className={cn(
        'text-5xl tracking-tighter text-left md:text-8xl',
        className
      )}
    >
      {children}
    </h1>
  );
}

export default H1;
