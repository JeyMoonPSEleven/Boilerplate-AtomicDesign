Perfecto, ahora tengo toda la información necesaria. Voy a crear una guía completa y exhaustiva de CSS para Cursor IDE, enfocada en crear componentes totalmente personalizables y responsive, incorporando las últimas tendencias de CSS 2025 y analizando los archivos actuales del usuario.

# Guía Completa CSS Modules 2025: Sistema de Estilos Profesional para Atomic Design con Cursor IDE

## Análisis de tu Sistema Actual

He revisado tus archivos `variables.css` y `global.css`. Tienes una **excelente base** con:

✅ Sistema de tokens bien estructurado (colores, espaciado, tipografía)  
✅ Breakpoints responsive mobile-first  
✅ Utilidades CSS bien organizadas  
✅ Variables CSS custom properties  

**Ahora vamos a EXPANDIR y POTENCIAR** tu sistema con las últimas características CSS 2025 y hacerlo 100% personalizable.[1][2][3][4][5]

***

## PARTE 1: Expansión del Sistema de Tokens (variables.css)

### 1.1 Colores Avanzados con Relative Colors y color-mix()[2][6][7][8]

```css
/* src/design-system/styles/variables.css - MEJORADO */

:root {
  /* === COLORES BASE === */
  --color-primary-base: #2196f3;
  --color-secondary-base: #9c27b0;
  --color-success-base: #4caf50;
  --color-warning-base: #ff9800;
  --color-danger-base: #f44336;
  --color-info-base: #2196f3;
  
  /* === COLORES CON RELATIVE COLOR SYNTAX === */
  /* Genera automáticamente variantes sin definir cada una */
  
  /* Primary - generadas desde base */
  --color-primary-50: oklch(from var(--color-primary-base) calc(l + 0.35) c h);
  --color-primary-100: oklch(from var(--color-primary-base) calc(l + 0.25) c h);
  --color-primary-200: oklch(from var(--color-primary-base) calc(l + 0.15) c h);
  --color-primary-300: oklch(from var(--color-primary-base) calc(l + 0.08) c h);
  --color-primary-400: oklch(from var(--color-primary-base) calc(l + 0.04) c h);
  --color-primary-500: var(--color-primary-base);
  --color-primary-600: oklch(from var(--color-primary-base) calc(l - 0.06) c h);
  --color-primary-700: oklch(from var(--color-primary-base) calc(l - 0.12) c h);
  --color-primary-800: oklch(from var(--color-primary-base) calc(l - 0.18) c h);
  --color-primary-900: oklch(from var(--color-primary-base) calc(l - 0.24) c h);
  
  /* Transparencias con relative colors */
  --color-primary-alpha-10: oklch(from var(--color-primary-500) l c h / 0.1);
  --color-primary-alpha-20: oklch(from var(--color-primary-500) l c h / 0.2);
  --color-primary-alpha-30: oklch(from var(--color-primary-500) l c h / 0.3);
  --color-primary-alpha-40: oklch(from var(--color-primary-500) l c h / 0.4);
  --color-primary-alpha-50: oklch(from var(--color-primary-500) l c h / 0.5);
  
  /* Color-mix para crear variantes intermedias */
  --color-primary-soft: color-mix(in oklch, var(--color-primary-500), white 60%);
  --color-primary-intense: color-mix(in oklch, var(--color-primary-500), black 20%);
  
  /* Colores complementarios automáticos */
  --color-primary-complement: oklch(from var(--color-primary-500) l c calc(h + 180deg));
  --color-primary-triadic-1: oklch(from var(--color-primary-500) l c calc(h + 120deg));
  --color-primary-triadic-2: oklch(from var(--color-primary-500) l c calc(h + 240deg));
  
  /* === COLORES DE SUPERFICIE CON ELEVATION === */
  --surface-base: #ffffff;
  --surface-level-1: color-mix(in srgb, var(--surface-base), var(--color-gray-100) 5%);
  --surface-level-2: color-mix(in srgb, var(--surface-base), var(--color-gray-100) 10%);
  --surface-level-3: color-mix(in srgb, var(--surface-base), var(--color-gray-100) 15%);
  --surface-level-4: color-mix(in srgb, var(--surface-base), var(--color-gray-100) 20%);
  
  /* === GRADIENTES PERSONALIZABLES === */
  --gradient-primary: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700));
  --gradient-primary-radial: radial-gradient(circle at top right, var(--color-primary-400), var(--color-primary-700));
  --gradient-shimmer: linear-gradient(
    90deg,
    transparent 0%,
    oklch(from var(--color-primary-500) l c h / 0.1) 50%,
    transparent 100%
  );
  --gradient-glass: linear-gradient(
    135deg,
    oklch(from white l c h / 0.1) 0%,
    oklch(from white l c h / 0.05) 100%
  );
  
  /* === BACKDROP & OVERLAYS === */
  --overlay-dark: oklch(from black l c h / 0.6);
  --overlay-light: oklch(from white l c h / 0.8);
  --backdrop-blur-sm: blur(4px);
  --backdrop-blur-md: blur(8px);
  --backdrop-blur-lg: blur(12px);
  --backdrop-blur-xl: blur(16px);
  
  /* === ESPACIADO FLUIDO RESPONSIVE === */
  /* Usa clamp() para escalado automático entre breakpoints */
  --spacing-fluid-xs: clamp(0.25rem, 0.5vw, 0.5rem);
  --spacing-fluid-sm: clamp(0.5rem, 1vw, 1rem);
  --spacing-fluid-md: clamp(1rem, 2vw, 2rem);
  --spacing-fluid-lg: clamp(1.5rem, 3vw, 3rem);
  --spacing-fluid-xl: clamp(2rem, 4vw, 4rem);
  --spacing-fluid-2xl: clamp(3rem, 6vw, 6rem);
  --spacing-fluid-3xl: clamp(4rem, 8vw, 8rem);
  
  /* === TIPOGRAFÍA FLUIDA === */
  --font-size-fluid-xs: clamp(0.7rem, 0.5vw + 0.6rem, 0.85rem);
  --font-size-fluid-sm: clamp(0.8rem, 0.5vw + 0.7rem, 0.95rem);
  --font-size-fluid-base: clamp(0.95rem, 0.5vw + 0.85rem, 1.15rem);
  --font-size-fluid-lg: clamp(1.1rem, 0.8vw + 0.95rem, 1.35rem);
  --font-size-fluid-xl: clamp(1.25rem, 1vw + 1.1rem, 1.6rem);
  --font-size-fluid-2xl: clamp(1.5rem, 1.5vw + 1.2rem, 2rem);
  --font-size-fluid-3xl: clamp(1.875rem, 2vw + 1.5rem, 2.5rem);
  --font-size-fluid-4xl: clamp(2.25rem, 2.5vw + 1.8rem, 3.2rem);
  --font-size-fluid-5xl: clamp(3rem, 3vw + 2.5rem, 4.5rem);
  
  /* === SOMBRAS AVANZADAS CON CAPAS === */
  --shadow-color-primary: oklch(from var(--color-primary-500) l c h / 0.15);
  --shadow-color-secondary: oklch(from var(--color-secondary-500) l c h / 0.15);
  
  /* Sombras con elevación realista */
  --shadow-xs: 
    0 1px 2px 0 rgba(0, 0, 0, 0.05);
  
  --shadow-sm: 
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
  
  --shadow-md: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  
  --shadow-lg: 
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  
  --shadow-xl: 
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  
  --shadow-2xl: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* Sombras colored para componentes destacados */
  --shadow-primary: 
    0 10px 15px -3px var(--shadow-color-primary),
    0 4px 6px -4px var(--shadow-color-primary);
  
  --shadow-secondary: 
    0 10px 15px -3px var(--shadow-color-secondary),
    0 4px 6px -4px var(--shadow-color-secondary);
  
  /* Sombra interna para inputs */
  --shadow-inset: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  --shadow-inset-lg: inset 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  
  /* === BORDES AVANZADOS === */
  --border-width-hairline: 0.5px;
  --border-width-thin: 1px;
  --border-width-medium: 2px;
  --border-width-thick: 4px;
  --border-width-extra-thick: 8px;
  
  /* Radios fluidos responsive */
  --border-radius-fluid-sm: clamp(0.125rem, 0.2vw, 0.25rem);
  --border-radius-fluid-md: clamp(0.25rem, 0.4vw, 0.5rem);
  --border-radius-fluid-lg: clamp(0.5rem, 0.6vw, 0.75rem);
  --border-radius-fluid-xl: clamp(0.75rem, 0.8vw, 1rem);
  --border-radius-fluid-2xl: clamp(1rem, 1vw, 1.5rem);
  
  /* === ANIMACIONES & TRANSICIONES AVANZADAS === */
  /* Easing functions personalizadas */
  --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  
  --ease-in-cubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
  
  --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
  --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  
  --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  /* Duraciones */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
  --duration-slowest: 1000ms;
  
  /* Transiciones completas */
  --transition-all: all var(--duration-base) var(--ease-out-cubic);
  --transition-transform: transform var(--duration-fast) var(--ease-out-quart);
  --transition-opacity: opacity var(--duration-base) var(--ease-in-out-quad);
  --transition-colors: 
    background-color var(--duration-base) var(--ease-out-cubic),
    border-color var(--duration-base) var(--ease-out-cubic),
    color var(--duration-base) var(--ease-out-cubic);
  
  /* === GRID SYSTEM AVANZADO === */
  --grid-columns-mobile: 4;
  --grid-columns-tablet: 8;
  --grid-columns-desktop: 12;
  --grid-columns-wide: 16;
  
  --grid-gap-fluid: clamp(1rem, 2vw, 2rem);
  --grid-margin-fluid: clamp(1rem, 3vw, 3rem);
  
  /* === ASPECT RATIOS === */
  --aspect-square: 1 / 1;
  --aspect-video: 16 / 9;
  --aspect-portrait: 3 / 4;
  --aspect-landscape: 4 / 3;
  --aspect-ultrawide: 21 / 9;
  --aspect-golden: 1.618 / 1;
  
  /* === FILTROS & EFECTOS === */
  --filter-blur-sm: blur(4px);
  --filter-blur-md: blur(8px);
  --filter-blur-lg: blur(16px);
  --filter-blur-xl: blur(24px);
  
  --filter-brightness-dark: brightness(0.8);
  --filter-brightness-darker: brightness(0.6);
  --filter-brightness-light: brightness(1.2);
  --filter-brightness-lighter: brightness(1.4);
  
  --filter-contrast-low: contrast(0.8);
  --filter-contrast-high: contrast(1.2);
  
  --filter-grayscale-partial: grayscale(0.5);
  --filter-grayscale-full: grayscale(1);
  
  --filter-saturate-low: saturate(0.5);
  --filter-saturate-high: saturate(1.5);
  
  /* Filtros compuestos */
  --filter-glass: blur(8px) saturate(180%);
  --filter-frosted: blur(12px) saturate(200%) contrast(90%);
  
  /* === TRANSFORMS === */
  --transform-scale-sm: scale(0.95);
  --transform-scale-md: scale(0.9);
  --transform-scale-lg: scale(1.05);
  --transform-scale-xl: scale(1.1);
  
  --transform-rotate-sm: rotate(5deg);
  --transform-rotate-md: rotate(15deg);
  --transform-rotate-lg: rotate(45deg);
  
  /* === CONTENEDORES RESPONSIVE === */
  --container-xs: 20rem;    /* 320px */
  --container-sm: 30rem;    /* 480px */
  --container-md: 45rem;    /* 720px */
  --container-lg: 60rem;    /* 960px */
  --container-xl: 71.25rem; /* 1140px */
  --container-2xl: 82.5rem; /* 1320px */
  --container-3xl: 96rem;   /* 1536px */
  
  /* === CONTENT WIDTH LIMITS === */
  --content-width-prose: 65ch;  /* Ideal para lectura */
  --content-width-narrow: 40rem;
  --content-width-medium: 56rem;
  --content-width-wide: 72rem;
  --content-width-full: 100%;
}
```

### 1.2 Tokens de Animación Scroll-Driven[9][10][11][12][1]

```css
/* === SCROLL-DRIVEN ANIMATIONS TOKENS === */
:root {
  /* Configuración para animaciones basadas en scroll */
  --scroll-timeline-axis: block;  /* block | inline | y | x */
  --scroll-timeline-range-start: 0%;
  --scroll-timeline-range-end: 100%;
  
  /* View timeline ranges */
  --view-timeline-inset-block: 0px;
  --view-timeline-inset-inline: 0px;
  
  /* Animation ranges predefinidos */
  --range-entry: entry 0% entry 100%;
  --range-contain: contain 0% contain 100%;
  --range-exit: exit 0% exit 100%;
  --range-cover: cover 0% cover 100%;
}
```

### 1.3 Sistema de Capas CSS (Cascade Layers)[13][14][15][16][17]

```css
/* === CASCADE LAYERS === */
/* Definir orden de capas para control total del cascade */

@layer reset, tokens, base, components, utilities, overrides;

/* Reset Layer */
@layer reset {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  /* Más reset styles... */
}

/* Tokens Layer */
@layer tokens {
  :root {
    /* Todos los tokens van aquí */
  }
}

/* Base Layer */
@layer base {
  html {
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
    scroll-padding-top: var(--spacing-lg);
  }
  
  body {
    font-family: var(--font-family-base);
    font-size: var(--font-size-fluid-base);
    line-height: var(--line-height-normal);
    color: var(--color-text-primary);
    background-color: var(--color-background-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Components Layer - tus componentes Atomic Design */
@layer components {
  /* Componentes definidos en sus .module.css */
}

/* Utilities Layer */
@layer utilities {
  /* Clases utilitarias */
}

/* Overrides Layer - mayor prioridad */
@layer overrides {
  /* Overrides específicos de proyecto */
}
```

***

## PARTE 2: CSS Modules - Patrón Definitivo para Componentes

### 2.1 Template Master de Componente (Todos los átomos)[5][18][2]

```css
/* Button.module.css - TEMPLATE COMPLETO */

/* === BASE STYLES === */
.button {
  /* Layout & Display */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  
  /* Positioning */
  position: relative;
  isolation: isolate;
  
  /* Box Model */
  padding: var(--spacing-md) var(--spacing-lg);
  border: var(--border-width-thin) solid transparent;
  border-radius: var(--border-radius-fluid-md);
  
  /* Typography */
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  
  /* Colors */
  color: var(--color-text-on-primary);
  background-color: var(--color-primary-500);
  
  /* Interactions */
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  
  /* Transitions */
  transition: var(--transition-colors), var(--transition-transform);
  
  /* Accessibility */
  outline: none;
}

/* === INTERACTION STATES === */
.button:hover:not(:disabled) {
  background-color: var(--color-primary-600);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.button:active:not(:disabled) {
  background-color: var(--color-primary-700);
  transform: translateY(0) scale(0.98);
  box-shadow: var(--shadow-sm);
}

.button:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  box-shadow: var(--shadow-focus);
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* === VARIANTES DE COLOR === */
.primary {
  background-color: var(--color-primary-500);
  color: var(--color-text-on-primary);
}

.primary:hover:not(:disabled) {
  background-color: var(--color-primary-600);
}

.secondary {
  background-color: var(--color-secondary-500);
  color: var(--color-text-on-secondary);
}

.secondary:hover:not(:disabled) {
  background-color: var(--color-secondary-600);
}

.success {
  background-color: var(--color-success);
  color: var(--color-text-on-success);
}

.danger {
  background-color: var(--color-danger);
  color: var(--color-text-on-danger);
}

.ghost {
  background-color: transparent;
  color: var(--color-primary-500);
  border-color: var(--color-primary-500);
}

.ghost:hover:not(:disabled) {
  background-color: var(--color-primary-alpha-10);
}

.outline {
  background-color: transparent;
  color: var(--color-primary-500);
  border-color: var(--color-border-primary);
}

.outline:hover:not(:disabled) {
  background-color: var(--color-primary-alpha-10);
  border-color: var(--color-primary-500);
}

.glass {
  background-color: var(--color-primary-alpha-20);
  backdrop-filter: var(--filter-glass);
  border: var(--border-width-thin) solid oklch(from white l c h / 0.2);
  color: var(--color-text-primary);
}

.gradient {
  background: var(--gradient-primary);
  border: none;
  color: var(--color-text-on-primary);
  position: relative;
  overflow: hidden;
}

.gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-shimmer);
  transform: translateX(-100%);
  transition: transform var(--duration-slow) var(--ease-out-cubic);
}

.gradient:hover::before {
  transform: translateX(100%);
}

/* === TAMAÑOS === */
.xs {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-xs);
  min-height: 1.75rem;
  gap: var(--spacing-xs);
}

.sm {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  min-height: 2rem;
}

.md {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-base);
  min-height: 2.5rem;
}

.lg {
  padding: var(--spacing-lg) var(--spacing-xl);
  font-size: var(--font-size-lg);
  min-height: 3rem;
}

.xl {
  padding: var(--spacing-xl) var(--spacing-xxl);
  font-size: var(--font-size-xl);
  min-height: 3.5rem;
}

/* === MODIFICADORES === */
.fullWidth {
  width: 100%;
  display: flex;
}

.rounded {
  border-radius: var(--border-radius-full);
}

.square {
  aspect-ratio: var(--aspect-square);
  padding: var(--spacing-md);
}

.iconOnly {
  aspect-ratio: var(--aspect-square);
  padding: 0;
  justify-content: center;
}

.elevated {
  box-shadow: var(--shadow-md);
}

.elevated:hover:not(:disabled) {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

/* === ESTADOS === */
.loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.loading::after {
  content: '';
  position: absolute;
  width: 1em;
  height: 1em;
  top: 50%;
  left: 50%;
  margin: -0.5em 0 0 -0.5em;
  border: 2px solid currentColor;
  border-radius: var(--border-radius-full);
  border-right-color: transparent;
  animation: spin var(--duration-slow) linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.success {
  animation: successPulse var(--duration-base) var(--ease-out-cubic);
}

@keyframes successPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* === GRUPOS DE BOTONES === */
.buttonGroup {
  display: inline-flex;
  gap: 0;
}

.buttonGroup .button {
  border-radius: 0;
}

.buttonGroup .button:first-child {
  border-top-left-radius: var(--border-radius-md);
  border-bottom-left-radius: var(--border-radius-md);
}

.buttonGroup .button:last-child {
  border-top-right-radius: var(--border-radius-md);
  border-bottom-right-radius: var(--border-radius-md);
}

.buttonGroup .button:not(:last-child) {
  border-right-width: 0;
}

/* === ICONOS === */
.leftIcon,
.rightIcon {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 1.25em;
}

.leftIcon svg,
.rightIcon svg {
  width: 1em;
  height: 1em;
}

/* === RESPONSIVE === */
/* Mobile */
@media (max-width: 576px) {
  .button {
    min-width: 100%;
  }
  
  .responsiveText {
    display: none;
  }
  
  .iconOnly {
    display: inline-flex;
  }
}

/* Tablet */
@media (min-width: 577px) and (max-width: 768px) {
  .button {
    padding: var(--spacing-fluid-md) var(--spacing-fluid-lg);
  }
}

/* Desktop */
@media (min-width: 769px) {
  .button {
    min-width: 120px;
  }
}

/* === CONTAINER QUERIES === */
@container (max-width: 400px) {
  .button {
    font-size: var(--font-size-sm);
    padding: var(--spacing-sm) var(--spacing-md);
  }
}

@container (min-width: 600px) {
  .button {
    min-width: 140px;
  }
}

/* === DARK MODE === */
@media (prefers-color-scheme: dark) {
  .button {
    --color-primary-500: var(--color-primary-400);
    --color-primary-600: var(--color-primary-500);
    --color-primary-700: var(--color-primary-600);
  }
}

/* === REDUCED MOTION === */
@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
    animation: none;
  }
  
  .button:hover:not(:disabled) {
    transform: none;
  }
  
  .loading::after {
    animation: none;
    opacity: 0.5;
  }
}

/* === HIGH CONTRAST MODE === */
@media (prefers-contrast: high) {
  .button {
    border-width: var(--border-width-medium);
  }
}

/* === PRINT STYLES === */
@media print {
  .button {
    background: none;
    color: black;
    border: 1px solid black;
    box-shadow: none;
  }
}
```

***

## PARTE 3: Componentes Avanzados con CSS Moderno

### 3.1 Card con Container Queries y Subgrid[19][20][21][22][23][24][25]

```css
/* Card.module.css */

.card {
  /* Container query setup */
  container-type: inline-size;
  container-name: card;
  
  /* Layout */
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: auto 1fr auto;
  gap: var(--spacing-md);
  
  /* Styling */
  background-color: var(--surface-base);
  border: var(--border-width-thin) solid var(--color-border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  
  /* Transitions */
  transition: var(--transition-all);
  
  /* Contenido sobre flujo */
  overflow: hidden;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

/* Subcomponentes */
.cardHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
}

.cardMedia {
  aspect-ratio: var(--aspect-video);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  margin: calc(var(--spacing-lg) * -1);
  margin-bottom: var(--spacing-md);
}

.cardMedia img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out-cubic);
}

.card:hover .cardMedia img {
  transform: scale(1.05);
}

.cardContent {
  flex: 1;
}

.cardFooter {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: flex-end;
  align-items: center;
  padding-top: var(--spacing-md);
  border-top: var(--border-width-thin) solid var(--color-border-light);
}

/* === CONTAINER QUERIES - Responsive interno === */
@container card (max-width: 300px) {
  .card {
    padding: var(--spacing-sm);
    gap: var(--spacing-sm);
  }
  
  .cardHeader {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .cardFooter {
    flex-direction: column;
    align-items: stretch;
  }
  
  .cardFooter > * {
    width: 100%;
  }
}

@container card (min-width: 500px) {
  .card {
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto auto;
  }
  
  .cardMedia {
    grid-row: 1 / -1;
    margin: 0;
  }
}

/* Variantes */
.glass {
  background: var(--gradient-glass);
  backdrop-filter: var(--filter-glass);
  border: var(--border-width-thin) solid oklch(from white l c h / 0.2);
}

.elevated {
  box-shadow: var(--shadow-xl);
}

.interactive {
  cursor: pointer;
}

.interactive:active {
  transform: scale(0.98);
}
```

### 3.2 Input con Estados y Animaciones[26][2]

```css
/* Input.module.css */

.inputWrapper {
  container-type: inline-size;
  position: relative;
  width: 100%;
}

.input {
  /* Layout */
  width: 100%;
  height: var(--input-height-md);
  padding: var(--spacing-sm) var(--spacing-md);
  
  /* Typography */
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  
  /* Styling */
  background-color: var(--color-background-primary);
  border: var(--border-width-thin) solid var(--color-border-primary);
  border-radius: var(--border-radius-md);
  color: var(--color-text-primary);
  
  /* Transitions */
  transition: var(--transition-all);
  
  /* Resetear apariencia por defecto */
  appearance: none;
  outline: none;
}

/* Focus state */
.input:focus {
  border-color: var(--color-border-focus);
  box-shadow: var(--shadow-focus);
  background-color: var(--surface-base);
}

/* Hover state */
.input:hover:not(:disabled):not(:focus) {
  border-color: var(--color-gray-400);
}

/* Error state */
.input:invalid,
.inputError {
  border-color: var(--color-danger);
}

.input:invalid:focus,
.inputError:focus {
  box-shadow: 0 0 0 3px oklch(from var(--color-danger) l c h / 0.1);
}

/* Success state */
.inputSuccess {
  border-color: var(--color-success);
}

.inputSuccess:focus {
  box-shadow: 0 0 0 3px oklch(from var(--color-success) l c h / 0.1);
}

/* Disabled state */
.input:disabled {
  background-color: var(--color-gray-100);
  color: var(--color-text-muted);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Label flotante */
.label {
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
  pointer-events: none;
  transition: var(--transition-all);
  background-color: var(--color-background-primary);
  padding: 0 var(--spacing-xs);
}

.input:focus ~ .label,
.input:not(:placeholder-shown) ~ .label {
  top: 0;
  font-size: var(--font-size-sm);
  color: var(--color-primary-500);
}

/* Iconos */
.inputWithIcon {
  padding-left: var(--spacing-xxl);
}

.icon {
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary);
  pointer-events: none;
  transition: color var(--transition-base);
}

.input:focus ~ .icon {
  color: var(--color-primary-500);
}

/* Tamaños */
.sm {
  height: var(--input-height-sm);
  font-size: var(--font-size-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
}

.lg {
  height: var(--input-height-lg);
  font-size: var(--font-size-lg);
  padding: var(--spacing-md) var(--spacing-lg);
}

/* Variantes */
.filled {
  background-color: var(--color-gray-100);
  border: none;
}

.filled:focus {
  background-color: var(--surface-base);
  box-shadow: var(--shadow-inset);
}

.underlined {
  border: none;
  border-bottom: var(--border-width-medium) solid var(--color-border-primary);
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
}

.underlined:focus {
  border-bottom-color: var(--color-primary-500);
  box-shadow: none;
}
```

### 3.3 Modal con Backdrop y Animaciones[4][9]

```css
/* Modal.module.css */

.modalOverlay {
  /* Positioning */
  position: fixed;
  inset: 0;
  z-index: var(--z-index-modal-backdrop);
  
  /* Styling */
  background-color: var(--overlay-dark);
  backdrop-filter: var(--backdrop-blur-sm);
  
  /* Animation */
  opacity: 0;
  animation: fadeIn var(--duration-base) var(--ease-out-cubic) forwards;
  
  /* Centering */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  
  /* Scroll behavior */
  overflow-y: auto;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.modal {
  /* Positioning */
  position: relative;
  z-index: var(--z-index-modal);
  
  /* Layout */
  width: 100%;
  max-width: 32rem;
  max-height: 90vh;
  
  /* Styling */
  background-color: var(--surface-base);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-2xl);
  
  /* Animation */
  transform: scale(0.9) translateY(20px);
  opacity: 0;
  animation: modalEnter var(--duration-slow) var(--ease-elastic) forwards;
  animation-delay: 100ms;
}

@keyframes modalEnter {
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

/* Variantes de tamaño */
.sm {
  max-width: 24rem;
}

.md {
  max-width: 32rem;
}

.lg {
  max-width: 48rem;
}

.xl {
  max-width: 64rem;
}

.fullscreen {
  max-width: 100%;
  max-height: 100%;
  height: 100vh;
  border-radius: 0;
}

/* Subcomponentes */
.modalHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg);
  border-bottom: var(--border-width-thin) solid var(--color-border-light);
}

.modalTitle {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin: 0;
}

.modalClose {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  border-radius: var(--border-radius-md);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: var(--transition-all);
}

.modalClose:hover {
  background-color: var(--color-gray-100);
  color: var(--color-text-primary);
}

.modalBody {
  padding: var(--spacing-lg);
  overflow-y: auto;
}

.modalFooter {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: flex-end;
  padding: var(--spacing-lg);
  border-top: var(--border-width-thin) solid var(--color-border-light);
}

/* Responsive */
@media (max-width: 576px) {
  .modal {
    max-width: 100%;
    max-height: 100%;
    border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
    align-self: flex-end;
  }
  
  .modalOverlay {
    padding: 0;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .modal {
    animation: fadeIn var(--duration-fast) linear forwards;
  }
}
```

***

## PARTE 4: Animaciones Scroll-Driven[10][11][12][27][9]

```css
/* ScrollAnimations.module.css */

/* === FADE IN ON SCROLL === */
.fadeInOnScroll {
  animation: fadeInUp linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* === PROGRESS BAR ON SCROLL === */
.progressBar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: var(--gradient-primary);
  z-index: var(--z-index-sticky);
  
  transform-origin: left center;
  transform: scaleX(0);
  
  animation: growProgress linear;
  animation-timeline: scroll(root block);
}

@keyframes growProgress {
  to {
    transform: scaleX(1);
  }
}

/* === STICKY HEADER WITH SCROLL === */
.stickyHeader {
  position: sticky;
  top: 0;
  z-index: var(--z-index-sticky);
  background-color: var(--surface-base);
  backdrop-filter: var(--filter-glass);
  
  animation: shrinkHeader linear both;
  animation-timeline: scroll(root block);
  animation-range: 0 200px;
}

@keyframes shrinkHeader {
  from {
    padding: var(--spacing-lg);
    box-shadow: none;
  }
  to {
    padding: var(--spacing-sm);
    box-shadow: var(--shadow-md);
  }
}

/* === PARALLAX EFFECT === */
.parallax {
  animation: parallaxMove linear;
  animation-timeline: scroll();
}

@keyframes parallaxMove {
  to {
    transform: translateY(calc(var(--scroll-position) * -100px));
  }
}

/* === REVEAL ON SCROLL === */
.revealOnScroll {
  view-timeline-name: --reveal;
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}

@keyframes reveal {
  from {
    opacity: 0;
    clip-path: inset(0 100% 0 0);
  }
  to {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
}

/* === SCALE ON SCROLL === */
.scaleOnScroll {
  animation: scaleUp linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 50%;
}

@keyframes scaleUp {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* === ROTATE ON SCROLL === */
.rotateOnScroll {
  animation: rotateIn linear both;
  animation-timeline: view();
}

@keyframes rotateIn {
  from {
    transform: rotate(-180deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
```

***

## PARTE 5: Grid Layouts Avanzados con Subgrid[20][22][23][24][25]

```css
/* GridLayouts.module.css */

/* === PARENT GRID === */
.gridContainer {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: var(--grid-gap-fluid);
  padding: var(--grid-margin-fluid);
}

/* === SUBGRID PATTERN === */
.subgridItem {
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  grid-column: span 12;
  gap: var(--spacing-md);
}

/* === MASONRY LAYOUT === */
.masonryGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 20px;
  gap: var(--spacing-md);
}

.masonryItem {
  grid-row-end: span var(--row-span, 10);
}

/* === BENTO GRID === */
.bentoGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: var(--spacing-md);
}

.bentoItem {
  border-radius: var(--border-radius-lg);
  background: var(--gradient-glass);
  backdrop-filter: var(--filter-glass);
  padding: var(--spacing-lg);
  transition: var(--transition-transform);
}

.bentoItem:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-xl);
}

.bentoItemLarge {
  grid-column: span 2;
  grid-row: span 2;
}

.bentoItemWide {
  grid-column: span 2;
}

.bentoItemTall {
  grid-row: span 2;
}

/* === RESPONSIVE GRIDS === */
@media (max-width: 768px) {
  .gridContainer {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .bentoGrid {
    grid-template-columns: 1fr;
    grid-auto-rows: 150px;
  }
  
  .bentoItemLarge,
  .bentoItemWide {
    grid-column: span 1;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .gridContainer {
    grid-template-columns: repeat(8, 1fr);
  }
  
  .bentoGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* === CONTAINER QUERIES FOR GRID === */
@container (max-width: 600px) {
  .gridContainer {
    grid-template-columns: 1fr;
  }
}

@container (min-width: 601px) and (max-width: 900px) {
  .gridContainer {
    grid-template-columns: repeat(2, 1fr);
  }
}

@container (min-width: 901px) {
  .gridContainer {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

***

## PARTE 6: Reglas para Cursor IDE

```markdown
# .cursorrules - CSS MODULES PROFESIONALES

## PRINCIPIOS CSS FUNDAMENTALES

### Objetivo
Crear estilos CSS Modules 100% PERSONALIZABLES, RESPONSIVE y PROFESIONALES que aprovechen las últimas características CSS 2025.

### Filosofía CSS
- TOKENS primero - usar siempre custom properties
- MOBILE FIRST - diseñar desde móvil hacia escritorio
- CONTAINER QUERIES sobre media queries cuando sea posible
- PROGRESSIVE ENHANCEMENT - funcionalidad básica siempre funciona
- ACCESIBILIDAD integrada desde el principio
- PERFORMANCE optimizado - minimizar reflows y repaints

## ESTRUCTURA DE CSS MODULES

### Orden de Propiedades (consistente en todos los componentes)
```
.component {
  /* 1. Positioning */
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  
  /* 2. Display & Layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  
  /* 3. Box Model */
  width: 100%;
  height: auto;
  padding: var(--spacing-md);
  margin: 0;
  border: var(--border-width-thin) solid var(--color-border-primary);
  border-radius: var(--border-radius-md);
  
  /* 4. Typography */
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  text-align: left;
  
  /* 5. Colors & Background */
  color: var(--color-text-primary);
  background-color: var(--surface-base);
  
  /* 6. Effects */
  box-shadow: var(--shadow-sm);
  opacity: 1;
  filter: none;
  backdrop-filter: none;
  
  /* 7. Transforms & Animations */
  transform: none;
  transition: var(--transition-all);
  animation: none;
  
  /* 8. Interactions */
  cursor: pointer;
  user-select: none;
  pointer-events: auto;
  
  /* 9. Misc */
  overflow: hidden;
  isolation: isolate;
}
```

## CARACTERÍSTICAS CSS 2025 OBLIGATORIAS

### 1. Container Queries
```
.component {
  container-type: inline-size;
  container-name: component;
}

@container component (max-width: 400px) {
  /* Estilos cuando el contenedor es pequeño */
}
```

### 2. Relative Colors
```
.button {
  --button-color: var(--color-primary-500);
  background-color: var(--button-color);
}

.button:hover {
  background-color: oklch(from var(--button-color) calc(l - 0.1) c h);
}
```

### 3. Scroll-Driven Animations
```
.animatedElement {
  animation: fadeIn linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}
```

### 4. Cascade Layers
```
@layer components {
  .myComponent {
    /* estilos */
  }
}
```

### 5. Subgrid
```
.parentGrid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.childGrid {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: span 6;
}
```

## RESPONSIVE DESIGN

### Mobile First SIEMPRE
```
/* Base - Mobile */
.component {
  padding: var(--spacing-sm);
  font-size: var(--font-size-sm);
}

/* Tablet */
@media (min-width: 768px) {
  .component {
    padding: var(--spacing-md);
    font-size: var(--font-size-base);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .component {
    padding: var(--spacing-lg);
    font-size: var(--font-size-lg);
  }
}
```

### Fluid Values con clamp()
```
.text {
  font-size: clamp(1rem, 2vw + 0.5rem, 2rem);
  padding: clamp(1rem, 3vw, 3rem);
}
```

## PERSONALIZACIÓN 100%

### Cada componente debe exponer custom properties
```
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

## ESTADOS INTERACTIVOS

### Siempre incluir todos los estados
```
.interactive {
  /* Default */
  
  /* Hover */
  &:hover:not(:disabled) { }
  
  /* Focus */
  &:focus-visible { }
  
  /* Active */
  &:active:not(:disabled) { }
  
  /* Disabled */
  &:disabled { }
  
  /* Loading */
  &[data-loading="true"] { }
  
  /* Error */
  &[data-error="true"] { }
  
  /* Success */
  &[data-success="true"] { }
}
```

## ACCESIBILIDAD

### Focus visible siempre
```
.interactive:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  box-shadow: var(--shadow-focus);
}
```

### Reduced Motion
```
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### High Contrast
```
@media (prefers-contrast: high) {
  .component {
    border-width: var(--border-width-medium);
  }
}
```

## PERFORMANCE

### Will-change para animaciones
```
.animated {
  will-change: transform, opacity;
}

.animated:hover {
  transform: translateY(-2px);
}
```

### Contain para optimización
```
.card {
  contain: layout style paint;
}
```

## NOMENCLATURA

### BEM modificado con camelCase
```
.componentName { }
.componentName__element { }
.componentName--modifier { }

/* Preferir: */
.cardHeader { }
.cardTitle { }
.cardPrimary { }
```

## DARK MODE

### Usar custom properties que cambien
```
:root {
  --bg-primary: #ffffff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1a1a;
  }
}

.component {
  background-color: var(--bg-primary);
}
```

## DEBUGGING

### Outline para debug (nunca en producción)
```
/* .debug * {
  outline: 1px solid red;
} */
```

## CHECKLIST POR COMPONENTE

- [ ] Usa tokens (custom properties) para TODOS los valores
- [ ] Mobile first responsive
- [ ] Container queries implementados
- [ ] Estados interactivos completos
- [ ] Focus visible para accesibilidad
- [ ] Reduced motion support
- [ ] Dark mode compatible
- [ ] Propiedades CSS expuestas para personalización
- [ ] Scroll-driven animations donde aplique
- [ ] Subgrid si es hijo de grid
- [ ] Transiciones suaves
- [ ] Comentarios descriptivos
- [ ] Performance optimizado (will-change, contain)
```

***

## Resumen: Indicaciones para Cursor IDE

Cuando le pidas a Cursor IDE que cree o mejore CSS, usa este prompt:

```
Crea/Mejora el CSS Module para [COMPONENTE] siguiendo estas reglas:

1. USA TOKENS: Todas las propiedades deben usar custom properties de variables.css
2. MOBILE FIRST: Diseño responsive desde móvil hacia arriba
3. CONTAINER QUERIES: Usa @container en lugar de @media cuando sea posible
4. PERSONALIZABLE: Expón custom properties para que el componente sea 100% personalizable
5. ESTADOS COMPLETOS: Incluye :hover, :focus-visible, :active, :disabled
6. ACCESIBILIDAD: Focus visible, reduced motion, high contrast
7. CSS 2025: Usa relative colors (oklch(from...)), color-mix(), scroll-driven animations
8. SUBGRID: Si es hijo de grid, usa grid-template-columns: subgrid
9. FLUID: Usa clamp() para valores responsive fluidos
10. PERFORMANCE: Usa will-change, contain donde aplique
11. DARK MODE: Compatible con prefers-color-scheme: dark
12. COMENTARIOS: Organiza en secciones claramente marcadas

Estructura:
- Base styles
- Interaction states
- Variants
- Sizes
- Modifiers
- Responsive (mobile first)
- Container queries
- Animations
- Dark mode
- Reduced motion
- High contrast
```

Este sistema te proporciona CSS **profesional, moderno, personalizable y completamente responsive** aprovechando las últimas características CSS 2025.[3][18][1][2][4][5][26]

[1](https://www.youtube.com/watch?v=VA975GOUFmM)
[2](https://we-plus.be/the-future-of-css-new-features-you-need-to-know-in-2025/)
[3](https://frontendmasters.com/blog/what-you-need-to-know-about-modern-css-2025-edition/)
[4](https://dev.to/karsten_biedermann/css-2025-more-power-for-modern-styling-beyond-sass-1o50)
[5](https://codevisionz.com/css-trends-in-2025-whats-new-and-whats-dead/)
[6](https://ishadeed.com/article/css-relative-colors/)
[7](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
[8](https://developer.chrome.com/blog/css-relative-color-syntax)
[9](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-timeline)
[10](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
[11](https://www.smashingmagazine.com/2024/12/introduction-css-scroll-driven-animations/)
[12](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
[13](https://panda-css.com/docs/concepts/cascade-layers)
[14](https://dev.to/kathryngrayson/layering-up-with-css-cascade-layers-gni)
[15](https://positivethinking.tech/insights/css-cascade-layers-explained/)
[16](https://dev.to/mechcloud_academy/understanding-layer-and-cascade-layers-in-css-f2k)
[17](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
[18](https://thecodeaccelerator.com/blog/5-emerging-css-trends-for-2025)
[19](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
[20](https://www.browserstack.com/guide/what-are-css-subgrids)
[21](https://ishadeed.com/article/css-container-query-guide/)
[22](https://www.ditdot.hr/en/css-subgrid-how-to-build-complex-layouts-in-a-simple-way)
[23](https://kitemetric.com/blogs/master-css-subgrid-advanced-grid-layouts)
[24](https://blog.pixelfreestudio.com/advanced-css-grid-layouts-for-modern-web-design/)
[25](https://dev.to/mechcloud_academy/css-subgrid-tutorial-a-comprehensive-guide-to-advanced-grid-layouts-2g4i)
[26](https://www.cssscript.com/new-css-features/)
[27](https://mskelton.dev/blog/css-scroll-animations)
[28](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/127092835/e215fc28-8b13-436a-a611-ea678f595fce/variables.css)
[29](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/127092835/1fbb4040-69c7-4bc8-9dc3-7c75f3e5f3bb/global.css)
[30](https://developer.mozilla.org/en-US/blog/getting-started-with-css-container-queries/)
[31](https://www.geeksforgeeks.org/css/modern-css-features-you-need-to-know-in-2024/)
[32](https://pieces.app/blog/learn-to-implement-css-container-queries)
[33](https://www.youtube.com/watch?v=jSCgZqoebsM)
[34](https://www.joshwcomeau.com/css/container-queries-introduction/)
[35](https://dev.to/dimeloper/css-techniques-every-developer-should-know-in-2025-30p9)
[36](https://webstudio.is/scroll-driven-animations)
[37](https://www.youtube.com/watch?v=UmzFk68Bwdk)
[38](https://css-tricks.com/css-color-functions/)
[39](https://www.youtube.com/watch?v=kAtuZDPe9DE)
[40](https://css-tricks.com/slide-through-unlimited-dimensions-with-css-scroll-timelines/)
[41](https://developer.chrome.com/docs/css-ui/css-color-mix)
[42](https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/)