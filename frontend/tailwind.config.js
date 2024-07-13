/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        floralwhite: "#f8fbf2",
        mintcream: "rgba(248, 255, 247, 0.11)",
        lightgray: "#cbdac9",
        green: "#0d9f00",
        limegreen: "#33c426",
        white: "#fff",
        tomato: {
          100: "#ff5252",
          200: "#ff3737",
        },
        black: "#000",
        darkgreen: "#316404",
        honeydew: "#dfefdf",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "lg-8": "18.8px",
      "5xl-5": "24.5px",
      xl: "20px",
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
