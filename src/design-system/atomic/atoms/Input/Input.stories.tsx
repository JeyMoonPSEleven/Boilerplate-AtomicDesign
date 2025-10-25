import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: '1-Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Input con múltiples tipos, estados de validación y variantes. Incluye soporte para iconos y mensajes de error.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Tipo de input HTML',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined'],
      description: 'Variante visual del input',
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del input',
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
    },
    disabled: {
      control: 'boolean',
      description: 'Si el input está deshabilitado',
    },
    required: {
      control: 'boolean',
      description: 'Si el input es requerido',
    },
    error: {
      control: 'text',
      description: 'Mensaje de error',
    },
    label: {
      control: 'text',
      description: 'Etiqueta del input',
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Escribe algo...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Nombre',
    placeholder: 'Ingresa tu nombre',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'tu@email.com',
    helperText: 'Usaremos este email para contactarte',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'tu@email.com',
    error: 'Este email no es válido',
  },
};

export const Required: Story = {
  args: {
    label: 'Contraseña',
    type: 'password',
    placeholder: 'Ingresa tu contraseña',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo deshabilitado',
    placeholder: 'No puedes escribir aquí',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Input pequeño',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Input grande',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Input con fondo',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    placeholder: 'Input con borde',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'tu@email.com',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Contraseña',
    placeholder: '••••••••',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Buscar...',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input variant="default" placeholder="Default variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="outlined" placeholder="Outlined variant" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todas las variantes de input disponibles.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input size="sm" placeholder="Small size" />
      <Input size="md" placeholder="Medium size" />
      <Input size="lg" placeholder="Large size" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos los tamaños de input disponibles.',
      },
    },
  },
};
