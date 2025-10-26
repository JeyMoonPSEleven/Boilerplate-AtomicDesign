// src/design-system/atomic/atoms/Switch/Switch.tsx
import React from 'react';
import { SwitchProps } from './Switch.types';
import { cn } from '../../../utils/cn';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { motion } from 'framer-motion';

export const Switch: React.FC<SwitchProps> = ({
    label,
    checked = false,
    onChange,
    disabled = false,
    required = false,
    error = false,
    helperText,
    size = 'medium',
    className,
    id,
    ...props
}) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    const containerClasses = cn(
        'flex flex-col gap-xs',
        className
    );

    const switchContainerClasses = cn(
        'flex items-center gap-sm cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60'
    );

    const switchClasses = cn(
        'relative inline-flex cursor-pointer transition-all',
        disabled && 'cursor-not-allowed',
        
        // Tamaños del track
        size === 'small' && 'w-8 h-4',
        size === 'medium' && 'w-10 h-5',
        size === 'large' && 'w-12 h-6'
    );

    const trackClasses = cn(
        'relative bg-gray-300 rounded-full transition-all border-2 border-transparent',
        checked && 'bg-primary',
        error && 'bg-danger',
        
        // Tamaños del track
        size === 'small' && 'w-8 h-4',
        size === 'medium' && 'w-10 h-5',
        size === 'large' && 'w-12 h-6'
    );

    const thumbClasses = cn(
        'absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-sm transition-all',
        
        // Tamaños del thumb
        size === 'small' && 'w-3 h-3',
        size === 'medium' && 'w-4 h-4',
        size === 'large' && 'w-5 h-5',
        
        // Posiciones
        size === 'small' && (checked ? 'left-5' : 'left-0.5'),
        size === 'medium' && (checked ? 'left-6' : 'left-0.5'),
        size === 'large' && (checked ? 'left-7' : 'left-0.5')
    );

    const labelClasses = cn(
        'text-base text-gray-700 cursor-pointer select-none flex-1',
        disabled && 'cursor-not-allowed text-gray-400',
        error && 'text-danger-600',
        
        // Tamaños de texto
        size === 'small' && 'text-sm',
        size === 'large' && 'text-lg'
    );

    const helperTextClasses = cn(
        'text-sm text-gray-500 mt-xs',
        error && 'text-danger-600'
    );

    return (
        <div className={containerClasses}>
            <div className={switchContainerClasses}>
                <SwitchPrimitive.Root
                    id={switchId}
                    checked={checked}
                    onCheckedChange={onChange}
                    disabled={disabled}
                    required={required}
                    className={switchClasses}
                    {...props}
                >
                    <SwitchPrimitive.Track className={trackClasses}>
                        <SwitchPrimitive.Thumb asChild>
                            <motion.div
                                className={thumbClasses}
                                animate={{
                                    x: checked ? (size === 'small' ? 16 : size === 'medium' ? 20 : 24) : 2,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30
                                }}
                            />
                        </SwitchPrimitive.Thumb>
                    </SwitchPrimitive.Track>
                </SwitchPrimitive.Root>
                
                {label && (
                    <label
                        htmlFor={switchId}
                        className={labelClasses}
                    >
                        {label}
                        {required && <span className="text-danger-500 ml-xs">*</span>}
                    </label>
                )}
            </div>
            
            {helperText && (
                <div className={helperTextClasses}>
                    {helperText}
                </div>
            )}
        </div>
    );
};