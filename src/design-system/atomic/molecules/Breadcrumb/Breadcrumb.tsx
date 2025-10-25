import React from 'react';
import { BreadcrumbProps, BreadcrumbItem } from './Breadcrumb.types';
import { cn } from '../../../utils';
import { Icon } from '../../atoms/Icon';
import styles from './Breadcrumb.module.css';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items,
    separator,
    showHome = true,
    homeHref = '/',
    className,
    size = 'medium',
    onItemClick,
}) => {
    const handleItemClick = (item: BreadcrumbItem) => {
        if (onItemClick) {
            onItemClick(item);
        }
    };

    const allItems = showHome
        ? [{ id: 'home', label: 'Inicio', href: homeHref, icon: <Icon name="home" size="small" /> }, ...items]
        : items;

    const defaultSeparator = <Icon name="chevron-right" size="small" />;

    return (
        <nav
            className={cn(styles.breadcrumb, styles[size], className)}
            aria-label="Breadcrumb"
        >
            {allItems.map((item, index) => {
                const isLast = index === allItems.length - 1;

                return (
                    <React.Fragment key={item.id}>
                        {index > 0 && (
                            <span className={styles.breadcrumbSeparator}>
                                {separator || defaultSeparator}
                            </span>
                        )}

                        {isLast ? (
                            <span className={cn(styles.breadcrumbCurrent, styles[size])}>
                                {item.icon && (
                                    <span className={styles.breadcrumbIcon}>
                                        {item.icon}
                                    </span>
                                )}
                                <span>{item.label}</span>
                            </span>
                        ) : (
                            <button
                                className={cn(styles.breadcrumbLink, styles[size])}
                                onClick={() => handleItemClick(item)}
                                type="button"
                            >
                                {item.icon && (
                                    <span className={styles.breadcrumbIcon}>
                                        {item.icon}
                                    </span>
                                )}
                                <span>{item.label}</span>
                            </button>
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
};
