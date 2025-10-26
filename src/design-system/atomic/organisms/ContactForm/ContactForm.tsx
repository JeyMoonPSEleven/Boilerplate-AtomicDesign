import React, { useState } from 'react';
import { Button, Input, Text, Heading, Checkbox } from '../../atoms';
import { Card, Form, Alert } from '../../molecules';
import { ContactFormProps, ContactFormData } from './ContactForm.types';
import { cn } from '../../../utils/cn';

const ContactForm: React.FC<ContactFormProps> = ({
    title = 'Consulta Gratuita',
    subtitle = 'Te ayudamos a obtener la compensación que mereces',
    showContactInfo = true,
    contactInfo = {
        phone: '+34 952 123 456',
        email: 'info@miabogadoaccidente.com',
        address: 'Calle Principal 123, Málaga',
        hours: 'Lunes a Viernes: 9:00 - 18:00'
    },
    services = [
        { value: 'accidente-trafico', label: 'Accidente de Tráfico' },
        { value: 'accidente-laboral', label: 'Accidente Laboral' },
        { value: 'negligencia-medica', label: 'Negligencia Médica' },
        { value: 'caida-publica', label: 'Caída en Vía Pública' },
        { value: 'otro', label: 'Otro' }
    ],
    onSubmit,
    className = '',
    ...props
}) => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        consent: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (data: any) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Simular envío del formulario
            await new Promise(resolve => setTimeout(resolve, 2000));

            if (onSubmit) {
                onSubmit(data as ContactFormData);
            }

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: '',
                consent: false
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={`${styles.contactForm} ${className}`} {...props}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Contact Info */}
                    {showContactInfo && (
                        <div className={styles.contactInfo}>
                            <div className={styles.titleSection}>
                                <Heading level={2} variant="heading">
                                    {title}
                                </Heading>
                                <Text variant="body" color="secondary">
                                    {subtitle}
                                </Text>
                            </div>

                            <div className={styles.contactCards}>
                                {contactInfo.phone && (
                                    <div className={styles.contactCard}>
                                        <div className={styles.iconContainer}>
                                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                        </div>
                                        <div className={styles.cardContent}>
                                            <Text variant="small" className={styles.cardLabel}>
                                                Teléfono
                                            </Text>
                                            <Text variant="body" className={styles.cardValue}>
                                                {contactInfo.phone}
                                            </Text>
                                        </div>
                                    </div>
                                )}

                                {contactInfo.email && (
                                    <div className={styles.contactCard}>
                                        <div className={styles.iconContainer}>
                                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                        </div>
                                        <div className={styles.cardContent}>
                                            <Text variant="small" className={styles.cardLabel}>
                                                Email
                                            </Text>
                                            <Text variant="body" className={styles.cardValue}>
                                                {contactInfo.email}
                                            </Text>
                                        </div>
                                    </div>
                                )}

                                {contactInfo.address && (
                                    <div className={styles.contactCard}>
                                        <div className={styles.iconContainer}>
                                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <div className={styles.cardContent}>
                                            <Text variant="small" className={styles.cardLabel}>
                                                Dirección
                                            </Text>
                                            <Text variant="body" className={styles.cardValue}>
                                                {contactInfo.address}
                                            </Text>
                                        </div>
                                    </div>
                                )}

                                {contactInfo.hours && (
                                    <div className={styles.contactCard}>
                                        <div className={styles.iconContainer}>
                                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12,6 12,12 16,14" />
                                            </svg>
                                        </div>
                                        <div className={styles.cardContent}>
                                            <Text variant="small" className={styles.cardLabel}>
                                                Horario
                                            </Text>
                                            <Text variant="body" className={styles.cardValue}>
                                                {contactInfo.hours}
                                            </Text>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Form */}
                    <div>
                        <Card variant="elevated" padding="lg">
                            <Form onSubmit={handleSubmit} className={styles.form}>
                                {/* Success/Error Messages */}
                                {submitStatus === 'success' && (
                                    <Alert
                                        variant="success"
                                        title="¡Consulta enviada!"
                                        message="Hemos recibido tu consulta. Te contactaremos en las próximas 24 horas."
                                        dismissible
                                        onDismiss={() => setSubmitStatus('idle')}
                                    />
                                )}

                                {submitStatus === 'error' && (
                                    <Alert
                                        variant="danger"
                                        title="Error al enviar"
                                        message="Hubo un problema al enviar tu consulta. Por favor, inténtalo de nuevo."
                                        dismissible
                                        onDismiss={() => setSubmitStatus('idle')}
                                    />
                                )}

                                {/* Name */}
                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600', color: 'var(--color-text-primary)' }}>
                                        Nombre completo *
                                    </label>
                                    <Input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        placeholder="Tu nombre completo"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600', color: 'var(--color-text-primary)' }}>
                                        Email *
                                    </label>
                                    <Input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600', color: 'var(--color-text-primary)' }}>
                                        Teléfono *
                                    </label>
                                    <Input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        placeholder="+34 123 456 789"
                                        required
                                    />
                                </div>

                                {/* Service */}
                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600', color: 'var(--color-text-primary)' }}>
                                        Tipo de caso *
                                    </label>
                                    <select
                                        value={formData.service}
                                        onChange={(e) => handleInputChange('service', e.target.value)}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: 'var(--spacing-md)',
                                            border: '1px solid var(--color-border-light)',
                                            borderRadius: 'var(--border-radius-md)',
                                            fontSize: 'var(--font-size-base)',
                                            backgroundColor: 'var(--color-background)',
                                            color: 'var(--color-text-primary)'
                                        }}
                                    >
                                        <option value="">Selecciona el tipo de caso</option>
                                        {services.map(service => (
                                            <option key={service.value} value={service.value}>
                                                {service.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: '600', color: 'var(--color-text-primary)' }}>
                                        Describe tu caso *
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => handleInputChange('message', e.target.value)}
                                        placeholder="Cuéntanos los detalles de tu accidente..."
                                        className={styles.textarea}
                                        rows={4}
                                        required
                                    />
                                </div>

                                {/* Consent */}
                                <div>
                                    <Checkbox
                                        checked={formData.consent}
                                        onChange={(checked: boolean) => handleInputChange('consent', checked)}
                                        label="Acepto el tratamiento de mis datos personales según la política de privacidad"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="large"
                                    disabled={isSubmitting || !formData.consent}
                                    className={styles.submitButton}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className={styles.loadingSpinner} />
                                            <span>Enviando...</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="22" y1="2" x2="11" y2="13" />
                                                <polygon points="22,2 15,22 11,13 2,9 22,2" />
                                            </svg>
                                            <span>Enviar Consulta</span>
                                        </>
                                    )}
                                </Button>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
