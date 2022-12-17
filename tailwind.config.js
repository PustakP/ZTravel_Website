/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

   // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: ["night"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  }
}