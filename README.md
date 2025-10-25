# Boilerplate Atomic Design

Un boilerplate completo de React + TypeScript con Atomic Design System, diseñado para ser altamente personalizable y reutilizable en proyectos de consultoría digital.

[![CI/CD Pipeline](https://github.com/JeyMoonPSEleven/Boilerplate-AtomicDesign/workflows/CI/CD%20Pipeline/badge.svg)](https://github.com/JeyMoonPSEleven/Boilerplate-AtomicDesign/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61dafb.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0+-38bdf8.svg)](https://tailwindcss.com/)

## 🚀 Características

- **React 18 + TypeScript**: Desarrollo moderno con tipado fuerte
- **Vite**: Build tool rápido y eficiente
- **React Router DOM**: Enrutado completo con lazy loading
- **Atomic Design**: Estructura organizada por átomos, moléculas, organismos, templates y páginas
- **Tailwind CSS v4**: Sistema de utilidades CSS moderno
- **Design Tokens**: Sistema de variables CSS personalizable
- **Testing**: Vitest + Testing Library configurado
- **CI/CD**: GitHub Actions con pipeline completo
- **pnpm**: Gestor de paquetes eficiente
- **Componentes Personalizables**: Todos los componentes son altamente configurables
- **Dark Mode**: Soporte completo para modo oscuro
- **Responsive**: Mobile-first approach
- **Accesible**: Componentes WCAG 2.1 AA compliant

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Aplicación principal y páginas de demo
├── design-system/
│   ├── atomic/
│   │   ├── atoms/          # Componentes base indivisibles
│   │   │   ├── Button/     # Botón con múltiples variantes
│   │   │   ├── Input/      # Campo de entrada con validación
│   │   │   ├── Text/       # Texto con variantes de estilo
│   │   │   ├── Heading/    # Encabezados con niveles semánticos
│   │   │   └── Icon/       # Iconos con múltiples tamaños
│   │   ├── molecules/      # Combinaciones de átomos
│   │   │   ├── Card/       # Tarjetas con variantes
│   │   │   └── Form/       # Formularios con validación
│   │   ├── organisms/      # Secciones complejas de UI
│   │   ├── templates/      # Estructuras de página
│   │   └── pages/          # Instancias de plantillas
│   ├── styles/            # Estilos globales y tokens
│   │   ├── variables.css   # Design tokens personalizables
│   │   └── global.css     # Estilos base y reset
│   └── utils/             # Funciones de utilidad
├── hooks/                 # Hooks personalizados de React
└── types/                 # Definiciones de tipos globales
```

## 🎨 Design Tokens

El sistema incluye tokens de diseño completamente personalizables:

- **Colores**: Primarios, secundarios, estados (success, danger, warning, info)
- **Tipografía**: Familias, tamaños, pesos, alturas de línea
- **Espaciado**: Sistema consistente de márgenes y padding
- **Bordes**: Radios y estilos de borde
- **Sombras**: Efectos de profundidad
- **Transiciones**: Animaciones suaves

## 🧩 Componentes Disponibles

### Atoms (50+ componentes)
- **Button**: Botón con múltiples variantes, tamaños y estados
- **Input**: Campo de entrada con validación y estados
- **Text**: Texto con variantes de tamaño y color
- **Heading**: Encabezados semánticos con niveles
- **Icon**: Iconos con múltiples tamaños y variantes
- **Badge**: Etiquetas para estados y categorías
- **Avatar**: Avatares de usuario con fallbacks
- **Checkbox**: Casillas de verificación accesibles
- **Radio**: Botones de radio con validación
- **Switch**: Interruptores con animaciones
- **Slider**: Deslizadores con valores personalizables
- **Progress**: Barras de progreso con animaciones
- **Spinner**: Indicadores de carga
- **Divider**: Separadores visuales
- **Link**: Enlaces con variantes y estados
- **Logo**: Logotipos escalables
- **Image**: Imágenes con lazy loading
- **Video**: Reproductores de video responsivos
- Y muchos más...

### Molecules (15+ componentes)
- **Card**: Tarjetas con variantes y efectos hover
- **Form**: Formularios con validación automática
- **Modal**: Modales accesibles y responsivos
- **Alert**: Alertas y notificaciones
- **SearchBar**: Barra de búsqueda con filtros
- **Pagination**: Navegación de páginas
- **Tabs**: Pestañas con navegación por teclado
- **Accordion**: Acordeones colapsables
- **Breadcrumb**: Migas de pan navegables
- **Rating**: Sistema de calificaciones
- **Toast**: Notificaciones toast
- **Tooltip**: Tooltips informativos
- Y más...

### Organisms (12+ componentes)
- **Header**: Cabecera con navegación completa
- **Footer**: Pie de página con enlaces y contacto
- **Navigation**: Navegación principal y secundaria
- **Hero**: Sección hero con CTA
- **ContactForm**: Formulario de contacto completo
- **Testimonials**: Testimonios y reseñas
- **FAQ**: Preguntas frecuentes
- **Newsletter**: Suscripción a newsletter
- **Pricing**: Tablas de precios
- **Statistics**: Estadísticas y métricas
- **Dashboard**: Widgets de dashboard
- **Sidebar**: Barra lateral navegable

### Templates (10+ templates)
- **LayoutBase**: Layout base con header y footer
- **Landing**: Template para páginas de aterrizaje
- **Dashboard**: Template para dashboards
- **Authentication**: Template para autenticación
- **Documentation**: Template para documentación
- **Error**: Template para páginas de error
- **Blog**: Template para blogs
- **Profile**: Template para perfiles de usuario
- **Settings**: Template para configuraciones
- **Admin**: Template para paneles de administración
- **Maintenance**: Template para mantenimiento

### Pages (5+ páginas de ejemplo)
- **HomePage**: Página de inicio completa
- **ComponentsPage**: Galería de componentes
- **DocumentationPage**: Documentación interactiva
- **ExamplesPage**: Ejemplos de uso
- **NotFoundPage**: Página 404 personalizada

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm preview

# Testing
pnpm test

# Testing con UI
pnpm test:ui

# Coverage
pnpm coverage

# Linting
pnpm lint
```

## 🚀 Inicio Rápido

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd Boilerplate-AtomicDesign
   ```

2. **Instala dependencias**
   ```bash
   pnpm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   pnpm dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

## 🎯 Personalización

### Design Tokens
Modifica `src/design-system/styles/variables.css` para personalizar:
- Colores de marca
- Tipografías
- Espaciado
- Bordes y sombras

### Componentes
Todos los componentes están diseñados para ser altamente personalizables:
- Props para variantes y tamaños
- CSS Modules para estilos encapsulados
- TypeScript para tipado fuerte

## 📦 Agregar Nuevos Componentes

### Para Atoms:
1. Crea la carpeta del componente en `src/design-system/atomic/atoms/`
2. Implementa: `Component.tsx`, `Component.types.ts`, `Component.module.css`, `index.ts`
3. Exporta en `src/design-system/atomic/atoms/index.ts`

### Para Molecules:
1. Crea la carpeta del componente en `src/design-system/atomic/molecules/`
2. Implementa la misma estructura que los atoms
3. Exporta en `src/design-system/atomic/molecules/index.ts`

## 🧪 Testing

El proyecto incluye testing configurado con Vitest y Testing Library:

```bash
# Ejecutar todas las pruebas
pnpm test

# Ejecutar pruebas en modo watch
pnpm test --watch

# Generar reporte de cobertura
pnpm coverage
```

## 🔄 CI/CD Pipeline

El proyecto incluye un pipeline completo de CI/CD con GitHub Actions:

- **Quality Check**: ESLint, Prettier y TypeScript checks
- **Test Suite**: Tests unitarios con cobertura
- **Build Check**: Verificación de compilación
- **Security Audit**: Auditoría de seguridad de dependencias
- **Deploy**: Despliegue automático a GitHub Pages

## 📚 Próximos Pasos

- [x] ✅ Implementar organismos de ejemplo (Header, Footer)
- [x] ✅ Crear template LayoutBase
- [x] ✅ Configurar React Router DOM
- [x] ✅ Configurar GitHub Actions CI/CD
- [x] ✅ Agregar archivo LICENSE MIT
- [ ] Agregar Storybook para documentación
- [ ] Implementar más tests
- [ ] Agregar componentes de formularios avanzados
- [ ] Implementar sistema de notificaciones
- [ ] Agregar componentes de data visualization

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

---

**Desarrollado para consultoría digital** - Un boilerplate completo y personalizable para proyectos React modernos.
