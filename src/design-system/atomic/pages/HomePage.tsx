import React from 'react';
import { LayoutBase } from '../templates';
import { Hero } from '../organisms/Hero';
import { Card } from '../molecules/Card';
import { Button } from '../atoms/Button';
import { Heading, Text } from '../atoms';
import { cn } from '../../utils/cn';

export const HomePage: React.FC = () => {
    return (
        <LayoutBase>
            <Hero
                title="Tu Abogado de Accidentes de Tráfico"
                subtitle="Especialistas en Compensaciones"
                description="Te ayudamos a obtener la máxima compensación por tu accidente de tráfico. Consulta gratuita y sin compromiso."
                backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                variant="default"
            />

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <Heading level={2} className="text-3xl font-bold text-gray-900 mb-4">
                            ¿Por qué elegirnos?
                        </Heading>
                        <Text variant="large" className="text-gray-600 max-w-3xl mx-auto">
                            Contamos con más de 15 años de experiencia ayudando a víctimas de accidentes de tráfico
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card variant="default" className="text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="p-8">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <Heading level={3} className="text-xl font-semibold text-gray-900 mb-4">
                                    Consulta Gratuita
                                </Heading>
                                <Text variant="body" className="text-gray-600">
                                    Evaluamos tu caso sin compromiso y te explicamos tus opciones legales
                                </Text>
                            </div>
                        </Card>

                        <Card variant="default" className="text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="p-8">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <Heading level={3} className="text-xl font-semibold text-gray-900 mb-4">
                                    Resultados Rápidos
                                </Heading>
                                <Text variant="body" className="text-gray-600">
                                    Procesamos tu reclamación de manera eficiente para obtener resultados rápidos
                                </Text>
                            </div>
                        </Card>

                        <Card variant="default" className="text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="p-8">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                <Heading level={3} className="text-xl font-semibold text-gray-900 mb-4">
                                    Máxima Compensación
                                </Heading>
                                <Text variant="body" className="text-gray-600">
                                    Luchamos por obtener la máxima compensación posible para tu caso
                                </Text>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Heading level={2} className="text-3xl font-bold text-white mb-4">
                        ¿Has tenido un accidente de tráfico?
                    </Heading>
                    <Text variant="large" className="text-primary-100 mb-8 max-w-2xl mx-auto">
                        No esperes más. Contacta con nosotros ahora para una consulta gratuita y descubre cómo podemos ayudarte.
                    </Text>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="secondary" size="large" className="bg-white text-primary-600 hover:bg-gray-100">
                            Consulta Gratuita
                        </Button>
                        <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-primary-600">
                            Llamar Ahora
                        </Button>
                    </div>
                </div>
            </section>
        </LayoutBase>
    );
};

export default HomePage;