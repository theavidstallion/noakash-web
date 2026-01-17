/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0B0C10',
          light: '#1F2833',
          lighter: '#C5C6C7',
        },
        cyan: {
          DEFAULT: '#66FCF1',
          dim: '#45A29E',
        },
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'], // Assuming we import Outfit
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
