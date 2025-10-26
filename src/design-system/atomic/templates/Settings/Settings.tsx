import React from 'react';
import { SettingsTemplateProps } from './Settings.types';
import { cn } from '../../../utils/cn';
import { Heading, Text } from '../../atoms';
import { Footer } from '../../organisms/Footer';

const SettingsTemplate: React.FC<SettingsTemplateProps> = ({
    children,
    showSidebar = true,
    showHeader = true,
    showFooter = true,
    headerTitle = 'Configuración',
    headerSubtitle = 'Personaliza tu experiencia',
    sidebarContent,
    className,
}) => {
    return (
        <div className={`${styles.settingsTemplate} ${className}`}>
            {showHeader && (
                <header className={styles.header}>
                    <div className={styles.headerContent}>
                        <Heading level={1} className={styles.title}>{headerTitle}</Heading>
                        <Text className={styles.subtitle}>{headerSubtitle}</Text>
                    </div>
                </header>
            )}

            <main className={styles.mainContent}>
                <div className={styles.content}>
                    {children}
                </div>
                {showSidebar && (
                    <aside className={styles.sidebar}>
                        {sidebarContent}
                    </aside>
                )}
            </main>

            {showFooter && (
                <footer className={styles.footer}>
                    <Footer />
                </footer>
            )}
        </div>
    );
};

export default SettingsTemplate;
