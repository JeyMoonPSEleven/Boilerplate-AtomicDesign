import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
    title: '1-Atoms/Text',
    component: Text,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Text con múltiples variantes tipográficas, colores y tamaños. Base para todo el texto en la aplicación.',
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['body', 'small', 'large', 'caption', 'overline'],
            description: 'Variante tipográfica',
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
            description: 'Color del texto',
        },
        weight: {
            control: { type: 'select' },
            options: ['normal', 'medium', 'semibold', 'bold'],
            description: 'Peso de la fuente',
        },
        align: {
            control: { type: 'select' },
            options: ['left', 'center', 'right', 'justify'],
            description: 'Alineación del texto',
        },
        children: {
            control: 'text',
            description: 'Contenido del texto',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
    args: {
        variant: 'body',
        children: 'Este es un texto de cuerpo normal',
    },
};

export const Small: Story = {
    args: {
        variant: 'small',
        children: 'Este es un texto pequeño',
    },
};

export const Large: Story = {
    args: {
        variant: 'large',
        children: 'Este es un texto grande',
    },
};

export const Caption: Story = {
    args: {
        variant: 'caption',
        children: 'Este es un texto de caption',
    },
};

export const Overline: Story = {
    args: {
        variant: 'overline',
        children: 'ESTE ES UN OVERLINE',
    },
};

export const Primary: Story = {
    args: {
        variant: 'body',
        color: 'primary',
        children: 'Texto con color primario',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'body',
        color: 'secondary',
        children: 'Texto con color secundario',
    },
};

export const Success: Story = {
    args: {
        variant: 'body',
        color: 'success',
        children: 'Texto con color de éxito',
    },
};

export const Warning: Story = {
    args: {
        variant: 'body',
        color: 'warning',
        children: 'Texto con color de advertencia',
    },
};

export const Danger: Story = {
    args: {
        variant: 'body',
        color: 'danger',
        children: 'Texto con color de peligro',
    },
};

export const Bold: Story = {
    args: {
        variant: 'body',
        weight: 'bold',
        children: 'Texto en negrita',
    },
};

export const Semibold: Story = {
    args: {
        variant: 'body',
        weight: 'semibold',
        children: 'Texto semi-negrita',
    },
};

export const Center: Story = {
    args: {
        variant: 'body',
        align: 'center',
        children: 'Texto centrado',
    },
};

export const Right: Story = {
    args: {
        variant: 'body',
        align: 'right',
        children: 'Texto alineado a la derecha',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Text variant="overline">OVERLINE</Text>
            <Text variant="large">Texto grande</Text>
            <Text variant="body">Texto de cuerpo</Text>
            <Text variant="small">Texto pequeño</Text>
            <Text variant="caption">Texto de caption</Text>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Todas las variantes tipográficas disponibles.',
            },
        },
    },
};

export const AllColors: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Text color="primary">Color primario</Text>
            <Text color="secondary">Color secundario</Text>
            <Text color="success">Color de éxito</Text>
            <Text color="warning">Color de advertencia</Text>
            <Text color="danger">Color de peligro</Text>
            <Text color="info">Color de información</Text>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Todos los colores de texto disponibles.',
            },
        },
    },
};

export const AllWeights: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Text weight="normal">Peso normal</Text>
            <Text weight="medium">Peso medio</Text>
            <Text weight="semibold">Peso semi-negrita</Text>
            <Text weight="bold">Peso negrita</Text>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Todos los pesos de fuente disponibles.',
            },
        },
    },
};
