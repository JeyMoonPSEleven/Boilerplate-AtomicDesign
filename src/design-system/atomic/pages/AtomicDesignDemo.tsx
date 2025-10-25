// src/design-system/atomic/pages/AtomicDesignDemo.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutBase } from '../templates';

// Atoms
import {
    Button,
    Heading,
    Text,
    Input,
    Checkbox,
    Radio,
    Switch,
    Slider,
    Progress,
    Badge,
    Avatar,
    Icon,
    Image,
    Spinner,
    ColorSwatch,
    ColorPalette
} from '../atoms';

// Enhanced Components
import {
    ButtonEnhanced,
    SelectEnhanced,
    TooltipEnhanced,
    ModalEnhanced
} from '../enhanced';

// Molecules
import {
    Card,
    Modal,
    Alert,
    Accordion,
    Rating
} from '../molecules';

// Organisms - No se usan en esta demo simplificada

import styles from './AtomicDesignDemo.module.css';

const AtomicDesignDemo: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEnhancedModalOpen, setIsEnhancedModalOpen] = useState(false);
    const [selectValue, setSelectValue] = useState('');
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [radioValue, setRadioValue] = useState('option1');
    const [switchValue, setSwitchValue] = useState(false);
    const [sliderValue, setSliderValue] = useState(50);
    const [ratingValue, setRatingValue] = useState(3);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const selectOptions = [
        { value: 'option1', label: 'Opción 1' },
        { value: 'option2', label: 'Opción 2' },
        { value: 'option3', label: 'Opción 3', disabled: true },
        { value: 'option4', label: 'Opción 4' },
    ];

    return (
        <LayoutBase>
            <div className={styles.container}>
                {/* Hero Section */}
                <motion.section
                    className={styles.hero}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <Heading level={1} className={styles.heroTitle}>
                            Sistema de Atomic Design
                        </Heading>
                        <Text className={styles.heroSubtitle}>
                            Una biblioteca completa de componentes reutilizables con Radix UI, Framer Motion y Design Tokens CSS
                        </Text>
                        <div className={styles.heroActions}>
                            <Button variant="primary" size="large">
                                Comenzar
                            </Button>
                            <Button variant="secondary" size="large">
                                Documentación
                            </Button>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Atoms Section */}
                <motion.section
                    className={styles.section}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants}>
                        <Heading level={2} className={styles.sectionTitle}>
                            🧩 Atoms - Componentes Básicos
                        </Heading>
                        <Text className={styles.sectionDescription}>
                            Los elementos más pequeños y fundamentales de nuestro sistema de diseño
                        </Text>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div variants={itemVariants} className={styles.componentGroup}>
                        <Heading level={3}>Botones</Heading>
                        <div className={styles.componentGrid}>
                            <Card className={styles.componentCard}>
                                <Heading level={4}>Botones Básicos</Heading>
                                <div className={styles.buttonGroup}>
                                    <Button variant="primary">Primary</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="danger">Danger</Button>
                                    <Button variant="success">Success</Button>
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Botones Mejorados</Heading>
                                <div className={styles.buttonGroup}>
                                    <ButtonEnhanced
                                        variant="primary"
                                        entranceAnimation="slideUp"
                                        hoverAnimation="lift"
                                        rippleEffect={true}
                                    >
                                        Con Ripple
                                    </ButtonEnhanced>
                                    <ButtonEnhanced
                                        variant="secondary"
                                        entranceAnimation="scaleIn"
                                        hoverAnimation="lift"
                                    >
                                        Con Animación
                                    </ButtonEnhanced>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Form Elements */}
                    <motion.div variants={itemVariants} className={styles.componentGroup}>
                        <Heading level={3}>Elementos de Formulario</Heading>
                        <div className={styles.componentGrid}>
                            <Card className={styles.componentCard}>
                                <Heading level={4}>Inputs</Heading>
                                <div className={styles.formGroup}>
                                    <Input
                                        placeholder="Input básico"
                                        label="Nombre"
                                    />
                                    <Input
                                        placeholder="Input con error"
                                        label="Email"
                                        error="Email inválido"
                                    />
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Select Mejorado</Heading>
                                <SelectEnhanced
                                    options={selectOptions}
                                    value={selectValue}
                                    onValueChange={setSelectValue}
                                    placeholder="Seleccionar opción..."
                                    label="Selección"
                                    animation="slideUp"
                                />
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Checkbox & Radio</Heading>
                                <div className={styles.formGroup}>
                                    <Checkbox
                                        checked={checkboxValue}
                                        onChange={setCheckboxValue}
                                        label="Acepto términos y condiciones"
                                    />
                                    <Radio
                                        name="radio-group"
                                        value="option1"
                                        checked={radioValue === 'option1'}
                                        onChange={setRadioValue}
                                        label="Opción 1"
                                    />
                                    <Radio
                                        name="radio-group"
                                        value="option2"
                                        checked={radioValue === 'option2'}
                                        onChange={setRadioValue}
                                        label="Opción 2"
                                    />
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Switch & Slider</Heading>
                                <div className={styles.formGroup}>
                                    <Switch
                                        checked={switchValue}
                                        onChange={setSwitchValue}
                                        label="Notificaciones"
                                    />
                                    <div>
                                        <Text>Volumen: {sliderValue}%</Text>
                                        <Slider
                                            value={sliderValue}
                                            onChange={setSliderValue}
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Display Elements */}
                    <motion.div variants={itemVariants} className={styles.componentGroup}>
                        <Heading level={3}>Elementos de Visualización</Heading>
                        <div className={styles.componentGrid}>
                            <Card className={styles.componentCard}>
                                <Heading level={4}>Badges & Avatars</Heading>
                                <div className={styles.displayGroup}>
                                    <div className={styles.badgeGroup}>
                                        <Badge variant="primary">Primary</Badge>
                                        <Badge variant="success">Success</Badge>
                                        <Badge variant="warning">Warning</Badge>
                                        <Badge variant="danger">Danger</Badge>
                                    </div>
                                    <div className={styles.avatarGroup}>
                                        <Avatar size="small" src="https://via.placeholder.com/40" />
                                        <Avatar size="medium" src="https://via.placeholder.com/60" />
                                        <Avatar size="large" src="https://via.placeholder.com/80" />
                                    </div>
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Progress & Spinner</Heading>
                                <div className={styles.displayGroup}>
                                    <Progress value={75} max={100} />
                                    <div className={styles.spinnerGroup}>
                                        <Spinner size="small" />
                                        <Spinner size="medium" />
                                        <Spinner size="large" />
                                    </div>
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Icons & Images</Heading>
                                <div className={styles.displayGroup}>
                                    <div className={styles.iconGroup}>
                                        <Icon name="heart" size="medium" />
                                        <Icon name="star" size="medium" />
                                        <Icon name="user" size="medium" />
                                        <Icon name="settings" size="medium" />
                                    </div>
                                    <Image
                                        src="https://via.placeholder.com/200x150"
                                        alt="Placeholder"
                                        className={styles.demoImage}
                                    />
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Typography</Heading>
                                <div className={styles.typographyGroup}>
                                    <Heading level={1}>Heading 1</Heading>
                                    <Heading level={2}>Heading 2</Heading>
                                    <Heading level={3}>Heading 3</Heading>
                                    <Text>Texto normal</Text>
                                    <Text variant="small">Texto pequeño</Text>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Color System */}
                    <motion.div variants={itemVariants} className={styles.componentGroup}>
                        <Heading level={3}>Sistema de Colores</Heading>
                        <div className={styles.componentGrid}>
                            <Card className={styles.componentCard}>
                                <Heading level={4}>Paleta de Colores</Heading>
                                <ColorPalette colors={[
                                    { name: 'Primary', value: '#2196f3' },
                                    { name: 'Secondary', value: '#4caf50' },
                                    { name: 'Success', value: '#4caf50' },
                                    { name: 'Warning', value: '#ff9800' },
                                    { name: 'Danger', value: '#f44336' }
                                ]} />
                            </Card>
                            <Card className={styles.componentCard}>
                                <Heading level={4}>Color Swatches</Heading>
                                <div className={styles.colorSwatchGroup}>
                                    <ColorSwatch color="#2196f3" name="Primary" />
                                    <ColorSwatch color="#4caf50" name="Success" />
                                    <ColorSwatch color="#ff9800" name="Warning" />
                                    <ColorSwatch color="#f44336" name="Danger" />
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Molecules Section */}
                <motion.section
                    className={styles.section}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants}>
                        <Heading level={2} className={styles.sectionTitle}>
                            🔗 Molecules - Componentes Compuestos
                        </Heading>
                        <Text className={styles.sectionDescription}>
                            Combinaciones de átomos que forman unidades funcionales
                        </Text>
                    </motion.div>

                    <motion.div variants={itemVariants} className={styles.componentGroup}>
                        <div className={styles.componentGrid}>
                            <Card className={styles.componentCard}>
                                <Heading level={4}>Cards</Heading>
                                <Card variant="elevated" className={styles.demoCard}>
                                    <Heading level={5}>Card Elevada</Heading>
                                    <Text>Esta es una card con elevación</Text>
                                    <Button variant="primary" size="small">Acción</Button>
                                </Card>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Modals</Heading>
                                <div className={styles.buttonGroup}>
                                    <Button
                                        variant="primary"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        Modal Básico
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        onClick={() => setIsEnhancedModalOpen(true)}
                                    >
                                        Modal Mejorado
                                    </Button>
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Alerts</Heading>
                                <div className={styles.alertGroup}>
                                    <Alert variant="success" title="Éxito" message="Operación completada correctamente" />
                                    <Alert variant="warning" title="Advertencia" message="Revisa los datos ingresados" />
                                    <Alert variant="danger" title="Error" message="Ha ocurrido un error" />
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Tooltips</Heading>
                                <div className={styles.buttonGroup}>
                                    <TooltipEnhanced
                                        content="Este es un tooltip mejorado"
                                        side="top"
                                        animation="scale"
                                    >
                                        <Button variant="secondary">Hover me</Button>
                                    </TooltipEnhanced>
                                    <TooltipEnhanced
                                        content="Tooltip con contenido complejo"
                                        side="right"
                                        variant="primary"
                                    >
                                        <Button variant="secondary">Tooltip Derecha</Button>
                                    </TooltipEnhanced>
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Accordion</Heading>
                                <Accordion
                                    items={[
                                        {
                                            id: "1",
                                            title: "¿Qué es Atomic Design?",
                                            content: "Atomic Design es una metodología para crear sistemas de diseño consistentes y escalables."
                                        },
                                        {
                                            id: "2",
                                            title: "¿Cómo funciona?",
                                            content: "Se basa en la creación de componentes desde lo más simple (átomos) hasta lo más complejo (páginas)."
                                        }
                                    ]}
                                />
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Rating</Heading>
                                <Rating
                                    value={ratingValue}
                                    onChange={setRatingValue}
                                    max={5}
                                />
                            </Card>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Organisms Section */}
                <motion.section
                    className={styles.section}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants}>
                        <Heading level={2} className={styles.sectionTitle}>
                            🏗️ Organisms - Componentes Complejos
                        </Heading>
                        <Text className={styles.sectionDescription}>
                            Componentes complejos que combinan múltiples moléculas y átomos
                        </Text>
                    </motion.div>

                    <motion.div variants={itemVariants} className={styles.componentGroup}>
                        <div className={styles.componentGrid}>
                            <Card className={styles.componentCard}>
                                <Heading level={4}>Hero Section</Heading>
                                <div className={styles.demoCard}>
                                    <Heading level={3}>Título Hero</Heading>
                                    <Text>Subtítulo descriptivo</Text>
                                    <div className={styles.buttonGroup}>
                                        <Button variant="primary">Comenzar</Button>
                                        <Button variant="secondary">Saber más</Button>
                                    </div>
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Statistics</Heading>
                                <div className={styles.statsGroup}>
                                    <div className={styles.statItem}>
                                        <Icon name="user" size="large" />
                                        <Text variant="small">Usuarios</Text>
                                        <Heading level={4}>10K+</Heading>
                                    </div>
                                    <div className={styles.statItem}>
                                        <Icon name="folder" size="large" />
                                        <Text variant="small">Proyectos</Text>
                                        <Heading level={4}>500+</Heading>
                                    </div>
                                    <div className={styles.statItem}>
                                        <Icon name="star" size="large" />
                                        <Text variant="small">Satisfacción</Text>
                                        <Heading level={4}>98%</Heading>
                                    </div>
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Testimonials</Heading>
                                <div className={styles.testimonialGroup}>
                                    <div className={styles.testimonialItem}>
                                        <Avatar src="https://via.placeholder.com/60" size="medium" />
                                        <div>
                                            <Text variant="small">Juan Pérez</Text>
                                            <Text variant="small">Desarrollador</Text>
                                            <Text>"Excelente sistema de componentes"</Text>
                                        </div>
                                    </div>
                                    <div className={styles.testimonialItem}>
                                        <Avatar src="https://via.placeholder.com/60" size="medium" />
                                        <div>
                                            <Text variant="small">María García</Text>
                                            <Text variant="small">Diseñadora</Text>
                                            <Text>"Muy fácil de usar y personalizar"</Text>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>FAQ</Heading>
                                <div className={styles.faqGroup}>
                                    <div className={styles.faqItem}>
                                        <Heading level={5}>¿Cómo instalar el sistema?</Heading>
                                        <Text variant="small">Simplemente ejecuta 'pnpm install' y estará listo.</Text>
                                    </div>
                                    <div className={styles.faqItem}>
                                        <Heading level={5}>¿Es responsive?</Heading>
                                        <Text variant="small">Sí, todos los componentes son mobile-first.</Text>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Templates Section */}
                <motion.section
                    className={styles.section}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants}>
                        <Heading level={2} className={styles.sectionTitle}>
                            📄 Templates - Estructuras de Página
                        </Heading>
                        <Text className={styles.sectionDescription}>
                            Plantillas que definen la estructura general de las páginas
                        </Text>
                    </motion.div>

                    <motion.div variants={itemVariants} className={styles.componentGroup}>
                        <div className={styles.componentGrid}>
                            <Card className={styles.componentCard}>
                                <Heading level={4}>Layout Base</Heading>
                                <Text>Estructura base con header, contenido y footer</Text>
                                <div className={styles.templatePreview}>
                                    <div className={styles.templateHeader}>Header</div>
                                    <div className={styles.templateContent}>Contenido Principal</div>
                                    <div className={styles.templateFooter}>Footer</div>
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Dashboard</Heading>
                                <Text>Template para dashboards con sidebar y contenido principal</Text>
                                <div className={styles.templatePreview}>
                                    <div className={styles.templateSidebar}>Sidebar</div>
                                    <div className={styles.templateMain}>Dashboard</div>
                                </div>
                            </Card>

                            <Card className={styles.componentCard}>
                                <Heading level={4}>Landing</Heading>
                                <Text>Template para páginas de aterrizaje con hero y secciones</Text>
                                <div className={styles.templatePreview}>
                                    <div className={styles.templateHero}>Hero</div>
                                    <div className={styles.templateSection}>Sección 1</div>
                                    <div className={styles.templateSection}>Sección 2</div>
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Features Section */}
                <motion.section
                    className={styles.section}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants}>
                        <Heading level={2} className={styles.sectionTitle}>
                            ✨ Características Principales
                        </Heading>
                        <Text className={styles.sectionDescription}>
                            Lo que hace especial a nuestro sistema de diseño
                        </Text>
                    </motion.div>

                    <motion.div variants={itemVariants} className={styles.featuresGrid}>
                        <Card className={styles.featureCard}>
                            <Icon name="palette" size="large" className={styles.featureIcon} />
                            <Heading level={4}>Design Tokens</Heading>
                            <Text>Personalización completa desde CSS con tokens de diseño</Text>
                        </Card>

                        <Card className={styles.featureCard}>
                            <Icon name="accessibility" size="large" className={styles.featureIcon} />
                            <Heading level={4}>Accesibilidad</Heading>
                            <Text>WCAG AA compliance con Radix UI</Text>
                        </Card>

                        <Card className={styles.featureCard}>
                            <Icon name="zap" size="large" className={styles.featureIcon} />
                            <Heading level={4}>Animaciones</Heading>
                            <Text>Framer Motion integrado para transiciones fluidas</Text>
                        </Card>

                        <Card className={styles.featureCard}>
                            <Icon name="smartphone" size="large" className={styles.featureIcon} />
                            <Heading level={4}>Responsive</Heading>
                            <Text>Mobile-first design con Tailwind CSS</Text>
                        </Card>

                        <Card className={styles.featureCard}>
                            <Icon name="shield" size="large" className={styles.featureIcon} />
                            <Heading level={4}>Type Safety</Heading>
                            <Text>TypeScript completo para prevenir errores</Text>
                        </Card>

                        <Card className={styles.featureCard}>
                            <Icon name="layers" size="large" className={styles.featureIcon} />
                            <Heading level={4}>Atomic Design</Heading>
                            <Text>Metodología escalable y mantenible</Text>
                        </Card>
                    </motion.div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    className={styles.ctaSection}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants}>
                        <Card className={styles.ctaCard}>
                            <Heading level={2}>¿Listo para comenzar?</Heading>
                            <Text className={styles.ctaText}>
                                Explora todos los componentes disponibles y comienza a construir tu próxima aplicación
                            </Text>
                            <div className={styles.ctaActions}>
                                <Button variant="primary" size="large">
                                    Ver Documentación
                                </Button>
                                <Button variant="secondary" size="large">
                                    Descargar Código
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                </motion.section>
            </div>

            {/* Modals */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Modal Básico"
                size="medium"
            >
                <Text>Este es un modal básico usando nuestro sistema de componentes.</Text>
                <div className={styles.modalActions}>
                    <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                        Confirmar
                    </Button>
                </div>
            </Modal>

            <ModalEnhanced
                isOpen={isEnhancedModalOpen}
                onClose={() => setIsEnhancedModalOpen(false)}
                title="Modal Mejorado"
                animation="bounce"
                animationDuration="slow"
                size="large"
                footer={
                    <div className={styles.modalActions}>
                        <Button variant="secondary" onClick={() => setIsEnhancedModalOpen(false)}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={() => setIsEnhancedModalOpen(false)}>
                            Confirmar
                        </Button>
                    </div>
                }
            >
                <div className={styles.enhancedModalContent}>
                    <Text>Este es un modal mejorado con Radix UI y Framer Motion.</Text>
                    <div className={styles.featureList}>
                        <div className={styles.featureItem}>
                            <Icon name="check" size="small" />
                            <Text>Accesibilidad completa</Text>
                        </div>
                        <div className={styles.featureItem}>
                            <Icon name="check" size="small" />
                            <Text>Animaciones fluidas</Text>
                        </div>
                        <div className={styles.featureItem}>
                            <Icon name="check" size="small" />
                            <Text>Focus management</Text>
                        </div>
                        <div className={styles.featureItem}>
                            <Icon name="check" size="small" />
                            <Text>Personalización total</Text>
                        </div>
                    </div>
                </div>
            </ModalEnhanced>
        </LayoutBase>
    );
};

export default AtomicDesignDemo;
