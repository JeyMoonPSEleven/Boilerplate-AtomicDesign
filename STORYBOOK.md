# Storybook - Documentación de Componentes

Este proyecto incluye Storybook para documentar y probar todos los componentes del sistema de diseño.

## 🚀 Comandos Disponibles

```bash
# Iniciar Storybook en modo desarrollo
pnpm storybook

# Construir Storybook para producción
pnpm build-storybook
```

## 📁 Estructura de Stories

Las stories están organizadas siguiendo la metodología Atomic Design:

```
src/design-system/atomic/
├── atoms/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx  ← Story del componente
│   │   ├── Button.types.ts
│   │   └── Button.module.css
│   └── ...
├── molecules/
│   ├── Card/
│   │   ├── Card.tsx
│   │   ├── Card.stories.tsx    ← Story del componente
│   │   └── ...
│   └── ...
└── organisms/
    ├── Header/
    │   ├── Header.tsx
    │   ├── Header.stories.tsx  ← Story del componente
    │   └── ...
    └── ...
```

## 🎨 Jerarquía en Storybook

- **1-Atoms**: Componentes base indivisibles
- **2-Molecules**: Combinaciones de átomos
- **3-Organisms**: Secciones complejas de UI
- **4-Templates**: Estructuras de página
- **5-Pages**: Instancias de plantillas

## 🔧 Addons Configurados

- **@storybook/addon-docs**: Documentación automática
- **@storybook/addon-controls**: Controles interactivos
- **@storybook/addon-actions**: Logging de acciones
- **@storybook/addon-viewport**: Pruebas responsive
- **@storybook/addon-backgrounds**: Cambio de fondos
- **@storybook/addon-measure**: Medición de elementos
- **@storybook/addon-outline**: Outline de elementos
- **@storybook/addon-a11y**: Pruebas de accesibilidad
- **@storybook/addon-themes**: Cambio de temas

## 📝 Crear una Nueva Story

### Para un Átomo:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: '1-Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};
```

### Para una Molécula:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: '2-Molecules/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Contenido de la tarjeta',
  },
};
```

### Para un Organismo:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: '3-Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoText: 'MiApp',
    navigation: [
      { label: 'Inicio', href: '/' },
      { label: 'Productos', href: '/products' },
    ],
  },
};
```

## 🎯 Mejores Prácticas

### 1. Nomenclatura
- Usa el prefijo numérico para mantener el orden: `1-Atoms`, `2-Molecules`, etc.
- Nombres descriptivos para las stories: `Primary`, `WithIcon`, `AllVariants`

### 2. Documentación
- Siempre incluye `tags: ['autodocs']` para documentación automática
- Usa `parameters.docs.description` para explicar el componente
- Incluye ejemplos de uso en las stories

### 3. Controles
- Configura `argTypes` para controles interactivos
- Usa tipos apropiados: `select`, `radio`, `boolean`, `text`
- Proporciona opciones válidas para selects y radios

### 4. Layout
- Usa `layout: 'centered'` para átomos y moléculas
- Usa `layout: 'fullscreen'` para organismos y templates
- Usa `layout: 'padded'` cuando necesites espacio alrededor

### 5. Ejemplos Múltiples
- Crea stories para todas las variantes importantes
- Incluye stories de "All Variants" para mostrar comparaciones
- Agrega ejemplos interactivos cuando sea apropiado

## 🔍 Pruebas de Accesibilidad

El addon `@storybook/addon-a11y` está configurado para probar automáticamente:

- Contraste de colores
- Navegación por teclado
- Atributos ARIA
- Roles semánticos
- Texto alternativo

## 🌙 Temas

El addon `@storybook/addon-themes` permite cambiar entre:

- **Light**: Tema claro por defecto
- **Dark**: Tema oscuro

## 📱 Responsive Testing

Usa el addon `@storybook/addon-viewport` para probar en diferentes tamaños:

- Mobile (320px)
- Tablet (768px)
- Desktop (1024px)
- Large Desktop (1440px)

## 🚀 Despliegue

Para desplegar Storybook:

1. Construye la documentación:
   ```bash
   pnpm build-storybook
   ```

2. Los archivos estáticos se generan en `storybook-static/`

3. Puedes desplegar en GitHub Pages, Netlify, Vercel, etc.

## 📚 Recursos Adicionales

- [Documentación oficial de Storybook](https://storybook.js.org/docs)
- [Component Story Format (CSF)](https://storybook.js.org/docs/api/csf)
- [Addons disponibles](https://storybook.js.org/addons)
- [Mejores prácticas](https://storybook.js.org/docs/best-practices)
