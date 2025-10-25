// src/design-system/atomic/atoms/Switch/Switch.tsx
import React from 'react';
import { SwitchProps } from './Switch.types';
import { cn } from '../../../utils';
import styles from './Switch.module.css';

export const Switch: React.FC<SwitchProps> = ({
    label,
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
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled && onChange) {
            onChange(event.target.checked);
        }
    };

    return (
        <div className={cn(styles.switchGroup, className)}>
            <div className={cn(styles.switchContainer, disabled && styles.disabled)}>
                <div className={cn(styles.switch, disabled && styles.disabled)}>
                    <input
                        type="checkbox"
                        id={switchId}
                        checked={checked}
                        onChange={handleChange}
                        disabled={disabled}
                        required={required}
                        className={styles.switchInput}
                        {...props}
                    />
                    <div
                        className={cn(
                            styles.switchTrack,
                            styles[size],
                            checked && styles.checked,
                            error && styles.error
                        )}
                    >
                        <div
                            className={cn(
                                styles.switchThumb,
                                styles[size],
                                checked && styles.checked
                            )}
                        />
                    </div>
                </div>
                {label && (
                    <label
                        htmlFor={switchId}
                        className={cn(
                            styles.switchLabel,
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
