// src/design-system/atomic/atoms/Button/ButtonEnhanced.tsx
import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { ButtonProps } from './Button.types';
import { createButtonClasses } from '../../../utils/cn';

export interface ButtonEnhancedProps extends ButtonProps {
    /** Animación de hover */
    hoverAnimation?: 'lift' | 'scale' | 'glow' | 'none';
    /** Animación de click */
    clickAnimation?: 'bounce' | 'scale' | 'none';
    /** Animación de entrada */
    entranceAnimation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'scaleIn' | 'none';
    /** Delay de animación de entrada */
    entranceDelay?: number;
    /** Duración de animación de entrada */
    entranceDuration?: number;
    /** Si debe mostrar ripple effect */
    rippleEffect?: boolean;
    /** Color del ripple effect */
    rippleColor?: string;
    /** Si debe mostrar loading animation personalizada */
    customLoading?: boolean;
}

export const ButtonEnhanced = React.memo<ButtonEnhancedProps>(({
    variant = 'primary',
    size = 'medium',
    isFullWidth = false,
    isLoading = false,
    children,
    className,
    disabled,
    hoverAnimation = 'lift',
    clickAnimation = 'scale',
    entranceAnimation = 'none',
    entranceDelay = 0,
    entranceDuration = 0.3,
    rippleEffect = true,
    rippleColor = 'rgba(255, 255, 255, 0.3)',
    customLoading = false,
    ...restProps
}) => {
    // Mapear tamaños a los nuevos tamaños de Tailwind
    const sizeMap: Record<string, string> = {
        small: 'sm',
        medium: 'md',
        large: 'lg',
    };

    const tailwindSize = sizeMap[size] || 'md';

    // Generar clases usando la utilidad type-safe
    const buttonClasses = createButtonClasses(
        variant as any,
        tailwindSize as any,
        isFullWidth,
        isLoading,
        className
    );

    // Configurar animaciones de entrada
    const getEntranceVariants = () => {
        if (entranceAnimation === 'none') return {};

        const variants = {
            fadeIn: {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
            },
            slideUp: {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
            },
            slideDown: {
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
            },
            scaleIn: {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
            },
        };

        return {
            ...variants[entranceAnimation],
            transition: {
                duration: entranceDuration,
                delay: entranceDelay,
                ease: "easeOut"
            }
        };
    };

    // Configurar animaciones de hover
    const getHoverVariants = () => {
        if (hoverAnimation === 'none') return {};

        const variants = {
            lift: {
                y: -2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            },
            scale: {
                scale: 1.05,
            },
            glow: {
                boxShadow: "0 0 20px rgba(33, 150, 243, 0.4)",
            },
        };

        return {
            ...variants[hoverAnimation],
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        };
    };

    // Configurar animaciones de click
    const getTapVariants = () => {
        if (clickAnimation === 'none') return {};

        const variants = {
            bounce: {
                scale: 0.95,
                transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                }
            },
            scale: {
                scale: 0.98,
                transition: {
                    duration: 0.1
                }
            },
        };

        return variants[clickAnimation];
    };

    // Manejar ripple effect
    const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!rippleEffect || disabled || isLoading) return;

        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement('span');
        ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: ${rippleColor};
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `;

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    const motionProps: MotionProps = {
        variants: getEntranceVariants(),
        initial: entranceAnimation !== 'none' ? 'initial' : undefined,
        animate: entranceAnimation !== 'none' ? 'animate' : undefined,
        whileHover: !disabled && !isLoading ? getHoverVariants() : undefined,
        whileTap: !disabled && !isLoading ? getTapVariants() : undefined,
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        handleRipple(e);
        restProps.onClick?.(e);
    };

    return (
        <motion.button
            className={buttonClasses}
            disabled={disabled || isLoading}
            aria-busy={isLoading}
            onClick={handleClick}
            {...motionProps}
            {...(restProps as any)}
        >
            {isLoading ? (
                <span className="flex items-center justify-center gap-xs">
                    {customLoading ? (
                        <motion.div
                            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                    ) : (
                        <span className="spinner mr-sm" role="status" aria-label="Cargando" />
                    )}
                    <span>Cargando...</span>
                </span>
            ) : (
                <span className="flex items-center justify-center gap-xs">{children}</span>
            )}

            {/* CSS para ripple effect */}
            <style>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
        </motion.button>
    );
});

ButtonEnhanced.displayName = 'ButtonEnhanced';
