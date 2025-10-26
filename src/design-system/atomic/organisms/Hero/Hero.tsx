import React from 'react';
import { HeroProps } from './Hero.types';
import { cn } from '../../../utils/cn';
import { Button, Heading, Text, Image, Link } from '../../atoms';

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
        <section className={cn(
            'relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden',
            variant === 'centered' && 'text-center',
            variant === 'split' && 'lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center',
            className
        )}>
            {/* Background Image */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImage}
                        alt="Hero background"
                        fit="cover"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                </div>
            )}

            <div className={cn(
                'relative z-10 max-w-7xl mx-auto',
                variant === 'split' && 'lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'
            )}>
                {/* Content */}
                <div className={cn(
                    'space-y-6',
                    variant === 'centered' && 'text-center',
                    variant === 'split' && 'lg:order-1'
                )}>
                    {/* Subtitle */}
                    {subtitle && (
                        <Text variant="small" color="accent" className="uppercase tracking-wider font-medium">
                            {subtitle}
                        </Text>
                    )}

                    {/* Title */}
                    {title && (
                        <Heading level={1} className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold">
                            {title}
                        </Heading>
                    )}

                    {/* Description */}
                    {description && (
                        <Text variant="large" color="secondary" className="max-w-2xl">
                            {description}
                        </Text>
                    )}

                    {/* Buttons */}
                    {(primaryButton || secondaryButton) && (
                        <div className={cn(
                            'flex flex-col sm:flex-row gap-4',
                            variant === 'centered' && 'justify-center'
                        )}>
                            {renderButton(primaryButton, 'primary')}
                            {renderButton(secondaryButton, 'secondary')}
                        </div>
                    )}

                    {/* Stats */}
                    {stats && stats.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Image */}
                {image && (
                    <div className={cn(
                        'mt-8',
                        variant === 'split' && 'lg:mt-0 lg:order-2'
                    )}>
                        <Image
                            src={image.src}
                            alt={image.alt || 'Hero image'}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;