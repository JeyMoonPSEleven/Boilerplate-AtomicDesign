// src/design-system/atomic/atoms/Progress/Progress.tsx
import React from 'react';
import { ProgressProps } from './Progress.types';
import styles from './Progress.module.css';

export const Progress: React.FC<ProgressProps> = ({
    value,
    max = 100,
    variant = 'primary',
    size = 'medium',
    showLabel = false,
    label,
    animated = false,
    className,
    ...props
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const progressClasses = [
        styles.progress,
        styles[size],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const barClasses = [
        styles.progressBar,
        styles[variant],
        animated ? styles.animated : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={progressClasses} {...props}>
            {(showLabel || label) && (
                <div className={styles.labelContainer}>
                    {label && <span className={styles.label}>{label}</span>}
                    {showLabel && <span className={styles.percentage}>{Math.round(percentage)}%</span>}
                </div>
            )}
            <div className={styles.progressTrack}>
                <div
                    className={barClasses}
                    style={{ width: `${percentage}%` }}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={max}
                />
            </div>
        </div>
    );
};
