module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'bensen': ['BenSen', 'Arial', 'sans-serif'] 
      },
    },
  },

  plugins: [require("daisyui")],
}