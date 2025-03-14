/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        helvetica: ['Helvetica', 'sans-serif'],
        helveticaRounded: ['Helvetica Rounded', 'sans-serif'],
      }
    },
  },
  plugins: [],
}