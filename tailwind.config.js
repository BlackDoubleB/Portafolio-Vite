/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        encode_sans_expanded: ['Encode Sans Expanded', 'sans-serif'],
        playball: ['Playball', 'cursive'],
        bonher_royale: ['Bonheur Royale', 'cursive']
      },
      screens: {
        xs: '500px', 
      }
    },
  },
  plugins: [],
}