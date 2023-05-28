/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      grayscale: { 75: "75%" },
    },
    colors: {
      transparent: "transparent",
      dark: "#343A40",
      "dark-secondary": "#212529",
      light: "#F5EBE0",
      "light-secondary": "#DCC8BC",
      "current-theme": "var(--current-theme)",
      white: "#FFF",
      black: "#000",
      github: {
        valid: "#238636",
        reject: "#DA3633",
        pending: "#EDA619",
        draft: "#7D8590",
      },
      dev: "cyan",
      dev1: "lime",
      dev2: "greenyellow",
    },
    screens: {
      tablet: "640px", // screens bellow 640px
      desktop: "1280px", // screens bellow 1280px
    },
  },
  plugins: [],
};
