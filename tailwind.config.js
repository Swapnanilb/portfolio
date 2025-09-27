/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        secondary: '#EEEEEE',
        accent: '#00D9FF',
        'accent-green': '#00FF88',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00D9FF, 0 0 10px #00D9FF, 0 0 15px #00D9FF' },
          '100%': { boxShadow: '0 0 10px #00D9FF, 0 0 20px #00D9FF, 0 0 30px #00D9FF' },
        }
      }
    },
  },
  plugins: [],
}