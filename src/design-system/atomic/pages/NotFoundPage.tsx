import React from 'react';
import { LayoutBase } from '../../templates/LayoutBase';
import { Card } from '../../molecules/Card';
import { Heading, Text, Button } from '../../atoms';
import { Link } from '../../atoms/Link';
import styles from './NotFoundPage.module.css';

export const NotFoundPage: React.FC = () => {
  return (
    <LayoutBase>
      <div className={styles.container}>
        <Card className={styles.errorCard}>
          <div className={styles.errorContent}>
            <Heading level={1} className={styles.errorCode}>404</Heading>
            <Heading level={2}>Página no encontrada</Heading>
            <Text className={styles.errorDescription}>
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </Text>
            
            <div className={styles.errorActions}>
              <Link href="/">
                <Button variant="primary">
                  Volver al Inicio
                </Button>
              </Link>
              <Link href="/components">
                <Button variant="secondary">
                  Ver Componentes
                </Button>
              </Link>
            </div>

            <div className={styles.helpSection}>
              <Text variant="small">
                ¿Necesitas ayuda?{' '}
                <Link href="/docs" className={styles.helpLink}>
                  Consulta nuestra documentación
                </Link>
                {' '}o{' '}
                <Link href="/contact" className={styles.helpLink}>
                  contacta con nosotros
                </Link>
                .
              </Text>
            </div>
          </div>
        </Card>
      </div>
    </LayoutBase>
  );
};
