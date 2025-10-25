import React, { useState } from 'react';
import { Logo, Link } from '../../atoms';
import { SidebarProps, SidebarItem } from './Sidebar.types';
import styles from './Sidebar.module.css';

const Sidebar: React.FC<SidebarProps> = ({
    items = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            href: '/dashboard',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                </svg>
            )
        },
        {
            id: 'cases',
            label: 'Casos',
            href: '/cases',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10,9 9,9 8,9" />
                </svg>
            ),
            children: [
                {
                    id: 'active-cases',
                    label: 'Casos Activos',
                    href: '/cases/active'
                },
                {
                    id: 'completed-cases',
                    label: 'Casos Completados',
                    href: '/cases/completed'
                },
                {
                    id: 'new-case',
                    label: 'Nuevo Caso',
                    href: '/cases/new'
                }
            ]
        },
        {
            id: 'clients',
            label: 'Clientes',
            href: '/clients',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            )
        },
        {
            id: 'reports',
            label: 'Reportes',
            href: '/reports',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10" />
                    <path d="M12 20V4" />
                    <path d="M6 20v-6" />
                </svg>
            )
        },
        {
            id: 'settings',
            label: 'Configuración',
            href: '/settings',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            )
        }
    ],
    title = 'Navegación',
    logo,
    logoText = 'Mi App',
    variant = 'default',
    width = 'medium',
    showLogo = true,
    showTitle = true,
    className = '',
    onItemClick,
    ...props
}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const getVariantClasses = () => {
        switch (variant) {
            case 'collapsed':
                return styles.sidebarCollapsed;
            case 'floating':
                return styles.sidebarFloating;
            default:
                return styles.sidebarDefault;
        }
    };

    const getWidthClasses = () => {
        if (isCollapsed) {
            return styles.sidebarCollapsedNarrow;
        }

        switch (width) {
            case 'narrow':
                return styles.sidebarNarrow;
            case 'wide':
                return styles.sidebarWide;
            default:
                return styles.sidebarMedium;
        }
    };

    const handleItemClick = (item: SidebarItem) => {
        if (onItemClick) {
            onItemClick(item);
        }
    };

    const handleToggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const renderNavItem = (item: SidebarItem) => (
        <li key={item.id} className={styles.navItem}>
            <Link
                href={item.href || '#'}
                className={`${styles.navLink} ${item.isActive ? styles.navLinkActive : ''}`}
                onClick={() => handleItemClick(item)}
                isExternal={item.isExternal}
            >
                {item.icon && (
                    <span className={styles.navIcon}>
                        {item.icon}
                    </span>
                )}
                <span className={`${styles.navLabel} ${isCollapsed ? styles.navLabelCollapsed : ''}`}>
                    {item.label}
                </span>
            </Link>

            {item.children && !isCollapsed && (
                <ul className={styles.submenu}>
                    {item.children.map((child) => (
                        <li key={child.id}>
                            <Link
                                href={child.href || '#'}
                                className={`${styles.submenuItem} ${child.isActive ? styles.submenuItemActive : ''}`}
                                onClick={() => handleItemClick(child)}
                                isExternal={child.isExternal}
                            >
                                {child.icon && (
                                    <span className={styles.submenuIcon}>
                                        {child.icon}
                                    </span>
                                )}
                                <span className={`${styles.submenuLabel} ${isCollapsed ? styles.submenuLabelCollapsed : ''}`}>
                                    {child.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );

    return (
        <aside className={`${styles.sidebar} ${getVariantClasses()} ${getWidthClasses()} ${className}`} {...props}>
            {/* Header */}
            <div className={styles.header}>
                {showLogo && (
                    <Link href="/" className={styles.logo}>
                        <Logo src={logo} alt={logoText} size="small" />
                        {!isCollapsed && <span className={styles.logoText}>{logoText}</span>}
                    </Link>
                )}

                {showTitle && !isCollapsed && (
                    <div className={styles.title}>{title}</div>
                )}
            </div>

            {/* Navigation */}
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    {items.map(renderNavItem)}
                </ul>
            </nav>

            {/* Footer */}
            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={`${styles.footerText} ${isCollapsed ? styles.footerTextCollapsed : ''}`}>
                        © 2024 Mi App
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            {variant === 'default' && (
                <button
                    className={styles.toggleButton}
                    onClick={handleToggleCollapse}
                >
                    <svg
                        className={`${styles.toggleIcon} ${isCollapsed ? styles.toggleIconCollapsed : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <polyline points="9,18 15,12 9,6" />
                    </svg>
                </button>
            )}
        </aside>
    );
};

export default Sidebar;
