/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#0A192F',
        secondary: '#00BFFF', // Deep Sky Blue - more electric
        accent: '#00FFFF',   // Cyan/Aqua - very electric
        light: '#E0F2FE',
        "glass": "rgba(10, 25, 47, 0.85)",
      },
      boxShadow: {
        'glow-accent': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
        'glow-secondary': '0 0 5px #00BFFF, 0 0 10px #00BFFF',
      },
    },
  },
  plugins: [],
};