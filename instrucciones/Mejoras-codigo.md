# Guía Completa de Mejores Prácticas: React + TypeScript + CSS Modules con Atomic Design

## Filosofía del Boilerplate: Código Profesional, Escalable y Reutilizable

Esta guía está diseñada para crear un **boilerplate de máxima calidad** que sirva como base sólida para múltiples proyectos. El enfoque está en la **claridad del código, personalización total y reutilización** a través de patrones de composición avanzados.[1][2][3][4][5]

## 1. Configuración del Proyecto con pnpm

### 1.1 Inicialización del Proyecto[6][7][8][9]

```bash
# Inicializar proyecto con pnpm
pnpm init

# Instalar dependencias principales
pnpm add react react-dom
pnpm add -D typescript @types/react @types/react-dom

# Instalar herramientas de desarrollo
pnpm add -D vite @vitejs/plugin-react
pnpm add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier
pnpm add -D husky lint-staged

# Testing (sin Storybook por ahora)
pnpm add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
pnpm add -D jsdom
```

### 1.2 Estructura de Carpetas Optimizada para Reutilización[10][11][1]

```
project-root/
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button/
│   │   │   │   ├── index.ts                 # Exportación limpia
│   │   │   │   ├── Button.tsx               # Componente principal
│   │   │   │   ├── Button.module.css        # Estilos aislados
│   │   │   │   ├── Button.types.ts          # Tipos separados
│   │   │   │   └── Button.test.tsx          # Tests
│   │   │   ├── Input/
│   │   │   ├── Icon/
│   │   │   ├── Label/
│   │   │   └── index.ts                     # Barrel export
│   │   ├── molecules/
│   │   │   ├── FormField/
│   │   │   ├── SearchBar/
│   │   │   ├── Card/
│   │   │   └── index.ts
│   │   ├── organisms/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Sidebar/
│   │   │   └── index.ts
│   │   ├── templates/
│   │   │   ├── MainLayout/
│   │   │   ├── DashboardLayout/
│   │   │   └── index.ts
│   │   └── index.ts                         # Exportación central
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useDebounce.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   ├── cn.ts                            # Utility para className
│   │   └── index.ts
│   ├── types/
│   │   ├── common.ts
│   │   ├── components.ts
│   │   └── index.ts
│   ├── constants/
│   │   ├── theme.ts
│   │   ├── breakpoints.ts
│   │   └── index.ts
│   ├── styles/
│   │   ├── tokens.css                       # Design tokens
│   │   ├── reset.css                        # CSS reset
│   │   ├── global.css                       # Estilos globales
│   │   └── utilities.css                    # Clases utilitarias
│   ├── contexts/
│   │   ├── ThemeContext.tsx
│   │   └── index.ts
│   └── assets/
│       └── icons/
├── .cursorrules                             # Reglas para Cursor IDE
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.json
├── .prettierrc
├── package.json
└── README.md
```

### 1.3 Configuración de TypeScript Estricta[12][13][14]

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    
    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    
    /* Linting - MODO ESTRICTO */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "noImplicitReturns": true,
    "alwaysStrict": true,
    
    /* Paths para imports absolutos */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components": ["src/components"],
      "@/hooks": ["src/hooks"],
      "@/utils": ["src/utils"],
      "@/types": ["src/types"],
      "@/styles": ["src/styles"],
      "@/constants": ["src/constants"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 1.4 Configuración de ESLint y Prettier[15]

```json
// .eslintrc.json
{
  "root": true,
  "env": { "browser": true, "es2020": true },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "ignorePatterns": ["dist", ".eslintrc.json"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["./tsconfig.json", "./tsconfig.node.json"],
    "tsconfigRootDir": "."
  },
  "plugins": ["react-refresh", "@typescript-eslint"],
  "rules": {
    "react-refresh/only-export-components": [
      "warn",
      { "allowConstantExport": true }
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "argsIgnorePattern": "^_" }
    ],
    "react/prop-types": "off",
    "react/display-name": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

## 2. Reglas de Cursor IDE para Código Profesional[16][17][18]

```markdown
# .cursorrules - Configuración para Código de Máxima Calidad

## PRINCIPIOS FUNDAMENTALES

### Objetivo Principal
Crear componentes ULTRA REUTILIZABLES que puedan funcionar en múltiples proyectos sin modificaciones. Cada componente debe ser una pieza de Lego perfecta: funcional por sí mismo pero combinable con otros.

### Filosofía de Código
- CLARIDAD sobre brevedad
- COMPOSICIÓN sobre configuración
- TIPADO EXPLÍCITO siempre
- REUTILIZACIÓN como prioridad máxima
- PERSONALIZACIÓN sin modificar código interno

## TYPESCRIPT

### Reglas Estrictas
- NUNCA usar `any` - usar `unknown` cuando no conozcas el tipo
- Tipos explícitos para TODAS las funciones públicas
- Usar utility types: Partial, Pick, Omit, Record, ReturnType
- Interfaces para props, types para unions y primitivos
- Generics para componentes verdaderamente reutilizables

### Nomenclatura de Tipos
```
// Props de componentes: NombreComponenteProps
interface ButtonProps { }

// Tipos de datos: sustantivo descriptivo
type User = { }
type UserRole = 'admin' | 'user' | 'guest'

// Utility types: descriptivo
type PartialUser = Partial<User>
type UserWithoutId = Omit<User, 'id'>
```

## COMPONENTES REACT

### Patrón de Componente Átomo Perfecto
```
// 1. Tipos en archivo separado (Button.types.ts)
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
}

// 2. Componente (Button.tsx)
import React from 'react'
import { type ButtonProps } from './Button.types'
import styles from './Button.module.css'

export const Button = React.memo<ButtonProps>(({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...restProps
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    isLoading && styles.loading,
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...restProps}
    >
      {isLoading ? (
        <span className={styles.spinner} role="status" aria-label="Cargando" />
      ) : (
        <>
          {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
          <span className={styles.content}>{children}</span>
          {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
        </>
      )}
    </button>
  )
})

Button.displayName = 'Button'

// 3. Exportación limpia (index.ts)
export { Button } from './Button'
export type { ButtonProps } from './Button.types'
```

### Componentes Compuestos (Compound Components)[135][137][138]
Para componentes complejos que necesitan partes configurables:

```
// Accordion.tsx
import React, { createContext, useContext, useState } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './Accordion.module.css'

// Context para comunicación interna
interface AccordionContextValue {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within Accordion')
  }
  return context
}

// Componente principal
interface AccordionProps {
  children: ReactNode
  defaultIndex?: number
  allowMultiple?: boolean
}

interface AccordionComposition {
  Item: FC<AccordionItemProps>
  Trigger: FC<AccordionTriggerProps>
  Content: FC<AccordionContentProps>
}

export const Accordion: FC<AccordionProps> & AccordionComposition = ({ 
  children, 
  defaultIndex = -1 
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  return (
    <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className={styles.accordion}>{children}</div>
    </AccordionContext.Provider>
  )
}

// Sub-componentes
interface AccordionItemProps {
  children: ReactNode
  index: number
}

const AccordionItem: FC<AccordionItemProps> = ({ children, index }) => {
  const { activeIndex } = useAccordionContext()
  const isOpen = activeIndex === index

  return (
    <div className={styles.item} data-state={isOpen ? 'open' : 'closed'}>
      {children}
    </div>
  )
}

interface AccordionTriggerProps {
  children: ReactNode
  index: number
}

const AccordionTrigger: FC<AccordionTriggerProps> = ({ children, index }) => {
  const { activeIndex, setActiveIndex } = useAccordionContext()
  const isOpen = activeIndex === index

  const handleClick = () => {
    setActiveIndex(isOpen ? -1 : index)
  }

  return (
    <button
      className={styles.trigger}
      onClick={handleClick}
      aria-expanded={isOpen}
      type="button"
    >
      {children}
      <span className={styles.icon} aria-hidden="true">
        {isOpen ? '−' : '+'}
      </span>
    </button>
  )
}

interface AccordionContentProps {
  children: ReactNode
}

const AccordionContent: FC<AccordionContentProps> = ({ children }) => {
  const { activeIndex } = useAccordionContext()

  return (
    <div className={styles.content} role="region">
      {children}
    </div>
  )
}

// Asignar sub-componentes
Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent

// Uso:
<Accordion>
  <Accordion.Item index={0}>
    <Accordion.Trigger index={0}>Section 1</Accordion.Trigger>
    <Accordion.Content>Content 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item index={1}>
    <Accordion.Trigger index={1}>Section 2</Accordion.Trigger>
    <Accordion.Content>Content 2</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Patrón de Composición con Props[131][134][140]
Para máxima flexibilidad sin compound components:

```
// Card.tsx - Componente altamente composable
interface CardProps {
  children: ReactNode
  variant?: 'default' | 'outlined' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
}

export const Card: FC<CardProps> = ({ 
  children, 
  variant = 'default',
  padding = 'md',
  className 
}) => (
  <div className={cn(styles.card, styles[variant], styles[`padding-${padding}`], className)}>
    {children}
  </div>
)

// CardHeader, CardBody, CardFooter como componentes separados
interface CardSectionProps {
  children: ReactNode
  className?: string
}

export const CardHeader: FC<CardSectionProps> = ({ children, className }) => (
  <div className={cn(styles.cardHeader, className)}>{children}</div>
)

export const CardBody: FC<CardSectionProps> = ({ children, className }) => (
  <div className={cn(styles.cardBody, className)}>{children}</div>
)

export const CardFooter: FC<CardSectionProps> = ({ children, className }) => (
  <div className={cn(styles.cardFooter, className)}>{children}</div>
)

// Uso flexible:
<Card variant="elevated">
  <CardHeader>
    <h2>Título Personalizado</h2>
  </CardHeader>
  <CardBody>
    <p>Cualquier contenido aquí</p>
    <CustomComponent />
  </CardBody>
  <CardFooter>
    <Button>Acción</Button>
  </CardFooter>
</Card>
```

## CSS MODULES

### Design Tokens - Sistema Completo[79][82][136][139]

```
/* styles/tokens.css */
:root {
  /* === COLORES === */
  
  /* Paleta principal */
  --color-primary-50: #e3f2fd;
  --color-primary-100: #bbdefb;
  --color-primary-200: #90caf9;
  --color-primary-300: #64b5f6;
  --color-primary-400: #42a5f5;
  --color-primary-500: #2196f3;
  --color-primary-600: #1e88e5;
  --color-primary-700: #1976d2;
  --color-primary-800: #1565c0;
  --color-primary-900: #0d47a1;
  
  /* Grises */
  --color-gray-50: #fafafa;
  --color-gray-100: #f5f5f5;
  --color-gray-200: #eeeeee;
  --color-gray-300: #e0e0e0;
  --color-gray-400: #bdbdbd;
  --color-gray-500: #9e9e9e;
  --color-gray-600: #757575;
  --color-gray-700: #616161;
  --color-gray-800: #424242;
  --color-gray-900: #212121;
  
  /* Semánticos */
  --color-success: #4caf50;
  --color-warning: #ff9800;
  --color-error: #f44336;
  --color-info: #2196f3;
  
  /* === ESPACIADO (Sistema base 4) === */
  --spacing-0: 0;
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;   /* 12px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-5: 1.25rem;   /* 20px */
  --spacing-6: 1.5rem;    /* 24px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-10: 2.5rem;   /* 40px */
  --spacing-12: 3rem;     /* 48px */
  --spacing-16: 4rem;     /* 64px */
  --spacing-20: 5rem;     /* 80px */
  --spacing-24: 6rem;     /* 96px */
  
  /* === TIPOGRAFÍA === */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
                      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
                      'Helvetica Neue', sans-serif;
  --font-family-mono: 'Fira Code', 'Courier New', monospace;
  
  /* Tamaños (escala modular 1.25) */
  --font-size-xs: 0.75rem;      /* 12px */
  --font-size-sm: 0.875rem;     /* 14px */
  --font-size-base: 1rem;       /* 16px */
  --font-size-lg: 1.125rem;     /* 18px */
  --font-size-xl: 1.25rem;      /* 20px */
  --font-size-2xl: 1.5rem;      /* 24px */
  --font-size-3xl: 1.875rem;    /* 30px */
  --font-size-4xl: 2.25rem;     /* 36px */
  --font-size-5xl: 3rem;        /* 48px */
  
  /* Pesos */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  
  /* Line heights */
  --line-height-none: 1;
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;
  
  /* === BORDES === */
  --border-width-0: 0;
  --border-width-1: 1px;
  --border-width-2: 2px;
  --border-width-4: 4px;
  
  --border-radius-none: 0;
  --border-radius-sm: 0.125rem;   /* 2px */
  --border-radius-base: 0.25rem;  /* 4px */
  --border-radius-md: 0.375rem;   /* 6px */
  --border-radius-lg: 0.5rem;     /* 8px */
  --border-radius-xl: 0.75rem;    /* 12px */
  --border-radius-2xl: 1rem;      /* 16px */
  --border-radius-full: 9999px;
  
  /* === SOMBRAS === */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  
  /* === TRANSICIONES === */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
  
  /* === Z-INDEX === */
  --z-index-dropdown: 1000;
  --z-index-sticky: 1020;
  --z-index-fixed: 1030;
  --z-index-modal-backdrop: 1040;
  --z-index-modal: 1050;
  --z-index-popover: 1060;
  --z-index-tooltip: 1070;
  
  /* === BREAKPOINTS (para referencia en JS) === */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* Tema Oscuro */
[data-theme='dark'] {
  --color-primary-500: #64b5f6;
  --color-gray-50: #1a1a1a;
  --color-gray-100: #2d2d2d;
  --color-gray-900: #f5f5f5;
  /* ... más overrides */
}
```

### CSS Modules - Mejores Prácticas[7][11][55]

```
/* Button.module.css */

/* Base - Mobile First */
.button {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  
  /* Bordes */
  border: var(--border-width-1) solid transparent;
  border-radius: var(--border-radius-md);
  
  /* Tipografía */
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  text-align: center;
  white-space: nowrap;
  
  /* Interacción */
  cursor: pointer;
  user-select: none;
  
  /* Transiciones */
  transition: all var(--transition-base);
  
  /* Estados iniciales */
  opacity: 1;
  transform: scale(1);
}

/* Variantes de Color */
.primary {
  background-color: var(--color-primary-500);
  color: white;
}

.primary:hover:not(:disabled) {
  background-color: var(--color-primary-600);
  box-shadow: var(--shadow-md);
}

.primary:active:not(:disabled) {
  background-color: var(--color-primary-700);
  transform: scale(0.98);
}

.secondary {
  background-color: var(--color-gray-200);
  color: var(--color-gray-900);
}

.ghost {
  background-color: transparent;
  color: var(--color-primary-500);
}

.ghost:hover:not(:disabled) {
  background-color: var(--color-primary-50);
}

/* Tamaños */
.xs {
  padding: var(--spacing-1) var(--spacing-2);
  font-size: var(--font-size-xs);
  min-height: 1.5rem;
}

.sm {
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--font-size-sm);
  min-height: 2rem;
}

.md {
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-size-base);
  min-height: 2.5rem;
}

.lg {
  padding: var(--spacing-4) var(--spacing-6);
  font-size: var(--font-size-lg);
  min-height: 3rem;
}

.xl {
  padding: var(--spacing-5) var(--spacing-8);
  font-size: var(--font-size-xl);
  min-height: 3.5rem;
}

/* Estados */
.fullWidth {
  width: 100%;
  display: flex;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

/* Iconos */
.leftIcon,
.rightIcon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.content {
  display: inline-flex;
  align-items: center;
}

/* Spinner de carga */
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-radius: var(--border-radius-full);
  border-top-color: transparent;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Focus visible para accesibilidad */
.button:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Responsive */
@media (min-width: 768px) {
  .button {
    min-width: 120px;
  }
}

/* Modo reducción de movimiento */
@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
    animation: none;
  }
  
  .spinner {
    animation: none;
  }
}
```

## 3. Utilidades Esenciales para Reutilización

### 3.1 Utilidad cn (classNames)[11][55]

```
// utils/cn.ts
/**
 * Combina múltiples clases CSS de forma segura y eficiente
 * Filtra valores falsy automáticamente
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Uso:
const buttonClasses = cn(
  styles.button,
  variant && styles[variant],
  isActive && styles.active,
  className
)
```

### 3.2 Hooks Reutilizables Esenciales

```
// hooks/useLocalStorage.ts
import { useState, useEffect, useCallback } from 'react'

/**
 * Hook para sincronizar estado con localStorage
 * Genérico y type-safe
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => void] {
  // Estado interno
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.error(`Error loading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Setter mejorado
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore))
        }
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error)
      }
    },
    [key, storedValue]
  )

  // Remover valor
  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue)
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key)
      }
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error)
    }
  }, [key, initialValue])

  return [storedValue, setValue, removeValue]
}
```

```
// hooks/useMediaQuery.ts
import { useState, useEffect } from 'react'

/**
 * Hook para detectar media queries de forma reactiva
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // API moderna
    if (media.addEventListener) {
      media.addEventListener('change', listener)
      return () => media.removeEventListener('change', listener)
    } else {
      // Fallback para navegadores antiguos
      media.addListener(listener)
      return () => media.removeListener(listener)
    }
  }, [matches, query])

  return matches
}

// Uso:
const isMobile = useMediaQuery('(max-width: 768px)')
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
```

```
// hooks/useDebounce.ts
import { useState, useEffect } from 'react'

/**
 * Hook para debounce de valores
 * Útil para inputs de búsqueda
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
```

## 4. TypeScript: Patrones Avanzados para Reutilización[58][61][121]

### 4.1 Props Polimórficas (As Prop Pattern)

```
// types/polymorphic.ts
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'

/**
 * Tipo para componentes polimórficos que pueden renderizar
 * como diferentes elementos HTML
 */
export type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & {
    as?: E
  }
>

// Uso en componente:
// Text.tsx
import { ElementType } from 'react'
import { PolymorphicProps } from '@/types/polymorphic'
import styles from './Text.module.css'

type TextOwnProps = {
  size?: 'sm' | 'base' | 'lg' | 'xl'
  weight?: 'normal' | 'medium' | 'bold'
  color?: 'primary' | 'secondary' | 'muted'
}

export type TextProps<E extends ElementType = 'p'> = PolymorphicProps<E> & TextOwnProps

export function Text<E extends ElementType = 'p'>({
  as,
  size = 'base',
  weight = 'normal',
  color = 'primary',
  className,
  children,
  ...restProps
}: TextProps<E>) {
  const Component = as || 'p'
  
  return (
    <Component
      className={cn(
        styles.text,
        styles[size],
        styles[weight],
        styles[color],
        className
      )}
      {...restProps}
    >
      {children}
    </Component>
  )
}

// Uso - componente adapta tipos según el elemento:
<Text as="h1" size="xl">Título</Text>
<Text as="span" weight="bold">Texto inline</Text>
<Text as="a" href="/link">Link con tipos correctos</Text>
```

### 4.2 Discriminated Unions para Props Complejas

```
// Alert.types.ts
type AlertVariant = 'info' | 'success' | 'warning' | 'error'

// Props base comunes
interface AlertBaseProps {
  title: string
  className?: string
  onClose?: () => void
}

// Props específicas según si es dismissible
type AlertProps = AlertBaseProps & (
  | {
      dismissible: true
      onClose: () => void  // Requerido si es dismissible
    }
  | {
      dismissible?: false
      onClose?: never      // No permitido si no es dismissible
    }
) & (
  | {
      variant: 'error'
      errorCode: string    // Requerido solo para errores
    }
  | {
      variant: Exclude<AlertVariant, 'error'>
      errorCode?: never
    }
)

// TypeScript infiere correctamente los tipos
export const Alert: FC<AlertProps> = (props) => {
  if (props.variant === 'error') {
    // Aquí props.errorCode está disponible
    console.log(props.errorCode)
  }
  
  if (props.dismissible) {
    // Aquí props.onClose definitivamente existe
    return <button onClick={props.onClose}>Close</button>
  }
  
  // ...
}
```

### 4.3 Generics con Constraints

```
// Select.tsx - Select genérico type-safe
interface SelectOption {
  value: string | number
  label: string
}

interface SelectProps<T extends SelectOption> {
  options: readonly T[]
  value: T['value']
  onChange: (value: T['value'], option: T) => void
  renderOption?: (option: T) => React.ReactNode
  getOptionLabel?: (option: T) => string
  getOptionValue?: (option: T) => T['value']
  placeholder?: string
}

export function Select<T extends SelectOption>({
  options,
  value,
  onChange,
  renderOption,
  getOptionLabel = (opt) => opt.label,
  getOptionValue = (opt) => opt.value,
  placeholder
}: SelectProps<T>) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    const selectedOption = options.find(
      (opt) => String(getOptionValue(opt)) === selectedValue
    )
    
    if (selectedOption) {
      onChange(getOptionValue(selectedOption), selectedOption)
    }
  }

  return (
    <select value={value} onChange={handleChange}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={String(getOptionValue(option))} value={getOptionValue(option)}>
          {renderOption ? renderOption(option) : getOptionLabel(option)}
        </option>
      ))}
    </select>
  )
}

// Uso type-safe:
interface User extends SelectOption {
  value: number
  label: string
  email: string
  role: 'admin' | 'user'
}

<Select<User>
  options={users}
  value={selectedUserId}
  onChange={(value, user) => {
    // 'user' tiene tipo User completo
    console.log(user.email, user.role)
  }}
  getOptionLabel={(user) => `${user.label} (${user.email})`}
/>
```

## 5. Patrones de Optimización[57][60][65]

### 5.1 Memoization Inteligente

```
// ProductList.tsx - Ejemplo de optimización correcta
import React, { useMemo, useCallback } from 'react'

interface Product {
  id: string
  name: string
  price: number
  category: string
}

interface ProductListProps {
  products: Product[]
  onProductClick: (productId: string) => void
  filterCategory?: string
}

export const ProductList = React.memo<ProductListProps>(({
  products,
  onProductClick,
  filterCategory
}) => {
  // Computación costosa memoizada
  const filteredProducts = useMemo(() => {
    if (!filterCategory) return products
    
    return products.filter(product => 
      product.category === filterCategory
    )
  }, [products, filterCategory])

  // Stats calculados
  const stats = useMemo(() => ({
    total: filteredProducts.length,
    avgPrice: filteredProducts.reduce((sum, p) => sum + p.price, 0) / filteredProducts.length
  }), [filteredProducts])

  return (
    <div>
      <p>Mostrando {stats.total} productos - Precio promedio: ${stats.avgPrice.toFixed(2)}</p>
      {filteredProducts.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onClick={onProductClick}
        />
      ))}
    </div>
  )
})

// Componente hijo optimizado
interface ProductItemProps {
  product: Product
  onClick: (productId: string) => void
}

const ProductItem = React.memo<ProductItemProps>(({ product, onClick }) => {
  // Callback estable para este producto específico
  const handleClick = useCallback(() => {
    onClick(product.id)
  }, [onClick, product.id])

  return (
    <div onClick={handleClick}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  )
}, (prevProps, nextProps) => {
  // Comparador personalizado - solo re-render si el producto cambió
  return (
    prevProps.product.id === nextProps.product.id &&
    prevProps.product.name === nextProps.product.name &&
    prevProps.product.price === nextProps.product.price
  )
})
```

### 5.2 Code Splitting Estratégico[78][84]

```
// App.tsx
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componentes críticos - carga inmediata
import { Layout } from '@/components/templates/Layout'
import { ErrorBoundary } from '@/components/organisms/ErrorBoundary'

// Páginas - lazy loading
const HomePage = lazy(() => import('@/pages/Home'))
const ProductsPage = lazy(() => import('@/pages/Products'))
const DashboardPage = lazy(() => import('@/pages/Dashboard'))
const AdminPage = lazy(() => import('@/pages/Admin'))

// Loading fallback reutilizable
const PageLoader = () => (
  <div className="page-loader">
    <span>Cargando...</span>
  </div>
)

export function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/*" element={<ProductsPage />} />
              <Route path="/dashboard/*" element={<DashboardPage />} />
              <Route path="/admin/*" element={<AdminPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
```

## 6. Testing sin Storybook[46][50]

```
// Button.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  describe('Renderizado', () => {
    it('renderiza correctamente con children', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
    })

    it('aplica la variante correcta', () => {
      const { rerender } = render(<Button variant="primary">Primary</Button>)
      expect(screen.getByRole('button')).toHaveClass('primary')

      rerender(<Button variant="secondary">Secondary</Button>)
      expect(screen.getByRole('button')).toHaveClass('secondary')
    })

    it('renderiza iconos cuando se proporcionan', () => {
      const leftIcon = <span data-testid="left-icon">←</span>
      const rightIcon = <span data-testid="right-icon">→</span>
      
      render(
        <Button leftIcon={leftIcon} rightIcon={rightIcon}>
          Text
        </Button>
      )
      
      expect(screen.getByTestId('left-icon')).toBeInTheDocument()
      expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    })
  })

  describe('Interacción', () => {
    it('ejecuta onClick cuando se hace clic', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      
      render(<Button onClick={handleClick}>Click</Button>)
      
      await user.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('no ejecuta onClick cuando está disabled', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      
      render(<Button onClick={handleClick} disabled>Disabled</Button>)
      
      await user.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('no ejecuta onClick cuando isLoading', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      
      render(<Button onClick={handleClick} isLoading>Loading</Button>)
      
      await user.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('tiene aria-busy cuando isLoading', () => {
      render(<Button isLoading>Loading</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
    })

    it('es navegable por teclado', async () => {
      const handleClick = vi.fn()
      render(<Button onClick={handleClick}>Keyboard</Button>)
      
      const button = screen.getByRole('button')
      button.focus()
      expect(button).toHaveFocus()
    })

    it('mantiene props nativas de HTML', () => {
      render(
        <Button type="submit" form="my-form" aria-label="Submit form">
          Submit
        </Button>
      )
      
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'submit')
      expect(button).toHaveAttribute('form', 'my-form')
      expect(button).toHaveAttribute('aria-label', 'Submit form')
    })
  })

  describe('Estados', () => {
    it('muestra spinner cuando isLoading', () => {
      render(<Button isLoading>Loading</Button>)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('aplica fullWidth correctamente', () => {
      render(<Button fullWidth>Full Width</Button>)
      expect(screen.getByRole('button')).toHaveClass('fullWidth')
    })
  })
})
```

## 7. Documentación con JSDoc[101][104]

```
/**
 * Componente Button altamente reutilizable y personalizable
 * 
 * @example
 * ```tsx
 * // Uso básico
 * <Button variant="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 * 
 * // Con iconos
 * <Button 
 *   variant="secondary" 
 *   leftIcon={<SaveIcon />}
 *   isLoading={isSaving}
 * >
 *   Guardar
 * </Button>
 * 
 * // Full width
 * <Button variant="primary" fullWidth>
 *   Botón de ancho completo
 * </Button>
 * ```
 * 
 * @param {ButtonProps} props - Propiedades del componente
 * @returns {JSX.Element} Elemento Button renderizado
 */
export const Button = React.memo<ButtonProps>(({ ... }) => { ... })
```

## 8. Seguridad[22][103][106]

```
// utils/sanitize.ts
import DOMPurify from 'dompurify'

/**
 * Sanitiza HTML para prevenir XSS
 */
export function sanitizeHTML(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href', 'target', 'rel']
  })
}

// SafeHTML.tsx - Componente seguro para HTML
interface SafeHTMLProps {
  html: string
  className?: string
}

export const SafeHTML: FC<SafeHTMLProps> = ({ html, className }) => {
  const sanitized = useMemo(() => sanitizeHTML(html), [html])
  
  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  )
}
```

## 9. Scripts de package.json con pnpm

```
{
  "name": "react-boilerplate",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "pnpm lint --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,json}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,css,json}\"",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "type-check": "tsc --noEmit",
    "validate": "pnpm type-check && pnpm lint && pnpm format:check && pnpm test run"
  }
}
```

## Conclusión: Boilerplate de Clase Mundial

Este boilerplate está diseñado para ser la **base perfecta de múltiples proyectos**[113][119][122]. Cada componente es:

✅ **Ultra Reutilizable** - Funcionan en cualquier contexto sin modificaciones  
✅ **Altamente Personalizable** - Props flexibles y composición inteligente  
✅ **Type-Safe** - TypeScript estricto garantiza cero errores en runtime  
✅ **Profesional** - Código claro, documentado y testeado  
✅ **Performante** - Optimizaciones estratégicas sin sacrificar legibilidad  
✅ **Accesible** - WCAG AA compliance desde el inicio  
✅ **Escalable** - Atomic Design permite crecimiento ordenado  
✅ **Mantenible** - Separación clara de responsabilidades[116][125]

**Puntos Clave Recordados:**
- ❌ **NO Storybook** hasta indicación explícita
- ✅ **pnpm** como gestor de paquetes[117][120][126]
- ✅ **Composición** sobre configuración[131][134][140]
- ✅ **Claridad** sobre brevedad
- ✅ **Reutilización** como máxima prioridad

Con este boilerplate, cada nuevo proyecto comienza con código de producción listo para escalar[116][119].

[1](https://dev.to/leoneloliver/the-power-of-reusable-components-in-react-2d79)
[2](https://dev.to/joshuawasike/design-systems-in-action-building-a-reusable-component-library-with-react-3peb)
[3](https://www.angularminds.com/blog/how-to-create-and-use-reusable-react-components)
[4](https://buttercms.com/blog/building-reusable-components-using-react/)
[5](https://www.freecodecamp.org/news/how-to-build-reusable-react-components/)
[6](https://www.youtube.com/watch?v=pz4f9Q6VYZA)
[7](https://brockherion.dev/blog/posts/setting-up-a-monorepo-with-pnpm-and-typescript/)
[8](https://blog.emmanuelisenah.com/setting-up-a-monorepo-using-pnpm-workspaces-with-typescript-and-tailwind)
[9](https://dev.to/vinomanick/create-a-monorepo-using-pnpm-workspace-1ebn)
[10](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)
[11](https://www.robinwieruch.de/react-folder-structure/)
[12](https://dev.to/deepeshk1204/best-practices-of-reactjs-with-typescript-24p4)
[13](https://www.kodaps.dev/en/blog/using-react-with-typescript-a-comprehensive-guide)
[14](https://dev.to/mitu_mariam/typescript-best-practices-in-2025-57hb)
[15](https://dev.to/griseduardo/typescript-eslint-prettier-for-code-standardization-in-react-with-typescript-3l0h)
[16](https://www.builder.io/blog/cursor-ai-tips-react-nextjs)
[17](https://www.siddharthbharath.com/coding-with-cursor-beginners-guide/)
[18](https://codeaholicguy.com/2025/04/12/what-i-learned-using-cursorai-every-day-as-an-engineer/)
[19](https://www.reddit.com/r/reactjs/comments/y3om3r/react_typescript_boilerplate/)
[20](https://www.sitepoint.com/react-with-typescript-best-practices/)
[21](https://github.com/seanpmaxwell/React-Ts-Best-Practices)
[22](https://www.reddit.com/r/reactjs/comments/xz3euk/what_are_the_best_practices_for_a_react/)
[23](https://www.geeksforgeeks.org/typescript/typescript-with-react-benefits-and-best-practices/)
[24](https://github.com/topics/react-typescript-boilerplate)
[25](https://snyk.io/blog/best-practices-react-typescript-security/)
[26](https://www.reddit.com/r/typescript/comments/1f11984/creating_a_minimal_pnpm_monorepo_setup/)
[27](https://react.dev/learn/typescript)
[28](https://dev.to/ricardolmsilva/composition-pattern-in-react-28mj)
[29](https://dev.to/wallacefreitas/understanding-the-composition-pattern-in-react-3dfp)
[30](https://www.developerway.com/posts/components-composition-how-to-get-it-right)
[31](https://www.youtube.com/watch?v=GBh59sRi8qQ)
[32](https://www.dhiwise.com/post/react-composition-patterns-crafting-reusable-code)
[33](https://stackademic.com/blog/supercharging-react-components-with-typescript-and-compound-components-ed11e54782c2)
[34](https://daily.dev/es/blog/theming-styled-components-with-css-custom-properties)
[35](https://refine.dev/blog/react-design-patterns/)
[36](https://stackoverflow.com/questions/62287667/compound-components-react-typescript)
[37](https://www.zachliibbe.com/blog/dynamic-theme-system-with-css-custom-properties-and-react-context)
[38](https://www.tymzap.com/blog/designing-flexible-react-components-with-composition-pattern)
[39](https://www.pluralsight.com/resources/blog/guides/composing-react-components-with-typescript)
[40](https://robkendal.co.uk/blog/using-css-custom-properties-to-apply-themes-in-javascript-or-react/)
[41](https://legacy.reactjs.org/docs/composition-vs-inheritance.html)
[42](https://oida.dev/typescript-react/components/)
[43](https://daily.dev/blog/theming-styled-components-with-css-custom-properties)
[44](https://krasimir.gitbooks.io/react-in-patterns/content/chapter-04/)
[45](https://www.youtube.com/watch?v=-F4k8A5S530)
[46](https://dev.to/kendalmintcode/using-css-custom-properties-to-apply-themes-in-javascript-or-react-1dgj)
[47](https://www.patterns.dev/react/)