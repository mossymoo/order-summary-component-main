/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      paleblue: '#e0e8ff'
    },
    backgroundSize: {
      'all-cover': '740%'
    },
    extend: {
      backgroundImage: {
        'desktop': "url('../images/pattern-background-desktop.svg')",
        'mobile': "url('../images/pattern-background-mobile.svg')"
      }
    },
  },
  plugins: [],
}
