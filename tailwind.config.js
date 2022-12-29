/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#131715',
        darkCard: '#1B1E1F',
        darkButton: '#6867AC',
        darkHover: '#1B1E1F',
        darkText: '#ffffff',
        darkBorder: '#272B2A',
        primary: '#00BEA4',
      },
    },
  },
  plugins: [],
}