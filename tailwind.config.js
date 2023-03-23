/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html',"./node_modules/flowbite/**/*.js"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    }, 
    extend: {
      backgroundImage: {
        'hero': "url('../img/AdobeStock_476229783.jpeg')",
        'heroan': "url('../img/AdobeStock_547299899.jpeg')",
        'hero1': "url('../img/group-business-people-are-brainstorming-together-a-2023-03-15-20-11-40-utc.jpg')",
        'hero2': "url('../img/the-idea-leader-pulls-partners-along-with-him-lea-2023-01-25-12-18-41-utc.jpg')",
      },
  },
  plugins: [
    require('flowbite/plugin')
  ],
},
}

