const flowbite = require("flowbite-react/tailwind");
const daisyui = require("daisyui");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        Rilway: '"Raleway", sans-serif',
        Prata: '"Prata", serif'
      }
    },
  },
  plugins: [daisyui, flowbite.plugin()],
};
