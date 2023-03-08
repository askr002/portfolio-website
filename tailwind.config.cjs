/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
        'montserrat': ["Montserrat", "sans-serif"]
      },
      colors: {
        'primary': '#3A015C',
        'secondary': '#4F0147'
      }
    },
  },
  plugins: [],
}