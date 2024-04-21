/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#222831",
        second: "#F2F2F2",
        third: "#393E46",
      },
      fontFamily: {
        fira: "FiraSans",
        satoshi: "Satoshi",
      },
      backgroundImage: {
        "frame" : "url(/public/frame-bg.png)",
      },
    },
  },
  plugins: [],
};
