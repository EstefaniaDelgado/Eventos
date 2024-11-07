/** @type {import('tailwindcss').Config} */
export default {
  important:"#root",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       greenJungle:'#1c5d54',
      },
      backgroundImage: {
        'hero-image': "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.9) 100%),url('../src/assets/hero.jpg')",
        'artist':"url('../src/assets/artist.jpg')"
      },
      fontFamily: {
        'header': ["Rock Salt", "cursive"], 
        'title':["Space Mono", "monospace"]
      },
    },
  },
  plugins: [],
}