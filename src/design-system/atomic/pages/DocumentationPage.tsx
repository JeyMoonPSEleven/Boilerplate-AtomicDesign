import React from 'react';
import { LayoutBase } from '../templates';
import { Card } from '../molecules/Card';
import { Heading, Text, Button } from '../atoms';
import styles from './DocumentationPage.module.css';

export const DocumentationPage: React.FC = () => {
    return (
        <LayoutBase>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Heading level={1}>Documentación</Heading>
                    <Text className={styles.subtitle}>
                        Guías completas para usar nuestro sistema de diseño
                    </Text>
                </div>

                <div className={styles.content}>
                    <div className={styles.sidebar}>
                        <Card className={styles.navCard}>
                            <Heading level={3}>Navegación</Heading>
                            <nav className={styles.nav}>
                                <a href="#getting-started" className={styles.navLink}>Comenzar</a>
                                <a href="#installation" className={styles.navLink}>Instalación</a>
                                <a href="#components" className={styles.navLink}>Componentes</a>
                                <a href="#theming" className={styles.navLink}>Temas</a>
                                <a href="#customization" className={styles.navLink}>Personalización</a>
                                <a href="#best-practices" className={styles.navLink}>Mejores Prácticas</a>
                            </nav>
                        </Card>
                    </div>

                    <div className={styles.main}>
                        <Card className={styles.docCard}>
                            <Heading level={2} id="getting-started">Comenzar</Heading>
                            <Text>
                                Bienvenido al Boilerplate Atomic Design. Este sistema te permitirá crear
                                aplicaciones modernas y escalables con componentes reutilizables.
                            </Text>

                            <Heading level={3} id="installation">Instalación</Heading>
                            <Text>
                                Para comenzar, clona el repositorio e instala las dependencias:
                            </Text>

                            <pre className={styles.codeBlock}>
                                {`git clone https://github.com/JeyMoonPSEleven/Boilerplate-AtomicDesign.git
cd Boilerplate-AtomicDesign
pnpm install
pnpm dev`}
                            </pre>

                            <Heading level={3} id="components">Componentes</Heading>
                            <Text>
                                Nuestro sistema está basado en Atomic Design, con componentes organizados
                                en átomos, moléculas, organismos y templates.
                            </Text>

                            <Heading level={3} id="theming">Temas</Heading>
                            <Text>
                                El sistema incluye soporte completo para modo oscuro y personalización
                                de colores mediante CSS custom properties.
                            </Text>

                            <div className={styles.cta}>
                                <Button variant="primary">
                                    Ver Guía Completa
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </LayoutBase>
    );
};
