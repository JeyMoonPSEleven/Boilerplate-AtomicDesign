// src/design-system/atomic/atoms/ColorSwatch/ColorSwatch.tsx
import React from 'react';
import { ColorSwatchProps } from './ColorSwatch.types';
import { cn } from '../../../utils';
import { Icon } from '../Icon';
import styles from './ColorSwatch.module.css';

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
    color,
    name,
    size = 'medium',
    showName = true,
    className,
    onClick,
    selected = false,
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick(color);
        }
    };

    return (
        <div
            className={cn(
                styles.colorSwatch,
                selected && styles.selected,
                className
            )}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                }
            }}
        >
            <div
                className={cn(
                    styles.colorBox,
                    styles[size],
                    selected && styles.selected
                )}
                style={{ backgroundColor: color }}
            >
                {selected && (
                    <Icon
                        name="check"
                        className={styles.checkIcon}
                    />
                )}
            </div>

            {showName && name && (
                <div className={cn(styles.colorName, styles[size])}>
                    {name}
                </div>
            )}
        </div>
    );
};
