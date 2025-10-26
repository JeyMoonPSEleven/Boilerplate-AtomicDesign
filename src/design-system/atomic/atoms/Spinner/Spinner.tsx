// src/design-system/atomic/atoms/Spinner/Spinner.tsx
import React from 'react';
import { SpinnerProps } from './Spinner.types';
import { cn } from '../../../utils/cn';
import { motion } from 'framer-motion';

export const Spinner: React.FC<SpinnerProps> = ({
    variant = 'primary',
    size = 'medium',
    text,
    className,
    ...props
}) => {
    const containerClasses = cn(
        'inline-flex items-center justify-center gap-sm',
        className
    );

    const spinnerClasses = cn(
        'inline-block rounded-full border-2 border-transparent',

        // Tamaños
        size === 'small' && 'w-4 h-4 border-2',
        size === 'medium' && 'w-6 h-6 border-3',
        size === 'large' && 'w-8 h-8 border-4',
        size === 'extraLarge' && 'w-12 h-12 border-5',

        // Variantes de color
        variant === 'primary' && 'border-t-primary-500',
        variant === 'secondary' && 'border-t-secondary-500',
        variant === 'success' && 'border-t-success-500',
        variant === 'danger' && 'border-t-danger-500',
        variant === 'warning' && 'border-t-warning-500',
        variant === 'info' && 'border-t-info-500',
        variant === 'light' && 'border-t-gray-300',
        variant === 'dark' && 'border-t-gray-700'
    );

    const textClasses = cn(
        'text-sm text-text-secondary font-medium'
    );

    return (
        <div className={containerClasses} {...props}>
            <motion.div
                className={spinnerClasses}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }}
                role="status"
                aria-label="Loading"
            >
                <span className="sr-only">Loading...</span>
            </motion.div>
            {text && <span className={textClasses}>{text}</span>}
        </div>
    );
};