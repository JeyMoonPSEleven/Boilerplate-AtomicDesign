import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
    title: '3-Organisms/Header',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Componente Header que combina Logo, Navigation y Actions. Incluye menú móvil responsivo y múltiples variantes.',
            },
        },
    },
    argTypes: {
        logoText: {
            control: 'text',
            description: 'Texto del logo',
        },
        navigation: {
            control: 'object',
            description: 'Array de elementos de navegación',
        },
        ctaText: {
            control: 'text',
            description: 'Texto del botón CTA',
        },
        ctaHref: {
            control: 'text',
            description: 'URL del botón CTA',
        },
        phone: {
            control: 'text',
            description: 'Número de teléfono',
        },
        address: {
            control: 'text',
            description: 'Dirección',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'centered', 'minimal'],
            description: 'Variante del header',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultNavigation = [
    { label: 'Inicio', href: '/' },
    { label: 'Productos', href: '/products' },
    { label: 'Servicios', href: '/services' },
    { label: 'Nosotros', href: '/about' },
    { label: 'Contacto', href: '/contact' },
];

export const Default: Story = {
    args: {
        logoText: 'MiApp',
        navigation: defaultNavigation,
        ctaText: 'Comenzar',
        ctaHref: '/get-started',
        phone: '+1 (555) 123-4567',
    },
};

export const Centered: Story = {
    args: {
        logoText: 'MiApp',
        navigation: defaultNavigation,
        ctaText: 'Comenzar',
        ctaHref: '/get-started',
        variant: 'centered',
    },
};

export const Minimal: Story = {
    args: {
        logoText: 'MiApp',
        navigation: [
            { label: 'Inicio', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contacto', href: '/contact' },
        ],
        variant: 'minimal',
    },
};

export const WithPhone: Story = {
    args: {
        logoText: 'MiApp',
        navigation: defaultNavigation,
        phone: '+1 (555) 123-4567',
        ctaText: 'Llamar',
        ctaHref: 'tel:+15551234567',
    },
};

export const WithAddress: Story = {
    args: {
        logoText: 'MiApp',
        navigation: defaultNavigation,
        address: '123 Main St, Ciudad, País',
        ctaText: 'Visitar',
        ctaHref: '/location',
    },
};

export const Ecommerce: Story = {
    args: {
        logoText: 'TiendaOnline',
        navigation: [
            { label: 'Inicio', href: '/' },
            { label: 'Productos', href: '/products' },
            { label: 'Categorías', href: '/categories' },
            { label: 'Ofertas', href: '/offers' },
            { label: 'Mi Cuenta', href: '/account' },
        ],
        ctaText: 'Carrito (0)',
        ctaHref: '/cart',
        phone: 'Soporte: +1 (555) 123-4567',
    },
};

export const SaaS: Story = {
    args: {
        logoText: 'SaaSApp',
        navigation: [
            { label: 'Producto', href: '/product' },
            { label: 'Precios', href: '/pricing' },
            { label: 'Recursos', href: '/resources' },
            { label: 'Compañía', href: '/company' },
        ],
        ctaText: 'Iniciar Sesión',
        ctaHref: '/login',
    },
};

export const Portfolio: Story = {
    args: {
        logoText: 'Juan Pérez',
        navigation: [
            { label: 'Inicio', href: '/' },
            { label: 'Sobre Mí', href: '/about' },
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contacto', href: '/contact' },
        ],
        ctaText: 'Contratar',
        ctaHref: '/hire',
    },
};

export const WithDropdown: Story = {
    args: {
        logoText: 'MiApp',
        navigation: [
            { label: 'Inicio', href: '/' },
            {
                label: 'Productos',
                href: '/products',
                children: [
                    { label: 'Producto A', href: '/product-a' },
                    { label: 'Producto B', href: '/product-b' },
                    { label: 'Producto C', href: '/product-c' },
                ]
            },
            {
                label: 'Servicios',
                href: '/services',
                children: [
                    { label: 'Servicio 1', href: '/service-1' },
                    { label: 'Servicio 2', href: '/service-2' },
                ]
            },
            { label: 'Contacto', href: '/contact' },
        ],
        ctaText: 'Comenzar',
        ctaHref: '/get-started',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h3 style={{ margin: '0 0 1rem 0' }}>Default</h3>
                <Header
                    logoText="MiApp"
                    navigation={defaultNavigation}
                    ctaText="Comenzar"
                    ctaHref="/get-started"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 1rem 0' }}>Centered</h3>
                <Header
                    logoText="MiApp"
                    navigation={defaultNavigation}
                    ctaText="Comenzar"
                    ctaHref="/get-started"
                    variant="centered"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 1rem 0' }}>Minimal</h3>
                <Header
                    logoText="MiApp"
                    navigation={[
                        { label: 'Inicio', href: '/' },
                        { label: 'Blog', href: '/blog' },
                        { label: 'Contacto', href: '/contact' },
                    ]}
                    variant="minimal"
                />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Todas las variantes de header disponibles.',
            },
        },
    },
};

export const ResponsiveDemo: Story = {
    args: {
        logoText: 'MiApp',
        navigation: [
            { label: 'Inicio', href: '/' },
            { label: 'Productos', href: '/products' },
            { label: 'Servicios', href: '/services' },
            { label: 'Nosotros', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contacto', href: '/contact' },
        ],
        ctaText: 'Comenzar',
        ctaHref: '/get-started',
        phone: '+1 (555) 123-4567',
        address: '123 Main St, Ciudad, País',
    },
    parameters: {
        docs: {
            description: {
                story: 'Header responsivo que se adapta a diferentes tamaños de pantalla. Prueba cambiar el tamaño del viewport.',
            },
        },
    },
};
