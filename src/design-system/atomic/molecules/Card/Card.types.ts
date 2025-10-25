// src/design-system/atomic/molecules/Card/Card.types.ts
import React from 'react';

export type CardVariant = 'default' | 'elevated' | 'outlined';
export type CardPadding = 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    padding?: CardPadding;
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    hover?: boolean;
}
