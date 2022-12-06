/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        gradient:
          "linear-gradient(100deg, #FECDD3 0%, #BDEDE4 50%, #D6F4CF 100%)",
      },
      colors: {
        background: "#334155",
        primary: "#FFF1F2",
        secondary: "#BDEDE4",
        tertiary: "#D6F4CF",
        accent: "#FECDD3",
      },
    },
  },
  plugins: [],
};
