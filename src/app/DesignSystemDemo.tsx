// src/app/DesignSystemDemo.tsx
import React, { useState } from 'react';
import {
  Button, Input, Text, Heading, Icon, Badge, Checkbox, Progress, Spinner, Divider,
  Avatar, Radio, Switch, Slider,
  Card, Alert, Accordion, Breadcrumb, Rating, Pagination, SearchBar,
  Hero, ContactForm, Newsletter, Pricing, Testimonials, FAQ, Statistics,
  Navigation, Sidebar, Dashboard,
  Landing, DashboardTemplate, Authentication, ErrorTemplate, Blog, Documentation,
  Maintenance, Profile, Settings, Admin,
  ColorPalette, SpacingDemo, TypographyDemo, SectionDivider, ThemeToggle, MediaGallery,
  useLocalStorage, useMediaQuery
} from '../design-system';
import { ButtonVariant, ButtonSize } from '../design-system/atomic/atoms/Button/Button.types';

const variants: ButtonVariant[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'];
const sizes: ButtonSize[] = ['small', 'medium', 'large'];

export const DesignSystemDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [rating, setRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [_theme, _setTheme] = useLocalStorage('theme', 'light');

  // Datos de ejemplo para organisms
  const navigationItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { label: 'Contacto', href: '/contacto' }
  ];

  const sidebarItems = [
    { id: '1', label: 'Dashboard', href: '/dashboard', icon: 'Home' },
    { id: '2', label: 'Usuarios', href: '/users', icon: 'User' },
    { id: '3', label: 'Configuración', href: '/settings', icon: 'Settings' },
    { id: '4', label: 'Reportes', href: '/reports', icon: 'BarChart' }
  ];

  const statistics = [
    {
      id: '1',
      value: '500+',
      label: 'Clientes Satisfechos',
      description: 'Empresas que confían en nosotros',
      change: { value: '+15%', type: 'increase' as const }
    },
    {
      id: '2',
      value: '€2.5M',
      label: 'Ingresos Generados',
      description: 'Para nuestros clientes',
      change: { value: '+25%', type: 'increase' as const }
    },
    {
      id: '3',
      value: '95%',
      label: 'Tasa de Éxito',
      description: 'Proyectos completados',
      change: { value: '+5%', type: 'increase' as const }
    }
  ];

  const testimonials = [
    {
      id: '1',
      name: 'Juan Pérez',
      role: 'CEO de Tech Solutions',
      content: 'El equipo transformó nuestra presencia digital. Su enfoque estratégico y ejecución impecable nos llevaron a un crecimiento sin precedentes.',
      rating: 5,
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'María García',
      role: 'Directora de Marketing',
      content: 'La consultoría fue clave para optimizar nuestras campañas. Vimos un retorno de inversión significativo en poco tiempo.',
      rating: 4,
      avatar: 'https://via.placeholder.com/150',
    }
  ];

  const faqItems = [
    {
      id: '1',
      question: '¿Qué es Atomic Design?',
      answer: 'Atomic Design es una metodología para crear sistemas de diseño que organiza los componentes en átomos, moléculas, organismos, plantillas y páginas.'
    },
    {
      id: '2',
      question: '¿Cómo uso los componentes?',
      answer: 'Los componentes pueden ser importados directamente desde el design system y utilizados en tu aplicación React con TypeScript.'
    }
  ];

  const pricingPlans = [
    {
      id: '1',
      name: 'Básico',
      description: 'Perfecto para empezar',
      price: 29,
      currency: '€',
      period: '/mes',
      features: ['Hasta 5 proyectos', 'Soporte por email', 'Actualizaciones'],
      buttonText: 'Comenzar',
      buttonVariant: 'secondary' as const
    },
    {
      id: '2',
      name: 'Pro',
      description: 'Para equipos en crecimiento',
      price: 79,
      currency: '€',
      period: '/mes',
      features: ['Hasta 25 proyectos', 'Soporte prioritario', 'Integraciones'],
      isPopular: true,
      buttonText: 'Comenzar',
      buttonVariant: 'primary' as const
    },
    {
      id: '3',
      name: 'Enterprise',
      description: 'Para grandes organizaciones',
      price: 199,
      currency: '€',
      period: '/mes',
      features: ['Proyectos ilimitados', 'Soporte 24/7', 'Personalización'],
      buttonText: 'Contactar',
      buttonVariant: 'secondary' as const
    }
  ];

  const mediaItems = [
    {
      id: '1',
      type: 'image' as const,
      src: 'https://picsum.photos/400/300?random=1',
      title: 'Imagen de ejemplo 1',
      description: 'Una imagen de muestra para demostrar el componente MediaGallery'
    },
    {
      id: '2',
      type: 'image' as const,
      src: 'https://picsum.photos/400/300?random=2',
      title: 'Imagen de ejemplo 2',
      description: 'Otra imagen de muestra con diferentes colores'
    },
    {
      id: '3',
      type: 'video' as const,
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      title: 'Video de ejemplo',
      description: 'Un video de muestra para demostrar la reproducción',
      thumbnail: 'https://picsum.photos/400/300?random=3',
      duration: '1:30'
    },
    {
      id: '4',
      type: 'document' as const,
      src: '#',
      title: 'Documento PDF',
      description: 'Un documento de ejemplo',
      size: '2.5 MB'
    },
    {
      id: '5',
      type: 'image' as const,
      src: 'https://picsum.photos/400/300?random=4',
      title: 'Imagen de ejemplo 3',
      description: 'Tercera imagen de muestra'
    },
    {
      id: '6',
      type: 'image' as const,
      src: 'https://picsum.photos/400/300?random=5',
      title: 'Imagen de ejemplo 4',
      description: 'Cuarta imagen de muestra'
    }
  ];

  const colorTokens = [
    // Paleta Primaria (Azul)
    { name: 'Primary 50', value: 'var(--color-primary-50)', description: 'Tono más claro de primario', category: 'Primario' },
    { name: 'Primary 100', value: 'var(--color-primary-100)', description: 'Tono claro de primario', category: 'Primario' },
    { name: 'Primary 200', value: 'var(--color-primary-200)', description: 'Tono medio-claro de primario', category: 'Primario' },
    { name: 'Primary 300', value: 'var(--color-primary-300)', description: 'Tono medio de primario', category: 'Primario' },
    { name: 'Primary 400', value: 'var(--color-primary-400)', description: 'Tono medio-oscuro de primario', category: 'Primario' },
    { name: 'Primary 500', value: 'var(--color-primary-500)', description: 'Color primario base', category: 'Primario' },
    { name: 'Primary 600', value: 'var(--color-primary-600)', description: 'Tono oscuro de primario', category: 'Primario' },
    { name: 'Primary 700', value: 'var(--color-primary-700)', description: 'Tono más oscuro de primario', category: 'Primario' },
    { name: 'Primary 800', value: 'var(--color-primary-800)', description: 'Tono muy oscuro de primario', category: 'Primario' },
    { name: 'Primary 900', value: 'var(--color-primary-900)', description: 'Tono más oscuro de primario', category: 'Primario' },
    { name: 'Primary 950', value: 'var(--color-primary-950)', description: 'Tono extremo de primario', category: 'Primario' },

    // Paleta Secundaria (Azul diferente)
    { name: 'Secondary 50', value: 'var(--color-secondary-50)', description: 'Tono más claro de secundario', category: 'Secundario' },
    { name: 'Secondary 100', value: 'var(--color-secondary-100)', description: 'Tono claro de secundario', category: 'Secundario' },
    { name: 'Secondary 200', value: 'var(--color-secondary-200)', description: 'Tono medio-claro de secundario', category: 'Secundario' },
    { name: 'Secondary 300', value: 'var(--color-secondary-300)', description: 'Tono medio de secundario', category: 'Secundario' },
    { name: 'Secondary 400', value: 'var(--color-secondary-400)', description: 'Tono medio-oscuro de secundario', category: 'Secundario' },
    { name: 'Secondary 500', value: 'var(--color-secondary-500)', description: 'Color secundario base', category: 'Secundario' },
    { name: 'Secondary 600', value: 'var(--color-secondary-600)', description: 'Tono oscuro de secundario', category: 'Secundario' },
    { name: 'Secondary 700', value: 'var(--color-secondary-700)', description: 'Tono más oscuro de secundario', category: 'Secundario' },
    { name: 'Secondary 800', value: 'var(--color-secondary-800)', description: 'Tono muy oscuro de secundario', category: 'Secundario' },
    { name: 'Secondary 900', value: 'var(--color-secondary-900)', description: 'Tono más oscuro de secundario', category: 'Secundario' },
    { name: 'Secondary 950', value: 'var(--color-secondary-950)', description: 'Tono extremo de secundario', category: 'Secundario' },

    // Paleta Success (Verde)
    { name: 'Success 50', value: 'var(--color-success-50)', description: 'Tono más claro de éxito', category: 'Éxito' },
    { name: 'Success 100', value: 'var(--color-success-100)', description: 'Tono claro de éxito', category: 'Éxito' },
    { name: 'Success 200', value: 'var(--color-success-200)', description: 'Tono medio-claro de éxito', category: 'Éxito' },
    { name: 'Success 300', value: 'var(--color-success-300)', description: 'Tono medio de éxito', category: 'Éxito' },
    { name: 'Success 400', value: 'var(--color-success-400)', description: 'Tono medio-oscuro de éxito', category: 'Éxito' },
    { name: 'Success 500', value: 'var(--color-success-500)', description: 'Color éxito base', category: 'Éxito' },
    { name: 'Success 600', value: 'var(--color-success-600)', description: 'Tono oscuro de éxito', category: 'Éxito' },
    { name: 'Success 700', value: 'var(--color-success-700)', description: 'Tono más oscuro de éxito', category: 'Éxito' },
    { name: 'Success 800', value: 'var(--color-success-800)', description: 'Tono muy oscuro de éxito', category: 'Éxito' },
    { name: 'Success 900', value: 'var(--color-success-900)', description: 'Tono más oscuro de éxito', category: 'Éxito' },
    { name: 'Success 950', value: 'var(--color-success-950)', description: 'Tono extremo de éxito', category: 'Éxito' },

    // Paleta Warning (Amarillo/Naranja)
    { name: 'Warning 50', value: 'var(--color-warning-50)', description: 'Tono más claro de advertencia', category: 'Advertencia' },
    { name: 'Warning 100', value: 'var(--color-warning-100)', description: 'Tono claro de advertencia', category: 'Advertencia' },
    { name: 'Warning 200', value: 'var(--color-warning-200)', description: 'Tono medio-claro de advertencia', category: 'Advertencia' },
    { name: 'Warning 300', value: 'var(--color-warning-300)', description: 'Tono medio de advertencia', category: 'Advertencia' },
    { name: 'Warning 400', value: 'var(--color-warning-400)', description: 'Tono medio-oscuro de advertencia', category: 'Advertencia' },
    { name: 'Warning 500', value: 'var(--color-warning-500)', description: 'Color advertencia base', category: 'Advertencia' },
    { name: 'Warning 600', value: 'var(--color-warning-600)', description: 'Tono oscuro de advertencia', category: 'Advertencia' },
    { name: 'Warning 700', value: 'var(--color-warning-700)', description: 'Tono más oscuro de advertencia', category: 'Advertencia' },
    { name: 'Warning 800', value: 'var(--color-warning-800)', description: 'Tono muy oscuro de advertencia', category: 'Advertencia' },
    { name: 'Warning 900', value: 'var(--color-warning-900)', description: 'Tono más oscuro de advertencia', category: 'Advertencia' },
    { name: 'Warning 950', value: 'var(--color-warning-950)', description: 'Tono extremo de advertencia', category: 'Advertencia' },

    // Paleta Danger (Rojo)
    { name: 'Danger 50', value: 'var(--color-danger-50)', description: 'Tono más claro de peligro', category: 'Peligro' },
    { name: 'Danger 100', value: 'var(--color-danger-100)', description: 'Tono claro de peligro', category: 'Peligro' },
    { name: 'Danger 200', value: 'var(--color-danger-200)', description: 'Tono medio-claro de peligro', category: 'Peligro' },
    { name: 'Danger 300', value: 'var(--color-danger-300)', description: 'Tono medio de peligro', category: 'Peligro' },
    { name: 'Danger 400', value: 'var(--color-danger-400)', description: 'Tono medio-oscuro de peligro', category: 'Peligro' },
    { name: 'Danger 500', value: 'var(--color-danger-500)', description: 'Color peligro base', category: 'Peligro' },
    { name: 'Danger 600', value: 'var(--color-danger-600)', description: 'Tono oscuro de peligro', category: 'Peligro' },
    { name: 'Danger 700', value: 'var(--color-danger-700)', description: 'Tono más oscuro de peligro', category: 'Peligro' },
    { name: 'Danger 800', value: 'var(--color-danger-800)', description: 'Tono muy oscuro de peligro', category: 'Peligro' },
    { name: 'Danger 900', value: 'var(--color-danger-900)', description: 'Tono más oscuro de peligro', category: 'Peligro' },
    { name: 'Danger 950', value: 'var(--color-danger-950)', description: 'Tono extremo de peligro', category: 'Peligro' },

    // Paleta Info (Cian)
    { name: 'Info 50', value: 'var(--color-info-50)', description: 'Tono más claro de información', category: 'Información' },
    { name: 'Info 100', value: 'var(--color-info-100)', description: 'Tono claro de información', category: 'Información' },
    { name: 'Info 200', value: 'var(--color-info-200)', description: 'Tono medio-claro de información', category: 'Información' },
    { name: 'Info 300', value: 'var(--color-info-300)', description: 'Tono medio de información', category: 'Información' },
    { name: 'Info 400', value: 'var(--color-info-400)', description: 'Tono medio-oscuro de información', category: 'Información' },
    { name: 'Info 500', value: 'var(--color-info-500)', description: 'Color información base', category: 'Información' },
    { name: 'Info 600', value: 'var(--color-info-600)', description: 'Tono oscuro de información', category: 'Información' },
    { name: 'Info 700', value: 'var(--color-info-700)', description: 'Tono más oscuro de información', category: 'Información' },
    { name: 'Info 800', value: 'var(--color-info-800)', description: 'Tono muy oscuro de información', category: 'Información' },
    { name: 'Info 900', value: 'var(--color-info-900)', description: 'Tono más oscuro de información', category: 'Información' },
    { name: 'Info 950', value: 'var(--color-info-950)', description: 'Tono extremo de información', category: 'Información' },

    // Paleta Neutral (Gris)
    { name: 'Neutral 50', value: 'var(--color-neutral-50)', description: 'Tono más claro neutro', category: 'Neutro' },
    { name: 'Neutral 100', value: 'var(--color-neutral-100)', description: 'Tono claro neutro', category: 'Neutro' },
    { name: 'Neutral 200', value: 'var(--color-neutral-200)', description: 'Tono medio-claro neutro', category: 'Neutro' },
    { name: 'Neutral 300', value: 'var(--color-neutral-300)', description: 'Tono medio neutro', category: 'Neutro' },
    { name: 'Neutral 400', value: 'var(--color-neutral-400)', description: 'Tono medio-oscuro neutro', category: 'Neutro' },
    { name: 'Neutral 500', value: 'var(--color-neutral-500)', description: 'Color neutro base', category: 'Neutro' },
    { name: 'Neutral 600', value: 'var(--color-neutral-600)', description: 'Tono oscuro neutro', category: 'Neutro' },
    { name: 'Neutral 700', value: 'var(--color-neutral-700)', description: 'Tono más oscuro neutro', category: 'Neutro' },
    { name: 'Neutral 800', value: 'var(--color-neutral-800)', description: 'Tono muy oscuro neutro', category: 'Neutro' },
    { name: 'Neutral 900', value: 'var(--color-neutral-900)', description: 'Tono más oscuro neutro', category: 'Neutro' },
    { name: 'Neutral 950', value: 'var(--color-neutral-950)', description: 'Tono extremo neutro', category: 'Neutro' },
  ];

  const spacingTokens = [
    { name: 'XS', value: 'var(--spacing-xs)', size: '4px' },
    { name: 'SM', value: 'var(--spacing-sm)', size: '8px' },
    { name: 'MD', value: 'var(--spacing-md)', size: '16px' },
    { name: 'LG', value: 'var(--spacing-lg)', size: '24px' },
    { name: 'XL', value: 'var(--spacing-xl)', size: '32px' },
    { name: 'XXL', value: 'var(--spacing-xxl)', size: '48px' },
  ];

  const typographyTokens = [
    { name: 'XS', value: 'var(--font-size-xs)', size: '12px' },
    { name: 'SM', value: 'var(--font-size-sm)', size: '14px' },
    { name: 'Base', value: 'var(--font-size-base)', size: '16px' },
    { name: 'LG', value: 'var(--font-size-lg)', size: '18px' },
    { name: 'XL', value: 'var(--font-size-xl)', size: '20px' },
    { name: '2XL', value: 'var(--font-size-2xl)', size: '24px' },
    { name: '3XL', value: 'var(--font-size-3xl)', size: '30px' },
    { name: '4XL', value: 'var(--font-size-4xl)', size: '36px' },
  ];

  return (
    <div style={{
      padding: 'var(--spacing-xl)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-xl)',
      backgroundColor: 'var(--color-background-primary)',
      minHeight: '100vh'
    }}>
      {/* Header Principal */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'var(--spacing-xl) 0',
        borderBottom: '1px solid var(--color-border-primary)',
        marginBottom: 'var(--spacing-xl)',
        flexWrap: 'wrap',
        gap: 'var(--spacing-md)'
      }}>
        <div style={{ textAlign: 'left' }}>
          <Heading level={1} variant="display" style={{
            background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 'var(--spacing-sm)'
          }}>
            Atomic Design System
          </Heading>
          <Text variant="large" color="muted" style={{ maxWidth: '600px' }}>
            Un sistema de diseño completo y profesional con componentes ultra reutilizables,
            tipado estricto y diseño responsive.
          </Text>
        </div>
        <ThemeToggle showLabel={true} />
        <div style={{
          display: 'flex',
          gap: 'var(--spacing-md)',
          justifyContent: 'center',
          marginTop: 'var(--spacing-lg)',
          flexWrap: 'wrap'
        }}>
          <Badge variant="success">✅ 50+ Componentes</Badge>
          <Badge variant="info">🎨 Design Tokens</Badge>
          <Badge variant="warning">📱 Responsive</Badge>
          <Badge variant="primary">⚡ TypeScript</Badge>
        </div>
      </div>

      {/* Sección de Design Tokens */}
      <section style={{
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--border-radius-lg)',
        padding: 'var(--spacing-xl)',
        backgroundColor: 'var(--color-background-secondary)'
      }}>
        <Heading level={2} style={{ marginBottom: 'var(--spacing-lg)' }}>
          🎨 Design Tokens
        </Heading>

        <details style={{ marginBottom: 'var(--spacing-lg)' }}>
          <summary style={{
            cursor: 'pointer',
            fontWeight: 'var(--font-weight-semibold)',
            padding: 'var(--spacing-md)',
            backgroundColor: 'var(--color-background-primary)',
            borderRadius: 'var(--border-radius-md)',
            border: '1px solid var(--color-border-light)'
          }}>
            <Icon name="Palette" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
            Colores ({colorTokens.length} tokens)
          </summary>
          <div style={{ padding: 'var(--spacing-lg)' }}>
            <Text style={{ marginBottom: 'var(--spacing-lg)' }}>
              Sistema de colores con escalas completas, transparencias y colores automáticos generados con CSS 2025.
            </Text>
            <ColorPalette
              colors={colorTokens}
              showCopyButton={true}
              showDescription={true}
              groupByColor={true}
            />
          </div>
        </details>

        <details style={{ marginBottom: 'var(--spacing-lg)' }}>
          <summary style={{
            cursor: 'pointer',
            fontWeight: 'var(--font-weight-semibold)',
            padding: 'var(--spacing-md)',
            backgroundColor: 'var(--color-background-primary)',
            borderRadius: 'var(--border-radius-md)',
            border: '1px solid var(--color-border-light)'
          }}>
            <Icon name="Type" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
            Tipografía ({typographyTokens.length} tokens)
          </summary>
          <div style={{ padding: 'var(--spacing-lg)' }}>
            <Text style={{ marginBottom: 'var(--spacing-lg)' }}>
              Sistema tipográfico completo con tamaños, pesos, estilos y alturas de línea.
            </Text>
            <TypographyDemo />
          </div>
        </details>

        <details>
          <summary style={{
            cursor: 'pointer',
            fontWeight: 'var(--font-weight-semibold)',
            padding: 'var(--spacing-md)',
            backgroundColor: 'var(--color-background-primary)',
            borderRadius: 'var(--border-radius-md)',
            border: '1px solid var(--color-border-light)'
          }}>
            <Icon name="Move" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
            Espaciado ({spacingTokens.length} tokens)
          </summary>
          <div style={{ padding: 'var(--spacing-lg)' }}>
            <Text style={{ marginBottom: 'var(--spacing-lg)' }}>
              Sistema de espaciado con valores fijos y fluidos que se adaptan automáticamente al tamaño de pantalla.
            </Text>
            <SpacingDemo />
          </div>
        </details>
      </section>

      <SectionDivider variant="gradient" color="primary" size="large" />

      {/* Atoms */}
      <details style={{
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--border-radius-lg)',
        backgroundColor: 'var(--color-background-secondary)'
      }}>
        <summary style={{
          cursor: 'pointer',
          fontWeight: 'var(--font-weight-semibold)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--color-background-primary)',
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--color-border-light)',
          fontSize: 'var(--font-size-lg)'
        }}>
          <Icon name="Atom" size="medium" style={{ marginRight: 'var(--spacing-sm)' }} />
          Atoms (22 componentes)
        </summary>

        <div style={{ padding: 'var(--spacing-xl)' }}>
          {/* Button */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="MousePointer" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Button
            </Heading>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
              {variants.map((variant) => (
                <Button key={variant} variant={variant} size="medium">
                  {variant}
                </Button>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
              {sizes.map((size) => (
                <Button key={size} variant="primary" size={size}>
                  {size}
                </Button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-md)' }}>
              <Button isLoading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button isFullWidth>Full Width</Button>
            </div>
          </Card>

          {/* Input */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Edit" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Input
            </Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <Input
                placeholder="Placeholder text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input placeholder="Disabled input" disabled />
              <Input placeholder="Required input" required />
            </div>
          </Card>

          {/* Typography */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Type" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Typography
            </Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <Heading level={1} variant="display">Display Heading</Heading>
              <Heading level={2} variant="heading">Main Heading</Heading>
              <Heading level={3} variant="subheading">Subheading</Heading>
              <Text variant="large" weight="bold">Large Bold Text</Text>
              <Text variant="body">Body Text - Default</Text>
              <Text variant="caption" color="muted">Caption Text - Muted</Text>
            </div>
          </Card>

          {/* Icons */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Star" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Icons (Lucide React)
            </Heading>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
              <Icon name="Heart" size="small" />
              <Icon name="Star" size="medium" />
              <Icon name="User" size="large" />
              <Icon name="Settings" />
              <Icon name="Home" />
              <Icon name="Search" />
              <Icon name="Bell" />
              <Icon name="Mail" />
              <Icon name="Phone" />
              <Icon name="Calendar" />
              <Icon name="Clock" />
              <Icon name="MapPin" />
            </div>
          </Card>

          {/* Form Controls */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="CheckSquare" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Form Controls
            </Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <Checkbox label="Checkbox option" />
              <Radio label="Radio option" value="option1" />
              <Switch label="Switch option" />
              <Slider label="Slider" value={50} min={0} max={100} />
            </div>
          </Card>

          {/* Other Atoms */}
          <Card>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Grid" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Other Atoms
            </Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
              </div>
              <Progress value={75} max={100} />
              <Spinner size="medium" text="Loading..." />
              <Avatar src="https://via.placeholder.com/40" alt="User" size="medium" />
              <Divider />
            </div>
          </Card>
        </div>
      </details>

      <SectionDivider variant="text" text="Molecules" color="secondary" />

      {/* Molecules */}
      <details style={{
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--border-radius-lg)',
        backgroundColor: 'var(--color-background-secondary)'
      }}>
        <summary style={{
          cursor: 'pointer',
          fontWeight: 'var(--font-weight-semibold)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--color-background-primary)',
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--color-border-light)',
          fontSize: 'var(--font-size-lg)'
        }}>
          <Icon name="Layers" size="medium" style={{ marginRight: 'var(--spacing-sm)' }} />
          Molecules (12 componentes)
        </summary>

        <div style={{ padding: 'var(--spacing-xl)' }}>
          {/* Cards */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="CreditCard" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Cards
            </Heading>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
              <Card variant="default">
                <Heading level={4}>Default Card</Heading>
                <Text>This is a default card with some content.</Text>
              </Card>
              <Card variant="elevated">
                <Heading level={4}>Elevated Card</Heading>
                <Text>This is an elevated card with shadow.</Text>
              </Card>
              <Card variant="outlined">
                <Heading level={4}>Outlined Card</Heading>
                <Text>This is an outlined card with border.</Text>
              </Card>
            </div>
          </Card>

          {/* Alerts */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="AlertTriangle" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Alerts
            </Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <Alert variant="success" title="Success" message="Operation completed successfully!" />
              <Alert variant="warning" title="Warning" message="Please review your input." />
              <Alert variant="danger" title="Error" message="Something went wrong." />
              <Alert variant="info" title="Info" message="Here's some useful information." />
            </div>
          </Card>

          {/* Interactive Components */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Activity" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Interactive Components
            </Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <Rating value={rating} onChange={setRating} showValue />
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
                showFirstLast
                showPrevNext
              />
              <SearchBar
                value={searchValue}
                onChange={setSearchValue}
                placeholder="Search components..."
                showClearButton
                showSearchButton
              />
            </div>
          </Card>

          {/* Navigation Components */}
          <Card>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Navigation" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Navigation Components
            </Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <Breadcrumb items={[
                { id: '1', label: 'Home', href: '/' },
                { id: '2', label: 'Components', href: '/components' },
                { id: '3', label: 'Atoms', href: '/components/atoms' }
              ]} />
              <Accordion items={[
                { id: '1', title: 'What is Atomic Design?', content: 'Atomic Design is a methodology for creating design systems.' },
                { id: '2', title: 'How to use components?', content: 'Components can be imported and used in your React applications.' }
              ]} />
            </div>
          </Card>
        </div>
      </details>

      {/* Organisms */}
      <details style={{
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--border-radius-lg)',
        backgroundColor: 'var(--color-background-secondary)'
      }}>
        <summary style={{
          cursor: 'pointer',
          fontWeight: 'var(--font-weight-semibold)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--color-background-primary)',
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--color-border-light)',
          fontSize: 'var(--font-size-lg)'
        }}>
          <Icon name="Layout" size="medium" style={{ marginRight: 'var(--spacing-sm)' }} />
          Organisms (12 componentes)
        </summary>

        <div style={{ padding: 'var(--spacing-xl)' }}>
          {/* Navigation */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Navigation" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Navigation
            </Heading>
            <Navigation
              logoText="MiApp"
              items={navigationItems}
              ctaText="Contacto"
              ctaHref="/contacto"
              phone="+34 952 123 456"
              address="Calle Principal 123, Málaga"
            />
          </Card>

          {/* Hero */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Star" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Hero
            </Heading>
            <Hero
              title="Transforma tu Negocio"
              subtitle="Soluciones Digitales"
              description="Ayudamos a empresas a crecer y prosperar con tecnología de vanguardia y estrategias innovadoras."
              primaryButton={{
                text: 'Comenzar Ahora',
                href: '/contacto',
                variant: 'primary'
              }}
              secondaryButton={{
                text: 'Saber Más',
                href: '/sobre-nosotros',
                variant: 'secondary'
              }}
              variant="centered"
            />
          </Card>

          {/* Statistics */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="BarChart" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Statistics
            </Heading>
            <Statistics
              statistics={statistics}
              title="Nuestros Resultados"
              subtitle="Datos que respaldan nuestra experiencia"
              showIcons={true}
            />
          </Card>

          {/* Testimonials */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="MessageCircle" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Testimonials
            </Heading>
            <Testimonials
              testimonials={testimonials}
              title="Lo que dicen nuestros clientes"
              subtitle="Casos reales con resultados excepcionales"
              variant="grid"
              showRating={true}
            />
          </Card>

          {/* Pricing */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="CreditCard" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Pricing
            </Heading>
            <Pricing
              title="Planes de Precios"
              subtitle="Elige el plan que mejor se adapte a tus necesidades"
              plans={pricingPlans}
              onSelectPlan={(plan) => console.log('Plan seleccionado:', plan)}
            />
          </Card>

          {/* FAQ */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="HelpCircle" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              FAQ
            </Heading>
            <FAQ
              items={faqItems}
              title="Preguntas Frecuentes"
              subtitle="Encuentra respuestas a las preguntas más comunes"
            />
          </Card>

          {/* Newsletter */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Mail" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Newsletter
            </Heading>
            <Newsletter
              title="Mantente Informado"
              subtitle="Newsletter"
              description="Suscríbete a nuestro newsletter para recibir las últimas noticias y ofertas."
              placeholder="Tu email"
              buttonText="Suscribirse"
              onSubmit={(email) => console.log('Newsletter subscription:', email)}
              variant="centered"
              showBenefits={true}
              benefits={[
                'Noticias exclusivas',
                'Ofertas especiales',
                'Consejos de expertos',
                'Acceso anticipado a eventos'
              ]}
            />
          </Card>

          {/* Contact Form */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="MessageSquare" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Contact Form
            </Heading>
            <ContactForm
              title="Contacta con Nosotros"
              subtitle="Estamos aquí para ayudarte"
              onSubmit={(data) => console.log('Form submitted:', data)}
              services={[
                { label: 'Desarrollo Web', value: 'desarrollo-web' },
                { label: 'Marketing Digital', value: 'marketing-digital' },
                { label: 'Consultoría', value: 'consultoria' },
                { label: 'Diseño UX/UI', value: 'diseno-ux-ui' }
              ]}
            />
          </Card>

          {/* Sidebar */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Menu" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Sidebar
            </Heading>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <Sidebar
                title="Navegación"
                items={sidebarItems}
              />
              <div style={{ flex: 1, padding: 'var(--spacing-md)' }}>
                <Text>Contenido principal de la página</Text>
              </div>
            </div>
          </Card>

          {/* Dashboard */}
          <Card>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Layout" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Dashboard
            </Heading>
            <Dashboard
              title="Panel de Control"
              subtitle="Resumen de tu cuenta"
              widgets={[]}
              sidebarItems={sidebarItems}
            />
          </Card>
        </div>
      </details>

      {/* Templates */}
      <details style={{
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--border-radius-lg)',
        backgroundColor: 'var(--color-background-secondary)'
      }}>
        <summary style={{
          cursor: 'pointer',
          fontWeight: 'var(--font-weight-semibold)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--color-background-primary)',
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--color-border-light)',
          fontSize: 'var(--font-size-lg)'
        }}>
          <Icon name="FileText" size="medium" style={{ marginRight: 'var(--spacing-sm)' }} />
          Templates (10 componentes)
        </summary>

        <div style={{ padding: 'var(--spacing-xl)' }}>
          {/* Landing Template */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Home" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Landing Template
            </Heading>
            <Landing
              showHero={true}
              showFeatures={true}
              showTestimonials={false}
              showNewsletter={false}
              showFooter={false}
              heroTitle="Página de Aterrizaje"
              heroSubtitle="Template Completo"
              heroDescription="Este es un ejemplo del template Landing con todos sus componentes integrados."
              heroCtaText="Ver Demo"
              heroCtaHref="/demo"
            />
          </Card>

          {/* Authentication Template */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Lock" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Authentication Template
            </Heading>
            <Authentication
              title="Iniciar Sesión"
              subtitle="Accede a tu cuenta"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Contraseña" type="password" />
                <Button variant="primary" isFullWidth>Iniciar Sesión</Button>
              </div>
            </Authentication>
          </Card>

          {/* Error Template */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="AlertTriangle" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Error Template
            </Heading>
            <ErrorTemplate
              errorCode="404"
              title="Página No Encontrada"
              description="La página que buscas no existe o ha sido movida."
              showHomeButton={true}
              showContactButton={true}
              homeButtonText="Ir al Inicio"
              homeButtonHref="/"
              contactButtonText="Contactar Soporte"
              contactButtonHref="/contacto"
            />
          </Card>

          {/* Dashboard Template */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Layout" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Dashboard Template
            </Heading>
            <DashboardTemplate
              showSidebar={true}
              showHeader={true}
              sidebarItems={sidebarItems}
              headerTitle="Panel de Control"
              headerSubtitle="Resumen de tu cuenta"
            >
              <div style={{ padding: 'var(--spacing-md)' }}>
                <Heading level={2}>Dashboard Content</Heading>
                <Text>Contenido del dashboard con widgets y métricas...</Text>
              </div>
            </DashboardTemplate>
          </Card>

          {/* Blog Template */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="FileText" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Blog Template
            </Heading>
            <Blog
              showSidebar={true}
              showHeader={true}
              showFooter={false}
              headerTitle="Blog"
              headerSubtitle="Artículos y noticias"
            >
              <div style={{ padding: 'var(--spacing-md)' }}>
                <Heading level={2}>Últimos Artículos</Heading>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                  <Card>
                    <Heading level={3}>Introducción a Atomic Design</Heading>
                    <Text>Aprende los fundamentos de esta metodología de diseño...</Text>
                    <Button variant="primary" size="small">Leer más</Button>
                  </Card>
                  <Card>
                    <Heading level={3}>Mejores Prácticas en React</Heading>
                    <Text>Descubre las mejores prácticas para desarrollar con React...</Text>
                    <Button variant="primary" size="small">Leer más</Button>
                  </Card>
                </div>
              </div>
            </Blog>
          </Card>

          {/* Documentation Template */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Book" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Documentation Template
            </Heading>
            <Documentation
              showSidebar={true}
              showHeader={true}
              showFooter={false}
              headerTitle="Documentación"
              headerSubtitle="Guías y referencias"
              sidebarContent={
                <div style={{ padding: 'var(--spacing-sm)' }}>
                  <Text variant="small" weight="bold">Índice</Text>
                  <div style={{ marginTop: 'var(--spacing-sm)' }}>
                    <Text variant="small">• Introducción</Text>
                    <Text variant="small">• Instalación</Text>
                    <Text variant="small">• Componentes</Text>
                    <Text variant="small">• API Reference</Text>
                  </div>
                </div>
              }
            >
              <div style={{ padding: 'var(--spacing-md)' }}>
                <Heading level={2}>Introducción</Heading>
                <Text>Bienvenido a la documentación de nuestro design system...</Text>
              </div>
            </Documentation>
          </Card>

          {/* Maintenance Template */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Wrench" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Maintenance Template
            </Heading>
            <Maintenance
              title="Mantenimiento Programado"
              message="Estamos realizando mejoras en nuestro sistema. Volveremos pronto."
              estimatedTime="2 horas"
              contactEmail="soporte@miapp.com"
              showLogo={true}
              logoUrl="https://via.placeholder.com/100"
            />
          </Card>

          {/* Profile Template */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="User" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Profile Template
            </Heading>
            <Profile
              showSidebar={true}
              showHeader={true}
              showFooter={false}
              headerTitle="Mi Perfil"
              headerSubtitle="Gestiona tu información personal"
              sidebarContent={
                <div style={{ padding: 'var(--spacing-sm)' }}>
                  <Text variant="small" weight="bold">Configuración</Text>
                  <div style={{ marginTop: 'var(--spacing-sm)' }}>
                    <Text variant="small">• Información Personal</Text>
                    <Text variant="small">• Seguridad</Text>
                    <Text variant="small">• Preferencias</Text>
                  </div>
                </div>
              }
            >
              <div style={{ padding: 'var(--spacing-md)' }}>
                <Heading level={2}>Información Personal</Heading>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                  <Input placeholder="Nombre" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Teléfono" />
                  <Button variant="primary">Guardar Cambios</Button>
                </div>
              </div>
            </Profile>
          </Card>

          {/* Settings Template */}
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Settings" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Settings Template
            </Heading>
            <Settings
              showSidebar={true}
              showHeader={true}
              showFooter={false}
              headerTitle="Configuración"
              headerSubtitle="Personaliza tu experiencia"
              sidebarContent={
                <div style={{ padding: 'var(--spacing-sm)' }}>
                  <Text variant="small" weight="bold">Opciones</Text>
                  <div style={{ marginTop: 'var(--spacing-sm)' }}>
                    <Text variant="small">• General</Text>
                    <Text variant="small">• Notificaciones</Text>
                    <Text variant="small">• Privacidad</Text>
                  </div>
                </div>
              }
            >
              <div style={{ padding: 'var(--spacing-md)' }}>
                <Heading level={2}>Configuración General</Heading>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                    <Switch label="Notificaciones por email" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                    <Switch label="Modo oscuro" />
                  </div>
                  <Button variant="primary">Guardar Configuración</Button>
                </div>
              </div>
            </Settings>
          </Card>

          {/* Admin Template */}
          <Card>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Shield" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Admin Template
            </Heading>
            <Admin
              showSidebar={true}
              showHeader={true}
              showFooter={false}
              headerTitle="Panel de Administración"
              headerSubtitle="Gestiona tu plataforma"
              sidebarContent={
                <div style={{ padding: 'var(--spacing-sm)' }}>
                  <Text variant="small" weight="bold">Administración</Text>
                  <div style={{ marginTop: 'var(--spacing-sm)' }}>
                    <Text variant="small">• Usuarios</Text>
                    <Text variant="small">• Contenido</Text>
                    <Text variant="small">• Analytics</Text>
                  </div>
                </div>
              }
            >
              <div style={{ padding: 'var(--spacing-md)' }}>
                <Heading level={2}>Gestión de Usuarios</Heading>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                  <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                    <Input placeholder="Buscar usuarios..." />
                    <Button variant="primary">Buscar</Button>
                  </div>
                  <Card>
                    <Text>Lista de usuarios...</Text>
                  </Card>
                </div>
              </div>
            </Admin>
          </Card>
        </div>
      </details>

      {/* Hooks y Utils */}
      <details style={{
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--border-radius-lg)',
        backgroundColor: 'var(--color-background-secondary)'
      }}>
        <summary style={{
          cursor: 'pointer',
          fontWeight: 'var(--font-weight-semibold)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--color-background-primary)',
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--color-border-light)',
          fontSize: 'var(--font-size-lg)'
        }}>
          <Icon name="Code" size="medium" style={{ marginRight: 'var(--spacing-sm)' }} />
          Hooks & Utils (6 utilidades)
        </summary>

        <div style={{ padding: 'var(--spacing-xl)' }}>
          <Card style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Hook" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Custom Hooks
            </Heading>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
              <Card>
                <Heading level={4}>useLocalStorage</Heading>
                <Text>Hook para sincronizar estado con localStorage</Text>
                <Badge variant="success" style={{ marginTop: 'var(--spacing-sm)' }}>Type-safe</Badge>
              </Card>
              <Card>
                <Heading level={4}>useMediaQuery</Heading>
                <Text>Hook para detectar media queries reactivamente</Text>
                <Badge variant="info" style={{ marginTop: 'var(--spacing-sm)' }}>Responsive</Badge>
              </Card>
              <Card>
                <Heading level={4}>useDebounce</Heading>
                <Text>Hook para debounce de valores</Text>
                <Badge variant="warning" style={{ marginTop: 'var(--spacing-sm)' }}>Performance</Badge>
              </Card>
            </div>
          </Card>

          <Card>
            <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
              <Icon name="Wrench" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
              Utilities
            </Heading>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
              <Card>
                <Heading level={4}>cn</Heading>
                <Text>Utilidad para combinar clases CSS</Text>
                <Badge variant="primary" style={{ marginTop: 'var(--spacing-sm)' }}>Essential</Badge>
              </Card>
              <Card>
                <Heading level={4}>createCSSVariable</Heading>
                <Text>Crear variables CSS dinámicamente</Text>
              </Card>
              <Card>
                <Heading level={4}>getCSSVariable</Heading>
                <Text>Obtener valores de variables CSS</Text>
              </Card>
            </div>
          </Card>
        </div>
      </details>

      <SectionDivider variant="text" text="Multimedia" color="info" />

      {/* Multimedia */}
      <details style={{
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--border-radius-lg)',
        backgroundColor: 'var(--color-background-secondary)'
      }}>
        <summary style={{
          cursor: 'pointer',
          fontWeight: 'var(--font-weight-semibold)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--color-background-primary)',
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--color-border-light)',
          fontSize: 'var(--font-size-lg)'
        }}>
          <Icon name="Image" size="medium" style={{ marginRight: 'var(--spacing-sm)' }} />
          Multimedia (Galería de medios)
        </summary>

        <div style={{ padding: 'var(--spacing-xl)' }}>
          <Text style={{ marginBottom: 'var(--spacing-lg)' }}>
            Galería multimedia para mostrar imágenes, videos y documentos con funcionalidad completa.
          </Text>

          <MediaGallery
            items={mediaItems}
            columns={3}
            showInfo={true}
            showActions={true}
          />
        </div>
      </details>

      {/* Responsive Demo */}
      <Card style={{
        border: '2px solid var(--color-primary-500)',
        backgroundColor: 'var(--color-primary-50)'
      }}>
        <Heading level={3} style={{ marginBottom: 'var(--spacing-md)' }}>
          <Icon name="Smartphone" size="small" style={{ marginRight: 'var(--spacing-sm)' }} />
          Responsive Design
        </Heading>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
          <Badge variant={isMobile ? 'success' : 'info'}>
            {isMobile ? 'Mobile View' : 'Desktop View'}
          </Badge>
          <Text color="muted">
            Current breakpoint: {isMobile ? '< 768px' : '≥ 768px'}
          </Text>
        </div>
        <Text style={{ marginTop: 'var(--spacing-sm)' }}>
          Todos los componentes son completamente responsive y se adaptan automáticamente
          a diferentes tamaños de pantalla usando CSS Grid, Flexbox y media queries.
        </Text>
      </Card>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: 'var(--spacing-xl) 0',
        borderTop: '1px solid var(--color-border-primary)',
        marginTop: 'var(--spacing-xl)'
      }}>
        <Text color="muted">
          Atomic Design System - Creado con ❤️ usando React, TypeScript y CSS Modules
        </Text>
        <div style={{ marginTop: 'var(--spacing-sm)' }}>
          <Badge variant="success">✅ Build: OK</Badge>
          <Badge variant="info">🧪 Tests: OK</Badge>
          <Badge variant="warning">📱 Responsive: OK</Badge>
          <Badge variant="primary">⚡ Performance: OK</Badge>
        </div>
      </footer>
    </div>
  );
};