/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arduinoReact: '#4dc0c8',
        codeBg: '#252b37'
      },
    },
  },
  plugins: [],
}

