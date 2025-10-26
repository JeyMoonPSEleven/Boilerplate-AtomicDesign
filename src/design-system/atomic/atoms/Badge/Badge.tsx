// src/design-system/atomic/atoms/Badge/Badge.tsx
import React from 'react';
import { BadgeProps } from './Badge.types';
import { cn } from '../../../utils/cn';

export const Badge: React.FC<BadgeProps> = ({
    variant = 'primary',
    size = 'medium',
    pill = false,
    children,
    className,
    ...props
}) => {
    const badgeClasses = cn(
        // Clases base
        'inline-flex items-center justify-center gap-xs',
        'font-base font-semibold leading-none text-center whitespace-nowrap',
        'rounded-sm transition-all animate-fade-in',

        // Tamaños
        size === 'small' && 'px-sm py-xs text-xs min-h-5',
        size === 'medium' && 'px-md py-sm text-sm min-h-6',
        size === 'large' && 'px-lg py-md text-base min-h-8',

        // Variantes de color
        variant === 'primary' && 'bg-primary text-text-on-primary shadow-sm',
        variant === 'secondary' && 'bg-secondary text-text-on-secondary shadow-sm',
        variant === 'success' && 'bg-success text-text-on-success shadow-sm',
        variant === 'danger' && 'bg-danger text-text-on-danger shadow-sm',
        variant === 'warning' && 'bg-warning text-text-on-warning shadow-sm',
        variant === 'info' && 'bg-info text-text-on-info shadow-sm',
        variant === 'light' && 'bg-gray-100 text-text-primary border border-border-light',
        variant === 'dark' && 'bg-gray-800 text-text-on-primary shadow-sm',

        // Forma pill
        pill && 'rounded-full',

        // Responsive
        'sm:text-xs',

        // Clases externas
        className
    );

    return (
        <span className={badgeClasses} {...props}>
            {children}
        </span>
    );
};