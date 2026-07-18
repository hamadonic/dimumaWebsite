/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dimuma brand palette — mirrors the ESG platform.
        navy: '#2B2A66',
        'navy-600': '#413f8f',
        teal: '#5FB496',
        emerald: {
          DEFAULT: '#059669',
          light: '#34d399',
          700: '#047857',
        },
        indigo: '#6366f1',
        deep: '#0b1120', // dark hero canvas
        panel: '#111827', // dark surfaces
        canvas: '#f4f6f8', // light section canvas
        subtle: '#e5e7eb', // hairline borders
        ink: '#0f172a',
        muted: '#64748b',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      fontFamily: {
        sans: [
          '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
          'Helvetica', 'Arial', 'sans-serif',
        ],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
