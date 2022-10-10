/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: "Josefin Sans",
      },
      fontSize: {
        40: "2.5rem",
      },
      colors: {
        defaultCheckbox: "rgba(227, 228, 241, 1)",
        gradientStart: "rgba(85, 221, 255, 1)",
        gradientEnd: "rgba(192, 88, 243, 1)",
      },
    },
  },
  plugins: [],
};
