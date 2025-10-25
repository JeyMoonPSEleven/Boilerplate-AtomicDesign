// src/design-system/atomic/atoms/Checkbox/Checkbox.tsx
import React from 'react';
import { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.css';

export const Checkbox: React.FC<CheckboxProps> = ({
    checked = false,
    onChange,
    label,
    disabled = false,
    required = false,
    error = false,
    helperText,
    size = 'medium',
    className,
    id,
    ...props
}) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    const checkboxClasses = [
        styles.checkbox,
        styles[size],
        error ? styles.error : '',
        disabled ? styles.disabled : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={styles.checkboxContainer}>
            <div className={styles.checkboxWrapper}>
                <input
                    id={checkboxId}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange?.(e.target.checked)}
                    disabled={disabled}
                    required={required}
                    className={checkboxClasses}
                    {...props}
                />
                <span className={styles.checkmark}></span>
            </div>
            {label && (
                <label htmlFor={checkboxId} className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            {helperText && (
                <span className={`${styles.helperText} ${error ? styles.errorText : ''}`}>
                    {helperText}
                </span>
            )}
        </div>
    );
};
