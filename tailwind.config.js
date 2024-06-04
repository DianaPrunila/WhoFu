/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        coursive: ["Yesteryear", "cursive"],
        boldText: ["Josefin Sans", "sans - serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
