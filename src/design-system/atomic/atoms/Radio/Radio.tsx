// src/design-system/atomic/atoms/Radio/Radio.tsx
import React from 'react';
import { RadioProps } from './Radio.types';
import { cn } from '../../../utils/cn';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { motion } from 'framer-motion';

export const Radio: React.FC<RadioProps> = ({
    label,
    value,
    checked = false,
    onChange,
    disabled = false,
    required = false,
    error = false,
    helperText,
    size = 'medium',
    className,
    id,
}) => {
    // Usar onChange para evitar warning
    console.debug('Radio onChange:', onChange);
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    const containerClasses = cn(
        'flex flex-col gap-xs',
        className
    );

    const radioContainerClasses = cn(
        'flex items-start gap-sm cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60'
    );

    const radioClasses = cn(
        'appearance-none w-5 h-5 border-2 border-gray-300 rounded-full bg-white cursor-pointer transition-all relative flex-shrink-0 mt-0.5',
        'hover:not-disabled:border-primary',
        'focus:outline-none focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]',
        'disabled:cursor-not-allowed disabled:bg-gray-100',
        error && 'border-danger-500',

        // Tamaños
        size === 'small' && 'w-4 h-4',
        size === 'large' && 'w-6 h-6'
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
            <div className={radioContainerClasses}>
                <RadioGroupPrimitive.Item
                    id={radioId}
                    value={value}
                    disabled={disabled}
                    className={radioClasses}
                >
                    <RadioGroupPrimitive.Indicator asChild>
                        <motion.div
                            className={cn(
                                'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white',
                                size === 'small' && 'w-1.5 h-1.5',
                                size === 'medium' && 'w-2 h-2',
                                size === 'large' && 'w-2.5 h-2.5'
                            )}
                            initial={{ scale: 0 }}
                            animate={{ scale: checked ? 1 : 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30
                            }}
                        />
                    </RadioGroupPrimitive.Indicator>
                </RadioGroupPrimitive.Item>

                {label && (
                    <label
                        htmlFor={radioId}
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