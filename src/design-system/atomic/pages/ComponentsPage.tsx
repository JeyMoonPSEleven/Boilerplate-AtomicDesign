import React from 'react';
import { LayoutBase } from '../templates';
import { Card } from '../molecules/Card';
import { Button, Heading, Text, Badge } from '../atoms';
import styles from './ComponentsPage.module.css';

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
                { name: 'Card', description: 'Tarjetas de contenido flexibles' },
                { name: 'Form', description: 'Formularios con validación integrada' },
                { name: 'Modal', description: 'Modales accesibles y responsivos' },
                { name: 'Alert', description: 'Alertas y notificaciones' },
                { name: 'SearchBar', description: 'Barra de búsqueda con filtros' },
                { name: 'Pagination', description: 'Navegación de páginas' },
            ],
        },
        {
            category: 'Organisms',
            items: [
                { name: 'Header', description: 'Cabecera con navegación completa' },
                { name: 'Footer', description: 'Pie de página con enlaces y contacto' },
                { name: 'Navigation', description: 'Navegación principal y secundaria' },
                { name: 'Hero', description: 'Sección hero con CTA' },
                { name: 'ContactForm', description: 'Formulario de contacto completo' },
                { name: 'Testimonials', description: 'Testimonios y reseñas' },
            ],
        },
        {
            category: 'Templates',
            items: [
                { name: 'LayoutBase', description: 'Layout base con header y footer' },
                { name: 'Landing', description: 'Template para páginas de aterrizaje' },
                { name: 'Dashboard', description: 'Template para dashboards' },
                { name: 'Authentication', description: 'Template para autenticación' },
                { name: 'Documentation', description: 'Template para documentación' },
                { name: 'Error', description: 'Template para páginas de error' },
            ],
        },
    ];

    return (
        <LayoutBase>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Heading level={1}>Componentes</Heading>
                    <Text className={styles.subtitle}>
                        Explora nuestra biblioteca completa de componentes basados en Atomic Design
                    </Text>
                </div>

                {components.map((section) => (
                    <section key={section.category} className={styles.section}>
                        <Heading level={2} className={styles.sectionTitle}>
                            {section.category}
                            <Badge variant="secondary" className={styles.badge}>
                                {section.items.length}
                            </Badge>
                        </Heading>

                        <div className={styles.componentsGrid}>
                            {section.items.map((component) => (
                                <Card key={component.name} className={styles.componentCard}>
                                    <div className={styles.componentHeader}>
                                        <Heading level={3}>{component.name}</Heading>
                                        <Badge variant="outline">{section.category}</Badge>
                                    </div>
                                    <Text className={styles.componentDescription}>
                                        {component.description}
                                    </Text>
                                    <div className={styles.componentActions}>
                                        <Button variant="ghost" size="small">
                                            Ver Ejemplo
                                        </Button>
                                        <Button variant="ghost" size="small">
                                            Documentación
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>
                ))}

                <section className={styles.cta}>
                    <Card className={styles.ctaCard}>
                        <Heading level={2}>¿Necesitas un componente personalizado?</Heading>
                        <Text>
                            Nuestro sistema está diseñado para ser extensible. Puedes crear tus propios
                            componentes siguiendo nuestros patrones de Atomic Design.
                        </Text>
                        <Button variant="primary">
                            Guía de Desarrollo
                        </Button>
                    </Card>
                </section>
            </div>
        </LayoutBase>
    );
};
