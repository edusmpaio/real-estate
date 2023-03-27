/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'login-house': "url('/login-house.jpg')",
      },
      colors: {
        gray: {
          100: '#F7F5F4',
          500: '#7E7E7E',
          800: '#282A2E',
          900: '#212225',
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
