/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          700: "#0D0D0D",
          600: "#1A1A1A",
          500: "#262626",
          400: "#333333",
          300: "#808080",
          200: "#D9D9D9",
          100: "#F2F2F2"
        },
        "primary": "#4EA8DE",
        "primary-dark": "#1E6F9F",
        "secondary": "#8284FA",
        "secondary-dark": "#5E60CE",
        "danger": "#E25858",
      }
    },
  },
  plugins: [],
}
