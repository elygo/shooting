/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1600px",
    },
    extend: {
      colors: {
        bodyBackgroundColor: "#141414",
        headerFooterBackground: "#1f2a40",
        textColor: "#eff2f7",
        toggleBackground: "#f59504",
        borderColor: "#585858",
        lightColor: "#fff",
        darkColor: "#2d2c2e",
      },
    },
  },
  plugins: [],
}

