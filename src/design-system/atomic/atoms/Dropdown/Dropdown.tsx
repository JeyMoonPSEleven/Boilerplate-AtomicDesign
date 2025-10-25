// src/design-system/atomic/atoms/Dropdown/Dropdown.tsx
import React, { useState, useRef, useEffect } from 'react';
import { DropdownProps } from './Dropdown.types';
import { cn } from '../../../utils';
import { Icon } from '../Icon';
import styles from './Dropdown.module.css';

export const Dropdown: React.FC<DropdownProps> = ({
    label,
    options,
    value,
    onChange,
    placeholder = 'Seleccionar...',
    disabled = false,
    required = false,
    error = false,
    helperText,
    size = 'medium',
    className,
    searchable = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownId = `dropdown-${Math.random().toString(36).substr(2, 9)}`;

    const filteredOptions = searchable
        ? options.filter(option =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : options;

    const selectedOption = options.find(option => option.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
            if (!isOpen) {
                setSearchTerm('');
            }
        }
    };

    const handleOptionClick = (optionValue: string) => {
        if (!disabled && onChange) {
            onChange(optionValue);
            setIsOpen(false);
            setSearchTerm('');
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (disabled) return;

        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                handleToggle();
                break;
            case 'Escape':
                setIsOpen(false);
                setSearchTerm('');
                break;
        }
    };

    return (
        <div className={cn(styles.dropdownGroup, className)} ref={dropdownRef}>
            {label && (
                <label
                    htmlFor={dropdownId}
                    className={cn(
                        styles.dropdownLabel,
                        styles[size],
                        disabled && styles.disabled,
                        error && styles.error
                    )}
                >
                    {label}
                    {required && <span style={{ color: 'var(--color-danger-500)', marginLeft: '4px' }}>*</span>}
                </label>
            )}

            <div className={styles.dropdownContainer}>
                <div
                    className={cn(
                        styles.dropdownTrigger,
                        styles[size],
                        isOpen && styles.open,
                        disabled && styles.disabled,
                        error && styles.error
                    )}
                    onClick={handleToggle}
                    onKeyDown={handleKeyDown}
                    role="button"
                    tabIndex={disabled ? -1 : 0}
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                >
                    <span>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    <Icon
                        name="chevron-down"
                        size={size === 'small' ? 'small' : size === 'large' ? 'large' : 'medium'}
                        className={cn(styles.dropdownIcon, isOpen && styles.open)}
                    />
                </div>

                {isOpen && (
                    <div className={styles.dropdownMenu}>
                        {searchable && (
                            <div className={styles.dropdownSearch}>
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className={styles.dropdownSearchInput}
                                    autoFocus
                                />
                            </div>
                        )}

                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className={cn(
                                        styles.dropdownOption,
                                        styles[size],
                                        option.value === value && styles.selected,
                                        option.disabled && styles.disabled
                                    )}
                                    onClick={() => !option.disabled && handleOptionClick(option.value)}
                                    role="option"
                                    aria-selected={option.value === value}
                                >
                                    {option.icon && (
                                        <Icon
                                            name={option.icon}
                                            size={size === 'small' ? 'small' : size === 'large' ? 'large' : 'medium'}
                                        />
                                    )}
                                    <span>{option.label}</span>
                                </div>
                            ))
                        ) : (
                            <div className={cn(styles.dropdownOption, styles[size])}>
                                <span>No se encontraron opciones</span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {helperText && (
                <div className={cn(styles.helperText, error && styles.error)}>
                    {helperText}
                </div>
            )}
        </div>
    );
};
