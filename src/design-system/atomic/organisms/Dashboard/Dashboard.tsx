import React from 'react';
import { Button, Heading, Text } from '../../atoms';
import { DashboardProps, DashboardWidget } from './Dashboard.types';
import styles from './Dashboard.module.css';

const Dashboard: React.FC<DashboardProps> = ({
    widgets = [
        {
            id: 'total-cases',
            title: 'Total de Casos',
            size: 'small',
            type: 'metric',
            content: (
                <div className={styles.widgetMetric}>
                    <div className={styles.metricValue}>156</div>
                    <div className={styles.metricLabel}>Casos Activos</div>
                    <div className={`${styles.metricChange} ${styles.metricChangePositive}`}>
                        <svg className={styles.metricChangeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                            <polyline points="17,6 23,6 23,12" />
                        </svg>
                        +12% este mes
                    </div>
                </div>
            )
        },
        {
            id: 'success-rate',
            title: 'Tasa de Éxito',
            size: 'small',
            type: 'metric',
            content: (
                <div className={styles.widgetMetric}>
                    <div className={styles.metricValue}>94%</div>
                    <div className={styles.metricLabel}>Casos Ganados</div>
                    <div className={`${styles.metricChange} ${styles.metricChangePositive}`}>
                        <svg className={styles.metricChangeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                            <polyline points="17,6 23,6 23,12" />
                        </svg>
                        +3% este mes
                    </div>
                </div>
            )
        },
        {
            id: 'revenue',
            title: 'Ingresos',
            size: 'small',
            type: 'metric',
            content: (
                <div className={styles.widgetMetric}>
                    <div className={styles.metricValue}>€2.1M</div>
                    <div className={styles.metricLabel}>Compensaciones</div>
                    <div className={`${styles.metricChange} ${styles.metricChangePositive}`}>
                        <svg className={styles.metricChangeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                            <polyline points="17,6 23,6 23,12" />
                        </svg>
                        +18% este mes
                    </div>
                </div>
            )
        },
        {
            id: 'recent-cases',
            title: 'Casos Recientes',
            size: 'large',
            type: 'table',
            content: (
                <table className={styles.table}>
                    <thead className={styles.tableHeader}>
                        <tr>
                            <th className={styles.tableHeaderCell}>Cliente</th>
                            <th className={styles.tableHeaderCell}>Tipo</th>
                            <th className={styles.tableHeaderCell}>Estado</th>
                            <th className={styles.tableHeaderCell}>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.tableRow}>
                            <td className={styles.tableCell}>María González</td>
                            <td className={styles.tableCell}>Accidente de Tráfico</td>
                            <td className={styles.tableCell}>
                                <span style={{ color: 'var(--color-success)' }}>En Proceso</span>
                            </td>
                            <td className={styles.tableCell}>15/01/2024</td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td className={styles.tableCell}>Carlos Ruiz</td>
                            <td className={styles.tableCell}>Accidente Laboral</td>
                            <td className={styles.tableCell}>
                                <span style={{ color: 'var(--color-warning)' }}>Pendiente</span>
                            </td>
                            <td className={styles.tableCell}>12/01/2024</td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td className={styles.tableCell}>Ana Martín</td>
                            <td className={styles.tableCell}>Negligencia Médica</td>
                            <td className={styles.tableCell}>
                                <span style={{ color: 'var(--color-success)' }}>Completado</span>
                            </td>
                            <td className={styles.tableCell}>10/01/2024</td>
                        </tr>
                    </tbody>
                </table>
            )
        },
        {
            id: 'performance-chart',
            title: 'Rendimiento Mensual',
            size: 'medium',
            type: 'chart',
            content: (
                <div className={styles.chart}>
                    <Text variant="body" color="secondary">
                        Gráfico de rendimiento mensual
                    </Text>
                </div>
            )
        },
        {
            id: 'quick-actions',
            title: 'Acciones Rápidas',
            size: 'medium',
            type: 'card',
            content: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    <Button variant="primary" size="medium">
                        Nuevo Caso
                    </Button>
                    <Button variant="secondary" size="medium">
                        Ver Reportes
                    </Button>
                    <Button variant="secondary" size="medium">
                        Configuración
                    </Button>
                </div>
            )
        }
    ],
    title = 'Dashboard',
    subtitle = 'Resumen de tu actividad',
    showHeader = true,
    showSidebar = true,
    sidebarItems = [
        { id: 'overview', label: 'Resumen', href: '/dashboard' },
        { id: 'cases', label: 'Casos', href: '/cases' },
        { id: 'clients', label: 'Clientes', href: '/clients' },
        { id: 'reports', label: 'Reportes', href: '/reports' },
        { id: 'settings', label: 'Configuración', href: '/settings' }
    ],
    className = '',
    onWidgetClick,
    ...props
}) => {
    const handleWidgetClick = (widget: DashboardWidget) => {
        if (onWidgetClick) {
            onWidgetClick(widget);
        }
    };

    const getWidgetSizeClass = (size: string = 'medium') => {
        switch (size) {
            case 'small':
                return styles.widgetSmall;
            case 'large':
                return styles.widgetLarge;
            case 'full':
                return styles.widgetFull;
            default:
                return styles.widgetMedium;
        }
    };

    return (
        <div className={`${styles.dashboard} ${className}`} {...props}>
            {/* Header */}
            {showHeader && (
                <header className={styles.header}>
                    <div className={styles.headerContent}>
                        <div className={styles.headerTitle}>
                            <Heading level={1} variant="heading" className={styles.title}>
                                {title}
                            </Heading>
                            <Text variant="body" color="secondary" className={styles.subtitle}>
                                {subtitle}
                            </Text>
                        </div>
                        <div className={styles.headerActions}>
                            <Button variant="primary" size="medium">
                                Nuevo Caso
                            </Button>
                        </div>
                    </div>
                </header>
            )}

            <div className={styles.main}>
                {/* Sidebar */}
                {showSidebar && (
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarTitle}>Navegación</div>
                        <ul className={styles.sidebarList}>
                            {sidebarItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.href}
                                        className={`${styles.sidebarItem} ${item.id === 'overview' ? styles.sidebarItemActive : ''}`}
                                    >
                                        {item.icon && (
                                            <span className={styles.sidebarIcon}>
                                                {item.icon}
                                            </span>
                                        )}
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}

                {/* Main Content */}
                <main className={styles.content}>
                    {widgets.length > 0 ? (
                        <div className={styles.widgetsGrid}>
                            {widgets.map((widget) => (
                                <div
                                    key={widget.id}
                                    className={`${styles.widget} ${getWidgetSizeClass(widget.size)}`}
                                    onClick={() => handleWidgetClick(widget)}
                                >
                                    <div className={styles.widgetHeader}>
                                        <Heading level={3} variant="subheading" className={styles.widgetTitle}>
                                            {widget.title}
                                        </Heading>
                                    </div>
                                    <div className={styles.widgetContent}>
                                        {widget.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <svg className={styles.emptyStateIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="7" height="7" />
                                <rect x="14" y="3" width="7" height="7" />
                                <rect x="14" y="14" width="7" height="7" />
                                <rect x="3" y="14" width="7" height="7" />
                            </svg>
                            <Text variant="large" className={styles.emptyStateText}>
                                No hay widgets disponibles
                            </Text>
                            <Text variant="body" color="secondary" className={styles.emptyStateSubtext}>
                                Agrega algunos widgets para personalizar tu dashboard
                            </Text>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
