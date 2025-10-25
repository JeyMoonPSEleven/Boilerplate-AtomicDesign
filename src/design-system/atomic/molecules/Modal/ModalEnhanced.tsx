// src/design-system/atomic/molecules/Modal/ModalEnhanced.tsx
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../../atoms/Icon';
import { Button } from '../../atoms/Button';
import { cn } from '../../../utils/cn';
import { ModalProps } from './Modal.types';

interface ModalEnhancedProps extends ModalProps {
    /** Animación de entrada */
    animation?: 'fade' | 'slideUp' | 'slideDown' | 'scale' | 'bounce';
    /** Duración de la animación */
    animationDuration?: 'fast' | 'normal' | 'slow';
    /** Delay de la animación */
    animationDelay?: number;
}

export const ModalEnhanced: React.FC<ModalEnhancedProps> = ({
    isOpen,
    onClose,
    title,
    children,
    size = 'medium',
    className,
    closeOnOverlayClick = true,
    showCloseButton = true,
    showHeader = true,
    showFooter = false,
    footer,
    animation = 'slideUp',
    animationDuration = 'normal',
    animationDelay = 0,
}) => {
    // Variables para futuras implementaciones
    console.debug('Modal props:', { closeOnOverlayClick, animationDelay });

    const getAnimationVariants = () => {
        const durationMap = {
            fast: 0.15,
            normal: 0.3,
            slow: 0.5,
        }[animationDuration];

        console.debug('Animation duration:', durationMap);

        const variants = {
            fade: {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
            },
            slideUp: {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 20 },
            },
            slideDown: {
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
            },
            scale: {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.9 },
            },
            bounce: {
                initial: { opacity: 0, scale: 0.3 },
                animate: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }
                },
                exit: { opacity: 0, scale: 0.3 },
            },
        };

        return variants[animation];
    };

    const overlayVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const sizeClasses = {
        small: 'max-w-sm',
        medium: 'max-w-md',
        large: 'max-w-lg',
        'extra-large': 'max-w-xl',
        full: 'max-w-full mx-4',
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Overlay */}
                            <Dialog.Overlay asChild>
                                <motion.div
                                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                                    variants={overlayVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.2 }}
                                />
                            </Dialog.Overlay>

                            {/* Modal Content */}
                            <Dialog.Content asChild>
                                <motion.div
                                    className={cn(
                                        'fixed left-1/2 top-1/2 z-50 w-full transform -translate-x-1/2 -translate-y-1/2',
                                        'bg-bg-primary border border-border-primary rounded-lg shadow-xl',
                                        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                                        sizeClasses[size],
                                        className
                                    )}
                                    variants={getAnimationVariants()}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Header */}
                                    {(showHeader && (title || showCloseButton)) && (
                                        <div className="flex items-center justify-between p-lg border-b border-border-primary">
                                            {title && (
                                                <Dialog.Title className="text-lg font-semibold text-text-primary">
                                                    {title}
                                                </Dialog.Title>
                                            )}
                                            {showCloseButton && (
                                                <Dialog.Close asChild>
                                                    <Button
                                                        variant="secondary"
                                                        size="small"
                                                        className="ml-auto"
                                                        aria-label="Cerrar modal"
                                                    >
                                                        <Icon name="close" size="small" />
                                                    </Button>
                                                </Dialog.Close>
                                            )}
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="p-lg">
                                        {children}
                                    </div>

                                    {/* Footer */}
                                    {showFooter && footer && (
                                        <div className="flex justify-end gap-sm p-lg border-t border-border-primary">
                                            {footer}
                                        </div>
                                    )}
                                </motion.div>
                            </Dialog.Content>
                        </>
                    )}
                </AnimatePresence>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

ModalEnhanced.displayName = 'ModalEnhanced';
