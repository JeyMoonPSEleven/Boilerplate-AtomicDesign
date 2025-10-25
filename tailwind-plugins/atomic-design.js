const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, addComponents, addUtilities, theme }) {

    /* === LAYER BASE - Elementos HTML fundamentales === */
    addBase({
        '@layer base': {
            'html': {
                scrollBehavior: 'smooth',
                scrollPaddingTop: theme('spacing.lg'),
            },
            'body': {
                fontFamily: theme('fontFamily.base'),
                fontSize: theme('fontSize.base'),
                lineHeight: theme('lineHeight.normal'),
                color: theme('colors.text.primary'),
                backgroundColor: theme('colors.bg.body'),
            },
            'a': {
                color: theme('colors.text.accent'),
                textDecoration: 'none',
                transition: theme('transitionDuration.base'),
            },
            'a:hover': {
                color: theme('colors.primary.700'),
            },
            'h1, h2, h3, h4, h5, h6': {
                fontFamily: theme('fontFamily.heading'),
                fontWeight: theme('fontWeight.semibold'),
                lineHeight: theme('lineHeight.tight'),
            },
        }
    })

    /* === ATOMS - Componentes base reutilizables === */
    addComponents({
        '@layer components': {

            /* Button Atom */
            '.btn': {
                '@apply': 'inline-flex items-center justify-center px-lg py-md rounded-md font-medium transition-all cursor-pointer',
                '&:focus-visible': {
                    '@apply': 'outline-2 outline-offset-2',
                    outlineColor: theme('colors.border.focus'),
                },
            },

            '.btn-primary': {
                '@apply': 'btn bg-primary-500 text-text-on-primary hover:bg-primary-600 active:bg-primary-700',
            },

            '.btn-secondary': {
                '@apply': 'btn bg-secondary-500 text-text-on-secondary hover:bg-secondary-600',
            },

            '.btn-outline': {
                '@apply': 'btn bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
            },

            '.btn-ghost': {
                '@apply': 'btn bg-transparent text-primary-500 hover:bg-primary-50',
            },

            '.btn-success': {
                '@apply': 'btn bg-success-500 text-text-on-success hover:bg-success-600',
            },

            '.btn-warning': {
                '@apply': 'btn bg-warning-500 text-text-on-warning hover:bg-warning-600',
            },

            '.btn-danger': {
                '@apply': 'btn bg-danger-500 text-text-on-danger hover:bg-danger-600',
            },

            /* Input Atom */
            '.input': {
                '@apply': 'w-full px-md py-sm rounded-md border border-border-primary bg-bg-primary font-base text-text-primary transition-all',
                '&:focus': {
                    '@apply': 'border-border-focus ring-2 ring-opacity-10',
                    ringColor: theme('colors.primary.500'),
                },
                '&:disabled': {
                    '@apply': 'bg-gray-100 text-text-muted cursor-not-allowed opacity-60',
                },
            },

            /* Card Atom */
            '.card': {
                '@apply': 'rounded-lg border border-border-light bg-bg-primary shadow-sm p-lg transition-all',
            },

            '.card:hover': {
                '@apply': 'shadow-md',
            },

            /* Badge Atom */
            '.badge': {
                '@apply': 'inline-flex items-center px-sm py-xs rounded-full text-xs font-semibold',
            },

            '.badge-primary': {
                '@apply': 'badge bg-primary-100 text-primary-700',
            },

            '.badge-success': {
                '@apply': 'badge bg-success-100 text-success-800',
            },

            '.badge-warning': {
                '@apply': 'badge bg-warning-100 text-warning-800',
            },

            '.badge-danger': {
                '@apply': 'badge bg-danger-100 text-danger-800',
            },

            /* Alert Atom */
            '.alert': {
                '@apply': 'p-md rounded-md border',
            },

            '.alert-success': {
                '@apply': 'alert bg-success-50 border-success-200 text-success-800',
            },

            '.alert-warning': {
                '@apply': 'alert bg-warning-50 border-warning-200 text-warning-800',
            },

            '.alert-danger': {
                '@apply': 'alert bg-danger-50 border-danger-200 text-danger-800',
            },

            '.alert-info': {
                '@apply': 'alert bg-info-50 border-info-200 text-info-800',
            },

            /* Spinner Atom */
            '.spinner': {
                '@apply': 'inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent',
            },

            /* Divider Atom */
            '.divider': {
                '@apply': 'border-t border-border-light',
            },

            /* Progress Atom */
            '.progress': {
                '@apply': 'w-full bg-gray-200 rounded-full overflow-hidden',
            },

            '.progress-bar': {
                '@apply': 'h-full bg-primary-500 transition-all duration-base',
            },
        }
    })

    /* === UTILIDADES CUSTOM === */
    addUtilities({
        '@layer utilities': {

            /* Flex utilities */
            '.flex-center': {
                '@apply': 'flex items-center justify-center',
            },

            '.flex-between': {
                '@apply': 'flex items-center justify-between',
            },

            '.flex-start': {
                '@apply': 'flex items-center justify-start',
            },

            '.flex-end': {
                '@apply': 'flex items-center justify-end',
            },

            /* Text utilities */
            '.truncate-lines-2': {
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
            },

            '.truncate-lines-3': {
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical',
            },

            /* Aspect ratios */
            '.aspect-video': {
                '@apply': 'aspect-video',
            },

            '.aspect-square': {
                '@apply': 'aspect-square',
            },

            /* Container */
            '.container-fluid': {
                '@apply': 'w-full px-md mx-auto',
            },

            /* Focus utilities */
            '.focus-ring': {
                '@apply': 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
            },

            /* Animation utilities */
            '.animate-fade-in': {
                animation: 'fadeIn 0.3s ease-in-out',
            },

            '.animate-slide-up': {
                animation: 'slideUp 0.3s ease-out',
            },

            '.animate-slide-down': {
                animation: 'slideDown 0.3s ease-out',
            },

            /* Shadow utilities */
            '.shadow-focus': {
                boxShadow: theme('boxShadow.focus'),
            },

            '.shadow-focus-ring': {
                boxShadow: theme('boxShadow.focus-ring'),
            },
        }
    })
}, {
    theme: {
        /* Extensiones de tema si es necesario */
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
})
