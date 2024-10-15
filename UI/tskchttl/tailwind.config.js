/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        maincolor:{
          light: '#ffffff',
          DEFAULT: '#2673b4',
          darkblue: '#004689',
          customorange: '#ff8400',
          bg: '#e9ecef',
          hover: '#639ecf',
        },
      },
    },
  },
  plugins: [
  ],
}

