/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto','Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}