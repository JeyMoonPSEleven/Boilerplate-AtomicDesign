# Boilerplate Atomic Design

Un boilerplate completo de React + TypeScript con Atomic Design System, diseñado para ser altamente personalizable y reutilizable en proyectos de consultoría digital.

## 🚀 Características

- **React 18 + TypeScript**: Desarrollo moderno con tipado fuerte
- **Vite**: Build tool rápido y eficiente
- **Atomic Design**: Estructura organizada por átomos, moléculas, organismos, templates y páginas
- **Design Tokens**: Sistema de variables CSS personalizable
- **Testing**: Vitest + Testing Library configurado
- **pnpm**: Gestor de paquetes eficiente
- **Componentes Personalizables**: Todos los componentes son altamente configurables

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

### Atoms
- **Button**: Botón con 9 variantes, 3 tamaños y estados especiales
- **Input**: Campo de entrada con validación y estados
- **Text**: Texto con variantes de tamaño y color
- **Heading**: Encabezados semánticos con niveles
- **Icon**: Iconos con múltiples tamaños y variantes

### Molecules
- **Card**: Tarjetas con variantes y efectos hover
- **Form**: Formularios con validación automática

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

## 📚 Próximos Pasos

- [ ] Migrar más componentes de la carpeta `components/`
- [ ] Agregar componentes de organisms
- [ ] Implementar templates y pages
- [ ] Agregar Storybook para documentación
- [ ] Configurar CI/CD
- [ ] Agregar más tests

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
