import React, { useState } from 'react';
import { RatingProps } from './Rating.types';
import { cn } from '../../../utils';
import { Icon } from '../../atoms/Icon';
import styles from './Rating.module.css';

export const Rating: React.FC<RatingProps> = ({
    value = 0,
    max = 5,
    onChange,
    readOnly = false,
    size = 'medium',
    className,
    showValue = false,
    allowHalf = false,
}) => {
    const [hoverValue, setHoverValue] = useState<number | null>(null);
    const [isHovering, setIsHovering] = useState(false);

    const getStarFill = (index: number) => {
        const currentValue = isHovering ? hoverValue || 0 : value;
        const starValue = index + 1;

        if (allowHalf) {
            if (currentValue >= starValue) return 'full';
            if (currentValue >= starValue - 0.5) return 'half';
            return 'empty';
        } else {
            return currentValue >= starValue ? 'full' : 'empty';
        }
    };

    const handleStarClick = (index: number) => {
        if (!readOnly && onChange) {
            const newValue = index + 1;
            onChange(newValue);
        }
    };

    const handleStarHover = (index: number) => {
        if (!readOnly) {
            setHoverValue(index + 1);
            setIsHovering(true);
        }
    };

    const handleMouseLeave = () => {
        if (!readOnly) {
            setHoverValue(null);
            setIsHovering(false);
        }
    };

    return (
        <div
            className={cn(styles.rating, className)}
            onMouseLeave={handleMouseLeave}
        >
            {Array.from({ length: max }, (_, index) => {
                const fill = getStarFill(index);

                return (
                    <button
                        key={index}
                        className={cn(
                            styles.ratingStar,
                            styles[size],
                            styles[fill],
                            readOnly && styles.readOnly
                        )}
                        onClick={() => handleStarClick(index)}
                        onMouseEnter={() => handleStarHover(index)}
                        disabled={readOnly}
                        type="button"
                        aria-label={`Rate ${index + 1} out of ${max}`}
                    >
                        <Icon
                            name="star"
                            size={size === 'small' ? 'small' : size === 'large' ? 'large' : 'medium'}
                        />
                    </button>
                );
            })}

            {showValue && (
                <span className={styles.ratingValue}>
                    {value.toFixed(allowHalf ? 1 : 0)}/{max}
                </span>
            )}
        </div>
    );
};
