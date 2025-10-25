// src/design-system/atomic/atoms/Image/Image.tsx
import React, { useState } from 'react';
import { ImageProps } from './Image.types';
import { cn } from '../../../utils';
import styles from './Image.module.css';

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width,
    height,
    fit = 'cover',
    position = 'center',
    overlay = false,
    overlayOpacity = 0.5,
    loading = 'lazy',
    className,
    onClick,
    onLoad,
    onError,
}) => {
    const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');

    const handleLoad = () => {
        setImageState('loaded');
        onLoad?.();
    };

    const handleError = () => {
        setImageState('error');
        onError?.();
    };

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const containerStyle: React.CSSProperties = {
        width: width || '100%',
        height: height || 'auto',
    };

    const overlayStyle: React.CSSProperties = {
        backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
    };

    return (
        <div
            className={cn(
                styles.imageContainer,
                onClick && styles.clickable,
                className
            )}
            style={containerStyle}
            onClick={handleClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={(e) => {
                if (onClick && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            {imageState === 'loading' && (
                <div className={cn(styles.loading, styles.image)}>
                    <span>Cargando...</span>
                </div>
            )}

            {imageState === 'error' && (
                <div className={cn(styles.error, styles.image)}>
                    <span>Error al cargar imagen</span>
                </div>
            )}

            <img
                src={src}
                alt={alt}
                className={cn(
                    styles.image,
                    styles[fit],
                    styles[position],
                    imageState !== 'loaded' && 'hidden'
                )}
                loading={loading}
                onLoad={handleLoad}
                onError={handleError}
                style={{ display: imageState === 'loaded' ? 'block' : 'none' }}
            />

            {overlay && imageState === 'loaded' && (
                <div
                    className={styles.overlay}
                    style={overlayStyle}
                />
            )}
        </div>
    );
};
