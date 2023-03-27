/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F7F5F4',
          500: '#7E7E7E',
          800: '#282A2E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        title: ['Raleway', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
