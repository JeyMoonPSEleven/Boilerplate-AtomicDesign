// src/design-system/atomic/atoms/Slider/Slider.tsx
import React, { useState, useRef, useEffect } from 'react';
import { SliderProps } from './Slider.types';
import { cn } from '../../../utils';
import styles from './Slider.module.css';

export const Slider: React.FC<SliderProps> = ({
    label,
    value = 0,
    min = 0,
    max = 100,
    step = 1,
    onChange,
    disabled = false,
    error = false,
    helperText,
    size = 'medium',
    showValue = true,
    className,
    id,
    ...props
}) => {
    const [internalValue, setInternalValue] = useState(value);
    const sliderRef = useRef<HTMLDivElement>(null);
    const sliderId = id || `slider-${Math.random().toString(36).substr(2, 9)}`;

    useEffect(() => {
        setInternalValue(value);
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setInternalValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const percentage = ((internalValue - min) / (max - min)) * 100;

    return (
        <div className={cn(styles.sliderGroup, className)}>
            {label && (
                <label
                    htmlFor={sliderId}
                    className={cn(
                        styles.sliderLabel,
                        styles[size],
                        disabled && styles.disabled,
                        error && styles.error
                    )}
                >
                    {label}
                </label>
            )}

            <div className={styles.sliderContainer}>
                <div
                    ref={sliderRef}
                    className={cn(
                        styles.sliderTrack,
                        styles[size],
                        disabled && styles.disabled,
                        error && styles.error
                    )}
                >
                    <div
                        className={cn(styles.sliderFill, error && styles.error)}
                        style={{ width: `${percentage}%` }}
                    />

                    <div
                        className={cn(
                            styles.sliderThumb,
                            styles[size],
                            disabled && styles.disabled,
                            error && styles.error
                        )}
                        style={{ left: `${percentage}%` }}
                    />

                    <input
                        type="range"
                        id={sliderId}
                        min={min}
                        max={max}
                        step={step}
                        value={internalValue}
                        onChange={handleChange}
                        disabled={disabled}
                        className={styles.sliderInput}
                        {...props}
                    />
                </div>

                {showValue && (
                    <div className={cn(styles.sliderValue, styles[size])}>
                        {internalValue}
                    </div>
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
