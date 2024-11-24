/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // Adjust this to your actual path structure
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      yellow: '#F4B641',
      darkblue: '#143157',
      blue: '#2F5F9F',
      white: '#FFFFFF',
      beige: '#F4EEEA',
      black: '#000000', 
    },
    extend: {},
  },
  plugins: [],
};
