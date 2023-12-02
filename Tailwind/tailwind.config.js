/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'myfont':["myfont", 'Qwitcher Grypen', 'cursive']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/ss/4.png')",
      }
    },
  },
  plugins: [],
}

