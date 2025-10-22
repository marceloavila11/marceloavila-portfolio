/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#2563eb",
        secondary: "#1e3a8a",
        accent: "#60a5fa",
        background: "#f9fafb",
        text: "#1f2937",
      },
    },
  },
  plugins: [],
};