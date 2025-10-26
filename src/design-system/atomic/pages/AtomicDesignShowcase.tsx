// src/design-system/atomic/pages/AtomicDesignShowcase.tsx
import React, { useState } from 'react'
import { cn } from '../../utils/cn'

// Importar componentes refactorizados
import {
    Button, Input, Text, Heading, Badge, Checkbox, Switch, Select, Progress, Spinner, Radio, Slider, Avatar, Icon, Divider,
    ColorSwatch, FileUpload
} from '../atoms'
import { Card, Modal } from '../molecules'
import { ContactForm, FAQ, Hero, Testimonials } from '../organisms'
import { LayoutBase } from '../templates'

interface AtomicDesignShowcaseProps {
    className?: string
}

export const AtomicDesignShowcase: React.FC<AtomicDesignShowcaseProps> = ({
    className
}) => {
    const [activeSection, setActiveSection] = useState('design-tokens')
    const [checkboxStates, setCheckboxStates] = useState<Record<string, boolean>>({})
    const [modalOpen, setModalOpen] = useState<string | null>(null)

    const handleCheckboxChange = (id: string, checked: boolean) => {
        setCheckboxStates(prev => ({ ...prev, [id]: checked }))
    }

    const sections = [
        { id: 'design-tokens', label: 'Design Tokens', icon: '🎨' },
        { id: 'atoms', label: 'Atoms', icon: '⚛️' },
        { id: 'molecules', label: 'Molecules', icon: '🧬' },
        { id: 'organisms', label: 'Organisms', icon: '🦠' },
        { id: 'templates', label: 'Templates', icon: '📄' },
    ]

    const DesignTokensSection = () => (
        <div className="space-y-8">
            <Heading level={2} variant="heading" color="primary">
                Design Tokens
            </Heading>

            {/* Paleta de Colores */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Paleta de Colores
                </Heading>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary-500 rounded-lg mx-auto mb-2"></div>
                        <Text variant="small" color="muted">Primary</Text>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-secondary-500 rounded-lg mx-auto mb-2"></div>
                        <Text variant="small" color="muted">Secondary</Text>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-success-500 rounded-lg mx-auto mb-2"></div>
                        <Text variant="small" color="muted">Success</Text>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-warning-500 rounded-lg mx-auto mb-2"></div>
                        <Text variant="small" color="muted">Warning</Text>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-danger-500 rounded-lg mx-auto mb-2"></div>
                        <Text variant="small" color="muted">Danger</Text>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-info-500 rounded-lg mx-auto mb-2"></div>
                        <Text variant="small" color="muted">Info</Text>
                    </div>
                </div>
            </section>

            {/* Tipografía */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Tipografía
                </Heading>
                <div className="space-y-4">
                    <Heading level={1} variant="display">Display Heading</Heading>
                    <Heading level={2} variant="heading">Heading Level 2</Heading>
                    <Heading level={3} variant="subheading">Subheading Level 3</Heading>
                    <Text variant="large">Texto Large</Text>
                    <Text variant="body">Texto Body Normal</Text>
                    <Text variant="small">Texto Small</Text>
                    <Text variant="caption">Texto Caption</Text>
                </div>
            </section>

            {/* Espaciado */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Espaciado
                </Heading>
                <div className="space-y-2">
                    <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-primary-500 rounded"></div>
                        <Text variant="small">xs - 4px</Text>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-4 bg-primary-500 rounded"></div>
                        <Text variant="small">sm - 8px</Text>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-4 bg-primary-500 rounded"></div>
                        <Text variant="small">md - 16px</Text>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-24 h-4 bg-primary-500 rounded"></div>
                        <Text variant="small">lg - 24px</Text>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-32 h-4 bg-primary-500 rounded"></div>
                        <Text variant="small">xl - 32px</Text>
                    </div>
                </div>
            </section>
        </div>
    )

    const AtomsSection = () => (
        <div className="space-y-8">
            <Heading level={2} variant="heading" color="primary">
                Componentes Atoms Refactorizados
            </Heading>

            {/* Botones */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Botones (Refactorizados con Tailwind)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-6">
                        <div>
                            <Text variant="small" color="muted">Variantes</Text>
                            <div className="flex flex-wrap gap-3">
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="success">Success</Button>
                                <Button variant="warning">Warning</Button>
                                <Button variant="danger">Danger</Button>
                                <Button variant="info">Info</Button>
                                <Button variant="light">Light</Button>
                                <Button variant="dark">Dark</Button>
                                <Button variant="link">Link</Button>
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button size="small">Small</Button>
                                <Button size="medium">Medium</Button>
                                <Button size="large">Large</Button>
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Estados</Text>
                            <div className="flex flex-wrap gap-3">
                                <Button>Normal</Button>
                                <Button isLoading>Loading</Button>
                                <Button disabled>Disabled</Button>
                                <Button isFullWidth>Full Width</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inputs */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Inputs (Refactorizados con Tailwind)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Text variant="small" color="muted">Estados Normales</Text>
                                <div className="space-y-3">
                                    <Input placeholder="Placeholder text" />
                                    <Input placeholder="With helper text" helperText="This is helper text" />
                                    <Input placeholder="With error" error helperText="This field has an error" />
                                </div>
                            </div>

                            <div>
                                <Text variant="small" color="muted">Tipos de Input</Text>
                                <div className="space-y-3">
                                    <Input type="email" placeholder="Email address" />
                                    <Input type="password" placeholder="Password" />
                                    <Input type="number" placeholder="Number input" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="space-y-3">
                                <Input size="small" placeholder="Small input" />
                                <Input size="medium" placeholder="Medium input" />
                                <Input size="large" placeholder="Large input" />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Variantes</Text>
                            <div className="space-y-3">
                                <Input variant="default" placeholder="Default variant" />
                                <Input variant="outlined" placeholder="Outlined variant" />
                                <Input variant="filled" placeholder="Filled variant" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Badges */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Badges (Refactorizados con Tailwind)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Variantes de Color</Text>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="primary">Primary</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="success">Success</Badge>
                                <Badge variant="warning">Warning</Badge>
                                <Badge variant="danger">Danger</Badge>
                                <Badge variant="info">Info</Badge>
                                <Badge variant="light">Light</Badge>
                                <Badge variant="dark">Dark</Badge>
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="flex flex-wrap items-center gap-2">
                                <Badge size="small">Small</Badge>
                                <Badge size="medium">Medium</Badge>
                                <Badge size="large">Large</Badge>
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Formas</Text>
                            <div className="flex flex-wrap items-center gap-2">
                                <Badge>Normal</Badge>
                                <Badge pill>Pill</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Checkboxes */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Checkboxes (Refactorizados con Tailwind)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Estados</Text>
                            <div className="space-y-3">
                                <Checkbox
                                    checked={checkboxStates.checkbox1 || false}
                                    onChange={(checked) => handleCheckboxChange('checkbox1', checked)}
                                    label="Checkbox normal"
                                />
                                <Checkbox
                                    checked={checkboxStates.checkbox2 || false}
                                    onChange={(checked) => handleCheckboxChange('checkbox2', checked)}
                                    label="Checkbox con helper text"
                                    helperText="Este es un texto de ayuda"
                                />
                                <Checkbox
                                    checked={checkboxStates.checkbox3 || false}
                                    onChange={(checked) => handleCheckboxChange('checkbox3', checked)}
                                    label="Checkbox con error"
                                    error
                                    helperText="Este campo tiene un error"
                                />
                                <Checkbox
                                    checked={true}
                                    disabled
                                    label="Checkbox deshabilitado"
                                />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="space-y-3">
                                <Checkbox size="small" label="Small checkbox" />
                                <Checkbox size="medium" label="Medium checkbox" />
                                <Checkbox size="large" label="Large checkbox" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Switch Components */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Switch Components (Refactorizados con Radix UI + Framer Motion)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Estados</Text>
                            <div className="space-y-3">
                                <Switch
                                    checked={checkboxStates.switch1 || false}
                                    onChange={(checked) => handleCheckboxChange('switch1', checked)}
                                    label="Switch normal"
                                />
                                <Switch
                                    checked={checkboxStates.switch2 || false}
                                    onChange={(checked) => handleCheckboxChange('switch2', checked)}
                                    label="Switch con helper text"
                                    helperText="Este es un texto de ayuda"
                                />
                                <Switch
                                    checked={checkboxStates.switch3 || false}
                                    onChange={(checked) => handleCheckboxChange('switch3', checked)}
                                    label="Switch con error"
                                    error
                                    helperText="Este campo tiene un error"
                                />
                                <Switch
                                    checked={true}
                                    disabled
                                    label="Switch deshabilitado"
                                />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="space-y-3">
                                <Switch size="small" label="Small switch" />
                                <Switch size="medium" label="Medium switch" />
                                <Switch size="large" label="Large switch" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Select Components */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Select Components (Refactorizados con Radix UI)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Estados</Text>
                            <div className="space-y-3">
                                <Select
                                    label="Selección normal"
                                    options={[
                                        { value: 'option1', label: 'Opción 1' },
                                        { value: 'option2', label: 'Opción 2' },
                                        { value: 'option3', label: 'Opción 3' }
                                    ]}
                                    placeholder="Selecciona una opción"
                                />
                                <Select
                                    label="Con helper text"
                                    options={[
                                        { value: 'option1', label: 'Opción 1' },
                                        { value: 'option2', label: 'Opción 2' }
                                    ]}
                                    helperText="Este es un texto de ayuda"
                                />
                                <Select
                                    label="Con error"
                                    options={[
                                        { value: 'option1', label: 'Opción 1' },
                                        { value: 'option2', label: 'Opción 2' }
                                    ]}
                                    error
                                    helperText="Este campo tiene un error"
                                />
                                <Select
                                    label="Deshabilitado"
                                    options={[
                                        { value: 'option1', label: 'Opción 1' },
                                        { value: 'option2', label: 'Opción 2' }
                                    ]}
                                    disabled
                                />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="space-y-3">
                                <Select
                                    size="small"
                                    label="Small select"
                                    options={[
                                        { value: 'option1', label: 'Opción 1' },
                                        { value: 'option2', label: 'Opción 2' }
                                    ]}
                                />
                                <Select
                                    size="medium"
                                    label="Medium select"
                                    options={[
                                        { value: 'option1', label: 'Opción 1' },
                                        { value: 'option2', label: 'Opción 2' }
                                    ]}
                                />
                                <Select
                                    size="large"
                                    label="Large select"
                                    options={[
                                        { value: 'option1', label: 'Opción 1' },
                                        { value: 'option2', label: 'Opción 2' }
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Progress Components */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Progress Components (Refactorizados con Radix UI + Framer Motion)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Variantes</Text>
                            <div className="space-y-3">
                                <Progress value={25} variant="primary" label="Progreso Primary" showLabel />
                                <Progress value={50} variant="success" label="Progreso Success" showLabel />
                                <Progress value={75} variant="warning" label="Progreso Warning" showLabel />
                                <Progress value={90} variant="danger" label="Progreso Danger" showLabel />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="space-y-3">
                                <Progress value={30} size="small" label="Small Progress" showLabel />
                                <Progress value={60} size="medium" label="Medium Progress" showLabel />
                                <Progress value={80} size="large" label="Large Progress" showLabel />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Animado</Text>
                            <div className="space-y-3">
                                <Progress value={45} variant="info" animated label="Progreso Animado" showLabel />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spinner Components */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Spinner Components (Refactorizados con Framer Motion)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Variantes</Text>
                            <div className="flex flex-wrap items-center gap-4">
                                <Spinner variant="primary" />
                                <Spinner variant="secondary" />
                                <Spinner variant="success" />
                                <Spinner variant="warning" />
                                <Spinner variant="danger" />
                                <Spinner variant="info" />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="flex flex-wrap items-center gap-4">
                                <Spinner size="small" />
                                <Spinner size="medium" />
                                <Spinner size="large" />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Con texto</Text>
                            <div className="flex flex-wrap items-center gap-4">
                                <Spinner variant="primary" text="Cargando..." />
                                <Spinner variant="success" text="Procesando..." />
                                <Spinner variant="warning" text="Esperando..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Radio Components */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Radio Components (Refactorizados con Radix UI + Framer Motion)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Estados</Text>
                            <div className="space-y-3">
                                <Radio
                                    value="option1"
                                    label="Radio normal"
                                />
                                <Radio
                                    value="option2"
                                    label="Radio con helper text"
                                    helperText="Este es un texto de ayuda"
                                />
                                <Radio
                                    value="option3"
                                    label="Radio con error"
                                    error
                                    helperText="Este campo tiene un error"
                                />
                                <Radio
                                    value="option4"
                                    disabled
                                    label="Radio deshabilitado"
                                />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="space-y-3">
                                <Radio size="small" value="small" label="Small radio" />
                                <Radio size="medium" value="medium" label="Medium radio" />
                                <Radio size="large" value="large" label="Large radio" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slider Components */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Slider Components (Refactorizados con Radix UI + Framer Motion)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Estados</Text>
                            <div className="space-y-3">
                                <Slider
                                    label="Slider normal"
                                    value={50}
                                    min={0}
                                    max={100}
                                />
                                <Slider
                                    label="Con helper text"
                                    value={75}
                                    min={0}
                                    max={100}
                                    helperText="Este es un texto de ayuda"
                                />
                                <Slider
                                    label="Con error"
                                    value={25}
                                    min={0}
                                    max={100}
                                    error
                                    helperText="Este campo tiene un error"
                                />
                                <Slider
                                    label="Deshabilitado"
                                    value={60}
                                    min={0}
                                    max={100}
                                    disabled
                                />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="space-y-3">
                                <Slider size="small" label="Small slider" value={30} min={0} max={100} />
                                <Slider size="medium" label="Medium slider" value={60} min={0} max={100} />
                                <Slider size="large" label="Large slider" value={80} min={0} max={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Avatar Components */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Avatar Components (Refactorizados con Radix UI)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="flex flex-wrap items-center gap-4">
                                <Avatar size="small" fallback="JD" />
                                <Avatar size="medium" fallback="JD" />
                                <Avatar size="large" fallback="JD" />
                                <Avatar size="large" fallback="JD" />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Con imagen</Text>
                            <div className="flex flex-wrap items-center gap-4">
                                <Avatar size="medium" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Avatar" />
                                <Avatar size="large" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" alt="Avatar" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Icon Components */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Icon Components (Refactorizados con Lucide React)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="flex flex-wrap items-center gap-4">
                                <Icon name="Home" size="small" />
                                <Icon name="User" size="medium" />
                                <Icon name="Settings" size="large" />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Variantes</Text>
                            <div className="flex flex-wrap items-center gap-4">
                                <Icon name="Star" variant="default" />
                                <Icon name="Heart" variant="outlined" />
                                <Icon name="Mail" variant="filled" />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Iconos comunes</Text>
                            <div className="flex flex-wrap items-center gap-4">
                                <Icon name="Search" />
                                <Icon name="Menu" />
                                <Icon name="Close" />
                                <Icon name="Check" />
                                <Icon name="Plus" />
                                <Icon name="Minus" />
                                <Icon name="ArrowRight" />
                                <Icon name="ArrowLeft" />
                                <Icon name="ArrowUp" />
                                <Icon name="ArrowDown" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider Components */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Divider Components (Refactorizados con Radix UI)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Orientaciones</Text>
                            <div className="space-y-3">
                                <div>
                                    <Text>Horizontal</Text>
                                    <Divider orientation="horizontal" />
                                </div>
                                <div className="flex items-center gap-4 h-8">
                                    <Text>Vertical</Text>
                                    <Divider orientation="vertical" />
                                    <Text>Separador</Text>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Variantes</Text>
                            <div className="space-y-3">
                                <Divider variant="solid" />
                                <Divider variant="dashed" />
                                <Divider variant="dotted" />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Grosor</Text>
                            <div className="space-y-3">
                                <Divider thickness="thin" />
                                <Divider thickness="medium" />
                                <Divider thickness="thick" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ColorSwatch Components */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    ColorSwatch Components (Refactorizados con Tailwind)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="flex flex-wrap items-center gap-4">
                                <ColorSwatch color="#2196f3" name="Primary" size="small" />
                                <ColorSwatch color="#9c27b0" name="Secondary" size="medium" />
                                <ColorSwatch color="#4caf50" name="Success" size="large" />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Estados</Text>
                            <div className="flex flex-wrap items-center gap-4">
                                <ColorSwatch color="#2196f3" name="Normal" />
                                <ColorSwatch color="#9c27b0" name="Selected" selected />
                                <ColorSwatch color="#4caf50" name="Clickable" onClick={(color) => console.log('Selected:', color)} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FileUpload Components */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    FileUpload Components (Refactorizados con Tailwind)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Estados</Text>
                            <div className="space-y-3">
                                <FileUpload
                                    label="Upload normal"
                                    accept="image/*"
                                    multiple={false}
                                    onChange={(files) => console.log('Files:', files)}
                                />
                                <FileUpload
                                    label="Con helper text"
                                    accept=".pdf,.doc,.docx"
                                    multiple={true}
                                    helperText="Sube documentos en PDF o Word"
                                    onChange={(files) => console.log('Files:', files)}
                                />
                                <FileUpload
                                    label="Con error"
                                    accept="image/*"
                                    error
                                    helperText="Este campo tiene un error"
                                    onChange={(files) => console.log('Files:', files)}
                                />
                                <FileUpload
                                    label="Deshabilitado"
                                    accept="image/*"
                                    disabled
                                    onChange={(files) => console.log('Files:', files)}
                                />
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="space-y-3">
                                <FileUpload
                                    size="small"
                                    label="Small upload"
                                    accept="image/*"
                                    onChange={(files) => console.log('Files:', files)}
                                />
                                <FileUpload
                                    size="medium"
                                    label="Medium upload"
                                    accept="image/*"
                                    onChange={(files) => console.log('Files:', files)}
                                />
                                <FileUpload
                                    size="large"
                                    label="Large upload"
                                    accept="image/*"
                                    onChange={(files) => console.log('Files:', files)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

    const MoleculesSection = () => (
        <div className="space-y-8">
            <Heading level={2} variant="heading" color="primary">
                Componentes Molecules Refactorizados
            </Heading>

            {/* Card Components */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Card Components (Refactorizados con Framer Motion)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Variantes</Text>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Card variant="default" padding="md">
                                    <Text>Card por defecto</Text>
                                </Card>
                                <Card variant="elevated" padding="md">
                                    <Text>Card elevado</Text>
                                </Card>
                                <Card variant="outlined" padding="md">
                                    <Text>Card con borde</Text>
                                </Card>
                                <Card variant="outlined" padding="md">
                                    <Text>Card con borde</Text>
                                </Card>
                            </div>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Con header y footer</Text>
                            <Card
                                variant="default"
                                padding="md"
                                header={<Text variant="small" color="muted">Header</Text>}
                                footer={<Text variant="small" color="muted">Footer</Text>}
                            >
                                <Text>Contenido de la card</Text>
                            </Card>
                        </div>

                        <div>
                            <Text variant="small" color="muted">Hoverable</Text>
                            <Card variant="default" padding="md" hover>
                                <Text>Card con efecto hover</Text>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Components */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Modal Components (Refactorizados con Radix UI + Framer Motion)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" color="muted">Tamaños</Text>
                            <div className="flex flex-wrap gap-3">
                                <Button onClick={() => setModalOpen('small')}>
                                    Modal Small
                                </Button>
                                <Button onClick={() => setModalOpen('medium')}>
                                    Modal Medium
                                </Button>
                                <Button onClick={() => setModalOpen('large')}>
                                    Modal Large
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="p-6 border border-gray-200 rounded-lg">
                <Text>Los componentes Molecules están en desarrollo...</Text>
            </div>
        </div>
    )

    const OrganismsSection = () => (
        <div className="space-y-8">
            <Heading level={2} variant="heading" color="primary">
                Componentes Organisms Refactorizados
            </Heading>

            {/* ContactForm */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    ContactForm (Refactorizado con Tailwind)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <ContactForm
                        title="Consulta Gratuita"
                        subtitle="Te ayudamos a obtener la compensación que mereces"
                        showContactInfo={true}
                        onSubmit={(data) => console.log('Form submitted:', data)}
                    />
                </div>
            </section>

            {/* FAQ */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    FAQ (Refactorizado con Tailwind)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <FAQ
                        title="Preguntas Frecuentes"
                        subtitle="Encuentra respuestas a las preguntas más comunes"
                        items={[
                            {
                                id: '1',
                                question: '¿Cómo funciona el proceso?',
                                answer: 'El proceso es simple y transparente. Te guiamos paso a paso.'
                            },
                            {
                                id: '2',
                                question: '¿Cuánto tiempo toma?',
                                answer: 'El proceso completo puede tomar entre 3-6 meses dependiendo del caso.'
                            },
                            {
                                id: '3',
                                question: '¿Hay algún costo?',
                                answer: 'No hay costo inicial. Solo pagas si ganamos tu caso.'
                            }
                        ]}
                    />
                </div>
            </section>

            {/* Hero */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Hero (Refactorizado con Tailwind)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <Hero
                        title="Transforma tu negocio con tecnología"
                        subtitle="Soluciones digitales que impulsan el crecimiento"
                        description="Especialistas en desarrollo web, aplicaciones móviles y consultoría digital con más de 10 años de experiencia."
                        primaryButton={{
                            text: 'Comenzar ahora',
                            onClick: () => console.log('Primary button clicked')
                        }}
                        secondaryButton={{
                            text: 'Ver más',
                            onClick: () => console.log('Secondary button clicked')
                        }}
                        image={{
                            src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
                            alt: 'Hero image'
                        }}
                    />
                </div>
            </section>

            {/* Testimonials */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    Testimonials (Refactorizado con Tailwind)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <Testimonials
                        title="Lo que dicen nuestros clientes"
                        subtitle="Testimonios reales de empresas que han crecido con nosotros"
                        testimonials={[
                            {
                                id: '1',
                                name: 'María González',
                                company: 'TechCorp',
                                role: 'CEO',
                                content: 'El equipo transformó completamente nuestra presencia digital. Increíble trabajo.',
                                rating: 5,
                                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
                            },
                            {
                                id: '2',
                                name: 'Carlos Rodríguez',
                                company: 'InnovateLab',
                                role: 'CTO',
                                content: 'Profesionales excepcionales. Recomendamos totalmente sus servicios.',
                                rating: 5,
                                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
                            }
                        ]}
                    />
                </div>
            </section>
        </div>
    )

    const TemplatesSection = () => (
        <div className="space-y-8">
            <Heading level={2} variant="heading" color="primary">
                Templates Refactorizados
            </Heading>

            {/* LayoutBase */}
            <section className="space-y-6">
                <Heading level={3} variant="subheading">
                    LayoutBase (Refactorizado con Tailwind)
                </Heading>
                <div className="p-6 border border-gray-200 rounded-lg">
                    <LayoutBase
                        showHeader={true}
                        showFooter={true}
                        headerProps={{
                            logoText: 'Atomic Design',
                            navigation: [
                                { label: 'Inicio', href: '/' },
                                { label: 'Componentes', href: '/components' },
                                { label: 'Documentación', href: '/docs' }
                            ]
                        }}
                        footerProps={{
                            logoText: 'Atomic Design',
                            description: 'Sistema de diseño completo y profesional'
                        }}
                    >
                        <div className="p-8 text-center">
                            <Heading level={3}>Contenido del Layout</Heading>
                            <Text>Este es un ejemplo de cómo se ve el LayoutBase con Header y Footer.</Text>
                        </div>
                    </LayoutBase>
                </div>
            </section>

            <div className="p-6 border border-gray-200 rounded-lg">
                <Text>Los Templates están completamente refactorizados con Tailwind CSS. Incluyen:</Text>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Admin - Panel de administración</li>
                    <li>• Authentication - Páginas de autenticación</li>
                    <li>• Blog - Layout para blog</li>
                    <li>• Dashboard - Panel de control</li>
                    <li>• Documentation - Páginas de documentación</li>
                    <li>• Error - Páginas de error</li>
                    <li>• Landing - Página de aterrizaje</li>
                    <li>• LayoutBase - Layout base reutilizable</li>
                    <li>• Maintenance - Página de mantenimiento</li>
                    <li>• Profile - Páginas de perfil</li>
                    <li>• Settings - Páginas de configuración</li>
                </ul>
            </div>
        </div>
    )

    const renderSection = () => {
        switch (activeSection) {
            case 'design-tokens':
                return <DesignTokensSection />
            case 'atoms':
                return <AtomsSection />
            case 'molecules':
                return <MoleculesSection />
            case 'organisms':
                return <OrganismsSection />
            case 'templates':
                return <TemplatesSection />
            default:
                return <DesignTokensSection />
        }
    }

    // Modales
    const Modals = () => (
        <>
            <Modal
                isOpen={modalOpen === 'small'}
                onClose={() => setModalOpen(null)}
                title="Modal Small"
                size="small"
            >
                <Text>Este es un modal pequeño con contenido básico.</Text>
            </Modal>

            <Modal
                isOpen={modalOpen === 'medium'}
                onClose={() => setModalOpen(null)}
                title="Modal Medium"
                size="medium"
            >
                <Text>Este es un modal mediano con más contenido.</Text>
                <div className="mt-4">
                    <Button variant="primary">Acción Principal</Button>
                </div>
            </Modal>

            <Modal
                isOpen={modalOpen === 'large'}
                onClose={() => setModalOpen(null)}
                title="Modal Large"
                size="large"
            >
                <Text>Este es un modal grande con mucho contenido.</Text>
                <div className="mt-4 space-y-4">
                    <Input placeholder="Campo de entrada" />
                    <Text variant="small" color="muted">
                        Este modal puede contener formularios completos y mucho contenido.
                    </Text>
                </div>
            </Modal>
        </>
    )

    return (
        <div className={cn('min-h-screen bg-background-primary', className)}>
            {/* Header Simple */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-bold">Atomic Design System</div>
                        <nav className="flex space-x-4">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={cn(
                                        'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                                        activeSection === section.id
                                            ? 'bg-primary-500 text-white'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    )}
                                >
                                    <span className="mr-2">{section.icon}</span>
                                    {section.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {renderSection()}
            </main>

            {/* Footer */}
            <footer className="bg-gray-50 border-t mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <Text variant="small" color="muted">
                            © 2024 Atomic Design System. Todos los derechos reservados.
                        </Text>
                    </div>
                </div>
            </footer>

            {/* Modales */}
            <Modals />
        </div>
    )
}

export default AtomicDesignShowcase