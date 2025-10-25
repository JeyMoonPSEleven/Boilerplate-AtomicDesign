# 🎨 Guía de Personalización del Design System

## 📍 **DÓNDE CAMBIAR LOS VALORES PRINCIPALES**

### 1. **Colores Base** - `src/design-system/styles/variables.css`

```css
:root {
  /* === COLORES BASE PARA PALETAS COMPLETAS === */
  --color-primary-base: #2196f3;    /* 🔵 Cambia aquí el color primario */
  --color-secondary-base: #2196f3;  /* 🔵 Cambia aquí el color secundario */
  --color-success-base: #4caf50;    /* 🟢 Cambia aquí el color de éxito */
  --color-warning-base: #ff9800;    /* 🟠 Cambia aquí el color de advertencia */
  --color-danger-base: #f44336;     /* 🔴 Cambia aquí el color de peligro */
  --color-info-base: #00bcd4;       /* 🔵 Cambia aquí el color de información */
  --color-neutral-base: #6c757d;    /* ⚫ Cambia aquí el color neutro */
}
```

**💡 Tip**: Los colores se generan automáticamente usando CSS 2025 con `oklch()` y `color-mix()`. Solo cambia los colores base y el sistema generará todas las variantes.

### 2. **Tipografía** - `src/design-system/styles/variables.css`

```css
:root {
  /* === TIPOGRAFÍA === */
  --font-family-base: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-family-heading: var(--font-family-base);  /* 📝 Cambia aquí la fuente de títulos */
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
}
```

### 3. **Espaciado** - `src/design-system/styles/variables.css`

```css
:root {
  /* === ESPACIADO FLUIDO RESPONSIVE === */
  --spacing-fluid-xs: clamp(0.25rem, 0.5vw, 0.5rem);   /* 📏 Cambia aquí el espaciado XS */
  --spacing-fluid-sm: clamp(0.5rem, 1vw, 1rem);         /* 📏 Cambia aquí el espaciado SM */
  --spacing-fluid-md: clamp(1rem, 2vw, 2rem);           /* 📏 Cambia aquí el espaciado MD */
  --spacing-fluid-lg: clamp(1.5rem, 3vw, 3rem);         /* 📏 Cambia aquí el espaciado LG */
  --spacing-fluid-xl: clamp(2rem, 4vw, 4rem);           /* 📏 Cambia aquí el espaciado XL */
}
```

### 4. **Breakpoints** - `src/design-system/styles/variables.css`

```css
:root {
  /* === Breakpoints === */
  --breakpoint-xs: 0;      /* 📱 Cambia aquí el breakpoint XS */
  --breakpoint-sm: 576px;  /* 📱 Cambia aquí el breakpoint SM */
  --breakpoint-md: 768px;  /* 📱 Cambia aquí el breakpoint MD */
  --breakpoint-lg: 992px;  /* 📱 Cambia aquí el breakpoint LG */
  --breakpoint-xl: 1200px; /* 📱 Cambia aquí el breakpoint XL */
  --breakpoint-xxl: 1400px; /* 📱 Cambia aquí el breakpoint XXL */
}
```

### 5. **Radios de Borde** - `src/design-system/styles/variables.css`

```css
:root {
  /* === Radios de Borde === */
  --border-radius-sm: 0.125rem;  /* 🔲 Cambia aquí el radio pequeño */
  --border-radius-md: 0.25rem;   /* 🔲 Cambia aquí el radio medio */
  --border-radius-lg: 0.5rem;    /* 🔲 Cambia aquí el radio grande */
  --border-radius-xl: 0.75rem;   /* 🔲 Cambia aquí el radio extra grande */
}
```

### 6. **Sombras** - `src/design-system/styles/variables.css`

```css
:root {
  /* === SOMBRAS === */
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}
```

## 🎯 **CÓMO PERSONALIZAR COMPONENTES**

### 1. **Componentes Individuales**

Cada componente tiene su propio archivo CSS Module:
- `src/design-system/atomic/atoms/Button/Button.module.css`
- `src/design-system/atomic/atoms/Input/Input.module.css`
- `src/design-system/atomic/molecules/Card/Card.module.css`

### 2. **Variables CSS del Componente**

Los componentes exponen variables CSS para personalización:

```css
/* Ejemplo: Button.module.css */
.button {
  --button-bg: var(--color-primary-500);
  --button-color: var(--color-text-on-primary);
  --button-padding: var(--spacing-md) var(--spacing-lg);
  --button-radius: var(--border-radius-md);
  --button-shadow: var(--shadow-sm);
  
  background-color: var(--button-bg);
  color: var(--button-color);
  padding: var(--button-padding);
  border-radius: var(--button-radius);
  box-shadow: var(--button-shadow);
}
```

### 3. **Personalización desde el Componente Padre**

```tsx
// Ejemplo de personalización
<Button 
  style={{
    '--button-bg': '#ff6b6b',
    '--button-color': '#ffffff',
    '--button-radius': '20px'
  }}
>
  Botón Personalizado
</Button>
```

## 🌓 **DARK MODE**

### 1. **Variables de Tema** - `src/design-system/styles/global.css`

```css
/* === THEME TOGGLE SUPPORT === */
[data-theme="dark"] {
  --color-background-primary: var(--color-neutral-900);
  --color-background-secondary: var(--color-neutral-800);
  --color-text-primary: var(--color-neutral-100);
  --color-text-secondary: var(--color-neutral-300);
  /* ... más variables */
}

[data-theme="light"] {
  --color-background-primary: var(--color-neutral-50);
  --color-background-secondary: var(--color-neutral-100);
  --color-text-primary: var(--color-neutral-900);
  --color-text-secondary: var(--color-neutral-700);
  /* ... más variables */
}
```

### 2. **Cambiar Colores para Dark Mode**

```css
/* En variables.css */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary-base: #64b5f6;  /* 🔵 Color más claro para dark mode */
    --color-secondary-base: #81c784; /* 🟢 Color más claro para dark mode */
  }
}
```

## 📱 **RESPONSIVE DESIGN**

### 1. **Container Queries**

Los componentes usan Container Queries para responsive:

```css
/* Ejemplo: Button.module.css */
@container (max-width: 400px) {
  .button {
    font-size: var(--font-size-sm);
    padding: var(--spacing-sm) var(--spacing-md);
  }
}
```

### 2. **Fluid Values**

Usa `clamp()` para valores que se adaptan automáticamente:

```css
:root {
  --font-size-fluid-base: clamp(0.95rem, 0.5vw + 0.85rem, 1.15rem);
  --spacing-fluid-md: clamp(1rem, 2vw, 2rem);
}
```

## 🎨 **CREAR NUEVOS COMPONENTES**

### 1. **Estructura del Componente**

```
ComponentName/
├── index.ts                 # Exportación limpia
├── ComponentName.tsx       # Componente principal
├── ComponentName.module.css # Estilos aislados
├── ComponentName.types.ts  # Tipos separados
└── ComponentName.test.tsx  # Tests
```

### 2. **Template de CSS Module**

```css
/* ComponentName.module.css - CSS 2025 */

.componentName {
  /* Layout */
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  
  /* Styling */
  background-color: var(--surface-base);
  border: var(--border-width-thin) solid var(--color-border-primary);
  border-radius: var(--border-radius-md);
  
  /* Transitions */
  transition: var(--transition-all);
  
  /* Animation */
  animation: fadeInUp var(--duration-base) var(--ease-out-cubic);
}

/* === CONTAINER QUERIES === */
@container (max-width: 400px) {
  .componentName {
    /* Estilos para contenedores pequeños */
  }
}

/* === RESPONSIVE === */
@media (max-width: 576px) {
  .componentName {
    /* Estilos para móvil */
  }
}

/* === DARK MODE === */
@media (prefers-color-scheme: dark) {
  .componentName {
    /* Estilos para dark mode */
  }
}

/* === REDUCED MOTION === */
@media (prefers-reduced-motion: reduce) {
  .componentName {
    animation: none;
    transition: none;
  }
}
```

## 🔧 **HERRAMIENTAS ÚTILES**

### 1. **Comandos de Desarrollo**

```bash
# Desarrollo
pnpm dev

# Build
pnpm build

# Testing
pnpm test
pnpm test:ui
pnpm test:coverage

# Linting
pnpm lint
pnpm lint:fix

# Formateo
pnpm format
pnpm format:check

# Validación completa
pnpm validate
```

### 2. **Archivos Importantes**

- **`src/design-system/styles/variables.css`** - Todos los tokens de diseño
- **`src/design-system/styles/global.css`** - Estilos globales y utilidades
- **`src/design-system/atomic/atoms/index.ts`** - Exportación de átomos
- **`src/design-system/atomic/molecules/index.ts`** - Exportación de moléculas
- **`src/design-system/atomic/organisms/index.ts`** - Exportación de organismos
- **`src/design-system/atomic/templates/index.ts`** - Exportación de templates

## 📚 **RECURSOS ADICIONALES**

- **CSS 2025 Features**: Relative Colors, Container Queries, Scroll-Driven Animations
- **Atomic Design**: Metodología de Brad Frost
- **Design Tokens**: Sistema de tokens de diseño
- **CSS Modules**: Estilos encapsulados
- **TypeScript**: Tipado estricto para componentes

---

**💡 Consejo**: Siempre usa las variables CSS del sistema en lugar de valores hardcodeados. Esto garantiza consistencia y facilita la personalización.
