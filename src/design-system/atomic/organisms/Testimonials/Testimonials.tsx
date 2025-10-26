import React, { useState, useEffect } from 'react';
import { Avatar, Text, Heading } from '../../atoms';
import { TestimonialsProps, Testimonial } from './Testimonials.types';
import { cn } from '../../../utils/cn';

const Testimonials: React.FC<TestimonialsProps> = ({
    testimonials = [
        {
            id: '1',
            name: 'María González',
            role: 'Víctima de accidente',
            company: 'Accidente de Tráfico',
            content: 'El equipo me ayudó a obtener una compensación justa después de mi accidente. Su profesionalidad y dedicación fueron excepcionales.',
            rating: 5,
            avatar: 'https://via.placeholder.com/40',
            location: 'Madrid',
            caseType: 'Accidente de Tráfico',
            compensation: '€15,000'
        },
        {
            id: '2',
            name: 'Carlos Ruiz',
            role: 'Trabajador',
            company: 'Accidente Laboral',
            content: 'Gracias a su experiencia, pude recuperar los daños de mi accidente laboral. Recomiendo sus servicios sin dudarlo.',
            rating: 5,
            avatar: 'https://via.placeholder.com/40',
            location: 'Barcelona',
            caseType: 'Accidente Laboral',
            compensation: '€25,000'
        },
        {
            id: '3',
            name: 'Ana Martín',
            role: 'Paciente',
            company: 'Negligencia Médica',
            content: 'Su apoyo durante todo el proceso fue fundamental. Obtuvieron una compensación que cubrió todos mis gastos médicos.',
            rating: 5,
            avatar: 'https://via.placeholder.com/40',
            location: 'Valencia',
            caseType: 'Negligencia Médica',
            compensation: '€40,000'
        }
    ],
    title = 'Lo que dicen nuestros clientes',
    subtitle = 'Casos reales con resultados excepcionales',
    variant = 'default',
    showRating = true,
    showNavigation = true,
    autoPlay = false,
    autoPlayInterval = 5000,
    className = '',
    ...props
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-play functionality
    useEffect(() => {
        if (autoPlay && variant === 'carousel') {
            const interval = setInterval(nextTestimonial, autoPlayInterval);
            return () => clearInterval(interval);
        }
        return undefined;
    }, [autoPlay, autoPlayInterval, variant]);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`${styles.star} ${index < rating ? styles.starFilled : styles.starEmpty}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
        ));
    };

    const renderTestimonial = (testimonial: Testimonial) => (
        <div key={testimonial.id} className={styles.testimonialCard}>
            {/* Quote Icon */}
            <div className={styles.quoteIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
            </div>

            {/* Rating */}
            {showRating && (
                <div className={styles.rating}>
                    {renderStars(testimonial.rating)}
                </div>
            )}

            {/* Content */}
            <Text variant="body" className={styles.content}>
                "{testimonial.content}"
            </Text>

            {/* Case Details */}
            {(testimonial.caseType || testimonial.compensation) && (
                <div className={styles.caseDetails}>
                    <div className={styles.caseGrid}>
                        {testimonial.caseType && (
                            <div className={styles.caseItem}>
                                <Text variant="small" className={styles.caseLabel}>
                                    Tipo de caso:
                                </Text>
                                <Text variant="small" className={styles.caseValue}>
                                    {testimonial.caseType}
                                </Text>
                            </div>
                        )}
                        {testimonial.compensation && (
                            <div className={styles.caseItem}>
                                <Text variant="small" className={styles.caseLabel}>
                                    Compensación obtenida:
                                </Text>
                                <Text variant="small" className={`${styles.caseValue} ${styles.caseValueCompensation}`}>
                                    {testimonial.compensation}
                                </Text>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Author */}
            <div className={styles.author}>
                <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    size="medium"
                />
                <div className={styles.authorInfo}>
                    <Text variant="small" className={styles.authorName}>
                        {testimonial.name}
                    </Text>
                    <Text variant="small" color="secondary" className={styles.authorRole}>
                        {testimonial.role}
                        {testimonial.company && ` en ${testimonial.company}`}
                    </Text>
                    {testimonial.location && (
                        <Text variant="small" color="muted" className={styles.authorLocation}>
                            {testimonial.location}
                        </Text>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <section className={`${styles.testimonials} ${className}`} {...props}>
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
                {variant === 'carousel' ? (
                    <div className={styles.carouselContainer}>
                        {renderTestimonial(testimonials[currentIndex])}

                        {/* Navigation */}
                        {showNavigation && testimonials.length > 1 && (
                            <>
                                <button
                                    onClick={prevTestimonial}
                                    className={`${styles.navigation} ${styles.navigationLeft}`}
                                >
                                    <svg className={styles.navigationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="15,18 9,12 15,6" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className={`${styles.navigation} ${styles.navigationRight}`}
                                >
                                    <svg className={styles.navigationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="9,18 15,12 9,6" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Dots */}
                        {testimonials.length > 1 && (
                            <div className={styles.dots}>
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToTestimonial(index)}
                                        className={`${styles.dot} ${index === currentIndex ? styles.dotActive : styles.dotInactive}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ) : variant === 'grid' ? (
                    <div className={styles.grid}>
                        {testimonials.map((testimonial) => renderTestimonial(testimonial))}
                    </div>
                ) : (
                    <div className={styles.default}>
                        {testimonials.map((testimonial) => renderTestimonial(testimonial))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
