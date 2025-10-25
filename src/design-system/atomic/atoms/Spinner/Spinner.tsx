// src/design-system/atomic/atoms/Spinner/Spinner.tsx
import React from 'react';
import { SpinnerProps } from './Spinner.types';
import styles from './Spinner.module.css';

export const Spinner: React.FC<SpinnerProps> = ({
    variant = 'primary',
    size = 'medium',
    text,
    className,
    ...props
}) => {
    const spinnerClasses = [
        styles.spinner,
        styles[variant],
        styles[size],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={styles.spinnerContainer} {...props}>
            <div className={spinnerClasses} role="status" aria-label="Loading">
                <span className={styles.srOnly}>Loading...</span>
            </div>
            {text && <span className={styles.text}>{text}</span>}
        </div>
    );
};
