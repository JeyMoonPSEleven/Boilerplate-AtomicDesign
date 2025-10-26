import React from 'react';
import { Text, Heading } from '../../atoms';
import { StatisticsProps, Statistic } from './Statistics.types';
import { cn } from '../../../utils/cn';

const Statistics: React.FC<StatisticsProps> = ({
    statistics = [
        {
            id: '1',
            value: '500+',
            label: 'Clientes Satisfechos',
            description: 'Casos resueltos exitosamente',
            change: {
                value: '+15%',
                type: 'increase'
            }
        },
        {
            id: '2',
            value: '€2.5M',
            label: 'Compensaciones Obtenidas',
            description: 'En compensaciones para nuestros clientes',
            change: {
                value: '+25%',
                type: 'increase'
            }
        },
        {
            id: '3',
            value: '95%',
            label: 'Tasa de Éxito',
            description: 'Casos ganados en los últimos 2 años',
            change: {
                value: '+5%',
                type: 'increase'
            }
        },
        {
            id: '4',
            value: '15+',
            label: 'Años de Experiencia',
            description: 'Especializados en accidentes',
            change: {
                value: '+2',
                type: 'increase'
            }
        }
    ],
    title = 'Nuestros Resultados',
    subtitle = 'Datos que respaldan nuestra experiencia',
    variant = 'default',
    showIcons = true,
    animated = true,
    className = '',
    ...props
}) => {
    const getIconComponent = (stat: Statistic) => {
        if (stat.icon) return stat.icon;

        // Default icons based on label
        const label = stat.label.toLowerCase();
        if (label.includes('cliente') || label.includes('persona')) {
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            );
        } else if (label.includes('caso') || label.includes('éxito')) {
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
                </svg>
            );
        } else if (label.includes('tiempo') || label.includes('año')) {
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                </svg>
            );
        } else {
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                    <polyline points="17,6 23,6 23,12" />
                </svg>
            );
        }
    };

    const getGridClasses = () => {
        if (variant === 'minimal') {
            return styles.gridMinimal;
        }
        return styles.grid;
    };

    const getCardClasses = () => {
        if (variant === 'minimal') {
            return styles.statCardMinimal;
        }
        return styles.statCard;
    };

    return (
        <section className={`${styles.statistics} ${className}`} {...props}>
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

                {/* Statistics Grid */}
                <div className={getGridClasses()}>
                    {statistics.map((stat) => (
                        <div key={stat.id} className={getCardClasses()}>
                            {/* Icon */}
                            {showIcons && (
                                <div className={styles.iconContainer}>
                                    <div className={styles.icon}>
                                        {getIconComponent(stat)}
                                    </div>
                                </div>
                            )}

                            {/* Value */}
                            <div className={styles.value}>
                                <Text variant="large" className={styles.valueText}>
                                    {stat.value}
                                </Text>
                            </div>

                            {/* Label */}
                            <div className={styles.label}>
                                <Text variant="body" className={styles.labelText}>
                                    {stat.label}
                                </Text>
                            </div>

                            {/* Change Indicator */}
                            {stat.change && (
                                <div className={styles.change}>
                                    <svg
                                        className={`${styles.changeIcon} ${stat.change.type === 'increase' ? styles.changeIconIncrease : styles.changeIconDecrease
                                            }`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                                        <polyline points="17,6 23,6 23,12" />
                                    </svg>
                                    <Text
                                        variant="small"
                                        className={`${styles.changeText} ${stat.change.type === 'increase' ? styles.changeTextIncrease : styles.changeTextDecrease
                                            }`}
                                    >
                                        {stat.change.value}
                                    </Text>
                                </div>
                            )}

                            {/* Description */}
                            {stat.description && (
                                <div>
                                    <Text variant="small" className={styles.description}>
                                        {stat.description}
                                    </Text>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className={styles.additionalInfo}>
                    <Text variant="body" color="secondary" className={styles.additionalText}>
                        Datos actualizados al {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}
                    </Text>
                    <Text variant="small" color="muted" className={styles.disclaimer}>
                        * Los resultados pueden variar según las circunstancias específicas de cada caso
                    </Text>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
