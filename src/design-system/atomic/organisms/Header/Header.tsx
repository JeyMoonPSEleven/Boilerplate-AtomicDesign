import React, { useState } from 'react';
import { HeaderProps, NavigationItem } from './Header.types';
import { cn } from '../../../utils';
import { Button, Logo, Icon, Link } from '../../atoms';
import styles from './Header.module.css';

export const Header: React.FC<HeaderProps> = ({
    logo,
    logoText = 'MiApp',
    navigation = [],
    ctaText,
    ctaHref,
    phone,
    address,
    variant = 'default',
    className,
    onMenuToggle,
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        onMenuToggle?.();
    };

    const renderNavigationItem = (item: NavigationItem, index: number) => (
        <li key={index} className={styles.navItem}>
            <a
                href={item.href}
                className={styles.navLink}
            >
                {item.label}
                {item.children && item.children.length > 0 && (
                    <Icon name="chevron-down" size="small" />
                )}
            </a>
        </li>
    );

    return (
        <header className={cn(styles.header, styles[variant], className)}>
            <div className={cn(styles.headerContainer, variant === 'centered' && styles.centered)}>
                {/* Logo Section */}
                <div className={styles.logoSection}>
                    {logo || <Logo text={logoText} size="medium" />}
                </div>

                {/* Desktop Navigation */}
                <nav className={cn(styles.navigation, mobileMenuOpen && styles.hidden)}>
                    <ul className={styles.navList}>
                        {navigation.map(renderNavigationItem)}
                    </ul>
                </nav>

                {/* Desktop Actions */}
                <div className={cn(styles.actions, mobileMenuOpen && styles.hidden)}>
                    {phone && (
                        <a href={`tel:${phone}`} className={styles.navLink}>
                            <Icon name="phone" size="small" />
                            {phone}
                        </a>
                    )}
                    {ctaText && ctaHref && (
                        <Link href={ctaHref} variant="primary">
                            <Button variant="primary" size="medium">
                                {ctaText}
                            </Button>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn(styles.mobileMenuButton, mobileMenuOpen && styles.active)}
                    onClick={handleMenuToggle}
                    aria-label="Toggle menu"
                >
                    <Icon
                        name={mobileMenuOpen ? "x" : "menu"}
                        size="medium"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={cn(styles.mobileMenu, mobileMenuOpen && styles.open)}>
                <ul className={styles.mobileNavList}>
                    {navigation.map(renderNavigationItem)}
                </ul>

                <div className={styles.mobileActions}>
                    {phone && (
                        <a href={`tel:${phone}`} className={styles.mobileNavLink}>
                            <Icon name="phone" size="small" />
                            {phone}
                        </a>
                    )}
                    {address && (
                        <div className={styles.mobileNavLink}>
                            <Icon name="map-pin" size="small" />
                            {address}
                        </div>
                    )}
                    {ctaText && ctaHref && (
                        <Link href={ctaHref} variant="primary">
                            <Button variant="primary" size="medium" isFullWidth>
                                {ctaText}
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};
