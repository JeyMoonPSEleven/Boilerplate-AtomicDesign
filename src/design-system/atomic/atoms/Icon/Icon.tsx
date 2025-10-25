// src/design-system/atomic/atoms/Icon/Icon.tsx
import React from 'react';
import { IconProps } from './Icon.types';
import { cn } from '../../../utils';
import styles from './Icon.module.css';
import * as LucideIcons from 'lucide-react';

export const Icon = React.memo<IconProps>(({
    name,
    size = 'medium',
    variant = 'default',
    children,
    className,
    ...props
}) => {
    const iconClasses = cn(
        styles.icon,
        styles[size],
        styles[variant],
        className
    );

    // Si se proporciona un nombre de icono, usar Lucide React
    if (name && name in LucideIcons) {
        const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] as React.ComponentType<any>;
        return (
            <LucideIcon
                className={iconClasses}
                size={size === 'small' ? 16 : size === 'medium' ? 20 : size === 'large' ? 24 : 20}
                {...props}
            />
        );
    }

    // Si se proporcionan children, renderizar como contenedor
    if (children) {
        return (
            <span className={iconClasses} {...props}>
                {children}
            </span>
        );
    }

    // Fallback: icono por defecto
    return (
        <span className={iconClasses} {...props}>
            <LucideIcons.HelpCircle size={size === 'small' ? 16 : size === 'medium' ? 20 : size === 'large' ? 24 : 20} />
        </span>
    );
});

Icon.displayName = 'Icon';
