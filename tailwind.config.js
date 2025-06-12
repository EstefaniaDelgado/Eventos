/** @type {import('tailwindcss').Config} */
export default {
  important: "#root",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        subtitlePrimary: "#be185d", // pink
        subtitleSecondary: "#9333ea", // purple
        subtitleMuted: "#1c5d54", // greenJungle
        itemsMenu:"rgb(193 133 3)" //yellow
      },
      backgroundImage: {
        "hero-image":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.9) 100%),url('../src/assets/hero.webp')",
        artist: "url('../src/assets/artist.jpg')",
        counter: "url('../src/assets/background-counter-date.webp')",
        theater: "url('../src/assets/teather.jpg')",
        party: "url('../src/assets/party_background.jpg')",
      },
      fontFamily: {
        header: ["Rock Salt", "cursive"],
        title: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [function ({ addBase }) {
    addBase({
      ".no-spin::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
        margin: "0",
      },
      ".no-spin::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: "0",
      },
      ".no-spin": {
        "-moz-appearance": "textfield",
      },
    });
  },
  require("tailwind-scrollbar"),],
};
