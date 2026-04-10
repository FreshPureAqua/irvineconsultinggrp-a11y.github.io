/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Times New Roman"', 'serif'],
      },
      colors: {
        icgblue: '#061e2a',
        skyblue: '#bde0fe',
      },
    },
  },
  plugins: [],
};