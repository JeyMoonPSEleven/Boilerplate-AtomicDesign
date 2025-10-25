// src/design-system/atomic/atoms/Text/Text.tsx
import React from 'react';
import { TextProps } from './Text.types';
import styles from './Text.module.css';

export const Text: React.FC<TextProps> = ({
    variant = 'body',
    color = 'primary',
    weight = 'normal',
    align = 'left',
    children,
    className,
    ...props
}) => {
    const textClasses = [
        styles.text,
        styles[variant],
        styles[color],
        styles[weight],
        styles[`align-${align}`],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <span className={textClasses} {...props}>
            {children}
        </span>
    );
};
