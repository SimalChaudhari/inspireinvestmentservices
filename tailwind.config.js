/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif'],
      },
      colors: {
        'customBlue': '#74a4cb',
        'custom-gray': '#374151',
        'custom-light-gray': '#f3f4f6',
      }
    },
  },
  plugins: [],
}
