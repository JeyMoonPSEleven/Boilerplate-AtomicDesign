// src/design-system/atomic/atoms/Button/Button.tsx
import React from 'react';
import { ButtonProps } from './Button.types';
import { createButtonClasses } from '../../../utils/cn';

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
  // Mapear tamaños a los nuevos tamaños de Tailwind
  const sizeMap: Record<string, string> = {
    small: 'sm',
    medium: 'md',
    large: 'lg',
  };

  const tailwindSize = sizeMap[size] || 'md';

  // Generar clases usando la utilidad type-safe
  const buttonClasses = createButtonClasses(
    variant as any,
    tailwindSize as any,
    isFullWidth,
    isLoading,
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
        <span className="spinner mr-sm" role="status" aria-label="Cargando" />
      ) : (
        <>
          <span className="flex items-center justify-center gap-xs">{children}</span>
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';
