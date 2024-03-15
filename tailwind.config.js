const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'ash': '#383B38',
        'light-gray' : '#D9D9D9',
        'lime' : '#5CFF59',
        'dark-lime':'#43D740',
        'cyan' : '#65FFED',
        'dark-cyan' : '#00D3BA',
        'light-red' : '#FF6E65',
      },

      fontFamily: {
        'title': 'Oxanium',
        'content': 'Play',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
})
