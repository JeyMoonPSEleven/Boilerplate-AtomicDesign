import React, { useState } from 'react';
import { SearchBarProps } from './SearchBar.types';
import { cn } from '../../../utils';
import { Icon } from '../../atoms/Icon';
import styles from './SearchBar.module.css';

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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className={cn(styles.searchBar, className)}>
            <Icon
                name="search"
                size={size === 'small' ? 'small' : size === 'large' ? 'large' : 'medium'}
                className={cn(styles.searchIcon, styles[size])}
            />

            <input
                type="text"
                value={internalValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                disabled={disabled}
                className={cn(styles.searchInput, styles[size])}
            />

            {showClearButton && internalValue && (
                <button
                    type="button"
                    onClick={handleClear}
                    className={cn(
                        styles.clearButton,
                        styles[size],
                        showSearchButton && styles.withSearchButton
                    )}
                    aria-label="Clear search"
                >
                    <Icon name="x" size="small" />
                </button>
            )}

            {showSearchButton && (
                <button
                    type="button"
                    onClick={handleSearch}
                    disabled={disabled}
                    className={cn(styles.searchButton, styles[size])}
                    aria-label="Search"
                >
                    <Icon name="search" size="small" />
                </button>
            )}
        </div>
    );
};
