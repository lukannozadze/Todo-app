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
      },
    },
  },
  plugins: [],
};
