import React from 'react';
import { LayoutBase } from '../templates';
import { Card } from '../molecules/Card';
import { Button, Heading, Text, Badge } from '../atoms';
import { cn } from '../../utils/cn';

export const ComponentsPage: React.FC = () => {
    const components = [
        {
            category: 'Atoms',
            items: [
                { name: 'Button', description: 'Botones con múltiples variantes y estados' },
                { name: 'Input', description: 'Campos de entrada con validación' },
                { name: 'Text', description: 'Texto con diferentes variantes tipográficas' },
                { name: 'Icon', description: 'Iconos SVG escalables' },
                { name: 'Badge', description: 'Etiquetas para estados y categorías' },
                { name: 'Avatar', description: 'Avatares de usuario con fallbacks' },
            ],
        },
        {
            category: 'Molecules',
            items: [
                { name: 'Card', description: 'Tarjetas de contenido con variantes' },
                { name: 'Modal', description: 'Ventanas modales con diferentes tamaños' },
                { name: 'Form', description: 'Formularios con validación integrada' },
                { name: 'SearchBar', description: 'Barra de búsqueda con filtros' },
                { name: 'Tabs', description: 'Pestañas navegables' },
                { name: 'Alert', description: 'Alertas con diferentes tipos' },
            ],
        },
        {
            category: 'Organisms',
            items: [
                { name: 'Header', description: 'Cabecera de navegación principal' },
                { name: 'Footer', description: 'Pie de página con enlaces' },
                { name: 'Hero', description: 'Sección hero con call-to-action' },
                { name: 'Dashboard', description: 'Panel de control con widgets' },
                { name: 'ContactForm', description: 'Formulario de contacto completo' },
                { name: 'Testimonials', description: 'Testimonios de clientes' },
            ],
        },
    ];

    return (
        <LayoutBase>
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <Heading level={1} className="text-4xl font-bold text-gray-900 mb-4">
                            Componentes del Sistema de Diseño
                        </Heading>
                        <Text variant="large" className="text-gray-600 max-w-3xl mx-auto">
                            Explora todos los componentes disponibles organizados por categorías según la metodología Atomic Design
                        </Text>
                    </div>

                    {/* Components Grid */}
                    <div className="space-y-12">
                        {components.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Heading level={2} className="text-2xl font-semibold text-gray-900">
                                        {category.category}
                                    </Heading>
                                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                        {category.items.length} componentes
                                    </Badge>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.items.map((component, componentIndex) => (
                                        <Card
                                            key={componentIndex}
                                            variant="default"
                                            className="hover:shadow-lg transition-shadow duration-300"
                                        >
                                            <div className="p-6">
                                                <div className="flex items-start justify-between mb-4">
                                                    <Heading level={3} className="text-lg font-semibold text-gray-900">
                                                        {component.name}
                                                    </Heading>
                                                    <Badge variant="primary" className="bg-green-100 text-green-800">
                                                        Disponible
                                                    </Badge>
                                                </div>

                                                <Text variant="body" className="text-gray-600 mb-4">
                                                    {component.description}
                                                </Text>

                                                <div className="flex gap-2">
                                                    <Button variant="primary" size="small">
                                                        Ver Demo
                                                    </Button>
                                                    <Button variant="secondary" size="small">
                                                        Documentación
                                                    </Button>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Info */}
                    <div className="mt-16 text-center">
                        <Card variant="outlined" className="bg-blue-50 border-blue-200">
                            <div className="p-8">
                                <Heading level={3} className="text-xl font-semibold text-blue-900 mb-4">
                                    ¿Necesitas ayuda?
                                </Heading>
                                <Text variant="body" className="text-blue-800 mb-6">
                                    Si tienes preguntas sobre cómo usar estos componentes o necesitas personalizaciones específicas,
                                    no dudes en contactarnos.
                                </Text>
                                <div className="flex gap-4 justify-center">
                                    <Button variant="primary">
                                        Contactar Soporte
                                    </Button>
                                    <Button variant="secondary">
                                        Ver Documentación
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </LayoutBase>
    );
};

export default ComponentsPage;