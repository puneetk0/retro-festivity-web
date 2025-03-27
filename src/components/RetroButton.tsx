
import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface RetroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'red' | 'green' | 'purple';
  size?: 'sm' | 'md' | 'lg';
}

const RetroButton = ({ 
  children, 
  variant = 'blue', 
  size = 'md', 
  className, 
  ...props 
}: RetroButtonProps) => {
  const baseClass = {
    blue: 'retro-button',
    red: 'retro-button-red',
    green: 'retro-button-green',
    purple: 'retro-button-purple',
  }[variant];
  
  const sizeClass = {
    sm: 'text-xs py-1 px-3',
    md: 'text-sm py-2 px-5',
    lg: 'text-base py-3 px-6',
  }[size];
  
  return (
    <button 
      className={cn(baseClass, sizeClass, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default RetroButton;
