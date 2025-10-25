// src/design-system/atomic/enhanced/EnhancedComponentsDemo.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ButtonEnhanced,
    SelectEnhanced,
    TooltipEnhanced,
    ModalEnhanced,
    EnhancedSelectOption
} from './index';
import { Button } from '../atoms/Button';

const EnhancedComponentsDemo: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectValue, setSelectValue] = useState('');

    const selectOptions: EnhancedSelectOption[] = [
        { value: 'option1', label: 'Opción 1' },
        { value: 'option2', label: 'Opción 2' },
        { value: 'option3', label: 'Opción 3', disabled: true },
        { value: 'option4', label: 'Opción 4' },
    ];

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

    return (
        <motion.div
            className="p-lg space-y-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold text-text-primary mb-lg">
                    Componentes Mejorados con Radix UI y Framer Motion
                </h2>
            </motion.div>

            {/* Botones Mejorados */}
            <motion.section variants={itemVariants} className="space-y-md">
                <h3 className="text-xl font-semibold text-text-primary">Botones con Animaciones</h3>
                <div className="flex flex-wrap gap-md">
                    <ButtonEnhanced
                        variant="primary"
                        entranceAnimation="slideUp"
                        hoverAnimation="lift"
                        clickAnimation="bounce"
                        rippleEffect={true}
                    >
                        Botón con Ripple
                    </ButtonEnhanced>

                    <ButtonEnhanced
                        variant="secondary"
                        entranceAnimation="scaleIn"
                        entranceDelay={0.2}
                        hoverAnimation="glow"
                        clickAnimation="scale"
                        customLoading={true}
                    >
                        Botón con Glow
                    </ButtonEnhanced>

                    <ButtonEnhanced
                        variant="danger"
                        entranceAnimation="fadeIn"
                        entranceDelay={0.4}
                        hoverAnimation="scale"
                        clickAnimation="bounce"
                        isLoading={true}
                    >
                        Botón Cargando
                    </ButtonEnhanced>
                </div>
            </motion.section>

            {/* Select Mejorado */}
            <motion.section variants={itemVariants} className="space-y-md">
                <h3 className="text-xl font-semibold text-text-primary">Select con Radix UI</h3>
                <div className="max-w-sm">
                    <SelectEnhanced
                        options={selectOptions}
                        value={selectValue}
                        onValueChange={setSelectValue}
                        placeholder="Selecciona una opción..."
                        label="Selección mejorada"
                        animation="slideUp"
                        animationDelay={0.1}
                        helpText="Este select tiene animaciones y mejor accesibilidad"
                    />
                </div>
            </motion.section>

            {/* Tooltips Mejorados */}
            <motion.section variants={itemVariants} className="space-y-md">
                <h3 className="text-xl font-semibold text-text-primary">Tooltips con Radix UI</h3>
                <div className="flex flex-wrap gap-md">
                    <TooltipEnhanced
                        content="Este es un tooltip mejorado con animaciones"
                        side="top"
                        animation="scale"
                    >
                        <Button variant="secondary">Hover para tooltip</Button>
                    </TooltipEnhanced>

                    <TooltipEnhanced
                        content="Tooltip a la derecha"
                        side="right"
                        variant="dark"
                        animation="slide"
                    >
                        <Button variant="secondary">Tooltip Derecha</Button>
                    </TooltipEnhanced>

                    <TooltipEnhanced
                        content="Tooltip con contenido complejo"
                        side="bottom"
                        variant="primary"
                        size="lg"
                        animation="fade"
                    >
                        <Button variant="secondary">Tooltip Complejo</Button>
                    </TooltipEnhanced>
                </div>
            </motion.section>

            {/* Modal Mejorado */}
            <motion.section variants={itemVariants} className="space-y-md">
                <h3 className="text-xl font-semibold text-text-primary">Modal con Radix UI</h3>
                <div className="flex flex-wrap gap-md">
                    <Button
                        variant="primary"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Abrir Modal Mejorado
                    </Button>
                </div>

                <ModalEnhanced
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Modal Mejorado con Radix UI"
                    animation="bounce"
                    animationDuration="slow"
                    size="large"
                    footer={
                        <div className="flex gap-sm">
                            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                                Cancelar
                            </Button>
                            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                                Confirmar
                            </Button>
                        </div>
                    }
                >
                    <div className="space-y-md">
                        <p className="text-text-primary">
                            Este modal está construido con Radix UI y tiene:
                        </p>
                        <ul className="list-disc list-inside space-y-xs text-text-secondary">
                            <li>Accesibilidad completa (WCAG AA)</li>
                            <li>Animaciones fluidas con Framer Motion</li>
                            <li>Focus management automático</li>
                            <li>Escape key y click fuera para cerrar</li>
                            <li>Personalización completa con nuestros tokens CSS</li>
                        </ul>

                        <div className="mt-md p-md bg-gray-50 rounded-md">
                            <h4 className="font-semibold text-text-primary mb-sm">Características:</h4>
                            <div className="grid grid-cols-2 gap-sm text-sm text-text-secondary">
                                <div>✓ Radix UI Dialog</div>
                                <div>✓ Framer Motion</div>
                                <div>✓ Design Tokens</div>
                                <div>✓ TypeScript</div>
                                <div>✓ Accesibilidad</div>
                                <div>✓ Animaciones</div>
                            </div>
                        </div>
                    </div>
                </ModalEnhanced>
            </motion.section>

            {/* Demostración de Animaciones CSS */}
            <motion.section variants={itemVariants} className="space-y-md">
                <h3 className="text-xl font-semibold text-text-primary">Animaciones CSS Personalizadas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
                    <div className="p-md bg-primary-50 rounded-lg text-center">
                        <div className="w-12 h-12 bg-primary-500 rounded-full mx-auto mb-sm animate-fade-in"></div>
                        <p className="text-sm text-text-primary">Fade In</p>
                    </div>

                    <div className="p-md bg-success-50 rounded-lg text-center">
                        <div className="w-12 h-12 bg-success-500 rounded-full mx-auto mb-sm animate-slide-up"></div>
                        <p className="text-sm text-text-primary">Slide Up</p>
                    </div>

                    <div className="p-md bg-warning-50 rounded-lg text-center">
                        <div className="w-12 h-12 bg-warning-500 rounded-full mx-auto mb-sm animate-scale-in"></div>
                        <p className="text-sm text-text-primary">Scale In</p>
                    </div>

                    <div className="p-md bg-danger-50 rounded-lg text-center">
                        <div className="w-12 h-12 bg-danger-500 rounded-full mx-auto mb-sm animate-bounce-in"></div>
                        <p className="text-sm text-text-primary">Bounce In</p>
                    </div>
                </div>
            </motion.section>

            {/* Información de Implementación */}
            <motion.section variants={itemVariants} className="mt-xl p-lg bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-text-primary mb-md">
                    🚀 Implementación Completada
                </h3>
                <div className="grid md:grid-cols-2 gap-lg text-sm text-text-secondary">
                    <div>
                        <h4 className="font-semibold text-text-primary mb-sm">Tecnologías Integradas:</h4>
                        <ul className="space-y-xs">
                            <li>✅ Radix UI - Componentes accesibles</li>
                            <li>✅ Framer Motion - Animaciones fluidas</li>
                            <li>✅ Design Tokens CSS - Personalización completa</li>
                            <li>✅ TypeScript - Type safety</li>
                            <li>✅ Tailwind CSS - Utilidades responsive</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-text-primary mb-sm">Características:</h4>
                        <ul className="space-y-xs">
                            <li>🎨 Personalización desde CSS</li>
                            <li>♿ Accesibilidad WCAG AA</li>
                            <li>📱 Responsive design</li>
                            <li>🎭 Animaciones fluidas</li>
                            <li>🔧 Type-safe props</li>
                        </ul>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default EnhancedComponentsDemo;
