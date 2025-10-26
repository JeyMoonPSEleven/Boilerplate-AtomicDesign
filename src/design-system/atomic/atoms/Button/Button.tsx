// src/design-system/atomic/atoms/Button/Button.tsx
import React from 'react';
import { ButtonProps } from './Button.types';
import { cn } from '../../../utils/cn';

export const Button = React.memo<ButtonProps>(({
  variant = 'primary',
  size = 'medium',
  isFullWidth = false,
  isLoading = false,
  children,
  className,
  disabled,
  ...restProps
}) => {
  const buttonClasses = cn(
    // Clases base
    'inline-flex items-center justify-center gap-sm relative isolate',
    'px-lg py-md border border-transparent rounded-md',
    'font-base font-medium leading-tight text-center no-underline whitespace-nowrap',
    'cursor-pointer select-none touch-manipulation outline-none',
    'transition-colors transition-transform',
    'min-w-[44px] min-h-[44px]',

    // Estados de interacción
    'hover:not-disabled:transform hover:not-disabled:-translate-y-px hover:not-disabled:shadow-md',
    'active:not-disabled:transform active:not-disabled:translate-y-0 active:not-disabled:scale-[0.98] active:not-disabled:shadow-sm',
    'focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2 focus-visible:shadow-focus',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',

    // Variantes de color
    variant === 'primary' && 'bg-primary text-text-on-primary hover:not-disabled:bg-primary-600 active:not-disabled:bg-primary-700',
    variant === 'secondary' && 'bg-secondary text-text-on-secondary hover:not-disabled:bg-secondary-600 active:not-disabled:bg-secondary-700',
    variant === 'success' && 'bg-success text-text-on-success hover:not-disabled:bg-success-600 active:not-disabled:bg-success-700',
    variant === 'danger' && 'bg-danger text-text-on-danger hover:not-disabled:bg-danger-600 active:not-disabled:bg-danger-700',
    variant === 'warning' && 'bg-warning text-text-on-warning hover:not-disabled:bg-warning-600 active:not-disabled:bg-warning-700',
    variant === 'info' && 'bg-info text-text-on-info hover:not-disabled:bg-info-600 active:not-disabled:bg-info-700',
    variant === 'light' && 'bg-gray-100 text-text-primary border-border-primary hover:not-disabled:bg-gray-200',
    variant === 'dark' && 'bg-gray-800 text-text-on-primary hover:not-disabled:bg-gray-700',
    variant === 'link' && 'bg-transparent text-primary border-transparent font-normal p-0 min-w-auto min-h-auto hover:not-disabled:text-primary-600 hover:not-disabled:underline hover:not-disabled:transform-none hover:not-disabled:shadow-none',

    // Tamaños
    size === 'small' && 'px-md py-sm text-sm min-h-8 gap-xs',
    size === 'medium' && 'px-lg py-md text-base min-h-[44px]',
    size === 'large' && 'px-xl py-lg text-lg min-h-12',

    // Modificadores
    isFullWidth && 'w-full flex',
    isLoading && 'relative text-transparent pointer-events-none',

    // Responsive
    'sm:min-w-full md:min-w-[120px]',

    // Clases externas
    className
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...restProps}
    >
      {isLoading ? (
        <span
          className="absolute w-4 h-4 top-1/2 left-1/2 -mt-2 -ml-2 border-2 border-current border-r-transparent rounded-full animate-spin"
          role="status"
          aria-label="Cargando"
        />
      ) : (
        <span className="inline-flex items-center gap-xs">
          {children}
        </span>
      )}
    </button>
  );
});

Button.displayName = 'Button';