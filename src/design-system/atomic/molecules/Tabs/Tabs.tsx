// src/design-system/atomic/molecules/Tabs/Tabs.tsx
import React, { useState } from 'react';
import { TabsProps } from './Tabs.types';
import { cn } from '../../../utils/cn';

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

    const handleTabClick = (tabId: string) => {
        const tab = items.find(item => item.id === tabId);
        if (tab && !tab.disabled) {
            setActiveTab(tabId);
            onTabChange?.(tabId);
        }
    };

    const activeTabContent = items.find(item => item.id === activeTab);

    const tabsClasses = cn(
        'flex',
        variant === 'pills' && 'bg-gray-100 p-1 rounded-lg',
        variant === 'underline' && 'border-b border-gray-200',
        variant === 'default' && 'space-x-1',
        fullWidth && 'w-full',
        className
    );

    const tabClasses = (tabId: string, disabled: boolean) => cn(
        'px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 cursor-pointer',
        size === 'small' && 'px-3 py-1.5 text-xs',
        size === 'large' && 'px-6 py-3 text-base',
        variant === 'pills' && 'rounded-md',
        variant === 'underline' && 'border-b-2 border-transparent',
        activeTab === tabId && variant === 'default' && 'bg-primary-100 text-primary-700',
        activeTab === tabId && variant === 'pills' && 'bg-white text-primary-700 shadow-sm',
        activeTab === tabId && variant === 'underline' && 'border-primary-500 text-primary-600',
        !activeTab && tabId !== activeTab && 'text-gray-500 hover:text-gray-700',
        disabled && 'opacity-50 cursor-not-allowed',
        !disabled && 'hover:text-gray-700'
    );

    return (
        <div className="w-full">
            {/* Tab Headers */}
            <div className={tabsClasses} role="tablist">
                {items.map((item) => (
                    <button
                        key={item.id}
                        role="tab"
                        aria-selected={activeTab === item.id}
                        aria-controls={`tabpanel-${item.id}`}
                        id={`tab-${item.id}`}
                        className={tabClasses(item.id, item.disabled || false)}
                        onClick={() => handleTabClick(item.id)}
                        disabled={item.disabled || false}
                    >
                        {item.icon && (
                            <span className="mr-2">{item.icon}</span>
                        )}
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {activeTabContent && (
                <div
                    role="tabpanel"
                    id={`tabpanel-${activeTab}`}
                    aria-labelledby={`tab-${activeTab}`}
                    className="mt-4"
                >
                    {activeTabContent.content}
                </div>
            )}
        </div>
    );
};

export default Tabs;