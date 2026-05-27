/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink:      '#1a2d6e',
        'ink-2':  '#253d90',
        bone:     '#fff0b5',
        'bone-2': '#f5e39a',
        gold:     '#d4a400',
        'gold-2': '#f0c418',
        rust:     '#c83b2a',
        accent:   '#3a54a5',
        mist:     '#8090b8',
      },
      fontFamily: {
        display: ['Impact', '"Arial Narrow"', 'sans-serif'],
        sans:    ['"Quicksand"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1280px' },
    },
  },
  plugins: [],
}
