import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem' },
      screens: {
        sm: '540px',
        md: '640px',
        lg: '768px',
        xl: '980px',
        '2xl': '1156px',
      },
    },
    extend: {
      fontFamily: {
        primary: ['Kosugi Maru', ...defaultTheme.fontFamily.sans],
        secondary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
