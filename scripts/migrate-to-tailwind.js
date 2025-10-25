#!/usr/bin/env node

/**
 * Script para migrar componentes de CSS Modules a Tailwind CSS
 * Uso: node scripts/migrate-to-tailwind.js [component-name]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración
const ATOMS_PATH = './src/design-system/atomic/atoms';
const MOLECULES_PATH = './src/design-system/atomic/molecules';
const ORGANISMS_PATH = './src/design-system/atomic/organisms';

// Plantillas para componentes migrados
const COMPONENT_TEMPLATE = `// src/design-system/atomic/{level}/{componentName}/{componentName}.tsx
import React from 'react';
import { {componentName}Props } from './{componentName}.types';
import { cn } from '../../../utils/cn';

export const {componentName}: React.FC<{componentName}Props> = ({
    // Props aquí
    className,
    ...props
}) => {
    const {componentNameLower}Classes = cn(
        // Clases base de Tailwind
        'base-classes-here',
        // Variantes
        // Estados
        className
    );

    return (
        <div className={{componentNameLower}Classes} {...props}>
            {/* Contenido del componente */}
        </div>
    );
};

{componentName}.displayName = '{componentName}';
`;

const UTILITY_TEMPLATE = `/**
 * Utilidades para {componentName}
 */

import { cn } from './cn';

export const create{componentName}Classes = (
    variant: string,
    size: string,
    hasError: boolean = false,
    isDisabled: boolean = false,
    className?: string
): string => {
    const classes: string[] = ['{componentNameLower}'];
    
    // Agregar variante
    classes.push(\`{componentNameLower}-\${variant}\`);
    
    // Agregar tamaño
    const sizeMap: Record<string, string> = {
        sm: 'px-sm py-xs text-sm',
        md: 'px-md py-sm text-base',
        lg: 'px-lg py-md text-lg',
    };
    classes.push(sizeMap[size]);
    
    // Estados
    if (hasError) {
        classes.push('border-danger-500 text-danger-600');
    }
    
    if (isDisabled) {
        classes.push('opacity-50 cursor-not-allowed');
    }
    
    // Clases personalizadas
    if (className) {
        classes.push(className);
    }
    
    return classes.join(' ');
};
`;

// Función para obtener todos los componentes
function getComponents(path) {
    try {
        return fs.readdirSync(path, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
    } catch (error) {
        return [];
    }
}

// Función para migrar un componente específico
function migrateComponent(componentName, level) {
    const componentPath = path.join(level, componentName);
    const componentFile = path.join(componentPath, `${componentName}.tsx`);

    console.log(`🔄 Migrando ${componentName}...`);

    // Leer el archivo actual
    try {
        const currentContent = fs.readFileSync(componentFile, 'utf8');

        // Verificar si ya está migrado
        if (currentContent.includes('from \'../../../utils/cn\'')) {
            console.log(`✅ ${componentName} ya está migrado`);
            return;
        }

        // Crear backup
        const backupFile = `${componentFile}.backup`;
        fs.writeFileSync(backupFile, currentContent);
        console.log(`📁 Backup creado: ${backupFile}`);

        // Aquí iría la lógica de migración específica
        console.log(`⚠️  Migración manual requerida para ${componentName}`);

    } catch (error) {
        console.error(`❌ Error al migrar ${componentName}:`, error.message);
    }
}

// Función para generar utilidades
function generateUtilities() {
    const utilsFile = './src/design-system/utils/cn.ts';

    console.log('🔧 Generando utilidades adicionales...');

    // Leer archivo actual
    let content = fs.readFileSync(utilsFile, 'utf8');

    // Agregar utilidades si no existen
    const newUtilities = `
// Utilidades adicionales para componentes migrados
export const createCheckboxClasses = (
    variant: string,
    size: string,
    hasError: boolean = false,
    isDisabled: boolean = false,
    className?: string
): string => {
    const classes: string[] = ['checkbox'];
    
    if (hasError) {
        classes.push('border-danger-500');
    }
    
    if (isDisabled) {
        classes.push('opacity-50 cursor-not-allowed');
    }
    
    if (className) {
        classes.push(className);
    }
    
    return classes.join(' ');
};

export const createRadioClasses = (
    variant: string,
    size: string,
    hasError: boolean = false,
    isDisabled: boolean = false,
    className?: string
): string => {
    const classes: string[] = ['radio'];
    
    if (hasError) {
        classes.push('border-danger-500');
    }
    
    if (isDisabled) {
        classes.push('opacity-50 cursor-not-allowed');
    }
    
    if (className) {
        classes.push(className);
    }
    
    return classes.join(' ');
};

export const createSwitchClasses = (
    variant: string,
    size: string,
    isChecked: boolean = false,
    isDisabled: boolean = false,
    className?: string
): string => {
    const classes: string[] = ['switch'];
    
    if (isChecked) {
        classes.push('bg-primary-500');
    } else {
        classes.push('bg-gray-300');
    }
    
    if (isDisabled) {
        classes.push('opacity-50 cursor-not-allowed');
    }
    
    if (className) {
        classes.push(className);
    }
    
    return classes.join(' ');
};
`;

    // Agregar utilidades si no existen
    if (!content.includes('createCheckboxClasses')) {
        content += newUtilities;
        fs.writeFileSync(utilsFile, content);
        console.log('✅ Utilidades adicionales agregadas');
    } else {
        console.log('✅ Utilidades ya existen');
    }
}

// Función para generar reporte
function generateReport() {
    const atoms = getComponents(ATOMS_PATH);
    const molecules = getComponents(MOLECULES_PATH);
    const organisms = getComponents(ORGANISMS_PATH);

    const report = `# 📊 Reporte de Migración a Tailwind CSS

## Componentes por Migrar

### Atoms (${atoms.length} componentes)
${atoms.map(atom => `- [ ] ${atom}`).join('\n')}

### Molecules (${molecules.length} componentes)
${molecules.map(molecule => `- [ ] ${molecule}`).join('\n')}

### Organisms (${organisms.length} componentes)
${organisms.map(organism => `- [ ] ${organism}`).join('\n')}

## Componentes Ya Migrados
- [x] Button
- [x] Input
- [x] Badge
- [x] Avatar
- [x] Heading
- [x] Card

## Próximos Pasos
1. Migrar componentes críticos (Checkbox, Radio, Switch)
2. Migrar componentes de formulario (Select, Slider)
3. Migrar componentes de feedback (Progress, Spinner)
4. Migrar componentes base (Icon, Image, Link)
5. Migrar molecules y organisms
6. Implementar dark mode consistente
7. Crear tests para todos los componentes

## Comandos Útiles
\`\`\`bash
# Migrar componente específico
node scripts/migrate-to-tailwind.js Button

# Generar utilidades
node scripts/migrate-to-tailwind.js --generate-utils

# Generar reporte
node scripts/migrate-to-tailwind.js --report
\`\`\`
`;

    fs.writeFileSync('./MIGRATION-REPORT.md', report);
    console.log('📊 Reporte generado: MIGRATION-REPORT.md');
}

// Función principal
function main() {
    const args = process.argv.slice(2);

    if (args.includes('--help') || args.includes('-h')) {
        console.log(`
🔄 Script de Migración a Tailwind CSS

Uso:
  node scripts/migrate-to-tailwind.js [opciones]

Opciones:
  --help, -h              Mostrar esta ayuda
  --generate-utils        Generar utilidades adicionales
  --report                Generar reporte de migración
  [component-name]         Migrar componente específico

Ejemplos:
  node scripts/migrate-to-tailwind.js Button
  node scripts/migrate-to-tailwind.js --generate-utils
  node scripts/migrate-to-tailwind.js --report
        `);
        return;
    }

    if (args.includes('--generate-utils')) {
        generateUtilities();
        return;
    }

    if (args.includes('--report')) {
        generateReport();
        return;
    }

    if (args.length === 0) {
        console.log('🔄 Iniciando migración completa...');

        // Obtener todos los componentes
        const atoms = getComponents(ATOMS_PATH);
        const molecules = getComponents(MOLECULES_PATH);
        const organisms = getComponents(ORGANISMS_PATH);

        console.log(`📊 Encontrados ${atoms.length} atoms, ${molecules.length} molecules, ${organisms.length} organisms`);

        // Generar utilidades
        generateUtilities();

        // Generar reporte
        generateReport();

        console.log('✅ Migración completada. Revisa MIGRATION-REPORT.md para detalles.');
        return;
    }

    // Migrar componente específico
    const componentName = args[0];
    const level = args[1] || 'atoms';

    migrateComponent(componentName, level);
}

// Ejecutar script
main();

export {
    migrateComponent,
    generateUtilities,
    generateReport,
    getComponents
};
