/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
    extend: {
      colors: {
        main: "#a000c8",
        bgdark: "#001",
        seconddark: "#112"
      },
      keyframes: {
        borderAnim: {
          '0%': { 'border-radius': '51% 49% 48% 52% / 49% 49% 51% 51%' },
          '35%': { 'border-radius': '60% 40% 57% 43% / 40% 54% 46% 60%' },
          '65%': { 'border-radius': '63% 33% 68% 32% / 27% 70% 30% 73%' },
          '100%': { 'border-radius': '51% 49% 48% 52% / 49% 49% 51% 51%' }
        }
      },
      animation: {
        borderAnimation: 'borderAnim 5s linear infinite'
      }
    }
  },
  plugins: []
}
