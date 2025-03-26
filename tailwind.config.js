/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917'
        },
        sage: {
          50: '#f8faf8',
          100: '#f1f4f1',
          200: '#e2e8e3',
          300: '#cdd6cf',
          400: '#a7b5aa',
          500: '#818f84',
          600: '#636e65',
          700: '#4a524b',
          800: '#333a34',
          900: '#1e211f'
        }
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-prose-body)',
            lineHeight: '1.75'
          }
        }
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0,0,0,0.05)',
        'subtle-lg': '0 2px 6px rgba(0,0,0,0.05)'
      }
    }
  },
  plugins: []
}
