import React from 'react';
import { Logo, Text, Heading } from '../../atoms';
import { AuthenticationTemplateProps } from './Authentication.types';
import { cn } from '../../../utils/cn';

const AuthenticationTemplate: React.FC<AuthenticationTemplateProps> = ({
    children,
    variant = 'login',
    title,
    subtitle,
    showLogo = true,
    logoText = 'MiApp',
    backgroundImage,
    className = '',
    ...props
}) => {
    const getDefaultTitle = () => {
        switch (variant) {
            case 'login':
                return 'Iniciar Sesión';
            case 'register':
                return 'Crear Cuenta';
            case 'forgot-password':
                return 'Recuperar Contraseña';
            case 'reset-password':
                return 'Restablecer Contraseña';
            default:
                return 'Autenticación';
        }
    };

    const getDefaultSubtitle = () => {
        switch (variant) {
            case 'login':
                return 'Accede a tu cuenta para continuar';
            case 'register':
                return 'Crea una nueva cuenta para comenzar';
            case 'forgot-password':
                return 'Ingresa tu email para recuperar tu contraseña';
            case 'reset-password':
                return 'Ingresa tu nueva contraseña';
            default:
                return 'Completa el proceso de autenticación';
        }
    };

    const getRightPanelContent = () => {
        switch (variant) {
            case 'login':
                return {
                    title: '¡Bienvenido de vuelta!',
                    subtitle: 'Accede a tu cuenta',
                    description: 'Gestiona tus proyectos, colabora con tu equipo y mantén el control total de tu trabajo desde un solo lugar.'
                };
            case 'register':
                return {
                    title: 'Únete a nosotros',
                    subtitle: 'Crea tu cuenta',
                    description: 'Forma parte de nuestra comunidad y descubre todas las herramientas que tenemos para ofrecerte.'
                };
            case 'forgot-password':
                return {
                    title: 'No te preocupes',
                    subtitle: 'Recupera tu acceso',
                    description: 'Te ayudaremos a recuperar el acceso a tu cuenta de forma rápida y segura.'
                };
            case 'reset-password':
                return {
                    title: 'Casi listo',
                    subtitle: 'Nueva contraseña',
                    description: 'Establece una nueva contraseña segura para proteger tu cuenta.'
                };
            default:
                return {
                    title: 'MiApp',
                    subtitle: 'Plataforma Digital',
                    description: 'La mejor plataforma para gestionar tu negocio y hacer crecer tu empresa.'
                };
        }
    };

    const rightPanelContent = getRightPanelContent();

    return (
        <div className={`${styles.authenticationTemplate} ${className}`} {...props}>
            {/* Left Panel - Authentication Form */}
            <div className={styles.leftPanel}>
                <div className={styles.authContainer}>
                    <div className={styles.authHeader}>
                        {showLogo && (
                            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <Logo text={logoText} size="large" />
                            </div>
                        )}
                        <Heading level={1} variant="heading" className={styles.authTitle}>
                            {title || getDefaultTitle()}
                        </Heading>
                        <Text variant="body" color="secondary" className={styles.authSubtitle}>
                            {subtitle || getDefaultSubtitle()}
                        </Text>
                    </div>

                    <div className={styles.authContent}>
                        {children || (
                            <div style={{ textAlign: 'center', padding: 'var(--spacing-xl)' }}>
                                <Text variant="body" color="secondary">
                                    Contenido de autenticación personalizado
                                </Text>
                            </div>
                        )}
                    </div>

                    <div className={styles.authFooter}>
                        {variant === 'login' && (
                            <Text variant="small" color="secondary">
                                ¿No tienes cuenta?{' '}
                                <a href="/register" className={styles.authFooterLink}>
                                    Regístrate aquí
                                </a>
                            </Text>
                        )}
                        {variant === 'register' && (
                            <Text variant="small" color="secondary">
                                ¿Ya tienes cuenta?{' '}
                                <a href="/login" className={styles.authFooterLink}>
                                    Inicia sesión aquí
                                </a>
                            </Text>
                        )}
                        {variant === 'forgot-password' && (
                            <Text variant="small" color="secondary">
                                ¿Recordaste tu contraseña?{' '}
                                <a href="/login" className={styles.authFooterLink}>
                                    Inicia sesión aquí
                                </a>
                            </Text>
                        )}
                        {variant === 'reset-password' && (
                            <Text variant="small" color="secondary">
                                ¿Tienes problemas?{' '}
                                <a href="/contact" className={styles.authFooterLink}>
                                    Contacta soporte
                                </a>
                            </Text>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Panel - Branding/Info */}
            <div className={`${styles.rightPanel} ${backgroundImage ? styles.rightPanelWithImage : ''}`}>
                <div className={styles.rightPanelContent}>
                    <Heading level={2} variant="heading" className={styles.rightPanelTitle}>
                        {rightPanelContent.title}
                    </Heading>
                    <Text variant="large" className={styles.rightPanelSubtitle}>
                        {rightPanelContent.subtitle}
                    </Text>
                    <Text variant="body" className={styles.rightPanelDescription}>
                        {rightPanelContent.description}
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default AuthenticationTemplate;
