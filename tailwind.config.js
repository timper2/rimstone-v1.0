/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        slate: {
          200: '#e7e0d5',
          300: '#cfc4b5',
          400: '#aa9d8d',
          500: '#827567',
          900: '#3f3932',
          950: '#28241f',
        },
        accent: {
          DEFAULT: '#c49a68',
          soft: '#d8b88d',
          deep: '#9c7448',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.9s ease-out both',
      },
    },
  },
  plugins: [],
};
