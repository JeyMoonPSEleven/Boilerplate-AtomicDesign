// src/design-system/atomic/molecules/Modal/Modal.tsx
import React, { useEffect } from 'react';
import { ModalProps } from './Modal.types';
import { Icon } from '../../atoms/Icon';
import styles from './Modal.module.css';

export const Modal: React.FC<ModalProps> = ({
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
}) => {
    // Prevenir scroll del body cuando el modal está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Cerrar con tecla Escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            onClose();
        }
    };

    if (!isOpen) return null;

    const modalClasses = [
        styles.modal,
        styles[size],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                {(showHeader && (title || showCloseButton)) && (
                    <div className={styles.header}>
                        {title && (
                            <h2 className={styles.title}>
                                {title}
                            </h2>
                        )}
                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                className={styles.closeButton}
                                aria-label="Cerrar modal"
                            >
                                <Icon name="close" size="medium" />
                            </button>
                        )}
                    </div>
                )}

                {/* Content */}
                <div className={styles.content}>
                    {children}
                </div>

                {/* Footer */}
                {showFooter && footer && (
                    <div className={styles.footer}>
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};
