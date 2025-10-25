import React from 'react';
import { Button, Text, Heading } from '../../atoms';
import { PricingProps, PricingPlan } from './Pricing.types';
import styles from './Pricing.module.css';

const Pricing: React.FC<PricingProps> = ({
    title = 'Planes de Precios',
    subtitle = 'Pricing',
    description = 'Elige el plan que mejor se adapte a tus necesidades',
    plans = [
        {
            id: 'basic',
            name: 'Básico',
            description: 'Perfecto para empezar',
            price: 29,
            currency: '€',
            period: '/mes',
            features: [
                'Consultas básicas',
                'Soporte por email',
                'Documentos estándar',
                'Hasta 5 casos'
            ],
            buttonText: 'Comenzar',
            buttonVariant: 'secondary'
        },
        {
            id: 'professional',
            name: 'Profesional',
            description: 'Para profesionales exigentes',
            price: 79,
            currency: '€',
            period: '/mes',
            features: [
                'Consultas ilimitadas',
                'Soporte prioritario',
                'Documentos personalizados',
                'Casos ilimitados',
                'Análisis avanzado',
                'Integración API'
            ],
            isPopular: true,
            buttonText: 'Más Popular',
            buttonVariant: 'primary'
        },
        {
            id: 'enterprise',
            name: 'Empresa',
            description: 'Para grandes organizaciones',
            price: 199,
            currency: '€',
            period: '/mes',
            features: [
                'Todo del plan Profesional',
                'Soporte 24/7',
                'Consultoría personalizada',
                'Integración completa',
                'Reportes avanzados',
                'SLA garantizado'
            ],
            buttonText: 'Contactar',
            buttonVariant: 'secondary'
        }
    ],
    onSelectPlan,
    variant = 'default',
    showCurrency = true,
    showPeriod = true,
    className = '',
    ...props
}) => {
    const handleSelectPlan = (plan: PricingPlan) => {
        if (onSelectPlan) {
            onSelectPlan(plan);
        }
    };

    const getButtonVariant = (plan: PricingPlan) => {
        switch (plan.buttonVariant) {
            case 'primary':
                return styles.planButtonPrimary;
            case 'secondary':
                return styles.planButtonSecondary;
            default:
                return styles.planButtonPrimary;
        }
    };

    return (
        <section className={`${styles.pricing} ${className}`} {...props}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Text variant="small" color="accent" className={styles.subtitle}>
                        {subtitle}
                    </Text>
                    <Heading level={2} variant="heading" className={styles.title}>
                        {title}
                    </Heading>
                    <Text variant="body" color="secondary" className={styles.description}>
                        {description}
                    </Text>
                </div>

                <div className={styles.plansGrid}>
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`${styles.planCard} ${plan.isPopular ? styles.planCardPopular : ''
                                } ${plan.isRecommended ? styles.planCardRecommended : ''}`}
                        >
                            {plan.isPopular && (
                                <div className={styles.popularBadge}>Más Popular</div>
                            )}
                            {plan.isRecommended && (
                                <div className={styles.recommendedBadge}>Recomendado</div>
                            )}

                            <div className={styles.planHeader}>
                                <Heading level={3} variant="subheading" className={styles.planName}>
                                    {plan.name}
                                </Heading>
                                <Text variant="body" color="secondary" className={styles.planDescription}>
                                    {plan.description}
                                </Text>

                                <div className={styles.planPrice}>
                                    {showCurrency && (
                                        <span className={styles.priceCurrency}>{plan.currency}</span>
                                    )}
                                    <span className={styles.priceAmount}>{plan.price}</span>
                                    {showPeriod && (
                                        <span className={styles.pricePeriod}>{plan.period}</span>
                                    )}
                                </div>
                            </div>

                            <ul className={styles.planFeatures}>
                                {plan.features.map((feature, index) => (
                                    <li key={index} className={styles.feature}>
                                        <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22,4 12,14.01 9,11.01" />
                                        </svg>
                                        <Text variant="small" className={styles.featureText}>
                                            {feature}
                                        </Text>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.buttonVariant || 'primary'}
                                size="large"
                                onClick={() => handleSelectPlan(plan)}
                                className={`${styles.planButton} ${getButtonVariant(plan)}`}
                            >
                                {plan.buttonText || 'Seleccionar'}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
