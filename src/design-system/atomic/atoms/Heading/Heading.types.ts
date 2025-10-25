// src/design-system/atomic/atoms/Heading/Heading.types.ts
import React from 'react';

export type HeadingVariant = 'display' | 'heading' | 'subheading';
export type HeadingColor = 'primary' | 'secondary' | 'muted' | 'accent';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    variant?: HeadingVariant;
    color?: HeadingColor;
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
}
