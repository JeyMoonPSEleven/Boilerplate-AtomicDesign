import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Meta-información: Dónde aparece en la UI de Storybook
const meta: Meta<typeof Button> = {
  title: '1-Atoms/Button', // ¡Aquí usamos la jerarquía de Atomic Design!
  component: Button,
  tags: ['autodocs'], // Habilita la documentación automática
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Button con múltiples variantes, tamaños y estados. Perfecto para acciones principales y secundarias.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'ghost'],
      description: 'Variante visual del botón',
    },
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamaño del botón',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Si el botón debe ocupar todo el ancho disponible',
    },
    isLoading: {
      control: 'boolean',
      description: 'Si el botón está en estado de carga',
    },
    disabled: {
      control: 'boolean',
      description: 'Si el botón está deshabilitado',
    },
    children: {
      control: 'text',
      description: 'Contenido del botón',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Stories (Variantes del componente)
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    children: 'Danger Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Ghost Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button',
  },
};

export const ExtraLarge: Story = {
  args: {
    variant: 'primary',
    size: 'xl',
    children: 'Extra Large Button',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    isLoading: true,
    children: 'Loading Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button with Icon',
    leftIcon: '🚀',
  },
};

// Story para mostrar todas las variantes
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todas las variantes de botón disponibles.',
      },
    },
  },
};

// Story para mostrar todos los tamaños
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos los tamaños de botón disponibles.',
      },
    },
  },
};
