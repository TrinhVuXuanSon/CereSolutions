/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        secondary: '#374151',
        textprimary: '#f97316',
        textsecondary: '#22c55e'
      },

      fontFamily: {
        custom: ['"Pacifico"', 'cursive'],
      },
    },
  },
  plugins: [],
}