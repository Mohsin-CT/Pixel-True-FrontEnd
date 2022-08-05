module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,json}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightgreen: {
          150: "#6CC6B0",
        },
        orange: {
          850: "#EB5728",
          750: "#F7673A",
          650: "#fd825b",
          150: "#FFEEE3",
          200: "#F36235",
          50: "#FFF6F1",
        },
        blue: {
          850: "#3C15D8",
          200: "#F7F9FB",
          350: "#4e2add",
          300: "#6CC6B033",
        },
        gray: {
          150: "#F7F9FB",
          250: "#ECEDF4",
          350: "#EEECF2",
          450: "#B9BDC6",
          550: "#CFD3DB",
          650: "#777E90",
          750: "#B1B5C342",
          850: "#1A272D",
        },
        red: { 50: "#EB4E4E" },
        pink: { 200: "#FEEEE7", 150: "#FFEEE380", 50: "#FBF7F4" },
        yellow: { 50: "#FF8C211A", 150: "#FF8C21" },

        green: { 200: "#dcefec", 150: "#E2F4EF", 400: "#6CC6B0", 550: "#4bb198" },

      },

      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
        Manjari: ["Manjari", "sans-serif"],
      },
      fontweight: {
        bold: ["700"],
        semibold: ["600"],
        semibold2: ["500"],
      },
      boxShadow: {
        "3xl": "0px 3px 23.2px 3.8px rgb(0 0 0 / 6%)",
      },

      screens: {
        'xs': '441px',
        // => @media (min-width: 441px) { ... }
  
        'sm': '668px',
        // => @media (min-width: 521px) { ... }

        'md': '851px',
        // => @media (min-width: 851px) { ... }
  
        'lg': '1240px',
        // => @media (min-width: 1240px) { ... }
  
        'xl': '1550px',
        // => @media (min-width: 1550px) { ... }

        '2xl': '1750px',
        // => @media (min-width: 1750px) { ... }
      }

    },
    // fontSize: { "10xl": "2.75rem" },
  },
  plugins: [],
};
