import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
    title: '2-Molecules/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Modal para diálogos, confirmaciones y contenido overlay. Incluye soporte para diferentes tamaños y posiciones.',
            },
        },
    },
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'Si el modal está abierto',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl', 'full'],
            description: 'Tamaño del modal',
        },
        position: {
            control: { type: 'select' },
            options: ['center', 'top', 'bottom'],
            description: 'Posición del modal',
        },
        closeOnOverlayClick: {
            control: 'boolean',
            description: 'Si el modal se cierra al hacer clic en el overlay',
        },
        closeOnEscape: {
            control: 'boolean',
            description: 'Si el modal se cierra con la tecla Escape',
        },
        showCloseButton: {
            control: 'boolean',
            description: 'Si mostrar el botón de cerrar',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Componente wrapper para manejar el estado
const ModalWrapper = ({ children, ...props }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                style={{
                    background: 'var(--color-primary-500)',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Abrir Modal
            </button>
            <Modal
                {...props}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                {children}
            </Modal>
        </div>
    );
};

export const Default: Story = {
    render: (args) => (
        <ModalWrapper {...args}>
            <div style={{ padding: '2rem' }}>
                <h2 style={{ margin: '0 0 1rem 0' }}>Modal por defecto</h2>
                <p>Este es el contenido del modal por defecto.</p>
            </div>
        </ModalWrapper>
    ),
};

export const Small: Story = {
    render: (args) => (
        <ModalWrapper {...args} size="sm">
            <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Modal pequeño</h3>
                <p>Contenido del modal pequeño.</p>
            </div>
        </ModalWrapper>
    ),
};

export const Large: Story = {
    render: (args) => (
        <ModalWrapper {...args} size="lg">
            <div style={{ padding: '2rem' }}>
                <h2 style={{ margin: '0 0 1rem 0' }}>Modal grande</h2>
                <p>Este es un modal grande con más espacio para contenido.</p>
                <div style={{ margin: '1rem 0' }}>
                    <p>Puedes incluir formularios, imágenes o cualquier contenido complejo.</p>
                </div>
            </div>
        </ModalWrapper>
    ),
};

export const ExtraLarge: Story = {
    render: (args) => (
        <ModalWrapper {...args} size="xl">
            <div style={{ padding: '2rem' }}>
                <h2 style={{ margin: '0 0 1rem 0' }}>Modal extra grande</h2>
                <p>Modal con máximo espacio disponible.</p>
                <div style={{
                    background: 'var(--color-bg-secondary)',
                    padding: '1rem',
                    borderRadius: '8px',
                    margin: '1rem 0'
                }}>
                    <p>Área de contenido destacada</p>
                </div>
            </div>
        </ModalWrapper>
    ),
};

export const FullScreen: Story = {
    render: (args) => (
        <ModalWrapper {...args} size="full">
            <div style={{ padding: '2rem', height: '100vh', display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ margin: '0 0 1rem 0' }}>Modal de pantalla completa</h2>
                <div style={{ flex: 1, background: 'var(--color-bg-secondary)', padding: '1rem', borderRadius: '8px' }}>
                    <p>Contenido que ocupa toda la pantalla</p>
                </div>
            </div>
        </ModalWrapper>
    ),
};

export const TopPosition: Story = {
    render: (args) => (
        <ModalWrapper {...args} position="top">
            <div style={{ padding: '2rem' }}>
                <h2 style={{ margin: '0 0 1rem 0' }}>Modal en la parte superior</h2>
                <p>Este modal aparece en la parte superior de la pantalla.</p>
            </div>
        </ModalWrapper>
    ),
};

export const BottomPosition: Story = {
    render: (args) => (
        <ModalWrapper {...args} position="bottom">
            <div style={{ padding: '2rem' }}>
                <h2 style={{ margin: '0 0 1rem 0' }}>Modal en la parte inferior</h2>
                <p>Este modal aparece en la parte inferior de la pantalla.</p>
            </div>
        </ModalWrapper>
    ),
};

export const WithoutCloseButton: Story = {
    render: (args) => (
        <ModalWrapper {...args} showCloseButton={false}>
            <div style={{ padding: '2rem' }}>
                <h2 style={{ margin: '0 0 1rem 0' }}>Modal sin botón de cerrar</h2>
                <p>Este modal no tiene botón de cerrar visible.</p>
                <button
                    onClick={() => {/* Cerrar modal */ }}
                    style={{
                        background: 'var(--color-primary-500)',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginTop: '1rem'
                    }}
                >
                    Cerrar desde contenido
                </button>
            </div>
        </ModalWrapper>
    ),
};

export const ConfirmationModal: Story = {
    render: (args) => (
        <ModalWrapper {...args} size="sm">
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 1rem 0' }}>¿Estás seguro?</h3>
                <p style={{ margin: '0 0 2rem 0' }}>Esta acción no se puede deshacer.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button style={{
                        background: 'var(--color-danger-500)',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}>
                        Eliminar
                    </button>
                    <button style={{
                        background: 'var(--color-gray-300)',
                        color: 'var(--color-text-primary)',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}>
                        Cancelar
                    </button>
                </div>
            </div>
        </ModalWrapper>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <ModalWrapper size="sm">
                <div style={{ padding: '1rem' }}>
                    <h4>Small</h4>
                    <p>Modal pequeño</p>
                </div>
            </ModalWrapper>

            <ModalWrapper size="md">
                <div style={{ padding: '1.5rem' }}>
                    <h4>Medium</h4>
                    <p>Modal mediano</p>
                </div>
            </ModalWrapper>

            <ModalWrapper size="lg">
                <div style={{ padding: '2rem' }}>
                    <h4>Large</h4>
                    <p>Modal grande</p>
                </div>
            </ModalWrapper>

            <ModalWrapper size="xl">
                <div style={{ padding: '2rem' }}>
                    <h4>Extra Large</h4>
                    <p>Modal extra grande</p>
                </div>
            </ModalWrapper>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Comparación de todos los tamaños de modal disponibles.',
            },
        },
    },
};
