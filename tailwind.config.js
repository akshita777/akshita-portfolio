/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D0D0D",
        panel: "#151515",
        card: "#1B1B1B",
        bone: "#F5F5F0",
        muted: "#A7A7A0",
        lime: "#DFFF00",
        azure: "#4DA3FF",
        mint: "#B8F36B",
      },
      fontFamily: {
        sans: ["'Archivo'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        neo: "4px 4px 0 #DFFF00",
        "neo-bone": "4px 4px 0 #F5F5F0",
        "neo-azure": "4px 4px 0 #4DA3FF",
        "neo-mint": "4px 4px 0 #B8F36B",
        "neo-sm": "2px 2px 0 #DFFF00",
      },
      borderRadius: {
        neo: "8px",
      },
    },
  },
  plugins: [],
};
