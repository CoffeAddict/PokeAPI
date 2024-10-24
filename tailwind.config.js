/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'poke-red': '#F22539',
        'poke-red-dark': '#D11518',
        'poke-gray': '#C4C4C4',
        'poke-dark-gray': '#5E5E5E',
        'poke-light-gray': '#C4C4C4',
        'poke-white': '#F9F9F9',
      },
    },
  },
  plugins: [],
}
