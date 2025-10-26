// src/design-system/atomic/molecules/Card/Card.tsx
import React from 'react';
import { CardProps } from './Card.types';
import { cn } from '../../../utils/cn';
import { motion } from 'framer-motion';

export const Card: React.FC<CardProps> = ({
    variant = 'default',
    padding = 'md',
    children,
    header,
    footer,
    hover = false,
    className,
    ...props
}) => {
    const cardClasses = cn(
        'flex flex-col w-full bg-background border border-border rounded-lg overflow-hidden transition-all',

        // Variantes
        variant === 'default' && 'shadow-sm',
        variant === 'elevated' && 'shadow-lg border-transparent hover:shadow-xl',
        variant === 'outlined' && 'shadow-none border-border hover:border-border-focus',
        variant === 'filled' && 'bg-gray-100 border-transparent hover:bg-gray-200',

        // Padding
        padding === 'none' && 'p-0',
        padding === 'sm' && 'p-sm',
        padding === 'md' && 'p-md',
        padding === 'lg' && 'p-lg',
        padding === 'xl' && 'p-xl',

        // Interacciones
        hover && 'hover:-translate-y-0.5 hover:shadow-md',

        className
    );

    const headerClasses = cn(
        'px-lg py-md border-b border-border-light bg-background-secondary'
    );

    const contentClasses = cn(
        'flex-1',
        !header && !footer && (padding === 'none' ? 'p-0' : padding === 'sm' ? 'p-sm' : padding === 'md' ? 'p-md' : padding === 'lg' ? 'p-lg' : 'p-xl'),
        header && !footer && 'p-md',
        !header && footer && 'p-md',
        header && footer && 'p-md'
    );

    const footerClasses = cn(
        'px-lg py-md border-t border-border-light bg-background-secondary'
    );

    return (
        <motion.div
            className={cardClasses}
            whileHover={hover ? { y: -2 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            {...props}
        >
            {header && (
                <div className={headerClasses}>
                    {header}
                </div>
            )}
            <div className={contentClasses}>
                {children}
            </div>
            {footer && (
                <div className={footerClasses}>
                    {footer}
                </div>
            )}
        </motion.div>
    );
};