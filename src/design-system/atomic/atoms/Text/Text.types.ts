// src/design-system/atomic/atoms/Text/Text.types.ts
import React from 'react';

export type TextVariant = 'body' | 'caption' | 'small' | 'large';
export type TextColor = 'primary' | 'secondary' | 'muted' | 'accent' | 'success' | 'danger' | 'warning' | 'info';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: TextVariant;
    color?: TextColor;
    children: React.ReactNode;
    weight?: 'light' | 'normal' | 'bold';
    align?: 'left' | 'center' | 'right';
}
