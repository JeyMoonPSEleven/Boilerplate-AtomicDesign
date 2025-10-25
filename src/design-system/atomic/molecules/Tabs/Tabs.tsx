// src/design-system/atomic/molecules/Tabs/Tabs.tsx
import React, { useState } from 'react';
import { TabsProps } from './Tabs.types';
import styles from './Tabs.module.css';

export const Tabs: React.FC<TabsProps> = ({
    items,
    defaultActiveTab,
    onTabChange,
    variant = 'default',
    size = 'medium',
    className,
    fullWidth = false,
}) => {
    const [activeTab, setActiveTab] = useState(
        defaultActiveTab || items.find(item => !item.disabled)?.id || items[0]?.id
    );

    const tabsClasses = [
        styles.tabs,
        styles[variant],
        fullWidth ? styles.fullWidth : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const handleTabClick = (tabId: string) => {
        const tab = items.find(item => item.id === tabId);
        if (tab && !tab.disabled) {
            setActiveTab(tabId);
            onTabChange?.(tabId);
        }
    };

    const activeTabContent = items.find(item => item.id === activeTab)?.content;

    return (
        <div className={styles.tabsContainer}>
            {/* Tab Headers */}
            <div className={tabsClasses} role="tablist">
                {items.map((item) => {
                    const isActive = item.id === activeTab;
                    const isDisabled = item.disabled;

                    const tabClasses = [
                        styles.tab,
                        styles[size],
                        styles[variant],
                        isActive ? styles.active : '',
                        isDisabled ? styles.disabled : '',
                        fullWidth ? styles.fullWidthTab : '',
                    ]
                        .filter(Boolean)
                        .join(' ');

                    return (
                        <button
                            key={item.id}
                            className={tabClasses}
                            onClick={() => handleTabClick(item.id)}
                            disabled={isDisabled}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`tabpanel-${item.id}`}
                            id={`tab-${item.id}`}
                        >
                            {item.icon && (
                                <span className={styles.icon}>
                                    {item.icon}
                                </span>
                            )}
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div
                className={styles.tabContent}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                id={`tabpanel-${activeTab}`}
            >
                {activeTabContent}
            </div>
        </div>
    );
};
