// src/design-system/atomic/atoms/Avatar/Avatar.tsx
import React from 'react';
import { AvatarProps } from './Avatar.types';
import { cn } from '../../../utils/cn';

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = 'Avatar',
    size = 'medium',
    fallback,
    className,
    onClick,
    disabled = false,
}) => {
    const getInitials = (text: string) => {
        return text
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    // Mapear tamaños a clases Tailwind
    const sizeClasses = {
        small: 'w-sm h-sm text-xs',
        medium: 'w-md h-md text-sm',
        large: 'w-lg h-lg text-base',
        xl: 'w-xl h-xl text-lg',
    };

    const avatarClasses = cn(
        'relative inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-700 font-medium overflow-hidden',
        sizeClasses[size],
        onClick && !disabled && 'cursor-pointer hover:bg-primary-200 transition-colors',
        disabled && 'opacity-50 cursor-not-allowed',
        className
    );

    return (
        <div
            className={avatarClasses}
            onClick={handleClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick && !disabled ? 0 : undefined}
            onKeyDown={(e) => {
                if (onClick && !disabled && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        // Si la imagen falla al cargar, mostrar fallback
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallbackElement = target.nextElementSibling as HTMLElement;
                        if (fallbackElement) {
                            fallbackElement.style.display = 'flex';
                        }
                    }}
                />
            ) : null}

            <div
                className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-700"
                style={{ display: src ? 'none' : 'flex' }}
            >
                {fallback ? getInitials(fallback) : '?'}
            </div>
        </div>
    );
};
