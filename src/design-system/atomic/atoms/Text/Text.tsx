// src/design-system/atomic/atoms/Text/Text.tsx
import React from 'react';
import { TextProps } from './Text.types';
import { cn } from '../../../utils/cn';

export const Text: React.FC<TextProps> = ({
    variant = 'body',
    color = 'primary',
    weight = 'normal',
    align = 'left',
    children,
    className,
    ...props
}) => {
    const textClasses = cn(
        // Clases base
        'font-base leading-normal',

        // Variantes de tamaño
        variant === 'body' && 'text-base',
        variant === 'caption' && 'text-sm',
        variant === 'small' && 'text-sm',
        variant === 'large' && 'text-lg',

        // Colores
        color === 'primary' && 'text-text-primary',
        color === 'secondary' && 'text-text-secondary',
        color === 'muted' && 'text-text-muted',
        color === 'accent' && 'text-primary',
        color === 'success' && 'text-success',
        color === 'danger' && 'text-danger',
        color === 'warning' && 'text-warning',
        color === 'info' && 'text-info',

        // Pesos de fuente
        weight === 'light' && 'font-light',
        weight === 'normal' && 'font-normal',
        weight === 'bold' && 'font-bold',

        // Alineación
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',

        // Clases externas
        className
    );

    return (
        <span className={textClasses} {...props}>
            {children}
        </span>
    );
};