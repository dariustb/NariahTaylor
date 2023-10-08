/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nt-grey': '#1e1e1e',
        'nt-white': '#f0ead6'
      },
      fontFamily: {
        'bon':        ['BonVivant', 'serif'],
        'bonbold':    ['BonVivantBold', 'serif'],
        'bonscript':  ['BonVivantScript', 'script']
      }
    },
  },
  plugins: []
};
