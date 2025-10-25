// src/design-system/atomic/atoms/Radio/Radio.tsx
import React from 'react';
import { RadioProps } from './Radio.types';
import { cn } from '../../../utils';
import styles from './Radio.module.css';

export const Radio: React.FC<RadioProps> = ({
    label,
    value,
    checked = false,
    onChange,
    disabled = false,
    required = false,
    error = false,
    helperText,
    size = 'medium',
    className,
    id,
    ...props
}) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled && onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className={cn(styles.radioGroup, className)}>
            <div className={cn(styles.radioContainer, disabled && styles.disabled)}>
                <input
                    type="radio"
                    id={radioId}
                    value={value}
                    checked={checked}
                    onChange={handleChange}
                    disabled={disabled}
                    required={required}
                    className={cn(
                        styles.radioInput,
                        styles[size],
                        error && styles.error
                    )}
                    {...props}
                />
                {label && (
                    <label
                        htmlFor={radioId}
                        className={cn(
                            styles.radioLabel,
                            styles[size],
                            disabled && styles.disabled,
                            error && styles.error
                        )}
                    >
                        {label}
                        {required && <span style={{ color: 'var(--color-danger-500)', marginLeft: '4px' }}>*</span>}
                    </label>
                )}
            </div>
            {helperText && (
                <div className={cn(styles.helperText, error && styles.error)}>
                    {helperText}
                </div>
            )}
        </div>
    );
};
