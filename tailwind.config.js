/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'white-secondary' : '#f3f1ef',
        'black' : '#252732'
      }
    },
  },
  plugins: [],
  variants: ["active"],
}
