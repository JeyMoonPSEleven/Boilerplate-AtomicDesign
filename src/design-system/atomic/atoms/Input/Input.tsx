// src/design-system/atomic/atoms/Input/Input.tsx
import React from 'react';
import { InputProps } from './Input.types';
import { cn } from '../../../utils/cn';

export const Input: React.FC<InputProps> = ({
    type = 'text',
    value = '',
    onChange,
    placeholder = '',
    required = false,
    disabled = false,
    error = false,
    helperText,
    label,
    variant = 'default',
    size = 'medium',
    className,
    id,
    ...props
}) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const inputClasses = cn(
        // Clases base
        'w-full px-md py-sm',
        'font-base leading-normal',
        'bg-background border border-border rounded-md',
        'text-text-primary',
        'transition-all appearance-none outline-none',

        // Estados de interacción
        'focus:border-border-focus focus:shadow-focus focus:bg-background',
        'hover:not-disabled:not-focus:border-gray-400',

        // Estados de validación
        error && 'border-danger-500',
        error && 'focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]',
        !error && 'focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]',

        // Estado deshabilitado
        disabled && 'bg-gray-100 text-text-muted cursor-not-allowed opacity-60',

        // Tamaños
        size === 'small' && 'h-8 text-sm px-sm py-xs',
        size === 'medium' && 'h-10 text-base px-md py-sm',
        size === 'large' && 'h-12 text-lg px-lg py-md',

        // Variantes
        variant === 'filled' && 'bg-gray-100 border-0 focus:bg-background focus:shadow-inner',
        variant === 'outlined' && 'border-2',

        // Responsive
        'sm:text-sm',

        // Clases externas
        className
    );

    const containerClasses = cn(
        'flex flex-col gap-xs',
        className
    );

    const labelClasses = cn(
        'text-sm font-medium text-text-primary',
        error && 'text-danger-600',
        disabled && 'text-text-muted'
    );

    const helperTextClasses = cn(
        'text-xs text-text-muted',
        error && 'text-danger-600'
    );

    return (
        <div className={containerClasses}>
            {label && (
                <label htmlFor={inputId} className={labelClasses}>
                    {label}
                    {required && <span className="text-danger-500 ml-xs">*</span>}
                </label>
            )}
            <input
                id={inputId}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={inputClasses}
                {...props}
            />
            {helperText && (
                <span className={helperTextClasses}>
                    {helperText}
                </span>
            )}
        </div>
    );
};