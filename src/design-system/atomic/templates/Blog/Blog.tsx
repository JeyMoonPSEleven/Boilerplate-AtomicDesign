import React from 'react';
import { BlogTemplateProps } from './Blog.types';
import styles from './Blog.module.css';
import { Heading, Text } from '../../atoms';
import { Footer } from '../../organisms/Footer';

const BlogTemplate: React.FC<BlogTemplateProps> = ({
    children,
    showSidebar = false,
    showHeader = true,
    showFooter = true,
    headerTitle = 'Blog',
    headerSubtitle = 'Artículos y noticias',
    className,
}) => {
    return (
        <div className={`${styles.blogTemplate} ${className}`}>
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
                        {/* Sidebar content can be passed as children or configured */}
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

export default BlogTemplate;
