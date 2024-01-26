


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary : "#66368c",

       secondary :"#fdc818",
       gr:"#8fbe4c",
       bl:"#30b2e3",
       gre:"#7f7f7f",
       re:"#e03d2a",
       pu :"#e00e79"


        // primary : "#01416F",
        // secondary :"#F7941D"
        
      }
    },
  },
  plugins: [require("daisyui")],
}
