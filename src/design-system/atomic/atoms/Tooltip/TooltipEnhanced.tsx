// src/design-system/atomic/atoms/Tooltip/TooltipEnhanced.tsx
import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';

export interface TooltipEnhancedProps {
    /** Contenido del tooltip */
    content: React.ReactNode;
    /** Elemento que activa el tooltip */
    children: React.ReactElement;
    /** Posición del tooltip */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /** Alineación del tooltip */
    align?: 'start' | 'center' | 'end';
    /** Delay antes de mostrar el tooltip */
    delayDuration?: number;
    /** Si está deshabilitado */
    disabled?: boolean;
    /** Clase CSS personalizada */
    className?: string;
    /** Variante visual */
    variant?: 'default' | 'dark' | 'light' | 'primary';
    /** Tamaño del tooltip */
    size?: 'sm' | 'md' | 'lg';
    /** Animación de entrada */
    animation?: 'fade' | 'scale' | 'slide';
    /** Si se muestra solo en hover */
    hoverOnly?: boolean;
}

export const TooltipEnhanced: React.FC<TooltipEnhancedProps> = ({
    content,
    children,
    side = 'top',
    align = 'center',
    delayDuration = 300,
    disabled = false,
    className,
    variant = 'default',
    size = 'md',
    animation = 'fade',
    hoverOnly = true,
}) => {
    // hoverOnly se usa para futuras implementaciones
    console.debug('Tooltip hoverOnly:', hoverOnly);
    const getAnimationVariants = () => {
        const variants = {
            fade: {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
            },
            scale: {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.8 },
            },
            slide: {
                initial: {
                    opacity: 0,
                    y: side === 'top' ? 5 : side === 'bottom' ? -5 : 0,
                    x: side === 'left' ? 5 : side === 'right' ? -5 : 0,
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    x: 0,
                },
                exit: {
                    opacity: 0,
                    y: side === 'top' ? 5 : side === 'bottom' ? -5 : 0,
                    x: side === 'left' ? 5 : side === 'right' ? -5 : 0,
                },
            },
        };

        return variants[animation];
    };

    const variantClasses = {
        default: 'bg-gray-900 text-white',
        dark: 'bg-gray-900 text-white',
        light: 'bg-white text-gray-900 border border-gray-200',
        primary: 'bg-primary-500 text-white',
    };

    const sizeClasses = {
        sm: 'px-xs py-xs text-xs',
        md: 'px-sm py-xs text-sm',
        lg: 'px-md py-sm text-base',
    };

    const tooltipClasses = cn(
        'rounded-md shadow-lg z-50',
        'max-w-xs break-words',
        variantClasses[variant],
        sizeClasses[size],
        className
    );

    if (disabled) {
        return children;
    }

    return (
        <Tooltip.Provider delayDuration={delayDuration}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>

                <Tooltip.Portal>
                    <Tooltip.Content
                        side={side}
                        align={align}
                        sideOffset={5}
                        className={tooltipClasses}
                        asChild
                    >
                        <motion.div
                            variants={getAnimationVariants()}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {content}
                            <Tooltip.Arrow
                                className={cn(
                                    'fill-current',
                                    variant === 'light' ? 'fill-white' : 'fill-gray-900'
                                )}
                            />
                        </motion.div>
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

TooltipEnhanced.displayName = 'TooltipEnhanced';
