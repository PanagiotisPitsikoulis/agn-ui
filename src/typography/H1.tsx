import React from 'react';
import { cn } from '../lib/utils';

export type H1Props = {
  children?: React.ReactNode;
  className?: string;
};

function H1({ children, className }: H1Props) {
  return (
    <p
      className={cn(
        'text-5xl tracking-tighter text-left md:text-8xl mt-0 mb-0',
        className
      )}
    >
      {children}
    </p>
  );
}

export default H1;
