/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      blue: {
        "50": "#441186",
        "100": "#080d14",
        "200": "#101124"
      },
      black: {
        "50": "#252525",
        "100": "#06071B",
      },
      white: {
        "50": "#C3B8CF",
        "100": "#fff",
      },
      purple: {
        "50": "#9079AF",
        "100": "#CEACF9",
      },
    },
    fontFamily: {
      'dmsans': ["'DM Sans', sans-serif"],
      'poppins': ["'Poppins', sans-serif"]
    }
  },
  plugins: [],
}
