import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: '2-Molecules/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Card para contenedores de contenido con múltiples variantes, efectos hover y soporte para header, body y footer.',
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'elevated', 'outlined', 'filled'],
            description: 'Variante visual de la tarjeta',
        },
        padding: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg'],
            description: 'Padding interno de la tarjeta',
        },
        hover: {
            control: 'boolean',
            description: 'Si la tarjeta debe tener efecto hover',
        },
        children: {
            control: 'text',
            description: 'Contenido de la tarjeta',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Contenido de la tarjeta por defecto',
    },
};

export const Elevated: Story = {
    args: {
        variant: 'elevated',
        children: 'Tarjeta con elevación',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: 'Tarjeta con borde',
    },
};

export const Filled: Story = {
    args: {
        variant: 'filled',
        children: 'Tarjeta con fondo',
    },
};

export const WithHover: Story = {
    args: {
        hover: true,
        children: 'Tarjeta con efecto hover',
    },
};

export const SmallPadding: Story = {
    args: {
        padding: 'sm',
        children: 'Tarjeta con padding pequeño',
    },
};

export const LargePadding: Story = {
    args: {
        padding: 'lg',
        children: 'Tarjeta con padding grande',
    },
};

export const NoPadding: Story = {
    args: {
        padding: 'none',
        children: 'Tarjeta sin padding',
    },
};

export const ComplexContent: Story = {
    args: {
        variant: 'elevated',
        padding: 'lg',
        hover: true,
        children: (
            <div>
                <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-text-primary)' }}>
                    Título de la tarjeta
                </h3>
                <p style={{ margin: '0 0 1rem 0', color: 'var(--color-text-secondary)' }}>
                    Este es el contenido de la tarjeta con múltiples elementos.
                </p>
                <button style={{
                    background: 'var(--color-primary-500)',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>
                    Acción
                </button>
            </div>
        ),
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', width: '600px' }}>
            <Card variant="default">Default</Card>
            <Card variant="elevated">Elevated</Card>
            <Card variant="outlined">Outlined</Card>
            <Card variant="filled">Filled</Card>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Todas las variantes de tarjeta disponibles.',
            },
        },
    },
};

export const AllPaddings: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
            <Card padding="none" variant="outlined">Sin padding</Card>
            <Card padding="sm" variant="outlined">Padding pequeño</Card>
            <Card padding="md" variant="outlined">Padding medio</Card>
            <Card padding="lg" variant="outlined">Padding grande</Card>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Todos los tamaños de padding disponibles.',
            },
        },
    },
};

export const InteractiveExample: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', width: '900px' }}>
            <Card variant="elevated" hover padding="lg">
                <div style={{ textAlign: 'center' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0' }}>Producto 1</h4>
                    <p style={{ margin: '0 0 1rem 0', fontSize: '0.875rem' }}>Descripción del producto</p>
                    <button style={{
                        background: 'var(--color-primary-500)',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '100%'
                    }}>
                        Comprar
                    </button>
                </div>
            </Card>

            <Card variant="elevated" hover padding="lg">
                <div style={{ textAlign: 'center' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0' }}>Producto 2</h4>
                    <p style={{ margin: '0 0 1rem 0', fontSize: '0.875rem' }}>Descripción del producto</p>
                    <button style={{
                        background: 'var(--color-primary-500)',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '100%'
                    }}>
                        Comprar
                    </button>
                </div>
            </Card>

            <Card variant="elevated" hover padding="lg">
                <div style={{ textAlign: 'center' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0' }}>Producto 3</h4>
                    <p style={{ margin: '0 0 1rem 0', fontSize: '0.875rem' }}>Descripción del producto</p>
                    <button style={{
                        background: 'var(--color-primary-500)',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '100%'
                    }}>
                        Comprar
                    </button>
                </div>
            </Card>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Ejemplo interactivo de tarjetas de producto.',
            },
        },
    },
};
