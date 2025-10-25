// src/design-system/atomic/atoms/Logo/Logo.tsx
import React from 'react';
import { LogoProps } from './Logo.types';
import { cn } from '../../../utils';
import styles from './Logo.module.css';

export const Logo: React.FC<LogoProps> = ({
    src,
    alt = 'Logo',
    text,
    size = 'medium',
    className,
    onClick,
    href,
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const logoContent = (
        <>
            {src && (
                <img
                    src={src}
                    alt={alt}
                    className={styles.logoImage}
                />
            )}
            {text && (
                <span className={styles.logoText}>
                    {text}
                </span>
            )}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={cn(styles.logo, styles[size], className)}
                onClick={handleClick}
            >
                {logoContent}
            </a>
        );
    }

    return (
        <div
            className={cn(styles.logo, styles[size], className)}
            onClick={handleClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={(e) => {
                if (onClick && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            {logoContent}
        </div>
    );
};
