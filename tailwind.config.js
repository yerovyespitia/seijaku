/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pm: '#1B1E28',
        sd: '#292C35',
        txtGray: '#A6ACCD',
      },
    },
  },
  plugins: [],
}
