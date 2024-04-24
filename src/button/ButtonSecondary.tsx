import React from 'react';
import { cn } from '../utils';

export type ButtonSecondaryProps = {
  children?: React.ReactNode;
  className?: string;
};

function ButtonSecondary({ children, className }: ButtonSecondaryProps) {
  return (
    <button
      className={cn(
        'text-primary underline text-base md:text-xl tracking-tight line-clamp-1',
        className
      )}
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;
