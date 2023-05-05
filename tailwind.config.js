/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      green: {
        "100": "#1C6B00",
      },
      black: {
        "50": "#0E0E0E",
        "100": "#171714",
      },
      white: {
        "50": "#9398A7",
        "100": "#fff",
      },
      yellow: {
        "50": "#FFDD00",
        "100": "#CEACF9",
      },
    },
    fontFamily: {
      'inter': ["'Inter', sans-serif"],
      'poppins': ["'Poppins', sans-serif"],
      'cehua': ["Cehua"],
    }
  },
  plugins: [],
}
