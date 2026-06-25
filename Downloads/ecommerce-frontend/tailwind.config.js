 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myntra: '#171717',
        'myntra-dark': '#000000',
        'myntra-light': '#f5f5f5',
        brand: '#171717',
        'brand-soft': '#f5f5f5',
      },
      fontFamily: {
        assistant: ['Assistant', 'sans-serif'],
      },
    },
  },
  plugins: [],
}