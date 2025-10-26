import React from 'react';
import { Heading, Text, Button } from '../../atoms';
import { Accordion } from '../../molecules';
import { FAQProps, FAQItem } from './FAQ.types';
import { cn } from '../../../utils/cn';

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
            <div className="p-4">
                <Text variant="body" color="secondary">
                    {item.answer}
                </Text>
            </div>
        )
    }));

    return (
        <section className={cn('py-16 bg-white', className)} {...props}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <Text variant="small" color="accent" className="uppercase tracking-wider font-medium mb-2">
                        {subtitle}
                    </Text>
                    <Heading level={2} variant="heading" className="text-gray-900">
                        {title}
                    </Heading>
                </div>

                {/* Content */}
                {variant === 'grouped' && showCategories ? (
                    <div className="space-y-8">
                        {Object.entries(groupedItems).map(([category, categoryItems]) => (
                            <div key={category} className="space-y-4">
                                <Heading level={3} variant="subheading" className="text-gray-900 border-b border-gray-200 pb-2">
                                    {category}
                                </Heading>
                                <Accordion
                                    items={categoryItems.map(item => ({
                                        id: item.id,
                                        title: item.question,
                                        content: (
                                            <div className="p-4">
                                                <Text variant="body" color="secondary">
                                                    {item.answer}
                                                </Text>
                                            </div>
                                        )
                                    }))}
                                    allowMultiple
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        <Accordion
                            items={accordionItems}
                            allowMultiple
                        />
                    </div>
                )}

                {/* CTA */}
                <div className="text-center mt-12 p-8 bg-gray-50 rounded-lg">
                    <Text variant="body" color="secondary" className="mb-4">
                        ¿No encuentras la respuesta que buscas?
                    </Text>
                    <Button
                        variant="primary"
                        size="large"
                        onClick={() => window.location.href = '/contacto'}
                    >
                        Contacta con nosotros
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
