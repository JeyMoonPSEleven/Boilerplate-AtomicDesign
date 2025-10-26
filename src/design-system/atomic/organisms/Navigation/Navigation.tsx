import React, { useState } from 'react';
import { Button, Logo, Link } from '../../atoms';
import { NavigationProps } from './Navigation.types';
import { cn } from '../../../utils/cn';

const Navigation: React.FC<NavigationProps> = ({
    logo,
    logoText = 'Mi Abogado Accidente',
    items = [
        { label: 'Inicio', href: '/' },
        {
            label: 'Servicios', href: '/servicios', children: [
                { label: 'Accidentes de Tráfico', href: '/servicios/accidentes-trafico' },
                { label: 'Accidentes Laborales', href: '/servicios/accidentes-laborales' },
                { label: 'Negligencia Médica', href: '/servicios/negligencia-medica' }
            ]
        },
        { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
        { label: 'Contacto', href: '/contacto' }
    ],
    ctaText = 'Consulta Gratuita',
    ctaHref = '/contacto',
    phone,
    address,
    className = '',
    variant = 'default',
    ...props
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const getVariantClasses = () => {
        switch (variant) {
            case 'transparent':
                return styles.navigationTransparent;
            case 'sticky':
                return styles.navigationSticky;
            default:
                return styles.navigationDefault;
        }
    };

    const handleDropdownToggle = (itemLabel: string) => {
        setActiveDropdown(activeDropdown === itemLabel ? null : itemLabel);
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`${styles.navigation} ${getVariantClasses()} ${className}`} {...props}>
            <div className={styles.container}>
                {/* Top Bar */}
                {(phone || address) && (
                    <div className={styles.topBar}>
                        <div className={styles.topBarInfo}>
                            {phone && (
                                <div className={styles.topBarItem}>
                                    <svg className={styles.topBarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span>{phone}</span>
                                </div>
                            )}
                            {address && (
                                <div className={styles.topBarItem}>
                                    <svg className={styles.topBarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>{address}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Main Navigation */}
                <div className={styles.mainNav}>
                    {/* Logo */}
                    <div className={styles.logo}>
                        <Link href="/" className={styles.logo}>
                            <Logo src={logo} alt={logoText} size="medium" />
                            <span className={styles.logoText}>{logoText}</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopNav}>
                        {items.map((item) => (
                            <div key={item.label} className={styles.navItem}>
                                {item.children ? (
                                    <div>
                                        <button
                                            className={styles.dropdownButton}
                                            onClick={() => handleDropdownToggle(item.label)}
                                        >
                                            <span>{item.label}</span>
                                            <svg
                                                className={`${styles.dropdownIcon} ${activeDropdown === item.label ? styles.dropdownIconOpen : ''}`}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <polyline points="6,9 12,15 18,9" />
                                            </svg>
                                        </button>

                                        {activeDropdown === item.label && (
                                            <div className={styles.dropdown}>
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className={styles.dropdownItem}
                                                        isExternal={child.isExternal}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={styles.navLink}
                                        isExternal={item.isExternal}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className={styles.ctaSection}>
                        <Button
                            variant="primary"
                            size="medium"
                        >
                            {ctaText}
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileMenuButton}
                        onClick={handleMobileMenuToggle}
                    >
                        {isMobileMenuOpen ? (
                            <svg className={styles.mobileMenuIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg className={styles.mobileMenuIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <div className={styles.mobileMenuContent}>
                            {items.map((item) => (
                                <div key={item.label} className={styles.mobileMenuItem}>
                                    {item.children ? (
                                        <div>
                                            <div className={styles.mobileMenuLabel}>
                                                {item.label}
                                            </div>
                                            <div className={styles.mobileSubmenu}>
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className={styles.mobileSubmenuItem}
                                                        isExternal={child.isExternal}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={styles.mobileMenuLink}
                                            isExternal={item.isExternal}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            <div className={styles.mobileCTA}>
                                <Button
                                    variant="primary"
                                    size="medium"
                                    className={styles.mobileCTAButton}
                                >
                                    {ctaText}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
