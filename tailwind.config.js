/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './src/**/*.html',
        './index.html'
    ],

    theme: {
        /* Extender el tema de Tailwind con nuestros tokens */
        extend: {
            /* === COLORES DESDE NUESTROS TOKENS === */
            colors: {
                /* Colores primarios - mapeados desde --color-primary-* */
                primary: {
                    50: 'var(--color-primary-50)',
                    100: 'var(--color-primary-100)',
                    200: 'var(--color-primary-200)',
                    300: 'var(--color-primary-300)',
                    400: 'var(--color-primary-400)',
                    500: 'var(--color-primary-500)',
                    600: 'var(--color-primary-600)',
                    700: 'var(--color-primary-700)',
                    800: 'var(--color-primary-800)',
                    900: 'var(--color-primary-900)',
                    950: 'var(--color-primary-950)',
                },

                /* Colores secundarios */
                secondary: {
                    50: 'var(--color-secondary-50)',
                    100: 'var(--color-secondary-100)',
                    200: 'var(--color-secondary-200)',
                    300: 'var(--color-secondary-300)',
                    400: 'var(--color-secondary-400)',
                    500: 'var(--color-secondary-500)',
                    600: 'var(--color-secondary-600)',
                    700: 'var(--color-secondary-700)',
                    800: 'var(--color-secondary-800)',
                    900: 'var(--color-secondary-900)',
                    950: 'var(--color-secondary-950)',
                },

                /* Colores semánticos */
                success: {
                    50: 'var(--color-success-50)',
                    100: 'var(--color-success-100)',
                    200: 'var(--color-success-200)',
                    300: 'var(--color-success-300)',
                    400: 'var(--color-success-400)',
                    500: 'var(--color-success-500)',
                    600: 'var(--color-success-600)',
                    700: 'var(--color-success-700)',
                    800: 'var(--color-success-800)',
                    900: 'var(--color-success-900)',
                    950: 'var(--color-success-950)',
                },

                warning: {
                    50: 'var(--color-warning-50)',
                    100: 'var(--color-warning-100)',
                    200: 'var(--color-warning-200)',
                    300: 'var(--color-warning-300)',
                    400: 'var(--color-warning-400)',
                    500: 'var(--color-warning-500)',
                    600: 'var(--color-warning-600)',
                    700: 'var(--color-warning-700)',
                    800: 'var(--color-warning-800)',
                    900: 'var(--color-warning-900)',
                    950: 'var(--color-warning-950)',
                },

                danger: {
                    50: 'var(--color-danger-50)',
                    100: 'var(--color-danger-100)',
                    200: 'var(--color-danger-200)',
                    300: 'var(--color-danger-300)',
                    400: 'var(--color-danger-400)',
                    500: 'var(--color-danger-500)',
                    600: 'var(--color-danger-600)',
                    700: 'var(--color-danger-700)',
                    800: 'var(--color-danger-800)',
                    900: 'var(--color-danger-900)',
                    950: 'var(--color-danger-950)',
                },

                info: {
                    50: 'var(--color-info-50)',
                    100: 'var(--color-info-100)',
                    200: 'var(--color-info-200)',
                    300: 'var(--color-info-300)',
                    400: 'var(--color-info-400)',
                    500: 'var(--color-info-500)',
                    600: 'var(--color-info-600)',
                    700: 'var(--color-info-700)',
                    800: 'var(--color-info-800)',
                    900: 'var(--color-info-900)',
                    950: 'var(--color-info-950)',
                },

                /* Grises */
                gray: {
                    50: 'var(--color-gray-50)',
                    100: 'var(--color-gray-100)',
                    200: 'var(--color-gray-200)',
                    300: 'var(--color-gray-300)',
                    400: 'var(--color-gray-400)',
                    500: 'var(--color-gray-500)',
                    600: 'var(--color-gray-600)',
                    700: 'var(--color-gray-700)',
                    800: 'var(--color-gray-800)',
                    900: 'var(--color-gray-900)',
                    950: 'var(--color-gray-950)',
                },

                /* Colores de texto */
                text: {
                    primary: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                    muted: 'var(--color-text-muted)',
                    accent: 'var(--color-text-accent)',
                    'on-primary': 'var(--color-text-on-primary)',
                    'on-secondary': 'var(--color-text-on-secondary)',
                    'on-success': 'var(--color-text-on-success)',
                    'on-warning': 'var(--color-text-on-warning)',
                    'on-danger': 'var(--color-text-on-danger)',
                    'on-info': 'var(--color-text-on-info)',
                },

                /* Colores de fondo */
                bg: {
                    primary: 'var(--color-background-primary)',
                    secondary: 'var(--color-background-secondary)',
                    tertiary: 'var(--color-background-tertiary)',
                    body: 'var(--color-background-body)',
                    dark: 'var(--color-background-dark)',
                    overlay: 'var(--color-background-overlay)',
                },

                /* Colores de borde */
                border: {
                    primary: 'var(--color-border-primary)',
                    secondary: 'var(--color-border-secondary)',
                    light: 'var(--color-border-light)',
                    focus: 'var(--color-border-focus)',
                    error: 'var(--color-border-error)',
                    success: 'var(--color-border-success)',
                    warning: 'var(--color-border-warning)',
                    danger: 'var(--color-border-danger)',
                },
            },

            /* === ESPACIADO DESDE NUESTROS TOKENS === */
            spacing: {
                xs: 'var(--spacing-xs)',     /* 4px */
                sm: 'var(--spacing-sm)',     /* 8px */
                md: 'var(--spacing-md)',     /* 16px */
                lg: 'var(--spacing-lg)',     /* 24px */
                xl: 'var(--spacing-xl)',     /* 32px */
                xxl: 'var(--spacing-xxl)',   /* 48px */
                xxxl: 'var(--spacing-xxxl)', /* 64px */
                '4xl': 'var(--spacing-4xl)', /* 80px */
                '5xl': 'var(--spacing-5xl)', /* 96px */
                '6xl': 'var(--spacing-6xl)', /* 128px */
                '7xl': 'var(--spacing-7xl)', /* 160px */
                '8xl': 'var(--spacing-8xl)', /* 192px */
                '9xl': 'var(--spacing-9xl)', /* 224px */
                '10xl': 'var(--spacing-10xl)', /* 256px */
            },

            /* === TIPOGRAFÍA DESDE NUESTROS TOKENS === */
            fontSize: {
                xs: 'var(--font-size-xs)',
                sm: 'var(--font-size-sm)',
                base: 'var(--font-size-base)',
                lg: 'var(--font-size-lg)',
                xl: 'var(--font-size-xl)',
                '2xl': 'var(--font-size-2xl)',
                '3xl': 'var(--font-size-3xl)',
                '4xl': 'var(--font-size-4xl)',
                '5xl': 'var(--font-size-5xl)',
                '6xl': 'var(--font-size-6xl)',
                '7xl': 'var(--font-size-7xl)',
                '8xl': 'var(--font-size-8xl)',
                '9xl': 'var(--font-size-9xl)',
            },

            fontFamily: {
                base: 'var(--font-family-base)',
                heading: 'var(--font-family-heading)',
                mono: 'var(--font-family-mono)',
            },

            fontWeight: {
                thin: 'var(--font-weight-thin)',
                light: 'var(--font-weight-light)',
                normal: 'var(--font-weight-normal)',
                medium: 'var(--font-weight-medium)',
                semibold: 'var(--font-weight-semibold)',
                bold: 'var(--font-weight-bold)',
                extrabold: 'var(--font-weight-extrabold)',
                black: 'var(--font-weight-black)',
            },

            lineHeight: {
                none: 'var(--line-height-none)',
                tight: 'var(--line-height-tight)',
                normal: 'var(--line-height-normal)',
                relaxed: 'var(--line-height-relaxed)',
                loose: 'var(--line-height-loose)',
            },

            /* === BORDES DESDE NUESTROS TOKENS === */
            borderRadius: {
                none: 'var(--border-radius-none)',
                xs: 'var(--border-radius-xs)',
                sm: 'var(--border-radius-sm)',
                md: 'var(--border-radius-md)',
                lg: 'var(--border-radius-lg)',
                xl: 'var(--border-radius-xl)',
                '2xl': 'var(--border-radius-2xl)',
                '3xl': 'var(--border-radius-3xl)',
                full: 'var(--border-radius-full)',
            },

            borderWidth: {
                0: '0',
                1: 'var(--border-width-1)',
                2: 'var(--border-width-2)',
                3: 'var(--border-width-3)',
                4: 'var(--border-width-4)',
                5: 'var(--border-width-5)',
                6: 'var(--border-width-6)',
                8: 'var(--border-width-8)',
            },

            /* === SOMBRAS DESDE NUESTROS TOKENS === */
            boxShadow: {
                none: 'none',
                xs: 'var(--shadow-xs)',
                sm: 'var(--shadow-sm)',
                md: 'var(--shadow-md)',
                lg: 'var(--shadow-lg)',
                xl: 'var(--shadow-xl)',
                '2xl': 'var(--shadow-2xl)',
                '3xl': 'var(--shadow-3xl)',
                inner: 'var(--shadow-inner)',
                focus: 'var(--shadow-focus)',
                'focus-ring': 'var(--shadow-focus-ring)',
            },

            /* === TRANSICIONES DESDE NUESTROS TOKENS === */
            transitionDuration: {
                0: '0ms',
                instant: 'var(--animation-duration-instant)',
                fast: 'var(--animation-duration-fast)',
                normal: 'var(--animation-duration-normal)',
                base: 'var(--animation-duration-base)',
                slow: 'var(--animation-duration-slow)',
                slower: 'var(--animation-duration-slower)',
                slowest: 'var(--animation-duration-slowest)',
                75: '75ms',
                100: '100ms',
                150: '150ms',
                200: '200ms',
                300: '300ms',
                500: '500ms',
                700: '700ms',
                1000: '1000ms',
            },

            transitionTimingFunction: {
                linear: 'linear',
                in: 'cubic-bezier(0.4, 0, 1, 1)',
                out: 'cubic-bezier(0, 0, 0.2, 1)',
                'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
                'ease-in': 'var(--ease-in)',
                'ease-out': 'var(--ease-out)',
                'ease-in-out': 'var(--ease-in-out)',
                smooth: 'var(--ease-smooth)',
                bounce: 'var(--ease-bounce)',
                spring: 'var(--ease-spring)',
                expo: 'var(--ease-expo)',
                circ: 'var(--ease-circ)',
                quart: 'var(--ease-quart)',
                quint: 'var(--ease-quint)',
                sine: 'var(--ease-sine)',
            },

            /* === ANIMACIONES PERSONALIZADAS === */
            animation: {
                'fade-in': 'var(--animation-fade-in)',
                'fade-out': 'var(--animation-fade-out)',
                'slide-up': 'var(--animation-slide-up)',
                'slide-down': 'var(--animation-slide-down)',
                'slide-left': 'var(--animation-slide-left)',
                'slide-right': 'var(--animation-slide-right)',
                'scale-in': 'var(--animation-scale-in)',
                'scale-out': 'var(--animation-scale-out)',
                'bounce-in': 'var(--animation-bounce-in)',
                'shake': 'var(--animation-shake)',
                'pulse': 'var(--animation-pulse)',
                'spin': 'var(--animation-spin)',
                'ping': 'var(--animation-ping)',
            },

            /* === DELAYS DE ANIMACIÓN === */
            animationDelay: {
                0: 'var(--animation-delay-0)',
                1: 'var(--animation-delay-1)',
                2: 'var(--animation-delay-2)',
                3: 'var(--animation-delay-3)',
                4: 'var(--animation-delay-4)',
                5: 'var(--animation-delay-5)',
                6: 'var(--animation-delay-6)',
                7: 'var(--animation-delay-7)',
                8: 'var(--animation-delay-8)',
                9: 'var(--animation-delay-9)',
                10: 'var(--animation-delay-10)',
            },

            /* === BREAKPOINTS PERSONALIZADOS === */
            screens: {
                xs: '0',
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1400px',
            },

            /* === CONTENEDORES === */
            maxWidth: {
                sm: 'var(--container-sm)',
                md: 'var(--container-md)',
                lg: 'var(--container-lg)',
                xl: 'var(--container-xl)',
                '2xl': 'var(--container-xxl)',
            },

            /* === Z-INDEX === */
            zIndex: {
                hide: 'var(--z-index-hide)',
                auto: 'auto',
                base: 'var(--z-index-base)',
                docked: 'var(--z-index-docked)',
                dropdown: 'var(--z-index-dropdown)',
                sticky: 'var(--z-index-sticky)',
                banner: 'var(--z-index-banner)',
                overlay: 'var(--z-index-overlay)',
                modal: 'var(--z-index-modal)',
                popover: 'var(--z-index-popover)',
                skipLink: 'var(--z-index-skipLink)',
                toast: 'var(--z-index-toast)',
                tooltip: 'var(--z-index-tooltip)',
            },
        },
    },

    /* Plugins personalizados */
    plugins: [
        // Plugin para componentes Atomic Design
        require('./tailwind-plugins/atomic-design.js'),
    ],
}
