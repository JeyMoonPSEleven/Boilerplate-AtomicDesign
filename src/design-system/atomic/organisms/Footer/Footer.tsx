import React from 'react';
import { FooterProps, FooterSection } from './Footer.types';
import { cn } from '../../../utils/cn';
import { Logo, Text, Link, Icon } from '../../atoms';

export const Footer: React.FC<FooterProps> = ({
    logo,
    logoText = 'MiApp',
    description = 'Especialistas en soluciones digitales con más de 10 años de experiencia ayudando a empresas a crecer y prosperar.',
    links = [],
    contact,
    social,
    legal = [],
    copyright = `© ${new Date().getFullYear()} MiApp. Todos los derechos reservados.`,
    className,
}) => {
    const socialIcons = {
        facebook: 'facebook',
        twitter: 'twitter',
        instagram: 'instagram',
        linkedin: 'linkedin',
        youtube: 'youtube',
        github: 'github',
    };

    const renderSocialLinks = () => {
        if (!social) return null;

        return (
            <div className={styles.socialLinks}>
                {Object.entries(social).map(([platform, url]) => {
                    if (!url) return null;
                    const iconName = socialIcons[platform as keyof typeof socialIcons];
                    return (
                        <Link
                            key={platform}
                            href={url}
                            isExternal={true}
                            className={styles.socialLink}
                            aria-label={platform}
                        >
                            <Icon name={iconName} size="small" />
                        </Link>
                    );
                })}
            </div>
        );
    };

    const renderFooterSection = (section: FooterSection) => (
        <div key={section.title} className={styles.footerSection}>
            <Text variant="small" className={styles.sectionTitle}>
                {section.title}
            </Text>
            <ul className={styles.sectionLinks}>
                {section.links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            isExternal={link.isExternal}
                            className={styles.sectionLink}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer className={cn(styles.footer, className)}>
            <div className={styles.footerContainer}>
                <div className={styles.footerGrid}>
                    {/* Company Info */}
                    <div className={styles.companyInfo}>
                        <div className={styles.logoSection}>
                            {logo || <Logo text={logoText} size="medium" />}
                            <Text variant="large" className={styles.companyName}>
                                {logoText}
                            </Text>
                        </div>

                        <Text variant="body" className={styles.companyDescription}>
                            {description}
                        </Text>

                        {renderSocialLinks()}
                    </div>

                    {/* Links Sections */}
                    {links.map(renderFooterSection)}

                    {/* Contact Info */}
                    {contact && (
                        <div className={styles.footerSection}>
                            <Text variant="small" className={styles.sectionTitle}>
                                Contacto
                            </Text>
                            <div className={styles.contactInfo}>
                                {contact.phone && (
                                    <div className={styles.contactItem}>
                                        <Icon name="phone" size="small" className={styles.contactIcon} />
                                        <Link
                                            href={`tel:${contact.phone}`}
                                            className={styles.contactLink}
                                        >
                                            {contact.phone}
                                        </Link>
                                    </div>
                                )}

                                {contact.email && (
                                    <div className={styles.contactItem}>
                                        <Icon name="mail" size="small" className={styles.contactIcon} />
                                        <Link
                                            href={`mailto:${contact.email}`}
                                            className={styles.contactLink}
                                        >
                                            {contact.email}
                                        </Link>
                                    </div>
                                )}

                                {contact.address && (
                                    <div className={styles.contactItem}>
                                        <Icon name="map-pin" size="small" className={styles.contactIcon} />
                                        <Text variant="body" className={styles.contactLink}>
                                            {contact.address}
                                        </Text>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom Bar */}
                <div className={styles.footerBottom}>
                    <Text variant="small" className={styles.copyright}>
                        {copyright}
                    </Text>

                    {legal.length > 0 && (
                        <ul className={styles.legalLinks}>
                            {legal.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        isExternal={item.isExternal}
                                        className={styles.legalLink}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </footer>
    );
};
