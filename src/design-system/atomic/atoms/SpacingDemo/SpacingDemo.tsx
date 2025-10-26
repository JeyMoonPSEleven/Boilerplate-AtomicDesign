// src/design-system/atomic/atoms/SpacingDemo/SpacingDemo.tsx
import React from 'react';
import { cn } from '../../../utils/cn';

export interface SpacingDemoProps {
  className?: string;
}

export const SpacingDemo = React.memo<SpacingDemoProps>(({
  className
}) => {
  const spacingTokens = [
    { name: 'XS', value: 'var(--spacing-xs)', size: '4px', description: 'Espaciado extra pequeño' },
    { name: 'SM', value: 'var(--spacing-sm)', size: '8px', description: 'Espaciado pequeño' },
    { name: 'MD', value: 'var(--spacing-md)', size: '16px', description: 'Espaciado medio' },
    { name: 'LG', value: 'var(--spacing-lg)', size: '24px', description: 'Espaciado grande' },
    { name: 'XL', value: 'var(--spacing-xl)', size: '32px', description: 'Espaciado extra grande' },
    { name: '2XL', value: 'var(--spacing-2xl)', size: '48px', description: 'Espaciado 2X grande' },
    { name: '3XL', value: 'var(--spacing-3xl)', size: '64px', description: 'Espaciado 3X grande' },
    { name: '4XL', value: 'var(--spacing-4xl)', size: '80px', description: 'Espaciado 4X grande' },
    { name: '5XL', value: 'var(--spacing-5xl)', size: '96px', description: 'Espaciado 5X grande' },
  ];

  const fluidSpacingTokens = [
    { name: 'Fluid XS', value: 'var(--spacing-fluid-xs)', description: 'Espaciado fluido extra pequeño' },
    { name: 'Fluid SM', value: 'var(--spacing-fluid-sm)', description: 'Espaciado fluido pequeño' },
    { name: 'Fluid MD', value: 'var(--spacing-fluid-md)', description: 'Espaciado fluido medio' },
    { name: 'Fluid LG', value: 'var(--spacing-fluid-lg)', description: 'Espaciado fluido grande' },
    { name: 'Fluid XL', value: 'var(--spacing-fluid-xl)', description: 'Espaciado fluido extra grande' },
    { name: 'Fluid 2XL', value: 'var(--spacing-fluid-2xl)', description: 'Espaciado fluido 2X grande' },
    { name: 'Fluid 3XL', value: 'var(--spacing-fluid-3xl)', description: 'Espaciado fluido 3X grande' },
  ];

  return (
    <div className={`${styles.spacingDemo} ${className || ''}`}>
      {/* Espaciados Fijos */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Espaciados Fijos</h3>
        <p className={styles.sectionDescription}>
          Espaciados fijos en píxeles que se mantienen constantes en todos los dispositivos.
        </p>
        <div className={styles.spacingGrid}>
          {spacingTokens.map((token) => (
            <div key={token.name} className={styles.spacingItem}>
              <div className={styles.spacingVisual}>
                <div
                  className={styles.spacingBar}
                  style={{
                    height: token.value,
                    backgroundColor: 'var(--color-primary-500)'
                  }}
                />
              </div>
              <div className={styles.spacingInfo}>
                <div className={styles.spacingName}>{token.name}</div>
                <div className={styles.spacingValue}>{token.value}</div>
                <div className={styles.spacingSize}>{token.size}</div>
                <div className={styles.spacingDescription}>{token.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Espaciados Fluid */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Espaciados Fluid</h3>
        <p className={styles.sectionDescription}>
          Espaciados fluidos que se adaptan automáticamente al tamaño de la pantalla usando clamp().
        </p>
        <div className={styles.spacingGrid}>
          {fluidSpacingTokens.map((token) => (
            <div key={token.name} className={styles.spacingItem}>
              <div className={styles.spacingVisual}>
                <div
                  className={styles.spacingBarFluid}
                  style={{
                    height: token.value,
                    backgroundColor: 'var(--color-secondary-500)'
                  }}
                />
              </div>
              <div className={styles.spacingInfo}>
                <div className={styles.spacingName}>{token.name}</div>
                <div className={styles.spacingValue}>{token.value}</div>
                <div className={styles.spacingDescription}>{token.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparación Visual */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Comparación Visual</h3>
        <p className={styles.sectionDescription}>
          Comparación entre espaciados fijos y fluidos en diferentes tamaños de pantalla.
        </p>
        <div className={styles.comparisonContainer}>
          <div className={styles.comparisonItem}>
            <h4 className={styles.comparisonTitle}>Fijo (MD)</h4>
            <div className={styles.comparisonVisual}>
              <div className={styles.box} style={{ marginBottom: 'var(--spacing-md)' }}>Box 1</div>
              <div className={styles.box} style={{ marginBottom: 'var(--spacing-md)' }}>Box 2</div>
              <div className={styles.box}>Box 3</div>
            </div>
          </div>
          <div className={styles.comparisonItem}>
            <h4 className={styles.comparisonTitle}>Fluido (MD)</h4>
            <div className={styles.comparisonVisual}>
              <div className={styles.box} style={{ marginBottom: 'var(--spacing-fluid-md)' }}>Box 1</div>
              <div className={styles.box} style={{ marginBottom: 'var(--spacing-fluid-md)' }}>Box 2</div>
              <div className={styles.box}>Box 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

SpacingDemo.displayName = 'SpacingDemo';
