/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lines': 'url("./src/assets/Lines.jpg")'
      }
    },
  },
  plugins: [],
}