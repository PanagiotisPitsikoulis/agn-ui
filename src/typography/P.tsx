import React from 'react';
import { cn } from '../utils';

export type PProps = {
  children?: React.ReactNode;
  className?: string;
};

function P({ children, className }: PProps) {
  return (
    <p
      className={cn(
        'text-base tracking-tight text-left md:text-3xl',
        className
      )}
    >
      {children}
    </p>
  );
}

export default P;
