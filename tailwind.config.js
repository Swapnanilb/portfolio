/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D1117',
        secondary: '#E6EDF3',
        accent: '#58A6FF',
        'accent-coral': '#FF7B72',
        'card-bg': '#161B22',
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
          '0%': { boxShadow: '0 0 5px #58A6FF, 0 0 10px #58A6FF, 0 0 15px #58A6FF' },
          '100%': { boxShadow: '0 0 10px #58A6FF, 0 0 20px #58A6FF, 0 0 30px #58A6FF' },
        }
      }
    },
  },
  plugins: [],
}