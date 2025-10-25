import React from 'react';
import { MaintenanceTemplateProps } from './Maintenance.types';
import styles from './Maintenance.module.css';
import { Heading, Text } from '../../atoms';

const MaintenanceTemplate: React.FC<MaintenanceTemplateProps> = ({
    title = 'Mantenimiento Programado',
    message = 'Estamos realizando mejoras en nuestro sistema para brindarte una mejor experiencia. Volveremos pronto.',
    estimatedTime = '2-4 horas',
    contactEmail = 'support@example.com',
    showLogo = true,
    logoUrl = '/logo.svg',
    className,
}) => {
    return (
        <div className={`${styles.maintenanceTemplate} ${className}`}>
            <div className={styles.container}>
                {showLogo && (
                    <div className={styles.logo}>
                        <img src={logoUrl} alt="Logo" className={styles.logoImage} />
                    </div>
                )}

                <Heading level={1} className={styles.title}>{title}</Heading>
                <Text className={styles.message}>{message}</Text>

                <div className={styles.info}>
                    <Text className={styles.infoTitle}>Tiempo estimado de mantenimiento:</Text>
                    <Text className={styles.infoText}>{estimatedTime}</Text>
                </div>

                <div className={styles.contact}>
                    <Text>
                        ¿Necesitas ayuda? Contacta a{' '}
                        <a href={`mailto:${contactEmail}`} className={styles.contactLink}>
                            {contactEmail}
                        </a>
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceTemplate;
