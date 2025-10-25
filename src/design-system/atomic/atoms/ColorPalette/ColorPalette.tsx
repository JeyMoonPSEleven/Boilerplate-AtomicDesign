// src/design-system/atomic/atoms/ColorPalette/ColorPalette.tsx
import React, { useState } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import styles from './ColorPalette.module.css';

export interface ColorPaletteProps {
    colors: Array<{
        name: string;
        value: string;
        description?: string;
        category?: string;
    }>;
    showCopyButton?: boolean;
    showDescription?: boolean;
    groupByColor?: boolean;
    className?: string;
}

export const ColorPalette = React.memo<ColorPaletteProps>(({
    colors,
    showCopyButton = true,
    showDescription = true,
    groupByColor = true,
    className
}) => {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const copyToClipboard = async (text: string, name: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedColor(name);
            setTimeout(() => setCopiedColor(null), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    // Agrupar colores por categoría si está habilitado
    const groupedColors = groupByColor
        ? colors.reduce((acc, color) => {
            const category = color.category || 'Otros';
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(color);
            return acc;
        }, {} as Record<string, typeof colors>)
        : { 'Todos': colors };

    return (
        <div className={`${styles.colorPalette} ${className || ''}`}>
            {Object.entries(groupedColors).map(([category, categoryColors]) => (
                <div key={category} className={styles.colorCategory}>
                    <Text variant="large" weight="bold" className={styles.categoryTitle}>
                        {category}
                    </Text>
                    <div className={styles.colorGrid}>
                        {categoryColors.map((color) => (
                            <div key={color.name} className={styles.colorItem}>
                                <div
                                    className={styles.colorSwatch}
                                    style={{ backgroundColor: color.value }}
                                    onClick={() => copyToClipboard(color.value, color.name)}
                                >
                                    {showCopyButton && (
                                        <div className={styles.copyOverlay}>
                                            <Button
                                                variant="secondary"
                                                size="small"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    copyToClipboard(color.value, color.name);
                                                }}
                                                className={styles.copyButton}
                                            >
                                                {copiedColor === color.name ? (
                                                    <>
                                                        <Icon name="Check" size="small" />
                                                        Copiado!
                                                    </>
                                                ) : (
                                                    <>
                                                        <Icon name="Copy" size="small" />
                                                        Copiar
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    )}
                                </div>
                                <div className={styles.colorDetails}>
                                    <Text variant="small" weight="bold" className={styles.colorName}>
                                        {color.name}
                                    </Text>
                                    <div className={styles.colorValue}>
                                        <Text variant="caption" color="muted">
                                            {color.value}
                                        </Text>
                                    </div>
                                    {showDescription && color.description && (
                                        <Text variant="caption" color="muted" className={styles.colorDescription}>
                                            {color.description}
                                        </Text>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
});

ColorPalette.displayName = 'ColorPalette';