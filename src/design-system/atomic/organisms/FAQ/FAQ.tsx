import React from 'react';
import { Heading, Text, Button } from '../../atoms';
import { Accordion } from '../../molecules';
import { FAQProps, FAQItem } from './FAQ.types';
import styles from './FAQ.module.css';

const FAQ: React.FC<FAQProps> = ({
    items = [
        {
            id: '1',
            question: '¿Cuánto tiempo tarda un proceso de compensación?',
            answer: 'El tiempo puede variar según la complejidad del caso, pero generalmente oscila entre 6 meses y 2 años. Casos más simples pueden resolverse en 3-6 meses.',
            category: 'Proceso'
        },
        {
            id: '2',
            question: '¿Qué documentos necesito para iniciar mi caso?',
            answer: 'Necesitarás el parte de accidente, informes médicos, facturas de gastos, fotografías del accidente y cualquier comunicación con las aseguradoras.',
            category: 'Documentación'
        },
        {
            id: '3',
            question: '¿Cuánto cuesta contratar sus servicios?',
            answer: 'Trabajamos con honorarios de éxito, lo que significa que solo cobramos si obtenemos una compensación favorable para ti. No hay costos iniciales.',
            category: 'Costos'
        },
        {
            id: '4',
            question: '¿Puedo cambiar de abogado durante el proceso?',
            answer: 'Sí, tienes derecho a cambiar de abogado en cualquier momento. Te ayudaremos con la transición para que no se interrumpa tu caso.',
            category: 'Proceso'
        },
        {
            id: '5',
            question: '¿Qué tipos de accidentes cubren?',
            answer: 'Cubrimos accidentes de tráfico, laborales, caídas en vía pública, negligencia médica y otros tipos de accidentes personales.',
            category: 'Cobertura'
        }
    ],
    title = 'Preguntas Frecuentes',
    subtitle = 'Encuentra respuestas a las dudas más comunes',
    variant = 'default',
    className = '',
    showCategories = false,
    ...props
}) => {
    // Group items by category if needed
    const groupedItems = showCategories
        ? items.reduce((acc, item) => {
            const category = item.category || 'General';
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(item);
            return acc;
        }, {} as Record<string, FAQItem[]>)
        : { 'General': items };

    const accordionItems = items.map(item => ({
        id: item.id,
        title: item.question,
        content: (
            <div className={styles.answerContent}>
                <Text variant="body" color="secondary">
                    {item.answer}
                </Text>
            </div>
        )
    }));

    return (
        <section className={`${styles.faq} ${className}`} {...props}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <Text variant="small" color="accent" className={styles.subtitle}>
                        {subtitle}
                    </Text>
                    <Heading level={2} variant="heading" className={styles.title}>
                        {title}
                    </Heading>
                </div>

                {/* Content */}
                {variant === 'grouped' && showCategories ? (
                    <div className={`${styles.groupedContent}`}>
                        {Object.entries(groupedItems).map(([category, categoryItems]) => (
                            <div key={category} className={styles.categorySection}>
                                <Heading level={3} variant="subheading" className={styles.categoryTitle}>
                                    {category}
                                </Heading>
                                <Accordion
                                    items={categoryItems.map(item => ({
                                        id: item.id,
                                        title: item.question,
                                        content: (
                                            <div className={styles.answerContent}>
                                                <Text variant="body" color="secondary">
                                                    {item.answer}
                                                </Text>
                                            </div>
                                        )
                                    }))}
                                    variant="bordered"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.content}>
                        <Accordion
                            items={accordionItems}
                            variant="bordered"
                            allowMultiple
                        />
                    </div>
                )}

                {/* CTA */}
                <div className={styles.cta}>
                    <Text variant="body" color="secondary" className={styles.ctaText}>
                        ¿No encuentras la respuesta que buscas?
                    </Text>
                    <Button
                        variant="primary"
                        size="large"
                        onClick={() => window.location.href = '/contacto'}
                        className={styles.ctaButton}
                    >
                        Contacta con nosotros
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
