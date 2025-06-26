/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cream': '#FFF8F1',
        'dark-gray': '#353535',
        'primary': '#107A72',
        'secondary': '#F7A432',
        'tertiary-dark': '#2E3047',
        'tertiary-red': '#E84855',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'semibold': '600',
        'black': '900',
      },
    },
  },
  plugins: [],
};