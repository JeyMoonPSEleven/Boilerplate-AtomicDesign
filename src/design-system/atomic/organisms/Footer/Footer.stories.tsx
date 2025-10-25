import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
    title: '3-Organisms/Footer',
    component: Footer,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Componente Footer completo con información de la empresa, enlaces organizados, contacto y redes sociales.',
            },
        },
    },
    argTypes: {
        logoText: {
            control: 'text',
            description: 'Texto del logo',
        },
        description: {
            control: 'text',
            description: 'Descripción de la empresa',
        },
        links: {
            control: 'object',
            description: 'Array de secciones de enlaces',
        },
        contact: {
            control: 'object',
            description: 'Información de contacto',
        },
        social: {
            control: 'object',
            description: 'Enlaces de redes sociales',
        },
        legal: {
            control: 'object',
            description: 'Enlaces legales',
        },
        copyright: {
            control: 'text',
            description: 'Texto de copyright',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultLinks = [
    {
        title: 'Productos',
        links: [
            { label: 'Características', href: '/features' },
            { label: 'Precios', href: '/pricing' },
            { label: 'Integraciones', href: '/integrations' },
            { label: 'API', href: '/api' },
        ],
    },
    {
        title: 'Recursos',
        links: [
            { label: 'Documentación', href: '/docs' },
            { label: 'Guías', href: '/guides' },
            { label: 'Blog', href: '/blog' },
            { label: 'Soporte', href: '/support' },
        ],
    },
    {
        title: 'Compañía',
        links: [
            { label: 'Nosotros', href: '/about' },
            { label: 'Carreras', href: '/careers' },
            { label: 'Prensa', href: '/press' },
            { label: 'Contacto', href: '/contact' },
        ],
    },
];

const defaultContact = {
    phone: '+1 (555) 123-4567',
    email: 'hello@miapp.com',
    address: '123 Main St, Ciudad, País 12345',
};

const defaultSocial = {
    facebook: 'https://facebook.com/miapp',
    twitter: 'https://twitter.com/miapp',
    instagram: 'https://instagram.com/miapp',
    linkedin: 'https://linkedin.com/company/miapp',
    github: 'https://github.com/miapp',
};

const defaultLegal = [
    { label: 'Política de Privacidad', href: '/privacy' },
    { label: 'Términos de Servicio', href: '/terms' },
    { label: 'Cookies', href: '/cookies' },
];

export const Default: Story = {
    args: {
        logoText: 'MiApp',
        description: 'Especialistas en soluciones digitales con más de 10 años de experiencia ayudando a empresas a crecer y prosperar.',
        links: defaultLinks,
        contact: defaultContact,
        social: defaultSocial,
        legal: defaultLegal,
    },
};

export const Minimal: Story = {
    args: {
        logoText: 'MiApp',
        description: 'Soluciones digitales simples y efectivas.',
        links: [
            {
                title: 'Enlaces',
                links: [
                    { label: 'Inicio', href: '/' },
                    { label: 'Sobre Nosotros', href: '/about' },
                    { label: 'Contacto', href: '/contact' },
                ],
            },
        ],
        contact: {
            email: 'hello@miapp.com',
        },
        social: {
            twitter: 'https://twitter.com/miapp',
            linkedin: 'https://linkedin.com/company/miapp',
        },
    },
};

export const Ecommerce: Story = {
    args: {
        logoText: 'TiendaOnline',
        description: 'Tu tienda online de confianza con los mejores productos y precios del mercado.',
        links: [
            {
                title: 'Categorías',
                links: [
                    { label: 'Electrónicos', href: '/electronics' },
                    { label: 'Ropa', href: '/clothing' },
                    { label: 'Hogar', href: '/home' },
                    { label: 'Deportes', href: '/sports' },
                ],
            },
            {
                title: 'Servicio al Cliente',
                links: [
                    { label: 'Centro de Ayuda', href: '/help' },
                    { label: 'Envíos', href: '/shipping' },
                    { label: 'Devoluciones', href: '/returns' },
                    { label: 'Garantía', href: '/warranty' },
                ],
            },
            {
                title: 'Mi Cuenta',
                links: [
                    { label: 'Mi Perfil', href: '/profile' },
                    { label: 'Mis Pedidos', href: '/orders' },
                    { label: 'Lista de Deseos', href: '/wishlist' },
                    { label: 'Configuración', href: '/settings' },
                ],
            },
        ],
        contact: {
            phone: 'Línea Gratuita: 1-800-TIENDA',
            email: 'soporte@tiendaonline.com',
            address: 'Centro de Distribución Principal, Ciudad, País',
        },
        social: {
            facebook: 'https://facebook.com/tiendaonline',
            instagram: 'https://instagram.com/tiendaonline',
            twitter: 'https://twitter.com/tiendaonline',
        },
        legal: [
            { label: 'Política de Privacidad', href: '/privacy' },
            { label: 'Términos y Condiciones', href: '/terms' },
            { label: 'Política de Cookies', href: '/cookies' },
            { label: 'Política de Devoluciones', href: '/returns-policy' },
        ],
    },
};

export const SaaS: Story = {
    args: {
        logoText: 'SaaSApp',
        description: 'La plataforma líder en gestión empresarial que ayuda a más de 10,000 empresas a optimizar sus procesos.',
        links: [
            {
                title: 'Producto',
                links: [
                    { label: 'Características', href: '/features' },
                    { label: 'Integraciones', href: '/integrations' },
                    { label: 'API', href: '/api' },
                    { label: 'Seguridad', href: '/security' },
                ],
            },
            {
                title: 'Recursos',
                links: [
                    { label: 'Documentación', href: '/docs' },
                    { label: 'Tutoriales', href: '/tutorials' },
                    { label: 'Webinars', href: '/webinars' },
                    { label: 'Casos de Uso', href: '/case-studies' },
                ],
            },
            {
                title: 'Soporte',
                links: [
                    { label: 'Centro de Ayuda', href: '/help' },
                    { label: 'Comunidad', href: '/community' },
                    { label: 'Estado del Sistema', href: '/status' },
                    { label: 'Contactar Soporte', href: '/support' },
                ],
            },
        ],
        contact: {
            phone: 'Soporte: +1 (555) 123-4567',
            email: 'support@saasapp.com',
            address: 'Oficina Principal, Silicon Valley, CA',
        },
        social: {
            twitter: 'https://twitter.com/saasapp',
            linkedin: 'https://linkedin.com/company/saasapp',
            github: 'https://github.com/saasapp',
            youtube: 'https://youtube.com/saasapp',
        },
        legal: [
            { label: 'Política de Privacidad', href: '/privacy' },
            { label: 'Términos de Servicio', href: '/terms' },
            { label: 'Acuerdo de Nivel de Servicio', href: '/sla' },
            { label: 'Cumplimiento', href: '/compliance' },
        ],
    },
};

export const Portfolio: Story = {
    args: {
        logoText: 'Juan Pérez',
        description: 'Desarrollador Full Stack especializado en React, Node.js y diseño de interfaces modernas.',
        links: [
            {
                title: 'Portfolio',
                links: [
                    { label: 'Proyectos Web', href: '/web-projects' },
                    { label: 'Aplicaciones Móviles', href: '/mobile-apps' },
                    { label: 'Diseño UI/UX', href: '/ui-design' },
                    { label: 'Casos de Estudio', href: '/case-studies' },
                ],
            },
            {
                title: 'Servicios',
                links: [
                    { label: 'Desarrollo Web', href: '/web-development' },
                    { label: 'Consultoría', href: '/consulting' },
                    { label: 'Mentoría', href: '/mentoring' },
                    { label: 'Auditorías', href: '/audits' },
                ],
            },
            {
                title: 'Recursos',
                links: [
                    { label: 'Blog', href: '/blog' },
                    { label: 'Tutoriales', href: '/tutorials' },
                    { label: 'Recursos Gratuitos', href: '/free-resources' },
                    { label: 'Newsletter', href: '/newsletter' },
                ],
            },
        ],
        contact: {
            email: 'hola@juanperez.com',
            phone: '+1 (555) 123-4567',
        },
        social: {
            github: 'https://github.com/juanperez',
            linkedin: 'https://linkedin.com/in/juanperez',
            twitter: 'https://twitter.com/juanperez',
            instagram: 'https://instagram.com/juanperez',
        },
        legal: [
            { label: 'Política de Privacidad', href: '/privacy' },
            { label: 'Términos de Servicio', href: '/terms' },
        ],
    },
};

export const WithNewsletter: Story = {
    args: {
        logoText: 'MiApp',
        description: 'Mantente actualizado con las últimas noticias y actualizaciones de nuestro producto.',
        links: defaultLinks,
        contact: defaultContact,
        social: defaultSocial,
        legal: defaultLegal,
    },
    render: (args) => (
        <div>
            <Footer {...args} />
            <div style={{
                background: 'var(--color-primary-500)',
                color: 'white',
                padding: '2rem',
                textAlign: 'center'
            }}>
                <h3 style={{ margin: '0 0 1rem 0' }}>Suscríbete a nuestro Newsletter</h3>
                <p style={{ margin: '0 0 1rem 0' }}>Recibe las últimas actualizaciones directamente en tu correo.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '400px', margin: '0 auto' }}>
                    <input
                        type="email"
                        placeholder="Tu email"
                        style={{
                            flex: 1,
                            padding: '0.75rem',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '1rem'
                        }}
                    />
                    <button style={{
                        background: 'white',
                        color: 'var(--color-primary-500)',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: '600'
                    }}>
                        Suscribirse
                    </button>
                </div>
            </div>
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            <div>
                <h3 style={{ margin: '0 0 1rem 0', textAlign: 'center' }}>Footer Completo</h3>
                <Footer
                    logoText="MiApp"
                    description="Especialistas en soluciones digitales con más de 10 años de experiencia."
                    links={defaultLinks}
                    contact={defaultContact}
                    social={defaultSocial}
                    legal={defaultLegal}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 1rem 0', textAlign: 'center' }}>Footer Mínimo</h3>
                <Footer
                    logoText="MiApp"
                    description="Soluciones digitales simples y efectivas."
                    links={[
                        {
                            title: 'Enlaces',
                            links: [
                                { label: 'Inicio', href: '/' },
                                { label: 'Contacto', href: '/contact' },
                            ],
                        },
                    ]}
                    contact={{ email: 'hello@miapp.com' }}
                    social={{ twitter: 'https://twitter.com/miapp' }}
                />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Comparación entre footer completo y footer mínimo.',
            },
        },
    },
};
