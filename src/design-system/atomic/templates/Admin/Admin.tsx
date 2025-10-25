import React from 'react';
import { AdminTemplateProps } from './Admin.types';
import styles from './Admin.module.css';
import { Heading, Text } from '../../atoms';
import { Footer } from '../../organisms/Footer';

const AdminTemplate: React.FC<AdminTemplateProps> = ({
    children,
    showSidebar = true,
    showHeader = true,
    showFooter = true,
    headerTitle = 'Panel de Administración',
    headerSubtitle = 'Gestiona tu sistema',
    sidebarContent,
    className,
}) => {
    return (
        <div className={`${styles.adminTemplate} ${className}`}>
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

export default AdminTemplate;
