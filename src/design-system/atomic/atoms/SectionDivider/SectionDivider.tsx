// src/design-system/atomic/atoms/SectionDivider/SectionDivider.tsx
import React from 'react';
import styles from './SectionDivider.module.css';

export interface SectionDividerProps {
    variant?: 'line' | 'dashed' | 'dotted' | 'gradient' | 'text' | 'icon';
    orientation?: 'horizontal' | 'vertical';
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'danger' | 'info';
    text?: string;
    icon?: string;
    className?: string;
}

export const SectionDivider = React.memo<SectionDividerProps>(({
    variant = 'line',
    orientation = 'horizontal',
    size = 'medium',
    color = 'neutral',
    text,
    icon,
    className
}) => {
    const dividerClasses = [
        styles.divider,
        styles[variant],
        styles[orientation],
        styles[size],
        styles[color],
        className
    ].filter(Boolean).join(' ');

    if (variant === 'text' && text) {
        return (
            <div className={dividerClasses}>
                <div className={styles.line} />
                <div className={styles.text}>
                    {icon && <span className={styles.icon}>{icon}</span>}
                    {text}
                </div>
                <div className={styles.line} />
            </div>
        );
    }

    if (variant === 'icon' && icon) {
        return (
            <div className={dividerClasses}>
                <div className={styles.line} />
                <div className={styles.iconContainer}>
                    <span className={styles.icon}>{icon}</span>
                </div>
                <div className={styles.line} />
            </div>
        );
    }

    return <div className={dividerClasses} />;
});

SectionDivider.displayName = 'SectionDivider';
