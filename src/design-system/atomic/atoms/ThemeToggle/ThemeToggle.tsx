// src/design-system/atomic/atoms/ThemeToggle/ThemeToggle.tsx
import React, { useState, useEffect } from 'react';
import { Icon } from '../Icon';
import { Button } from '../Button';
import styles from './ThemeToggle.module.css';

export interface ThemeToggleProps {
    className?: string;
    showLabel?: boolean;
    size?: 'small' | 'medium' | 'large';
}

export const ThemeToggle = React.memo<ThemeToggleProps>(({
    className,
    showLabel = true,
    size = 'medium'
}) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Verificar preferencia del sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
        } else {
            setIsDark(prefersDark);
        }

        applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
    }, []);

    const applyTheme = (theme: string) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        applyTheme(newTheme);
    };

    return (
        <Button
            variant="secondary"
            size={size}
            onClick={toggleTheme}
            className={`${styles.themeToggle} ${className || ''}`}
            aria-label={`Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`}
        >
            <Icon
                name={isDark ? 'Sun' : 'Moon'}
                size={size === 'small' ? 'small' : 'medium'}
            />
            {showLabel && (
                <span className={styles.label}>
                    {isDark ? 'Claro' : 'Oscuro'}
                </span>
            )}
        </Button>
    );
});

ThemeToggle.displayName = 'ThemeToggle';
