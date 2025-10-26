// src/design-system/atomic/atoms/Checkbox/Checkbox.tsx
import React from 'react';
import { CheckboxProps } from './Checkbox.types';
import { cn } from '../../../utils/cn';

export const Checkbox: React.FC<CheckboxProps> = ({
    checked = false,
    onChange,
    label,
    disabled = false,
    required = false,
    error = false,
    helperText,
    size = 'medium',
    className,
    id,
    ...props
}) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    const checkboxClasses = cn(
        // Clases base
        'appearance-none bg-background border-2 border-border rounded-sm cursor-pointer transition-all',

        // Estados
        checked && 'bg-primary border-primary',
        'focus:outline-none focus:shadow-focus',
        disabled && 'bg-gray-100 border-gray-300 cursor-not-allowed opacity-65',
        checked && disabled && 'bg-text-muted border-text-muted',

        // Estados de error
        error && 'border-danger-500',
        error && 'focus:shadow-[0_0_0_0.2rem_rgba(220,53,69,0.25)]',

        // Tamaños
        size === 'small' && 'w-4 h-4',
        size === 'medium' && 'w-5 h-5',
        size === 'large' && 'w-6 h-6',

        // Clases externas
        className
    );

    const containerClasses = cn(
        'flex flex-col gap-xs'
    );

    const wrapperClasses = cn(
        'relative inline-flex items-center'
    );

    const labelClasses = cn(
        'text-sm font-normal text-text-primary cursor-pointer ml-sm',
        disabled && 'cursor-not-allowed'
    );

    const helperTextClasses = cn(
        'text-sm text-text-muted ml-sm',
        error && 'text-danger-600'
    );

    return (
        <div className={containerClasses}>
            <div className={wrapperClasses}>
                <input
                    id={checkboxId}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange?.(e.target.checked)}
                    disabled={disabled}
                    required={required}
                    className={checkboxClasses}
                    {...props}
                />
                {checked && (
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-2.5 border-solid border-white border-r-2 border-b-2 rotate-45 pointer-events-none" />
                )}
            </div>
            {label && (
                <label htmlFor={checkboxId} className={labelClasses}>
                    {label}
                    {required && <span className="text-danger-500 ml-xs">*</span>}
                </label>
            )}
            {helperText && (
                <span className={helperTextClasses}>
                    {helperText}
                </span>
            )}
        </div>
    );
};