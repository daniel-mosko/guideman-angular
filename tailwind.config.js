/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'royal-blue': {
          '50': '#f1f4fd',
          '100': '#dfe7fa',
          '200': '#c6d5f7',
          '300': '#9fbaf1',
          '400': '#7196e9',
          '500': '#4b6ee0',
          '600': '#3b55d5',
          '700': '#3243c3',
          '800': '#2e399f',
          '900': '#2a347e',
        },
      }
    },
  },
  plugins: [],
}
