// src/design-system/atomic/molecules/Toast/Toast.tsx
import React, { useEffect } from 'react';
import { ToastProps } from './Toast.types';
import { Icon } from '../../atoms/Icon';
import { cn } from '../../../utils/cn';

export const Toast: React.FC<ToastProps> = ({
    variant = 'info',
    title,
    message,
    duration = 5000,
    onClose,
    position = 'top-right',
    className,
    show = true,
}) => {
    // Auto-close después de la duración especificada
    useEffect(() => {
        if (duration > 0 && onClose) {
            const timer = setTimeout(onClose, duration);
            return () => clearTimeout(timer);
        }
        return undefined;
    }, [duration, onClose]);

    if (!show) return null;

    const toastClasses = [
        styles.toast,
        styles[variant],
        styles[position],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const getIconName = () => {
        switch (variant) {
            case 'success': return 'check';
            case 'danger': return 'error';
            case 'warning': return 'warning';
            case 'info': return 'info';
            default: return 'info';
        }
    };

    return (
        <div className={toastClasses} role="alert" aria-live="assertive">
            <div className={styles.toastContent}>
                <div className={styles.iconContainer}>
                    <Icon name={getIconName()} size="small" />
                </div>

                <div className={styles.textContainer}>
                    {title && (
                        <h4 className={styles.title}>
                            {title}
                        </h4>
                    )}
                    <p className={styles.message}>
                        {message}
                    </p>
                </div>

                {onClose && (
                    <button
                        onClick={onClose}
                        className={styles.closeButton}
                        aria-label="Cerrar notificación"
                    >
                        <Icon name="close" size="small" />
                    </button>
                )}
            </div>

            {/* Progress bar */}
            {duration > 0 && (
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{
                            animationDuration: `${duration}ms`,
                            animationName: 'toastProgress'
                        }}
                    />
                </div>
            )}
        </div>
    );
};
