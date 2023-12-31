/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // plugins: [
  //   require("@tailwindcss/forms"),
  //   // ...
  // ],
  // plugins: [require("@tailwindcss/aspect-ratio")],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
