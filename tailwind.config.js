/** @type {import('tailwindcss').Config} */
const { transparent } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': colors.black,
      'white': '#FFFFFF',
      'orangeBright': '#f18635',
      'orangeDark': '#b96829',
      'orangeTransparent': '#ff8f394a',
    },
    extend: {
      gridTemplateColumns:{
        'mainColumns': 'repeat(auto-fill, 32px)',
        'mainSm': '1fr 32px 577px 32px 1fr',
        'mainMd': '1fr 32px 705px 32px 1fr',
        'mainLg': '1fr 32px 961px 32px 1fr',
        'mainXl': '1fr 32px 1217px 32px 1fr',
        'main2xl': '1fr 32px 1473px 32px 1fr',
      },
      gridTemplateRows:{
        mainRows: 'repeat(auto-fill, 32px)',
      },
      gridRow: {
        // These are to set the section row span heights.  There is a margin bottom of 2 span(64px), 
        // The spans are in increments of 5 + 2 to account for the bottom margin.  
        // On the component put 5,10.. etc to get a height of 5 or 10 or 15 rows plus a bottom margin of 2(64px)
        '10': 'span 12 / span 12',
        '15': 'span 17 / span 17',
        '20': 'span 22 / span 22',
        '25': 'span 27 / span 27',
        '30': 'span 32 / span 32',
      },
      gridAutoRows:{
        'main': '32px',
      },
      backgroundImage: {
        'gridPaper': 'linear-gradient(to right,#5252524d 1px,transparent 1px), linear-gradient(to bottom, #5252524d 1px, transparent 1px)',
        'gridHorizontal': 'linear-gradient(to bottom, #5252524d 1px, transparent 1px)',
        'fadedOrange': 'linear-gradient(135deg, black, #ff8f394a)', 
        'profilePic': 'linear-gradient(135deg, rgba(0, 0, 0, 1) 5%, transparent 90%), url(../public/assets/me.png)'
      },
      backgroundSize: {
        'gridSize': '32px 32px',
      }
    },
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
         'html': { 
          fontSize: "128px",
          minHeight: "100%"
         },
       })
     }),
  ],
}
