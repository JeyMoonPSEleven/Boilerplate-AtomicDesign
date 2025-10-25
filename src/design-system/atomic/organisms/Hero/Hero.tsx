import React from 'react';
import { HeroProps } from './Hero.types';
import { cn } from '../../../utils';
import { Button, Heading, Text, Image, Link } from '../../atoms';
import styles from './Hero.module.css';

export const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    description,
    primaryButton,
    secondaryButton,
    image,
    backgroundImage,
    variant = 'default',
    className,
    stats,
}) => {
    const renderButton = (button: HeroProps['primaryButton'], buttonVariant: 'primary' | 'secondary' = 'primary') => {
        if (!button) return null;

        const buttonElement = (
            <Button
                variant={button.variant || buttonVariant}
                size="large"
                onClick={button.onClick}
            >
                {button.text}
            </Button>
        );

        if (button.href) {
            return (
                <Link href={button.href}>
                    {buttonElement}
                </Link>
            );
        }

        return buttonElement;
    };

    return (
        <section className={cn(styles.hero, styles[variant], className)}>
            {/* Background Image */}
            {backgroundImage && (
                <div className={styles.heroBackground}>
                    <Image
                        src={backgroundImage}
                        alt="Hero background"
                        fit="cover"
                        overlay={true}
                    />
                </div>
            )}

            <div className={cn(styles.heroContainer, variant === 'split' && styles.split)}>
                {/* Content */}
                <div className={cn(
                    styles.heroContent,
                    variant === 'centered' && styles.centered,
                    variant === 'split' && styles.split
                )}>
                    {subtitle && (
                        <Text variant="small" className={styles.heroSubtitle}>
                            {subtitle}
                        </Text>
                    )}

                    <Heading level={1} className={styles.heroTitle}>
                        {title}
                    </Heading>

                    {description && (
                        <Text variant="large" className={cn(
                            styles.heroDescription,
                            variant === 'centered' && styles.centered
                        )}>
                            {description}
                        </Text>
                    )}

                    {/* Buttons */}
                    {(primaryButton || secondaryButton) && (
                        <div className={styles.heroButtons}>
                            {renderButton(primaryButton, 'primary')}
                            {renderButton(secondaryButton, 'secondary')}
                        </div>
                    )}

                    {/* Stats */}
                    {stats && stats.length > 0 && (
                        <div className={styles.heroStats}>
                            {stats.map((stat, index) => (
                                <div key={index} className={styles.heroStat}>
                                    <div className={styles.heroStatValue}>
                                        {stat.value}
                                    </div>
                                    <div className={styles.heroStatLabel}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Image */}
                {image && variant === 'split' && (
                    <div className={styles.heroImage}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            fit="cover"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};
