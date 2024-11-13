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
      },
      backgroundImage: {
        "hero-image":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.9) 100%),url('../src/assets/hero.jpg')",
        artist: "url('../src/assets/artist.jpg')",
        counter: "url('../src/assets/background-counter-date.webp')",
        theater: "url('../src/assets/teather.jpg')",
      },
      fontFamily: {
        header: ["Rock Salt", "cursive"],
        title: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
