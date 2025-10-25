import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: '1-Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Heading para títulos y encabezados con niveles semánticos (h1-h6) y múltiples variantes visuales.',
      },
    },
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Nivel semántico del heading (h1-h6)',
    },
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Variante visual del heading',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      description: 'Color del heading',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Alineación del heading',
    },
    children: {
      control: 'text',
      description: 'Contenido del heading',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    level: 1,
    variant: 'h1',
    children: 'Heading Level 1',
  },
};

export const H2: Story = {
  args: {
    level: 2,
    variant: 'h2',
    children: 'Heading Level 2',
  },
};

export const H3: Story = {
  args: {
    level: 3,
    variant: 'h3',
    children: 'Heading Level 3',
  },
};

export const H4: Story = {
  args: {
    level: 4,
    variant: 'h4',
    children: 'Heading Level 4',
  },
};

export const H5: Story = {
  args: {
    level: 5,
    variant: 'h5',
    children: 'Heading Level 5',
  },
};

export const H6: Story = {
  args: {
    level: 6,
    variant: 'h6',
    children: 'Heading Level 6',
  },
};

export const Primary: Story = {
  args: {
    level: 2,
    variant: 'h2',
    color: 'primary',
    children: 'Heading con color primario',
  },
};

export const Secondary: Story = {
  args: {
    level: 2,
    variant: 'h2',
    color: 'secondary',
    children: 'Heading con color secundario',
  },
};

export const Success: Story = {
  args: {
    level: 2,
    variant: 'h2',
    color: 'success',
    children: 'Heading con color de éxito',
  },
};

export const Warning: Story = {
  args: {
    level: 2,
    variant: 'h2',
    color: 'warning',
    children: 'Heading con color de advertencia',
  },
};

export const Danger: Story = {
  args: {
    level: 2,
    variant: 'h2',
    color: 'danger',
    children: 'Heading con color de peligro',
  },
};

export const Center: Story = {
  args: {
    level: 2,
    variant: 'h2',
    align: 'center',
    children: 'Heading centrado',
  },
};

export const Right: Story = {
  args: {
    level: 2,
    variant: 'h2',
    align: 'right',
    children: 'Heading alineado a la derecha',
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading level={1} variant="h1">Heading Level 1</Heading>
      <Heading level={2} variant="h2">Heading Level 2</Heading>
      <Heading level={3} variant="h3">Heading Level 3</Heading>
      <Heading level={4} variant="h4">Heading Level 4</Heading>
      <Heading level={5} variant="h5">Heading Level 5</Heading>
      <Heading level={6} variant="h6">Heading Level 6</Heading>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos los niveles de heading disponibles.',
      },
    },
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Heading level={2} color="primary">Color primario</Heading>
      <Heading level={2} color="secondary">Color secundario</Heading>
      <Heading level={2} color="success">Color de éxito</Heading>
      <Heading level={2} color="warning">Color de advertencia</Heading>
      <Heading level={2} color="danger">Color de peligro</Heading>
      <Heading level={2} color="info">Color de información</Heading>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos los colores de heading disponibles.',
      },
    },
  },
};

export const AllAlignments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading level={2} align="left">Heading alineado a la izquierda</Heading>
      <Heading level={2} align="center">Heading centrado</Heading>
      <Heading level={2} align="right">Heading alineado a la derecha</Heading>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todas las alineaciones de heading disponibles.',
      },
    },
  },
};
