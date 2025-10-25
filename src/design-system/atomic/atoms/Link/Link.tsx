// src/design-system/atomic/atoms/Link/Link.tsx
import React from 'react';
import { LinkProps } from './Link.types';
import styles from './Link.module.css';

export const Link: React.FC<LinkProps> = ({
    href,
    variant = 'default',
    size = 'medium',
    children,
    isExternal = false,
    underline = false,
    className,
    ...props
}) => {
    const linkClasses = [
        styles.link,
        styles[variant],
        styles[size],
        underline ? styles.underline : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    if (isExternal) {
        return (
            <a
                href={href}
                className={linkClasses}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <a href={href} className={linkClasses} {...props}>
            {children}
        </a>
    );
};
