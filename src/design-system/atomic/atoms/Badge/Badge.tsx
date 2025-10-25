// src/design-system/atomic/atoms/Badge/Badge.tsx
import React from 'react';
import { BadgeProps } from './Badge.types';
import { cn, createBadgeClasses } from '../../../utils/cn';

export const Badge: React.FC<BadgeProps> = ({
    variant = 'primary',
    size = 'medium',
    pill = false,
    children,
    className,
    ...props
}) => {
    // Mapear tamaños a los nuevos tamaños de Tailwind
    const sizeMap: Record<string, string> = {
        small: 'sm',
        medium: 'md',
        large: 'lg',
    };

    const tailwindSize = sizeMap[size] || 'md';

    // Generar clases usando la utilidad type-safe
    const badgeClasses = createBadgeClasses(
        variant as any,
        tailwindSize as any,
        cn(
            pill && 'rounded-full',
            className
        )
    );

    return (
        <span className={badgeClasses} {...props}>
            {children}
        </span>
    );
};
