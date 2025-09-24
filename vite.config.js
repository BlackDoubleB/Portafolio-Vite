import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        encode_sans_expanded: ['Encode Sans Expanded', 'sans-serif'],
        playball: ['Playball', 'cursive'],
        bonher_royale: ['Bonheur Royale', 'cursive']
      },
      screens: {
        xs: '500px',
      },
    },
  },

  plugins: [react(), tailwindcss()],
})

