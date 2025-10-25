import React from 'react';
import { LayoutBase } from '../templates';
import { Card } from '../molecules/Card';
import { Heading, Text, Button } from '../atoms';
import styles from './ExamplesPage.module.css';

export const ExamplesPage: React.FC = () => {
    const examples = [
        {
            title: 'Landing Page',
            description: 'Página de aterrizaje completa con hero, features y CTA',
            image: '/examples/landing.jpg',
            tags: ['Landing', 'Hero', 'Features'],
        },
        {
            title: 'Dashboard',
            description: 'Panel de control con widgets y métricas',
            image: '/examples/dashboard.jpg',
            tags: ['Dashboard', 'Charts', 'Widgets'],
        },
        {
            title: 'E-commerce',
            description: 'Tienda online con catálogo y carrito',
            image: '/examples/ecommerce.jpg',
            tags: ['E-commerce', 'Product', 'Cart'],
        },
        {
            title: 'Blog',
            description: 'Blog con artículos y categorías',
            image: '/examples/blog.jpg',
            tags: ['Blog', 'Articles', 'Categories'],
        },
        {
            title: 'Portfolio',
            description: 'Portfolio personal con proyectos',
            image: '/examples/portfolio.jpg',
            tags: ['Portfolio', 'Projects', 'Gallery'],
        },
        {
            title: 'SaaS App',
            description: 'Aplicación SaaS con autenticación',
            image: '/examples/saas.jpg',
            tags: ['SaaS', 'Auth', 'Settings'],
        },
    ];

    return (
        <LayoutBase>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Heading level={1}>Ejemplos</Heading>
                    <Text className={styles.subtitle}>
                        Inspírate con estos ejemplos de aplicaciones construidas con nuestro sistema
                    </Text>
                </div>

                <div className={styles.examplesGrid}>
                    {examples.map((example, index) => (
                        <Card key={index} className={styles.exampleCard}>
                            <div className={styles.exampleImage}>
                                <div className={styles.placeholderImage}>
                                    {example.title}
                                </div>
                            </div>
                            <div className={styles.exampleContent}>
                                <Heading level={3}>{example.title}</Heading>
                                <Text className={styles.exampleDescription}>
                                    {example.description}
                                </Text>
                                <div className={styles.exampleTags}>
                                    {example.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.exampleActions}>
                                    <Button variant="primary" size="small">
                                        Ver Demo
                                    </Button>
                                    <Button variant="ghost" size="small">
                                        Código
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Card className={styles.ctaCard}>
                        <Heading level={2}>¿Tienes tu propio ejemplo?</Heading>
                        <Text>
                            Comparte tu proyecto construido con nuestro sistema y aparecerá en esta galería.
                        </Text>
                        <Button variant="primary">
                            Enviar Ejemplo
                        </Button>
                    </Card>
                </div>
            </div>
        </LayoutBase>
    );
};
