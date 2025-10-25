// src/design-system/atomic/atoms/Heading/Heading.tsx
import React from 'react';
import { HeadingProps } from './Heading.types';
import { cn } from '../../../utils/cn';

export const Heading: React.FC<HeadingProps> = ({
    level = 1,
    variant = 'heading',
    color = 'primary',
    align = 'left',
    children,
    className,
    ...props
}) => {
    // Mapear niveles a clases Tailwind
    const levelClasses = {
        1: 'text-4xl md:text-5xl lg:text-6xl',
        2: 'text-3xl md:text-4xl lg:text-5xl',
        3: 'text-2xl md:text-3xl lg:text-4xl',
        4: 'text-xl md:text-2xl lg:text-3xl',
        5: 'text-lg md:text-xl lg:text-2xl',
        6: 'text-base md:text-lg lg:text-xl',
    };

    // Mapear variantes a clases
    const variantClasses = {
        heading: 'font-heading font-semibold',
        display: 'font-heading font-bold',
        subheading: 'font-heading font-medium',
    };

    // Mapear colores a clases
    const colorClasses = {
        primary: 'text-text-primary',
        secondary: 'text-text-secondary',
        accent: 'text-text-accent',
        muted: 'text-text-muted',
        success: 'text-success-600',
        warning: 'text-warning-600',
        danger: 'text-danger-600',
        info: 'text-info-600',
    };

    // Mapear alineación
    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
    };

    const headingClasses = cn(
        'font-heading leading-tight',
        levelClasses[level],
        variantClasses[variant],
        colorClasses[color],
        alignClasses[align],
        className
    );

    const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

    return (
        <Tag className={headingClasses} {...(props as any)}>
            {children}
        </Tag>
    );
};
