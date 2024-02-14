/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html', './src/**/*.astro', './src/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          padding: theme('spacing.4'),
          margin: 'auto',
        },
      });
    },
  ],
};
