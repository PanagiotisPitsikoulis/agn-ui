import React from 'react';
import { cn } from '../lib/utils';

export type PProps = {
  children?: React.ReactNode;
  className?: string;
};

function P({ children, className }: PProps) {
  return (
    <p
      className={cn(
        'text-base tracking-tight text-left md:text-3xl mt-0 mb-0',
        className
      )}
    >
      {children}
    </p>
  );
}

export default P;
