import React, { useState } from 'react';
import { SearchBarProps } from './SearchBar.types';
import { cn } from '../../../utils/cn';
import { Icon } from '../../atoms/Icon';
import { Button } from '../../atoms/Button';

export const SearchBar: React.FC<SearchBarProps> = ({
    value = '',
    onChange,
    onSearch,
    placeholder = 'Buscar...',
    disabled = false,
    size = 'medium',
    className,
    showClearButton = true,
    showSearchButton = false,
}) => {
    const [internalValue, setInternalValue] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInternalValue(newValue);
        onChange?.(newValue);
    };

    const handleClear = () => {
        setInternalValue('');
        onChange?.('');
    };

    const handleSearch = () => {
        onSearch?.(internalValue);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const sizeClasses = {
        small: 'h-8 px-3 text-sm',
        medium: 'h-10 px-4 text-base',
        large: 'h-12 px-5 text-lg',
    };

    const iconSize = {
        small: 'small',
        medium: 'medium',
        large: 'large',
    }[size];

    return (
        <div className={cn('relative flex items-center', className)}>
            <div className="relative flex-1">
                <Icon
                    name="Search"
                    size={iconSize}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />

                <input
                    type="text"
                    value={internalValue}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={cn(
                        'w-full pl-10 pr-10 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500',
                        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                        'disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed',
                        sizeClasses[size]
                    )}
                />

                {showClearButton && internalValue && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Limpiar búsqueda"
                    >
                        <Icon name="X" size={iconSize} />
                    </button>
                )}
            </div>

            {showSearchButton && (
                <Button
                    variant="primary"
                    size={size}
                    onClick={handleSearch}
                    className="ml-2"
                    disabled={disabled}
                >
                    <Icon name="Search" size={iconSize} />
                </Button>
            )}
        </div>
    );
};

export default SearchBar;