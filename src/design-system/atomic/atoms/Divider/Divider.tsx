// src/design-system/atomic/atoms/Divider/Divider.tsx
import React from 'react';
import { DividerProps } from './Divider.types';
import styles from './Divider.module.css';

export const Divider: React.FC<DividerProps> = ({
    variant = 'solid',
    orientation = 'horizontal',
    thickness = 'medium',
    color = 'default',
    className,
    ...props
}) => {
    const dividerClasses = [
        styles.divider,
        styles[variant],
        styles[orientation],
        styles[thickness],
        styles[color],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return <div className={dividerClasses} {...props} />;
};
