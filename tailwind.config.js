/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      dark: "#343A40",
      "dark-secondary": "#212529",
      light: "#F5EBE0",
      "light-secondary": "#D5BDAF",
      "current-theme": "var(--current-theme)",
      white: "#FFF",
      black: "#000",
      github: {
        valid: "#238636",
        reject: "#DA3633",
        pending: "#EDA619",
        draft: "#7D8590",
      },
      theme: {
        1: "#F98686",
        2: "#F9C486",
        3: "#F5F986",
        4: "#86B1F9",
        5: "#9686F9",
        6: "#F986F9",
        7: "#86F99F",
      },
      dev: "cyan",
      dev1: "lime",
      dev2: "greenyellow",
    },
  },
  plugins: [],
};
