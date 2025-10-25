import React, { useState } from 'react'
import { cn } from '../../utils/cn'

// Importar solo componentes básicos que sabemos que funcionan
import { Button, Text, Heading } from '../atoms'

interface AtomicDesignShowcaseProps {
    className?: string
}

export const AtomicDesignShowcase: React.FC<AtomicDesignShowcaseProps> = ({
    className
}) => {
    const [activeSection, setActiveSection] = useState('design-tokens')

    const sections = [
        { id: 'design-tokens', label: 'Design Tokens', icon: '🎨' },
        { id: 'atoms', label: 'Atoms', icon: '⚛️' },
        { id: 'molecules', label: 'Molecules', icon: '🧬' },
        { id: 'organisms', label: 'Organisms', icon: '🦠' },
        { id: 'templates', label: 'Templates', icon: '📄' }
    ]

    const DesignTokensSection = () => (
        <div className="space-y-8">
            <Heading level={2} variant="heading" color="primary">
                Paleta de Colores
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border border-gray-200 rounded-lg">
                    <Heading level={3} variant="subheading" className="mb-4">
                        Colores Primarios
                    </Heading>
                    <div className="space-y-3">
                        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                            <div key={shade} className="flex items-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-md border border-gray-200"
                                    style={{ backgroundColor: `var(--color-primary-${shade})` }}
                                />
                                <Text variant="small" className="font-mono">
                                    --color-primary-{shade}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 border border-gray-200 rounded-lg">
                    <Heading level={3} variant="subheading" className="mb-4">
                        Colores de Éxito
                    </Heading>
                    <div className="space-y-3">
                        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                            <div key={shade} className="flex items-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-md border border-gray-200"
                                    style={{ backgroundColor: `var(--color-success-${shade})` }}
                                />
                                <Text variant="small" className="font-mono">
                                    --color-success-{shade}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 border border-gray-200 rounded-lg">
                    <Heading level={3} variant="subheading" className="mb-4">
                        Colores de Advertencia
                    </Heading>
                    <div className="space-y-3">
                        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                            <div key={shade} className="flex items-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-md border border-gray-200"
                                    style={{ backgroundColor: `var(--color-warning-${shade})` }}
                                />
                                <Text variant="small" className="font-mono">
                                    --color-warning-{shade}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

    const AtomsSection = () => (
        <div className="space-y-8">
            <Heading level={2} variant="heading" color="primary">
                Componentes Atoms
            </Heading>

            <div className="space-y-6">
                <Heading level={3} variant="subheading">
                    Botones
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
            </div>
        </div>
    )

    const MoleculesSection = () => (
        <div className="space-y-8">
            <Heading level={2} variant="heading" color="primary">
                Componentes Molecules
            </Heading>

            <div className="p-6 border border-gray-200 rounded-lg">
                <Text>Los componentes Molecules están en desarrollo...</Text>
            </div>
        </div>
    )

    const OrganismsSection = () => (
        <div className="space-y-8">
            <Heading level={2} variant="heading" color="primary">
                Componentes Organisms
            </Heading>

            <div className="p-6 border border-gray-200 rounded-lg">
                <Text>Los componentes Organisms están en desarrollo...</Text>
            </div>
        </div>
    )

    const TemplatesSection = () => (
        <div className="space-y-8">
            <Heading level={2} variant="heading" color="primary">
                Templates
            </Heading>

            <div className="p-6 border border-gray-200 rounded-lg">
                <Text>Los Templates están en desarrollo...</Text>
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

    return (
        <div className={cn('min-h-screen bg-background-primary', className)}>
            {/* Header Simple */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-bold">Atomic Design System</div>
                        <div className="flex items-center gap-2">
                            <Button size="small">GitHub</Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <Heading level={1} variant="display" color="primary" className="mb-4">
                        Atomic Design System
                    </Heading>
                    <Text variant="large" color="muted" className="mb-8 max-w-3xl mx-auto">
                        Un sistema de diseño completo y profesional basado en la metodología Atomic Design.
                        Explora todos los componentes desde los atoms más básicos hasta las templates completas.
                    </Text>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="large">Comenzar</Button>
                        <Button variant="secondary" size="large">Ver Documentación</Button>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="mb-8">
                    <div className="border-b border-border-primary">
                        <nav className="flex space-x-8 overflow-x-auto">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={cn(
                                        'flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors',
                                        activeSection === section.id
                                            ? 'border-primary-500 text-primary-600'
                                            : 'border-transparent text-muted hover:text-primary-500 hover:border-primary-300'
                                    )}
                                >
                                    <span>{section.icon}</span>
                                    {section.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Content */}
                <div>
                    {renderSection()}
                </div>
            </div>

            {/* Footer Simple */}
            <footer className="bg-gray-50 border-t mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <Text variant="small" color="muted">
                            © 2024 Atomic Design System. Todos los derechos reservados.
                        </Text>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default AtomicDesignShowcase