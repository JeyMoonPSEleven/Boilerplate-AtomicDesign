// src/design-system/atomic/molecules/Card/Card.tsx
import React from 'react';
import { CardProps } from './Card.types';
import { cn, createCardClasses } from '../../../utils/cn';

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
    // Mapear padding a clases Tailwind
    const paddingClasses = {
        none: 'p-0',
        sm: 'p-sm',
        md: 'p-md',
        lg: 'p-lg',
        xl: 'p-xl',
    };

    const cardClasses = createCardClasses(
        variant,
        cn(
            paddingClasses[padding],
            hover && 'hover:shadow-md transition-shadow duration-base',
            className
        )
    );

    return (
        <div className={cardClasses} {...props}>
            {header && (
                <div className="border-b border-border-light p-md">
                    {header}
                </div>
            )}
            <div className={cn(
                'flex-1',
                !header && !footer && paddingClasses[padding],
                header && !footer && 'p-md',
                !header && footer && 'p-md',
                header && footer && 'p-md'
            )}>
                {children}
            </div>
            {footer && (
                <div className="border-t border-border-light p-md">
                    {footer}
                </div>
            )}
        </div>
    );
};
