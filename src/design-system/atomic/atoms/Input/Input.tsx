// src/design-system/atomic/atoms/Input/Input.tsx
import React from 'react';
import { InputProps } from './Input.types';
import { cn, createInputClasses } from '../../../utils/cn';

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

    // Mapear tamaños a los nuevos tamaños de Tailwind
    const sizeMap: Record<string, string> = {
        small: 'sm',
        medium: 'md',
        large: 'lg',
    };

    const tailwindSize = sizeMap[size] || 'md';

    // Generar clases usando la utilidad type-safe
    const inputClasses = createInputClasses(
        error,
        disabled,
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
