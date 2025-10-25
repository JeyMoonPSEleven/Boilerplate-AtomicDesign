# 🎨 Sistema de Tokens CSS Centralizado - Guía de Personalización

## 📍 **UBICACIÓN DE ARCHIVOS PRINCIPALES**

### **Archivos Clave del Sistema:**
- **`src/design-system/styles/variables.css`** - 🎯 **ARCHIVO PRINCIPAL** - Todos los tokens de diseño
- **`src/design-system/styles/global.css`** - Estilos globales y utilidades
- **`src/design-system/atomic/atoms/*/ComponentName.module.css`** - Estilos de átomos
- **`src/design-system/atomic/molecules/*/ComponentName.module.css`** - Estilos de moléculas
- **`src/design-system/atomic/organisms/*/ComponentName.module.css`** - Estilos de organismos
- **`src/design-system/atomic/templates/*/ComponentName.module.css`** - Estilos de templates

---

## 🎯 **CÓMO PERSONALIZAR EL SISTEMA**

### **1. Cambiar Colores Principales**

Edita `src/design-system/styles/variables.css`:

```css
:root {
  /* === COLORES BASE PARA PALETAS COMPLETAS === */
  --color-primary-base: #2196f3;    /* 🔵 Cambia aquí el color primario */
  --color-secondary-base: #9c27b0; /* 🟣 Cambia aquí el color secundario */
  --color-success-base: #4caf50;   /* 🟢 Cambia aquí el color de éxito */
  --color-warning-base: #ff9800;   /* 🟠 Cambia aquí el color de advertencia */
  --color-danger-base: #f44336;    /* 🔴 Cambia aquí el color de peligro */
  --color-info-base: #00bcd4;      /* 🔵 Cambia aquí el color de información */
  --color-neutral-base: #6c757d;   /* ⚫ Cambia aquí el color neutro */
}
```

**💡 Resultado**: Todos los componentes automáticamente usarán los nuevos colores.

### **2. Cambiar Tipografía**

```css
:root {
  /* === TIPOGRAFÍA === */
  --font-family-base: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-family-heading: var(--font-family-base);  /* 📝 Cambia aquí la fuente de títulos */
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
}
```

### **3. Cambiar Espaciado**

```css
:root {
  /* === ESPACIADO FLUIDO === */
  --spacing-xs: clamp(0.25rem, 0.5vw, 0.5rem);   /* 📏 Cambia aquí el espaciado XS */
  --spacing-sm: clamp(0.5rem, 1vw, 1rem);         /* 📏 Cambia aquí el espaciado SM */
  --spacing-md: clamp(1rem, 2vw, 2rem);           /* 📏 Cambia aquí el espaciado MD */
  --spacing-lg: clamp(1.5rem, 3vw, 3rem);         /* 📏 Cambia aquí el espaciado LG */
  --spacing-xl: clamp(2rem, 4vw, 4rem);           /* 📏 Cambia aquí el espaciado XL */
}
```

### **4. Cambiar Breakpoints**

```css
:root {
  /* === BREAKPOINTS RESPONSIVE === */
  --breakpoint-xs: 0;      /* 📱 Cambia aquí el breakpoint XS */
  --breakpoint-sm: 576px;  /* 📱 Cambia aquí el breakpoint SM */
  --breakpoint-md: 768px;  /* 📱 Cambia aquí el breakpoint MD */
  --breakpoint-lg: 992px;  /* 📱 Cambia aquí el breakpoint LG */
  --breakpoint-xl: 1200px; /* 📱 Cambia aquí el breakpoint XL */
  --breakpoint-xxl: 1400px; /* 📱 Cambia aquí el breakpoint XXL */
}
```

### **5. Cambiar Radios de Borde**

```css
:root {
  /* === RADIOS DE BORDE === */
  --border-radius-sm: 0.125rem;  /* 🔲 Cambia aquí el radio pequeño */
  --border-radius-md: 0.25rem;   /* 🔲 Cambia aquí el radio medio */
  --border-radius-lg: 0.5rem;    /* 🔲 Cambia aquí el radio grande */
  --border-radius-xl: 0.75rem;   /* 🔲 Cambia aquí el radio extra grande */
}
```

---

## 🌓 **SISTEMA DE TEMAS**

### **Tema Claro (Por Defecto)**
```css
:root {
  --color-text-primary: var(--color-neutral-900);
  --color-background-primary: var(--color-neutral-50);
  --color-border-primary: var(--color-neutral-300);
}
```

### **Tema Oscuro**
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: var(--color-neutral-100);
    --color-background-primary: var(--color-neutral-900);
    --color-border-primary: var(--color-neutral-700);
  }
}

/* O usando data-theme */
[data-theme="dark"] {
  --color-text-primary: var(--color-neutral-100);
  --color-background-primary: var(--color-neutral-900);
  --color-border-primary: var(--color-neutral-700);
}
```

---

## 🔧 **PERSONALIZACIÓN DE COMPONENTES**

### **Método 1: Variables CSS del Componente**

Cada componente expone variables CSS para personalización:

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

### **Método 2: Personalización desde el Componente Padre**

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

### **Método 3: Clases CSS Personalizadas**

```css
/* En tu archivo CSS personalizado */
.myCustomButton {
  --button-bg: #ff6b6b;
  --button-color: #ffffff;
  --button-radius: 20px;
}
```

```tsx
<Button className="myCustomButton">
  Botón Personalizado
</Button>
```

---

## 📱 **RESPONSIVE DESIGN**

### **Mobile First**
```css
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

### **Fluid Values con clamp()**
```css
.component {
  font-size: clamp(1rem, 2vw + 0.5rem, 2rem);
  padding: clamp(1rem, 3vw, 3rem);
}
```

---

## 🎨 **CREAR NUEVOS COMPONENTES**

### **Estructura del Componente**
```
ComponentName/
├── index.ts                 # Exportación limpia
├── ComponentName.tsx       # Componente principal
├── ComponentName.module.css # Estilos aislados
├── ComponentName.types.ts  # Tipos separados
└── ComponentName.test.tsx  # Tests
```

### **Template de CSS Module**
```css
/* ComponentName.module.css - CSS 2025 */

.componentName {
  /* Layout */
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  
  /* Styling */
  background-color: var(--surface-base);
  border: var(--border-width-1) solid var(--color-border-primary);
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

---

## 🔍 **DEBUGGING Y DESARROLLO**

### **Ver Variables CSS en DevTools**
```css
/* Añadir temporalmente para debug */
.debug * {
  outline: 1px solid red;
}

.debug::before {
  content: attr(style);
  position: absolute;
  background: black;
  color: white;
  padding: 4px;
  font-size: 12px;
}
```

### **Comandos de Desarrollo**
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

---

## 📚 **RECURSOS ADICIONALES**

### **Características CSS 2025 Utilizadas:**
- ✅ **Custom Properties** - Variables CSS centralizadas
- ✅ **Cascade Layers** - Control total del cascade
- ✅ **Container Queries** - Responsive basado en contenedor
- ✅ **clamp()** - Valores fluidos responsive
- ✅ **CSS Grid** - Layouts avanzados
- ✅ **Flexbox** - Alineación y distribución
- ✅ **CSS Modules** - Estilos encapsulados
- ✅ **Dark Mode** - Soporte nativo para temas

### **Arquitectura Atomic Design:**
- **Atoms** - Componentes básicos (Button, Input, Text)
- **Molecules** - Combinaciones de átomos (Card, Form, SearchBar)
- **Organisms** - Secciones complejas (Header, Footer, Navigation)
- **Templates** - Estructuras de página (Landing, Dashboard, Blog)
- **Pages** - Instancias específicas de templates

---

## 💡 **CONSEJOS DE MEJORES PRÁCTICAS**

1. **Siempre usa variables CSS** en lugar de valores hardcodeados
2. **Mobile first** - diseña desde móvil hacia escritorio
3. **Container queries** sobre media queries cuando sea posible
4. **Progressive enhancement** - funcionalidad básica siempre funciona
5. **Accesibilidad integrada** desde el principio
6. **Performance optimizado** - minimiza reflows y repaints
7. **Consistencia** - usa el mismo sistema de tokens en todos los componentes
8. **Documentación** - documenta todas las variables personalizadas

---

**🎯 Resultado**: Un sistema de diseño **100% personalizable**, **responsive** y **profesional** que se adapta a cualquier proyecto sin modificar código interno.
