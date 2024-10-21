/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ED1C24',   // Custom primary color
        secondary: '#2B2C30', // Custom secondary color
        common: '#464949'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}