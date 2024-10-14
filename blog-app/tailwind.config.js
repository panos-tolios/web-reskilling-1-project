/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#043873",
        "primary-2": "#4F9CF9",
        "secondary-1": "#FFE492",
        "secondary-2": "#A7CEFC",
      },
    },
  },
  plugins: [],
}
