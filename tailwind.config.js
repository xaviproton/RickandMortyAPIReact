import aspectRatio from '@tailwindcss/aspect-ratio'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['"Orbitron"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
}
