import React from 'react';
import { cn } from "@/lib/utils";

export const Button = ({ variant = 'primary', size = 'md', className, children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  const variants = {
    primary: "bg-[var(--color-primary-600)] text-white hover:bg-[var(--color-primary-700)]",
    secondary: "bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]",
    outline: "border border-[var(--border-primary)] bg-transparent hover:bg-[var(--bg-secondary)]"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};