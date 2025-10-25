// src/design-system/atomic/molecules/Alert/Alert.tsx
import React from 'react';
import { AlertProps } from './Alert.types';
import { Icon } from '../../atoms/Icon';
import styles from './Alert.module.css';

export const Alert: React.FC<AlertProps> = ({
    variant = 'info',
    size = 'medium',
    title,
    message,
    dismissible = false,
    onDismiss,
    show = true,
    icon,
    className,
    ...props
}) => {
    if (!show) return null;

    const alertClasses = [
        styles.alert,
        styles[variant],
        styles[size],
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
        <div className={alertClasses} role="alert" {...props}>
            <div className={styles.alertContent}>
                <div className={styles.iconContainer}>
                    {icon || <Icon name={getIconName()} size="medium" />}
                </div>
                <div className={styles.textContainer}>
                    {title && (
                        <h3 className={styles.title}>
                            {title}
                        </h3>
                    )}
                    <p className={styles.message}>
                        {message}
                    </p>
                </div>
                {dismissible && (
                    <button
                        onClick={onDismiss}
                        className={styles.dismissButton}
                        aria-label="Cerrar alerta"
                    >
                        <Icon name="close" size="small" />
                    </button>
                )}
            </div>
        </div>
    );
};
