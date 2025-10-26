import React from 'react';
import { ProfileTemplateProps } from './Profile.types';
import { cn } from '../../../utils/cn';
import { Heading, Text } from '../../atoms';
import { Footer } from '../../organisms/Footer';

const ProfileTemplate: React.FC<ProfileTemplateProps> = ({
    children,
    showSidebar = true,
    showHeader = true,
    showFooter = true,
    headerTitle = 'Mi Perfil',
    headerSubtitle = 'Gestiona tu información personal',
    sidebarContent,
    className,
}) => {
    return (
        <div className={`${styles.profileTemplate} ${className}`}>
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

export default ProfileTemplate;
