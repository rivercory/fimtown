module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#7CA6DE',
        'secondary': '#70A4EA'
      }
    },
  },
  plugins: [require("daisyui")],
}
