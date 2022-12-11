const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    boxShadow: {
      base: 'var(--shadow-base)',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        xxs: '16px',
        md: '20px',
        lg: '52px',
        xl: '150px',
      },
    },
    screens: {
      xxs: '375px',
      xs: '480px',
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      accent: 'var(--accent)',
      background: 'var(--background)',
      'font-primary': 'var(--font-primary)',
      'font-secondary': 'var(--font-secondary)',
      decorative: 'var(--decorative)',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '5xl': ['3rem', '1.15'],
        '6xl': ['3.75rem', '1.15'],
        '7xl': ['4.5rem', '1.15'],
        '8xl': ['6rem', '1.15'],
        '9xl': ['8rem', '1.15'],
      },
      transitionDuration: {
        0: '0ms',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        // Logical margins
        {
          mis: (value) => ({
            marginInlineStart: value,
          }),
          mie: (value) => ({
            marginInlineEnd: value,
          }),
        },
        { values: theme('margin') }
      );
    }),
  ],
};
