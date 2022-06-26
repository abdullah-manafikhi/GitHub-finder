/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/components/**/*.{ts,tsx,js,jsx}',
    ],
    theme: {
    extend: {},
  },
  daisyui: {
    themes:['dark']
  },
  plugins: [require("daisyui")],
}