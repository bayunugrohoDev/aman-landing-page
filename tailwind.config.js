/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fixeldisplay': ['var(--font-inter)'],
      },
      colors: {
        prussianBlue: '#003153',
        blazerBlue: '#215889',
        airSuperiorityBlue: '#72A0C1',
        americanGold: '#D3AF37',
        white: '#FFFFFF',
        black: '#000000',
        darkGrey: '#434343',
        grey: '#A0A0A0',
        lightGrey: '#EDEDED',
        beige: '#F5F2EC',
        green: '#4CAF50',
        red: '#E10600',
        terracotta: '#CC4E5C',
      },
      fontSize :{
        md : '16px'
      }
    },
  },
  plugins: [],
}
