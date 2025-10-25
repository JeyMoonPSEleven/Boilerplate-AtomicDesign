// src/design-system/atomic/atoms/Select/Select.tsx
import React from 'react';
import { SelectProps } from './Select.types';
import { cn } from '../../../utils';
import { Icon } from '../Icon';
import styles from './Select.module.css';

export const Select: React.FC<SelectProps> = ({
    label,
    options,
    value,
    onChange,
    placeholder = 'Seleccionar...',
    disabled = false,
    required = false,
    error = false,
    helperText,
    size = 'medium',
    className,
    id,
    ...props
}) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (!disabled && onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className={cn(styles.selectGroup, className)}>
            {label && (
                <label
                    htmlFor={selectId}
                    className={cn(
                        styles.selectLabel,
                        styles[size],
                        disabled && styles.disabled,
                        error && styles.error
                    )}
                >
                    {label}
                    {required && <span style={{ color: 'var(--color-danger-500)', marginLeft: '4px' }}>*</span>}
                </label>
            )}

            <div className={styles.selectContainer}>
                <select
                    id={selectId}
                    value={value || ''}
                    onChange={handleChange}
                    disabled={disabled}
                    required={required}
                    className={cn(
                        styles.select,
                        styles[size],
                        error && styles.error
                    )}
                    {...props}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>

                <Icon
                    name="chevron-down"
                    size={size === 'small' ? 'small' : size === 'large' ? 'large' : 'medium'}
                    className={cn(styles.selectIcon, styles[size])}
                />
            </div>

            {helperText && (
                <div className={cn(styles.helperText, error && styles.error)}>
                    {helperText}
                </div>
            )}
        </div>
    );
};
