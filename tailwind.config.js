/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#AE3EC9',
        'secondary': '#DA77F2'
      }
    },
  },
  plugins: [require("daisyui")],
}

