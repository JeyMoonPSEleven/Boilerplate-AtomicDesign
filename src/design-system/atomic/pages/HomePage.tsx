import React from 'react';
import { LayoutBase } from '../templates';
import { Hero } from '../organisms/Hero';
import { Card } from '../molecules/Card';
import { Button } from '../atoms/Button';
import { Heading, Text } from '../atoms';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
    return (
        <LayoutBase>
            <Hero
                title="Boilerplate Atomic Design"
                subtitle="Sistema de diseño completo con Tailwind CSS v4 y TypeScript"
                description="Construye aplicaciones modernas y escalables con nuestro sistema de componentes basado en Atomic Design. Incluye más de 50 componentes listos para usar."
                primaryAction={{
                    label: 'Comenzar Ahora',
                    href: '/get-started',
                }}
                secondaryAction={{
                    label: 'Ver Componentes',
                    href: '/components',
                }}
                backgroundImage="/hero-bg.jpg"
            />

            <section className={styles.features}>
                <div className={styles.container}>
                    <Heading level={2} className={styles.sectionTitle}>
                        ¿Por qué elegir nuestro Boilerplate?
                    </Heading>

                    <div className={styles.featuresGrid}>
                        <Card className={styles.featureCard}>
                            <Heading level={3}>🚀 Listo para Producción</Heading>
                            <Text>
                                Componentes probados y optimizados para aplicaciones reales.
                                Incluye tests, documentación y ejemplos de uso.
                            </Text>
                        </Card>

                        <Card className={styles.featureCard}>
                            <Heading level={3}>🎨 Diseño Consistente</Heading>
                            <Text>
                                Sistema de tokens CSS y Atomic Design garantizan consistencia
                                visual en toda tu aplicación.
                            </Text>
                        </Card>

                        <Card className={styles.featureCard}>
                            <Heading level={3}>⚡ TypeScript First</Heading>
                            <Text>
                                Tipado estricto en todos los componentes para mejor experiencia
                                de desarrollo y menos errores.
                            </Text>
                        </Card>

                        <Card className={styles.featureCard}>
                            <Heading level={3}>📱 Responsive</Heading>
                            <Text>
                                Mobile-first approach con breakpoints optimizados para todos
                                los dispositivos.
                            </Text>
                        </Card>

                        <Card className={styles.featureCard}>
                            <Heading level={3}>🌙 Dark Mode</Heading>
                            <Text>
                                Soporte completo para modo oscuro con transiciones suaves
                                y persistencia de preferencias.
                            </Text>
                        </Card>

                        <Card className={styles.featureCard}>
                            <Heading level={3}>♿ Accesible</Heading>
                            <Text>
                                Componentes accesibles siguiendo las pautas WCAG 2.1 AA
                                para inclusión digital.
                            </Text>
                        </Card>
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <Card className={styles.ctaCard}>
                        <Heading level={2}>¿Listo para comenzar?</Heading>
                        <Text className={styles.ctaText}>
                            Descarga el boilerplate y comienza a construir tu próxima aplicación
                            en minutos, no horas.
                        </Text>
                        <div className={styles.ctaActions}>
                            <Button variant="primary" size="large">
                                Descargar Ahora
                            </Button>
                            <Button variant="secondary" size="large">
                                Ver en GitHub
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>
        </LayoutBase>
    );
};
