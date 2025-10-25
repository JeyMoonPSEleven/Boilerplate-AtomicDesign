// src/design-system/atomic/molecules/Alert/Alert.types.ts
import React from 'react';

export type AlertVariant = 'success' | 'danger' | 'warning' | 'info';
export type AlertSize = 'small' | 'medium' | 'large';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    size?: AlertSize;
    title?: string;
    message: string;
    dismissible?: boolean;
    onDismiss?: () => void;
    show?: boolean;
    icon?: React.ReactNode;
}
