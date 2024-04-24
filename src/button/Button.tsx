import React from 'react';
import { cn } from '../utils';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
};

function Button({ children, className, icon }: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-secondary border border-secondary-foreground text-secondary-foborder-secondary-foreground flex items-center justify-center gap-5 px-4 py-2 tracking-tight font-semibold',
        className
      )}
    >
      <p className="text-base line-clamp-1 md:text-xl">{children}</p>
      {icon}
    </button>
  );
}

export default Button;
