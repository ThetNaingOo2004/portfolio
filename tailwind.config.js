/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ice: {
          50: '#F5F9FF',
          100: '#EAF2FF',
          200: '#D6E6FF',
          300: '#B8D3FE',
        },
        navy: {
          950: '#071533',
          900: '#0B1F4B',
          800: '#142F6B',
          700: '#21458F',
          600: '#3359A8',
        },
        cobalt: {
          500: '#3B6FD4',
          600: '#2B5BA9',
        },
        slateink: '#3C5075',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        editorial: '0 12px 36px -16px rgba(11, 31, 75, 0.14)',
        card: '0 4px 20px -6px rgba(11, 31, 75, 0.08)',
      },
    },
  },
  plugins: [],
};
