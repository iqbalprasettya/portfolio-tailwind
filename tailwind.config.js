/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../dist/img/pattern.png')"
      },
      colors: {
        primary: "#a16207",
        secondary: "#71717a",
        dark: "#18181b",
      },
      screen: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
