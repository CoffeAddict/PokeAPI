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
        'poke-yellow': '#ECA539',
        'poke-gray-100': '#BFBFBF',
        'poke-gray-200': '#C4C4C4',
        'poke-gray-300': '#5E5E5E',
        'poke-gray-400': '#353535',
        'poke-white-100': '#F9F9F9',
        'poke-white-200': '#E8E8E8',
      },
    },
  },
  plugins: [],
}
