/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      colors: {
        arduinoReact: '#4dc0c8',
        codeBg: '#252b37'
      },
    },
  },
  plugins: [],
}

