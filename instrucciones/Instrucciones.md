
-----

## 🏗️ Creación de la Boilerplate "Boilerplate-AtomicDesign" en Cursor IDE (Versión Detallada con pnpm)

Aquí tienes las **instrucciones completas y detalladas**, paso a paso, para que las pases a tu agente de IA en Cursor IDE.

### 1\. Inicialización del Proyecto con Vite y pnpm

**Instrucción para Cursor IDE (Paso 1):**

> **"Abre una terminal integrada en la carpeta raíz `Boilerplate-AtomicDesign`. Ejecuta el siguiente comando para inicializar un nuevo proyecto React + TypeScript usando Vite con pnpm:**
>
> ```bash
> pnpm create vite . --template react-ts
> ```
>
> **(Confirma que deseas usar la carpeta actual si se te pregunta).**
>
> **A continuación, instala las dependencias necesarias:**
>
> ```bash
> pnpm install
> ```
>
> **Ahora, realiza la limpieza inicial del proyecto:**
> **1. Elimina los siguientes archivos:**
>
>   * `src/App.css`
>   * `src/index.css`
>   * `src/assets/react.svg`
>     **2. Reemplaza el contenido de `src/App.tsx` con lo siguiente:**
>
> <!-- end list -->

> ```typescript
> // src/App.tsx
> function App() {
>   return (
>     <div>
>       {/* El contenido se añadirá más tarde */}
>     </div>
>   );
> }
> ```

> export default App;
>
> ```
> ```

-----

### 2\. Estructura de Carpetas del Design System

**Instrucción para Cursor IDE (Paso 2):**

> **"Dentro de la carpeta `src/`, crea la siguiente estructura de directorios detallada para el Design System:**
>
> ```
> src/
> ├── app/              # Contendrá la App principal y la página de demo
> ├── design-system/
> │   ├── atomic/       # Raíz de componentes atómicos
> │   │   ├── atoms/      # Componentes base indivisibles
> │   │   ├── molecules/  # Combinaciones simples de átomos
> │   │   ├── organisms/  # Secciones complejas de UI
> │   │   ├── templates/  # Estructuras de página (esqueletos)
> │   │   └── pages/      # Instancias de plantillas con contenido (opcional aquí)
> │   ├── styles/       # Estilos globales y tokens
> │   └── utils/        # Funciones de utilidad (ej. classNames helper)
> ├── hooks/             # Hooks personalizados de React
> └── types/             # Definiciones de tipos globales/compartidos
> ```
>
> **Después de crear las carpetas, mueve el archivo `src/App.tsx` a la carpeta `src/app/`."**

-----

### 3\. Configuración de Design Tokens (Variables CSS)

**Instrucción para Cursor IDE (Paso 3):**

> **"Crea el archivo `src/design-system/styles/variables.css`. Pega el siguiente contenido dentro, que define los Design Tokens globales:**
>
> ```css
> /* src/design-system/styles/variables.css */
> :root {
>   /* === Colores === */
>   --color-primary: #007bff;
>   --color-primary-hover: #0056b3;
>   --color-secondary: #6c757d;
>   --color-secondary-hover: #545b62;
>   --color-success: #28a745;
>   --color-success-hover: #1e7e34;
>   --color-danger: #dc3545;
>   --color-danger-hover: #bd2130;
>   --color-warning: #ffc107;
>   --color-warning-hover: #d39e00;
>   --color-info: #17a2b8;
>   --color-info-hover: #117a8b;
> ```

> \--color-text-default: \#212529;
> \--color-text-muted: \#6c757d;
> \--color-text-on-primary: \#ffffff;
> \--color-text-on-secondary: \#ffffff;
> \--color-text-on-success: \#ffffff;
> \--color-text-on-danger: \#ffffff;
> \--color-text-on-warning: \#212529; /\* Texto oscuro en warning \*/
> \--color-text-on-info: \#ffffff;

> \--color-background-body: \#ffffff;
> \--color-background-light: \#f8f9fa;
> \--color-background-dark: \#343a40;

> \--color-border-default: \#ced4da;
> \--color-border-light: \#dee2e6;
> \--color-border-focus: \#80bdff; /\* Para focus en inputs, etc. \*/

> /\* === Espaciado === \*/
> \--spacing-xs: 4px;
> \--spacing-sm: 8px;
> \--spacing-md: 16px;
> \--spacing-lg: 24px;
> \--spacing-xl: 32px;

> /\* === Tipografía === */
> \--font-family-base: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
> \--font-family-heading: var(--font-family-base);
> \--font-size-sm: 0.875rem;
> \--font-size-base: 1rem;
> \--font-size-lg: 1.125rem;
> \--font-size-xl: 1.25rem;
> /* Añadir tamaños heading si es necesario (h1, h2...) \*/
> \--font-weight-light: 300;
> \--font-weight-normal: 400;
> \--font-weight-bold: 700;
> \--line-height-base: 1.5;
> \--line-height-heading: 1.2;

> /\* === Radios de Borde === \*/
> \--border-radius-none: 0;
> \--border-radius-sm: 0.2rem;
> \--border-radius-md: 0.25rem;
> \--border-radius-lg: 0.3rem;
> \--border-radius-pill: 50rem;
> \--border-radius-circle: 50%;

> /\* === Sombras === */
> \--box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
> \--box-shadow-md: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
> \--box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
> \--box-shadow-focus: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); /* Sombra para focus \*/

> /\* === Transiciones === \*/
> \--transition-base: all 0.2s ease-in-out;

> /\* === Z-Index (Ejemplo) === \*/
> \--z-index-dropdown: 1000;
> \--z-index-modal: 1050;
> }
>
> ````
> 
> **Ahora, crea el archivo `src/design-system/styles/global.css` y pega el siguiente contenido:**

> ```css
> /* src/design-system/styles/global.css */
> @import url('./variables.css'); /* Importa variables aquí también para asegurar disponibilidad */
> ````

> \*,
> \*::before,
> \*::after {
> box-sizing: border-box;
> margin: 0;
> padding: 0;
> }

> html {
> \-webkit-text-size-adjust: 100%; /\* Evita ajuste de texto en móviles \*/
> }

> body {
> font-family: var(--font-family-base);
> font-size: var(--font-size-base);
> font-weight: var(--font-weight-normal);
> line-height: var(--line-height-base);
> color: var(--color-text-default);
> background-color: var(--color-background-body);
> \-webkit-font-smoothing: antialiased;
> \-moz-osx-font-smoothing: grayscale;
> }

> /\* Estilos base para elementos comunes (opcional pero recomendado) */
> a {
> color: var(--color-primary);
> text-decoration: none; /* Opcional: quitar subrayado */
> transition: var(--transition-base);
> }
> a:hover {
> color: var(--color-primary-hover);
> /* text-decoration: underline; */ /* Opcional \*/
> }

> img, svg {
> vertical-align: middle; /\* Evita espacio extra bajo imágenes inline */
> max-width: 100%; /* Imágenes responsivas por defecto \*/
> height: auto;
> }

> /\* Puedes añadir más resets o estilos base aquí \*/
>
> ````
> 
> **Finalmente, modifica `src/main.tsx` para importar SOLO `global.css` (ya que este ahora importa `variables.css`):**

> ```typescript
> // src/main.tsx
> import React from 'react';
> import ReactDOM from 'react-dom/client';
> import App from './app/App';
> import './design-system/styles/global.css'; // Solo importa global.css
> ````

> ReactDOM.createRoot(document.getElementById('root')\!).render(
> \<React.StrictMode\>
> <App />
> \</React.StrictMode\>
> );
>
> ```
> ```

-----

### 4\. Creación del Primer Átomo: `Button`

**Instrucción para Cursor IDE (Paso 4):**

> **"En el directorio `src/design-system/atomic/atoms/`, crea una nueva carpeta llamada `Button`. Dentro de ella, crea los siguientes 4 archivos:**
>
> **1. `Button.types.ts`:**
>
> ```typescript
> // src/design-system/atomic/atoms/Button/Button.types.ts
> import React from 'react';
> ```

> // Define los posibles variants y sizes como tipos para reutilizar
> export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
> export type ButtonSize = 'small' | 'medium' | 'large';

> export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
> variant?: ButtonVariant;
> size?: ButtonSize;
> isFullWidth?: boolean;
> isLoading?: boolean; // Para mostrar un estado de carga
> // Podríamos añadir 'leftIcon' y 'rightIcon' tipo React.ReactElement aquí si quisiéramos botones con iconos
> children: React.ReactNode;
> }
>
> ````
> 
> **2. `Button.tsx`:**

> ```typescript
> // src/design-system/atomic/atoms/Button/Button.tsx
> import React from 'react';
> import { ButtonProps } from './Button.types';
> import styles from './Button.module.css';
> // Podríamos importar un componente Spinner si tuviéramos isLoading
> ````

> export const Button: React.FC<ButtonProps> = ({
> variant = 'primary',
> size = 'medium',
> isFullWidth = false,
> isLoading = false,
> children,
> className,
> disabled, // Extraemos disabled para pasarlo y usarlo en clases
> ...props
> }) =\> {
> const buttonClasses = [
> styles.button,
> styles[variant], // styles.primary, styles.secondary...
> styles[size],    // styles.small, styles.medium...
> isFullWidth ? styles.fullWidth : '',
> isLoading ? styles.loading : '', // Clase para estado de carga
> disabled || isLoading ? styles.disabled : '', // Clase para deshabilitado (incluye loading)
> className,
> ]
> .filter(Boolean) // Elimina entradas vacías o nulas
> .join(' ');

> return (
> \<button
> className={buttonClasses}
> disabled={disabled || isLoading} // Deshabilita si está cargando
> {...props}
> \>
> {isLoading ? (
> <span className={styles.spinner}> {/\* Placeholder para spinner */}
> {/* Idealmente aquí iría un <Spinner size="small" /> \*/}
> Loading...
> </span>
> ) : (
> children
> )}
> </button>
> );
> };
>
> ````
> 
> **3. `Button.module.css`:**

> ```css
> /* src/design-system/atomic/atoms/Button/Button.module.css */
> .button {
>   display: inline-flex;
>   align-items: center;
>   justify-content: center;
>   padding: var(--spacing-sm) var(--spacing-md);
>   font-family: var(--font-family-base);
>   font-size: var(--font-size-base);
>   font-weight: var(--font-weight-bold);
>   line-height: var(--line-height-base);
>   text-align: center;
>   text-decoration: none;
>   vertical-align: middle;
>   cursor: pointer;
>   user-select: none;
>   background-color: transparent;
>   border: 1px solid transparent;
>   border-radius: var(--border-radius-md);
>   transition: var(--transition-base);
>   white-space: nowrap;
> ````

> /\* Estado Focus - importante para accesibilidad \*/
> &:focus-visible {
> outline: none;
> box-shadow: var(--box-shadow-focus);
> }
> }

> /\* === Sizes === \*/
> .small {
> padding: var(--spacing-xs) var(--spacing-sm);
> font-size: var(--font-size-sm);
> border-radius: var(--border-radius-sm);
> }

> .medium {
> /\* Estilos base ya son medium \*/
> }

> .large {
> padding: var(--spacing-md) var(--spacing-lg);
> font-size: var(--font-size-lg);
> border-radius: var(--border-radius-lg);
> }

> /\* === Variants (Colores sólidos) === */
> /* Macro para evitar repetición (esto es conceptual, CSS no tiene macros) */
> /* .variant-solid(colorName, textColorToken, bgColorToken, hoverBgColorToken) \*/

> .primary {
> color: var(--color-text-on-primary);
> background-color: var(--color-primary);
> border-color: var(--color-primary);
> }
> .primary:hover:not(:disabled):not(.loading) {
> background-color: var(--color-primary-hover);
> border-color: var(--color-primary-hover);
> }

> .secondary {
> color: var(--color-text-on-secondary);
> background-color: var(--color-secondary);
> border-color: var(--color-secondary);
> }
> .secondary:hover:not(:disabled):not(.loading) {
> background-color: var(--color-secondary-hover);
> border-color: var(--color-secondary-hover);
> }

> .success {
> color: var(--color-text-on-success);
> background-color: var(--color-success);
> border-color: var(--color-success);
> }
> .success:hover:not(:disabled):not(.loading) {
> background-color: var(--color-success-hover);
> border-color: var(--color-success-hover);
> }

> .danger {
> color: var(--color-text-on-danger);
> background-color: var(--color-danger);
> border-color: var(--color-danger);
> }
> .danger:hover:not(:disabled):not(.loading) {
> background-color: var(--color-danger-hover);
> border-color: var(--color-danger-hover);
> }

> .warning {
> color: var(--color-text-on-warning); /\* Texto oscuro \*/
> background-color: var(--color-warning);
> border-color: var(--color-warning);
> }
> .warning:hover:not(:disabled):not(.loading) {
> background-color: var(--color-warning-hover);
> border-color: var(--color-warning-hover);
> }

> .info {
> color: var(--color-text-on-info);
> background-color: var(--color-info);
> border-color: var(--color-info);
> }
> .info:hover:not(:disabled):not(.loading) {
> background-color: var(--color-info-hover);
> border-color: var(--color-info-hover);
> }

> .light {
> color: var(--color-text-default); /\* Texto oscuro */
> background-color: var(--color-background-light);
> border-color: var(--color-border-light);
> }
> .light:hover:not(:disabled):not(.loading) {
> background-color: color-mix(in srgb, var(--color-background-light) 85%, black); /* Ligeramente más oscuro \*/
> border-color: color-mix(in srgb, var(--color-border-light) 85%, black);
> }

> .dark {
> color: var(--color-background-light); /\* Texto claro */
> background-color: var(--color-background-dark);
> border-color: var(--color-background-dark);
> }
> .dark:hover:not(:disabled):not(.loading) {
> background-color: color-mix(in srgb, var(--color-background-dark) 85%, white); /* Ligeramente más claro \*/
> border-color: color-mix(in srgb, var(--color-background-dark) 85%, white);
> }

> /\* === Variant tipo Link === */
> .link {
> color: var(--color-primary);
> background-color: transparent;
> border-color: transparent;
> text-decoration: none; /* Asegurar que no haya subrayado por defecto */
> font-weight: var(--font-weight-normal); /* Más ligero que botones normales */
> padding-left: 0; /* Sin padding lateral */
> padding-right: 0;
> }
> .link:hover:not(:disabled):not(.loading) {
> color: var(--color-primary-hover);
> text-decoration: underline; /* Subrayado en hover \*/
> }

> /\* === Modifiers === */
> .fullWidth {
> display: flex; /* Asegura que ocupa todo el ancho del contenedor flex/grid \*/
> width: 100%;
> }

> .loading {
> /\* Estilos para cuando está cargando, ej. cursor \*/
> cursor: wait;
> }

> .disabled {
> cursor: not-allowed;
> opacity: 0.65;
> /\* Previene hover effects en elementos deshabilitados \*/
> pointer-events: none;
> }

> /\* Estilos para el spinner (placeholder) */
> .spinner {
> /* Añade aquí estilos básicos o usa un componente SVG/Icono */
> margin-right: var(--spacing-sm); /* Espacio si hay texto */
> /* Animación simple (ejemplo) \*/
> animation: spin 1s linear infinite;
> }

> @keyframes spin {
> from { transform: rotate(0deg); }
> to { transform: rotate(360deg); }
> }
>
> ````
> 
> **4. `index.ts`:**

> ```typescript
> // src/design-system/atomic/atoms/Button/index.ts
> export * from './Button';
> export * from './Button.types'; // Exporta los tipos también
> ````
>
> **Ahora, actualiza el archivo `src/design-system/atomic/atoms/index.ts` para exportar el `Button`:**
>
> ```typescript
> // src/design-system/atomic/atoms/index.ts
> export * from './Button';
> // Las exportaciones de futuros átomos irán aquí
> ```

-----

### 5\. Creación de la Página de Demostración (Actualizada)

**Instrucción para Cursor IDE (Paso 5):**

> **"Reemplaza el contenido de `src/app/DesignSystemDemo.tsx` con el siguiente código para mostrar más variantes del `Button`:**
>
> ```typescript
> // src/app/DesignSystemDemo.tsx
> import React from 'react';
> import { Button } from '../design-system/atomic/atoms';
> import { ButtonVariant, ButtonSize } from '../design-system/atomic/atoms/Button/Button.types';
> ```

> const variants: ButtonVariant[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'];
> const sizes: ButtonSize[] = ['small', 'medium', 'large'];

> export const DesignSystemDemo: React.FC = () =\> {
> return (
> \<div style={{ padding: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}\>
> <h1>Atomic Design System Demo</h1>

> ```
>   <h2>Atoms</h2>
> ```

> ```
>   {/* Sección Button */}
>   <section style={{ border: '1px solid var(--color-border-light)', padding: 'var(--spacing-md)', borderRadius: 'var(--border-radius-lg)' }}>
>     <h3>Button</h3>
> ```

> ```
>     {/* Botones por Variante */}
>     <h4>Variants</h4>
>     <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
>       {variants.map(variant => (
>         <Button key={variant} variant={variant}>
>           {variant.charAt(0).toUpperCase() + variant.slice(1)}
>         </Button>
>       ))}
>     </div>
> ```

> ```
>     {/* Botones por Tamaño */}
>     <h4>Sizes (Primary Variant)</h4>
>     <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
>       {sizes.map(size => (
>         <Button key={size} variant="primary" size={size}>
>           {size.charAt(0).toUpperCase() + size.slice(1)}
>         </Button>
>       ))}
>     </div>
> ```

> ```
>     {/* Estados Especiales */}
>     <h4>States</h4>
>     <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
>       <Button variant="primary" disabled>Disabled</Button>
>       <Button variant="primary" isLoading>Loading</Button>
>     </div>
> ```

> ```
>     {/* Ancho Completo */}
>     <h4>Full Width</h4>
>     <div style={{ marginBottom: 'var(--spacing-md)' }}>
>       <Button variant="secondary" isFullWidth>Secondary Full Width</Button>
>     </div>
>   </section>
> ```

> ```
>   {/* Futuras secciones para otros átomos... */}
> </div>
> ```
>
> );
> };
>
> ````
> 
> **Asegúrate de que `src/app/App.tsx` siga renderizando `DesignSystemDemo`:**

> ```typescript
> // src/app/App.tsx
> import React from 'react';
> import { DesignSystemDemo } from './DesignSystemDemo';
> ````

> function App() {
> return (
> <div>
> <DesignSystemDemo />
> </div>
> );
> }

> export default App;
>
> ```
> ```

-----

### 6\. Configuración de Pruebas (Vitest)

**Instrucción para Cursor IDE (Paso 6):**

> **"Instala Vitest y Testing Library como dependencias de desarrollo usando pnpm:**
>
> ```bash
> pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitejs/plugin-react
> ```
>
> **Crea/Modifica el archivo `vite.config.ts` en la raíz con la configuración de `test` (globals, environment, setupFiles, css.modules) como se especificó anteriormente.**
>
> **Crea el archivo `src/setupTests.ts` con `import '@testing-library/jest-dom';`.**
>
> **Añade los scripts de `test`, `test:ui`, `coverage` en `package.json` como se especificó anteriormente.**
>
> **Crea el archivo de prueba `src/design-system/atomic/atoms/Button/Button.test.tsx` con las pruebas detalladas (render children, default classes, specific classes, fullWidth, native props, disabled state) como se especificó anteriormente."**

-----

Con estas instrucciones, tu **Cursor IDE** construirá la base del proyecto de manera completa y detallada usando **pnpm**.

**Siguiente Paso:** Lanza `pnpm dev` para ver tu primer átomo (`Button`) en acción en la página de demostración. Ejecuta `pnpm test` para verificar que las pruebas pasan. Después, podemos proceder con el siguiente átomo (por ejemplo, `Input` o `Icon`).