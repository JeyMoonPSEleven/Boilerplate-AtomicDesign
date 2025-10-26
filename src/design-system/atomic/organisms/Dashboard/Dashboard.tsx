import React from 'react';
import { Button, Heading, Text } from '../../atoms';
import { DashboardProps, DashboardWidget } from './Dashboard.types';
import { cn } from '../../../utils/cn';

const Dashboard: React.FC<DashboardProps> = ({
    widgets = [
        {
            id: 'total-cases',
            title: 'Total de Casos',
            size: 'small',
            type: 'metric',
            content: (
                <div className="flex flex-col items-center text-center">
                    <div className="text-3xl font-bold text-primary-600">156</div>
                    <div className="text-sm text-gray-600">Casos Activos</div>
                    <div className="flex items-center text-sm text-success-600 mt-1">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <div className="flex flex-col items-center text-center">
                    <div className="text-3xl font-bold text-success-600">94%</div>
                    <div className="text-sm text-gray-600">Casos Ganados</div>
                    <div className="flex items-center text-sm text-success-600 mt-1">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <div className="flex flex-col items-center text-center">
                    <div className="text-3xl font-bold text-primary-600">€2.1M</div>
                    <div className="text-sm text-gray-600">Compensaciones</div>
                    <div className="flex items-center text-sm text-success-600 mt-1">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left font-medium text-gray-700">Cliente</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-700">Tipo</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-700">Estado</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-700">Fecha</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-4 py-2">María González</td>
                                <td className="px-4 py-2">Accidente de Tráfico</td>
                                <td className="px-4 py-2">
                                    <span className="text-success-600">En Proceso</span>
                                </td>
                                <td className="px-4 py-2">15/01/2024</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Carlos Ruiz</td>
                                <td className="px-4 py-2">Accidente Laboral</td>
                                <td className="px-4 py-2">
                                    <span className="text-warning-600">Pendiente</span>
                                </td>
                                <td className="px-4 py-2">12/01/2024</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Ana Martín</td>
                                <td className="px-4 py-2">Negligencia Médica</td>
                                <td className="px-4 py-2">
                                    <span className="text-success-600">Completado</span>
                                </td>
                                <td className="px-4 py-2">10/01/2024</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        },
        {
            id: 'performance-chart',
            title: 'Rendimiento Mensual',
            size: 'medium',
            type: 'chart',
            content: (
                <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg">
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
                <div className="flex flex-col gap-3">
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
                return 'col-span-1';
            case 'large':
                return 'col-span-2';
            case 'full':
                return 'col-span-3';
            default:
                return 'col-span-1';
        }
    };

    return (
        <div className={cn('min-h-screen bg-gray-50', className)} {...props}>
            {/* Header */}
            {showHeader && (
                <header className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <Heading level={1} variant="heading" className="text-gray-900">
                                    {title}
                                </Heading>
                                <Text variant="body" color="secondary" className="mt-1">
                                    {subtitle}
                                </Text>
                            </div>
                            <div>
                                <Button variant="primary" size="medium">
                                    Nuevo Caso
                                </Button>
                            </div>
                        </div>
                    </div>
                </header>
            )}

            <div className="flex">
                {/* Sidebar */}
                {showSidebar && (
                    <aside className="w-64 bg-white shadow-sm min-h-screen">
                        <div className="p-4">
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Navegación</div>
                            <ul className="space-y-2">
                                {sidebarItems.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={item.href}
                                            className={cn(
                                                'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                                                item.id === 'overview'
                                                    ? 'bg-primary-100 text-primary-700'
                                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                            )}
                                        >
                                            {item.icon && (
                                                <span className="mr-3">
                                                    {item.icon}
                                                </span>
                                            )}
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                )}

                {/* Main Content */}
                <main className="flex-1 p-6">
                    {widgets.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {widgets.map((widget) => (
                                <div
                                    key={widget.id}
                                    className={cn(
                                        'bg-white rounded-lg shadow-sm border p-6 cursor-pointer hover:shadow-md transition-shadow',
                                        getWidgetSizeClass(widget.size)
                                    )}
                                    onClick={() => handleWidgetClick(widget)}
                                >
                                    <div className="mb-4">
                                        <Heading level={3} variant="subheading" className="text-gray-900">
                                            {widget.title}
                                        </Heading>
                                    </div>
                                    <div>
                                        {widget.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-center">
                            <svg className="w-12 h-12 text-gray-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="7" height="7" />
                                <rect x="14" y="3" width="7" height="7" />
                                <rect x="14" y="14" width="7" height="7" />
                                <rect x="3" y="14" width="7" height="7" />
                            </svg>
                            <Text variant="large" className="text-gray-900 mb-2">
                                No hay widgets disponibles
                            </Text>
                            <Text variant="body" color="secondary">
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
