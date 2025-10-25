import React, { useState } from 'react';
import { Button, Input, Text, Heading } from '../../atoms';
import { Alert } from '../../molecules';
import { NewsletterProps } from './Newsletter.types';
import styles from './Newsletter.module.css';

const Newsletter: React.FC<NewsletterProps> = ({
    title = 'Mantente Informado',
    subtitle = 'Newsletter',
    description = 'Recibe las últimas noticias sobre accidentes de tráfico, cambios legales y consejos de nuestros expertos.',
    placeholder = 'tu@email.com',
    buttonText = 'Suscribirse',
    onSubmit,
    variant = 'default',
    showBenefits = true,
    benefits = [
        'Consejos legales exclusivos',
        'Actualizaciones sobre cambios en la ley',
        'Casos de éxito recientes',
        'Seminarios y eventos gratuitos'
    ],
    className = '',
    ...props
}) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            setMessage('Por favor, introduce un email válido');
            return;
        }

        setStatus('loading');

        try {
            // Simular envío
            await new Promise(resolve => setTimeout(resolve, 2000));

            if (onSubmit) {
                onSubmit(email);
            }

            setStatus('success');
            setMessage('¡Te has suscrito correctamente!');
            setEmail('');
        } catch (error) {
            setStatus('error');
            setMessage('Error al suscribirse. Inténtalo de nuevo.');
        }
    };

    const getVariantClasses = () => {
        switch (variant) {
            case 'centered':
                return styles.centered;
            case 'minimal':
                return styles.minimal;
            case 'inline':
                return styles.inline;
            default:
                return styles.grid;
        }
    };

    const getContentClasses = () => {
        if (variant === 'inline') {
            return `${styles.content} ${styles.inlineContent}`;
        }
        return styles.content;
    };

    const getFormClasses = () => {
        if (variant === 'inline') {
            return `${styles.formCard} ${styles.inlineForm}`;
        }
        return styles.formCard;
    };

    return (
        <section className={`${variant === 'minimal' ? styles.newsletterMinimal : styles.newsletter} ${className}`} {...props}>
            <div className={styles.container}>
                <div className={getVariantClasses()}>
                    {/* Content */}
                    <div className={getContentClasses()}>
                        <Text variant="small" color="accent" className={styles.subtitle}>
                            {subtitle}
                        </Text>
                        <Heading level={2} variant="heading" className={styles.title}>
                            {title}
                        </Heading>
                        <Text variant="body" color="secondary" className={styles.description}>
                            {description}
                        </Text>

                        {/* Benefits */}
                        {showBenefits && benefits.length > 0 && variant !== 'minimal' && (
                            <div className={styles.benefits}>
                                {benefits.map((benefit, index) => (
                                    <div key={index} className={styles.benefit}>
                                        <svg className={styles.benefitIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22,4 12,14.01 9,11.01" />
                                        </svg>
                                        <Text variant="small" className={styles.benefitText}>
                                            {benefit}
                                        </Text>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Form */}
                    <div className={getFormClasses()}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            {/* Status Messages */}
                            {status === 'success' && (
                                <Alert
                                    variant="success"
                                    title="¡Suscrito!"
                                    message={message}
                                    dismissible
                                    onDismiss={() => setStatus('idle')}
                                />
                            )}

                            {status === 'error' && (
                                <Alert
                                    variant="danger"
                                    title="Error"
                                    message={message}
                                    dismissible
                                    onDismiss={() => setStatus('idle')}
                                />
                            )}

                            {/* Email Input */}
                            <div className={styles.inputContainer}>
                                <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                    placeholder={placeholder}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="primary"
                                size="large"
                                disabled={status === 'loading'}
                                className={styles.submitButton}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <div className={styles.loadingSpinner} />
                                        <span>Suscribiendo...</span>
                                    </>
                                ) : (
                                    <>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="22" y1="2" x2="11" y2="13" />
                                            <polygon points="22,2 15,22 11,13 2,9 22,2" />
                                        </svg>
                                        <span>{buttonText}</span>
                                    </>
                                )}
                            </Button>

                            {/* Privacy Notice */}
                            <Text variant="small" color="muted" className={styles.privacyNotice}>
                                Al suscribirte, aceptas recibir emails informativos. Puedes darte de baja en cualquier momento.
                            </Text>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
