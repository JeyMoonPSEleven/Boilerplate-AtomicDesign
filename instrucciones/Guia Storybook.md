Guía de Integración: Storybook + Atomic Design en Cursor IDE
Fase 1: Instalación y Configuración (El 'Qué')
El primer paso es introducir Storybook en tu proyecto existente de React + Vite.

Por qué es importante: Necesitamos que Storybook coexista con Vite. Afortunadamente, Storybook tiene soporte de primera clase para Vite, por lo que la configuración es ágil.

Pasos de la Integración:

Abrir el Terminal de Cursor: No necesitas salir del IDE. Presiona Cmd+K (o Ctrl+K) y escribe >Terminal para abrir una nueva terminal integrada.

Ejecutar el Asistente de Storybook: En la terminal, ejecuta el comando de inicialización.

Bash

npx storybook@latest init
Seguir al Asistente: Storybook detectará automáticamente tu stack (React, Vite, TypeScript) y te preguntará qué configuración prefieres. Confirma las opciones que te ofrezca.

Ajuste para Tailwind CSS: Este es el "gotcha" más común. Tu aplicación principal (main.tsx) importa tu CSS global de Tailwind (ej. index.css), pero Storybook no lo hace por defecto.

Abre el archivo .storybook/preview.ts que Storybook acaba de crear.

Importa tu archivo CSS global al inicio de este archivo.

TypeScript

import '../src/index.css'; // Ajusta esta ruta a donde tengas tu CSS global

// ... resto del archivo preview.ts
Lanzar Storybook: Ejecuta el comando para iniciar el servidor de desarrollo de Storybook.

Bash

pnpm run storybook 
(Tu CSV indica que usas pnpm, así que usamos ese comando).

Fase 2: Estructurando "Stories" con Atomic Design (El 'Cómo')
Aquí es donde conectamos la metodología. Tu estructura de carpetas (que debería estar en src/components/) debe reflejarse en Storybook.

Por qué es importante: Si no sigues la estructura atómica, Storybook se convierte en un simple listado de componentes. Queremos un catálogo organizado por niveles de complejidad.

Estructura de Archivos (Ejemplo):

Tu estructura de archivos debe verse así, colocando los archivos .stories junto a sus componentes:

src/
└── components/
    ├── 1-atoms/
    │   ├── Button/
    │   │   ├── Button.tsx
    │   │   └── Button.stories.tsx  <-- La "historia" del botón
    │   └── Input/
    │       ├── Input.tsx
    │       └── Input.stories.tsx
    ├── 2-molecules/
    │   ├── SearchForm/
    │   │   ├── SearchForm.tsx
    │   │   └── SearchForm.stories.tsx
    │   ...
    └── 3-organisms/
        ...
Creando tu Primera "Story" (Átomo):

Vamos a crear la historia para un átomo Button.tsx. Storybook usa el Component Story Format 3.0 (CSF 3.0), que es amigable con TypeScript.

Este sería el contenido de src/components/1-atoms/Button/Button.stories.tsx:

TypeScript

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button'; // Importa tu componente

// 1. Meta-información: Dónde aparece en la UI de Storybook
const meta: Meta<typeof Button> = {
  title: '1-Atoms/Button', // ¡Aquí usamos la jerarquía de Atomic Design!
  component: Button,
  tags: ['autodocs'], // Habilita la documentación automática
  argTypes: { // Configura los controles (inferidos por TypeScript, pero podemos ajustar)
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 2. Las "Stories" (Variantes del componente)
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    label: 'Secondary Button',
  },
};

export const LargeDanger: Story = {
  args: {
    variant: 'danger',
    size: 'large',
    label: 'Large Danger',
  },
};
Fase 3: Potenciando Storybook con la IA de Cursor (El 'Superpoder')
Aquí es donde tu Plan PRO de Cursor brilla. No tienes que escribir todas esas "stories" a mano.

Por qué es importante: La IA reduce la fricción de crear la documentación, que suele ser la parte más tediosa.

Caso de Uso 1: Generar una "Story" desde Cero
Abre tu componente Button.tsx.

Presiona Cmd+L (o Ctrl+L) para "adjuntar" el archivo completo al chat de IA.

Presiona Cmd+K (o Ctrl+K) para abrir el prompt y escribe:

"Usando el componente adjunto (@Button.tsx), genera un archivo Button.stories.tsx.

Requisitos:

Usa el formato CSF 3.0 con Meta y StoryObj de Storybook.

El título debe ser '1-Atoms/Button' para seguir mi Atomic Design.

Infiere los argTypes de las props de TypeScript.

Crea 'stories' para las variantes: Primary, Secondary y una Large con disabled."

La IA generará el código que vimos en la Fase 2 en segundos.

Caso de Uso 2: Documentar y Añadir Pruebas de Accesibilidad (A11y)
Storybook tiene addons. El de accesibilidad (@storybook/addon-a11y) es vital. Podemos pedirle a Cursor que nos ayude a preparar el componente.

Selecciona tu componente Button.tsx (Cmd+L).

Abre el Chat (Cmd+K) y escribe:

"Revisa este componente (@Button.tsx) y realiza dos acciones:

Añade comentarios JSDoc detallados a cada prop para que Storybook Docs pueda mostrarlos.

Analiza el componente en busca de problemas de accesibilidad (a11y). Sugiere los atributos ARIA (aria-label, role, etc.) que falten."

Caso de Uso 3: Refactorizar a Atomic Design
Si tienes un componente antiguo y monolítico, Cursor puede ayudarte a dividirlo.

Abre el componente monolítico (ej. OldProfilePage.tsx).

Usa el chat (Cmd+K) con el archivo adjunto (@OldProfilePage.tsx).

"Analiza este componente (@OldProfilePage.tsx).

Identifica los componentes que deberían ser Átomos (ej. Avatar, Button).

Identifica los componentes que deberían ser Moléculas (ej. UserInfoBlock).

Sugiere el código refactorizado para el Organismo (ProfileCard) que utilice esos átomos y moléculas."

Fase 4: Documentación en Notion (La 'Memoria')
Excelente. Hemos cubierto la instalación, la configuración de Tailwind, la estructura de Atomic Design y, lo más importante, cómo usar la IA de Cursor para acelerar drásticamente este flujo de trabajo.