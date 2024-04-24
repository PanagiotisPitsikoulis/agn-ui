import React from 'react';
import { cn } from '../utils';

export type ColorsProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: 'secondary' | 'tertiary' | 'accent' | 'primary';
};

function Colors({ children, className, variant }: ColorsProps) {
  return (
    <div
      className={cn(
        'bg-primary text-primary-foreground',
        variant === 'secondary' && 'bg-secondary text-secondary-foreground',
        variant === 'tertiary' && 'bg-tertiary text-tertiary-foreground',
        variant === 'accent' && 'bg-accent text-accent-foreground',
        className
      )}
    >
      {children}
    </div>
  );
}

export default Colors;
