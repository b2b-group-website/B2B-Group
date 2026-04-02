/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cream': '#F8FAFC',
        'dark-gray': '#0F172A',
        'primary': '#107A72',
        'primary-dark': '#0D625A',
        'secondary': '#F7A432',
        'tertiary-dark': '#1E293B',
        'tertiary-red': '#E84855',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'black': '900',
      },
    },
  },
  plugins: [],
};