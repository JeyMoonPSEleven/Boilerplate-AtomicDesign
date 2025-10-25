// src/design-system/atomic/atoms/Select/SelectEnhanced.tsx
import React from 'react';
import * as Select from '@radix-ui/react-select';
import { motion } from 'framer-motion';
import { Icon } from '../Icon';
import { cn } from '../../../utils/cn';

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface SelectEnhancedProps {
    /** Opciones del select */
    options: SelectOption[];
    /** Valor seleccionado */
    value?: string;
    /** Valor por defecto */
    defaultValue?: string;
    /** Callback cuando cambia el valor */
    onValueChange?: (value: string) => void;
    /** Placeholder */
    placeholder?: string;
    /** Si está deshabilitado */
    disabled?: boolean;
    /** Si es requerido */
    required?: boolean;
    /** Tamaño del select */
    size?: 'sm' | 'md' | 'lg';
    /** Variante visual */
    variant?: 'default' | 'outlined' | 'filled';
    /** Clase CSS personalizada */
    className?: string;
    /** ID del componente */
    id?: string;
    /** Nombre del campo */
    name?: string;
    /** Label del campo */
    label?: string;
    /** Mensaje de error */
    error?: string;
    /** Mensaje de ayuda */
    helpText?: string;
    /** Animación de entrada */
    animation?: 'fade' | 'slideUp' | 'scale';
    /** Delay de animación */
    animationDelay?: number;
}

export const SelectEnhanced: React.FC<SelectEnhancedProps> = ({
    options,
    value,
    defaultValue,
    onValueChange,
    placeholder = 'Seleccionar...',
    disabled = false,
    required = false,
    size = 'md',
    variant = 'default',
    className,
    id,
    name,
    label,
    error,
    helpText,
    animation = 'fade',
    animationDelay = 0,
}) => {
    const getAnimationVariants = () => {
        const variants = {
            fade: {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
            },
            slideUp: {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 10 },
            },
            scale: {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
            },
        };

        return variants[animation];
    };

    const sizeClasses = {
        sm: 'h-8 px-sm text-sm',
        md: 'h-10 px-md text-base',
        lg: 'h-12 px-lg text-lg',
    };

    const variantClasses = {
        default: 'bg-bg-primary border-border-primary focus:border-primary-500',
        outlined: 'bg-transparent border-2 border-border-primary focus:border-primary-500',
        filled: 'bg-gray-100 border-0 focus:bg-gray-50',
    };

    const triggerClasses = cn(
        'flex items-center justify-between w-full rounded-md border',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'transition-colors duration-200',
        sizeClasses[size],
        variantClasses[variant],
        error && 'border-danger-500 focus:border-danger-500 focus:ring-danger-500',
        className
    );

    return (
        <motion.div
            className="w-full"
            variants={getAnimationVariants()}
            initial="initial"
            animate="animate"
            transition={{ delay: animationDelay }}
        >
            {/* Label */}
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-text-primary mb-xs"
                >
                    {label}
                    {required && <span className="text-danger-500 ml-xs">*</span>}
                </label>
            )}

            {/* Select */}
            <Select.Root
                value={value}
                defaultValue={defaultValue}
                onValueChange={onValueChange}
                disabled={disabled}
                required={required}
                name={name}
            >
                <Select.Trigger className={triggerClasses} id={id}>
                    <Select.Value placeholder={placeholder} />
                    <Select.Icon asChild>
                        <Icon
                            name="chevron-down"
                            size={size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium'}
                            className="text-text-muted"
                        />
                    </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Content className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-border-primary bg-bg-primary shadow-lg">
                        <Select.ScrollUpButton className="flex h-6 items-center justify-center bg-bg-primary text-text-primary">
                            <Icon name="chevron-up" size="small" />
                        </Select.ScrollUpButton>

                        <Select.Viewport className="p-xs">
                            {options.map((option) => (
                                <Select.Item
                                    key={option.value}
                                    value={option.value}
                                    disabled={option.disabled}
                                    className={cn(
                                        'relative flex cursor-default select-none items-center rounded-sm px-sm py-xs text-sm outline-none',
                                        'focus:bg-primary-50 focus:text-primary-900',
                                        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                        'hover:bg-gray-100'
                                    )}
                                >
                                    <Select.ItemText>{option.label}</Select.ItemText>
                                    <Select.ItemIndicator className="absolute right-0 flex h-3.5 w-3.5 items-center justify-center">
                                        <Icon name="check" size="small" className="text-primary-600" />
                                    </Select.ItemIndicator>
                                </Select.Item>
                            ))}
                        </Select.Viewport>

                        <Select.ScrollDownButton className="flex h-6 items-center justify-center bg-bg-primary text-text-primary">
                            <Icon name="chevron-down" size="small" />
                        </Select.ScrollDownButton>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>

            {/* Error Message */}
            {error && (
                <motion.p
                    className="mt-xs text-sm text-danger-500"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {error}
                </motion.p>
            )}

            {/* Help Text */}
            {helpText && !error && (
                <p className="mt-xs text-sm text-text-muted">
                    {helpText}
                </p>
            )}
        </motion.div>
    );
};

SelectEnhanced.displayName = 'SelectEnhanced';
