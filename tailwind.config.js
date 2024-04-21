/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#f5f5f5",
        second: "#1e1e1e",
        third: "#fff",
      },
      fontFamily: {
        fira: "FiraSans",
        satoshi: "Satoshi",
      },
    },
  },
  plugins: [],
};
