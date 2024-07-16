/** @type {import('tailwindcss').Config} */
const { scrollbarGutter, scrollbarWidth, scrollbarColor } = require('tailwind-scrollbar-utilities');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      quickSand: ['Quicksand', 'sans-serif'],
      monoton: ['Monoton', 'sans-serif'],
    },
  },
  plugins: [
    scrollbarGutter(), 
    scrollbarWidth(), 
    scrollbarColor(), 
  ],
}

