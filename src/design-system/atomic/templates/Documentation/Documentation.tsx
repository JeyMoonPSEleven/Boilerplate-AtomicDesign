import React from 'react';
import { DocumentationTemplateProps } from './Documentation.types';
import styles from './Documentation.module.css';
import { Heading, Text } from '../../atoms';
import { Footer } from '../../organisms/Footer';

const DocumentationTemplate: React.FC<DocumentationTemplateProps> = ({
    children,
    showSidebar = true,
    showHeader = true,
    showFooter = true,
    headerTitle = 'Documentación',
    headerSubtitle = 'Guías y referencias',
    sidebarContent,
    className,
}) => {
    return (
        <div className={`${styles.documentationTemplate} ${className}`}>
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

export default DocumentationTemplate;
