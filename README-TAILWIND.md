# 🚀 Boilerplate Atomic Design + Tailwind CSS v4

## ✨ Características Principales

- **🎨 Atomic Design**: Metodología de diseño escalable y mantenible
- **⚡ Tailwind CSS v4**: Framework utility-first con CSS-first approach
- **🎯 Design Tokens**: Sistema de tokens CSS completamente personalizable
- **🌙 Dark Mode**: Soporte completo para modo oscuro
- **📱 Responsive**: Mobile-first design con breakpoints personalizados
- **🔧 TypeScript**: Type-safety completo en todos los componentes
- **⚡ pnpm**: Gestor de paquetes rápido y eficiente

## 🏗️ Arquitectura del Sistema

### Estructura de Archivos
```
src/
├── design-system/
│   ├── atomic/
│   │   ├── atoms/          # Componentes básicos
│   │   ├── molecules/      # Combinaciones de atoms
│   │   ├── organisms/      # Secciones complejas
│   │   └── templates/      # Layouts completos
│   ├── contexts/           # Contextos React (Theme, etc.)
│   ├── hooks/              # Hooks personalizados
│   ├── styles/
│   │   ├── globals.css     # Estilos globales + Tailwind
│   │   └── variables.css    # Design tokens
│   ├── types/              # Tipos TypeScript
│   └── utils/              # Utilidades (cn, etc.)
└── app/                    # Aplicación principal
```

## 🎨 Design Tokens

### Colores
```css
/* Colores primarios */
--color-primary-500: #2196f3;
--color-primary-600: #1e88e5;

/* Colores semánticos */
--color-success-500: #4caf50;
--color-warning-500: #ff9800;
--color-danger-500: #f44336;
```

### Espaciado
```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
```

### Tipografía
```css
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
```

## 🧩 Componentes Atomic Design

### Atoms (Componentes Básicos)

#### Button
```tsx
import { Button } from '@/design-system/atomic/atoms/Button'

<Button variant="primary" size="md" isLoading={false}>
  Click me
</Button>
```

**Variantes disponibles:**
- `primary`, `secondary`, `outline`, `ghost`, `success`, `warning`, `danger`

**Tamaños:**
- `sm`, `md`, `lg`

#### Input
```tsx
import { Input } from '@/design-system/atomic/atoms/Input'

<Input
  label="Email"
  placeholder="tu@email.com"
  hasError={false}
  helperText="Ingresa tu email"
/>
```

#### Badge
```tsx
import { Badge } from '@/design-system/atomic/atoms/Badge'

<Badge variant="success" size="md" pill={true}>
  Nuevo
</Badge>
```

### Molecules (Combinaciones)

#### SearchBar
```tsx
import { SearchBar } from '@/design-system/atomic/molecules/SearchBar'

<SearchBar
  onSearch={(query) => console.log(query)}
  placeholder="Buscar..."
/>
```

#### Card
```tsx
import { Card } from '@/design-system/atomic/molecules/Card'

<Card variant="elevated" padding="lg">
  <h3>Título</h3>
  <p>Contenido de la tarjeta</p>
</Card>
```

## 🌙 Dark Mode

### ThemeProvider
```tsx
import { ThemeProvider } from '@/design-system/contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <YourApp />
    </ThemeProvider>
  )
}
```

### ThemeToggle
```tsx
import { ThemeToggle } from '@/design-system/contexts/ThemeContext'

<ThemeToggle variant="button" showLabel={true} />
```

### Hook useTheme
```tsx
import { useTheme } from '@/design-system/contexts/ThemeContext'

function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  
  return (
    <div className={resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
      Tema actual: {resolvedTheme}
    </div>
  )
}
```

## 🛠️ Utilidades TypeScript

### cn() - Combinar clases
```tsx
import { cn } from '@/design-system/utils/cn'

const classes = cn(
  'btn',
  'btn-primary',
  isLoading && 'opacity-70',
  className
)
```

### createButtonClasses() - Generar clases type-safe
```tsx
import { createButtonClasses } from '@/design-system/utils/cn'

const buttonClasses = createButtonClasses(
  'primary',    // variant
  'md',         // size
  false,        // fullWidth
  false,        // isLoading
  'custom-class' // className
)
```

## 📱 Responsive Design

### Breakpoints personalizados
```css
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;
--breakpoint-2xl: 1400px;
```

### Clases responsive
```tsx
<div className="px-sm md:px-md lg:px-lg xl:px-xl">
  Contenido responsive
</div>
```

### Utilidades responsive
```tsx
import { createResponsiveClasses } from '@/design-system/utils/cn'

const classes = createResponsiveClasses(
  'text-sm',      // mobile
  'text-base',    // tablet
  'text-lg',      // desktop
  'text-xl',      // wide
  'text-2xl'      // ultra
)
```

## 🎨 Personalización por Proyecto

### 1. Modificar Design Tokens
Edita `src/design-system/styles/variables.css`:

```css
:root {
  /* Cambiar colores primarios */
  --color-primary-500: #your-color;
  --color-primary-600: #your-darker-color;
  
  /* Cambiar espaciado */
  --spacing-md: 20px; /* en lugar de 16px */
  
  /* Cambiar tipografía */
  --font-family-base: 'Your Font', sans-serif;
}
```

### 2. Extender Tailwind Config
Modifica `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#your-brand-color',
          600: '#your-brand-darker',
        }
      }
    }
  }
}
```

### 3. Crear Componentes Personalizados
```tsx
// src/components/CustomButton.tsx
import { Button } from '@/design-system/atomic/atoms/Button'

export const CustomButton = ({ children, ...props }) => (
  <Button 
    className="bg-gradient-to-r from-purple-500 to-pink-500"
    {...props}
  >
    {children}
  </Button>
)
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
pnpm dev

# Build
pnpm build

# Linting
pnpm lint
pnpm lint:fix

# Formateo
pnpm format
pnpm format:check

# Testing
pnpm test
pnpm test:ui
pnpm test:coverage

# Validación completa
pnpm validate

# Tailwind CSS
pnpm style:watch    # Watch mode
pnpm style:build    # Build CSS
```

## 🔧 Configuración Avanzada

### PostCSS
```javascript
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### Vite
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
})
```

## 📚 Mejores Prácticas

### 1. Usar Design Tokens
```tsx
// ✅ Correcto
<div className="bg-primary-500 text-text-on-primary">

// ❌ Incorrecto
<div className="bg-blue-500 text-white">
```

### 2. Mobile-First
```tsx
// ✅ Correcto
<div className="px-sm md:px-md lg:px-lg">

// ❌ Incorrecto
<div className="px-lg md:px-md sm:px-sm">
```

### 3. Type-Safety
```tsx
// ✅ Correcto
const variant: ButtonVariant = 'primary'

// ❌ Incorrecto
const variant = 'primary' // Sin tipo
```

### 4. Composición sobre Configuración
```tsx
// ✅ Correcto - Componer con className
<Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500">

// ❌ Incorrecto - Crear nueva variante para cada caso
```

## 🎯 Casos de Uso

### Landing Page
```tsx
import { Hero, Pricing, Testimonials, Footer } from '@/design-system/atomic/organisms'

function LandingPage() {
  return (
    <div>
      <Hero title="Tu Producto" subtitle="Descripción" />
      <Pricing plans={pricingData} />
      <Testimonials testimonials={testimonialData} />
      <Footer />
    </div>
  )
}
```

### Dashboard
```tsx
import { Header, Sidebar, Dashboard } from '@/design-system/atomic/organisms'

function DashboardPage() {
  return (
    <div className="min-h-screen bg-bg-body">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-lg">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}
```

## 🔍 Debugging

### Ver clases generadas
```tsx
import { createButtonClasses } from '@/design-system/utils/cn'

console.log(createButtonClasses('primary', 'md', false, false))
// Output: "btn btn-primary px-md py-sm text-base"
```

### Inspeccionar tokens CSS
```javascript
// En DevTools
getComputedStyle(document.documentElement).getPropertyValue('--color-primary-500')
```

## 📖 Recursos Adicionales

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [Design Tokens](https://spectrum.adobe.com/page/design-tokens/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

## 🎉 ¡Listo para Usar!

Tu boilerplate está completamente configurado con:
- ✅ Tailwind CSS v4
- ✅ Atomic Design
- ✅ Design Tokens
- ✅ Dark Mode
- ✅ TypeScript
- ✅ Responsive Design
- ✅ Personalización completa

¡Empieza a crear componentes increíbles! 🚀
