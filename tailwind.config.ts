import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#041627',
          900: '#042342',
          800: '#07223B',
          700: '#2B5173',
        },
        crimson: {
          DEFAULT: '#C23528',
          500: '#FF5748',
          900: '#961408',
        },
        bone: '#F6F6F6',
        ash: '#EFEFEF',
        muted: '#6B6B6B',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      letterSpacing: {
        accent: '1.2px',
      },
    },
  },
  plugins: [],
};
export default config;
