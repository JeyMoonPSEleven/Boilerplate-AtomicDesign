import React from 'react';
import { Header, Sidebar, Dashboard } from '../../organisms';
import { DashboardTemplateProps } from './Dashboard.types';
import styles from './Dashboard.module.css';

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
    children,
    showSidebar = true,
    showHeader = true,
    sidebarItems = [
        { id: 'overview', label: 'Resumen', href: '/dashboard' },
        { id: 'analytics', label: 'Analíticas', href: '/dashboard/analytics' },
        { id: 'users', label: 'Usuarios', href: '/dashboard/users' },
        { id: 'content', label: 'Contenido', href: '/dashboard/content' },
        { id: 'settings', label: 'Configuración', href: '/dashboard/settings' }
    ],
    headerTitle = 'Dashboard',
    headerSubtitle = 'Panel de control principal',
    className = '',
    ...props
}) => {
    const defaultWidgets = [
        {
            id: 'total-users',
            title: 'Total de Usuarios',
            size: 'small' as const,
            type: 'metric' as const,
            content: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 'var(--spacing-xl)' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                        1,234
                    </div>
                    <div style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xs)' }}>
                        Usuarios Registrados
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-success)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                            <polyline points="17,6 23,6 23,12" />
                        </svg>
                        +12% este mes
                    </div>
                </div>
            )
        },
        {
            id: 'revenue',
            title: 'Ingresos',
            size: 'small' as const,
            type: 'metric' as const,
            content: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 'var(--spacing-xl)' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                        €45,678
                    </div>
                    <div style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xs)' }}>
                        Ingresos Totales
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-success)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                            <polyline points="17,6 23,6 23,12" />
                        </svg>
                        +8% este mes
                    </div>
                </div>
            )
        },
        {
            id: 'conversion',
            title: 'Tasa de Conversión',
            size: 'small' as const,
            type: 'metric' as const,
            content: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 'var(--spacing-xl)' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                        3.2%
                    </div>
                    <div style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xs)' }}>
                        Conversión Promedio
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-success)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                            <polyline points="17,6 23,6 23,12" />
                        </svg>
                        +0.3% este mes
                    </div>
                </div>
            )
        },
        {
            id: 'recent-activity',
            title: 'Actividad Reciente',
            size: 'large' as const,
            type: 'table' as const,
            content: (
                <div style={{ padding: 'var(--spacing-lg)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ background: 'var(--color-background-light)' }}>
                            <tr>
                                <th style={{ padding: 'var(--spacing-sm) var(--spacing-md)', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-secondary)', borderBottom: '1px solid var(--color-border-light)' }}>
                                    Usuario
                                </th>
                                <th style={{ padding: 'var(--spacing-sm) var(--spacing-md)', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-secondary)', borderBottom: '1px solid var(--color-border-light)' }}>
                                    Acción
                                </th>
                                <th style={{ padding: 'var(--spacing-sm) var(--spacing-md)', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-secondary)', borderBottom: '1px solid var(--color-border-light)' }}>
                                    Fecha
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                                <td style={{ padding: 'var(--spacing-sm) var(--spacing-md)', color: 'var(--color-text-secondary)' }}>María González</td>
                                <td style={{ padding: 'var(--spacing-sm) var(--spacing-md)', color: 'var(--color-text-secondary)' }}>Creó nueva cuenta</td>
                                <td style={{ padding: 'var(--spacing-sm) var(--spacing-md)', color: 'var(--color-text-secondary)' }}>Hace 2 horas</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                                <td style={{ padding: 'var(--spacing-sm) var(--spacing-md)', color: 'var(--color-text-secondary)' }}>Carlos Ruiz</td>
                                <td style={{ padding: 'var(--spacing-sm) var(--spacing-md)', color: 'var(--color-text-secondary)' }}>Actualizó perfil</td>
                                <td style={{ padding: 'var(--spacing-sm) var(--spacing-md)', color: 'var(--color-text-secondary)' }}>Hace 4 horas</td>
                            </tr>
                            <tr>
                                <td style={{ padding: 'var(--spacing-sm) var(--spacing-md)', color: 'var(--color-text-secondary)' }}>Ana Martín</td>
                                <td style={{ padding: 'var(--spacing-sm) var(--spacing-md)', color: 'var(--color-text-secondary)' }}>Completó compra</td>
                                <td style={{ padding: 'var(--spacing-sm) var(--spacing-md)', color: 'var(--color-text-secondary)' }}>Hace 6 horas</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    ];

    return (
        <div className={`${styles.dashboardTemplate} ${className}`} {...props}>
            {/* Sidebar */}
            {showSidebar && (
                <div className={styles.sidebarContainer}>
                    <Sidebar
                        items={sidebarItems}
                        title="Navegación"
                        logoText="MiApp"
                        variant="default"
                        width="medium"
                        showLogo={true}
                        showTitle={true}
                    />
                </div>
            )}

            <div className={styles.mainContent}>
                {/* Header */}
                {showHeader && (
                    <div className={styles.headerContainer}>
                        <Header
                            logoText="MiApp"
                            navigation={[]}
                            ctaText="Nueva Acción"
                            ctaHref="/dashboard/new"
                            variant="minimal"
                        />
                    </div>
                )}

                {/* Content */}
                <div className={styles.contentContainer}>
                    <div className={styles.content}>
                        {children || (
                            <Dashboard
                                widgets={defaultWidgets}
                                title={headerTitle}
                                subtitle={headerSubtitle}
                                showHeader={false}
                                showSidebar={false}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardTemplate;
