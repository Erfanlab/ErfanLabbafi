/** @type {import('tailwindcss').Config} */

const { space } = require("postcss/lib/list");

/** @type {import('output.css').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      main: {
        100: "#6CEAD1",
        200: "#41E4C4",
        300: "#1ED6B2",
        400: "#18AB8E",
        500: "#148F77",
        600: "#148871",
        700: "#14846E",
        800: "#0E6C5A",
        900: "#0B5144",
      },
      second:{
        100:'#2D2D2D',
      },

      // ...
    },
    extend: {
      fontFamily: {
        yekanBold: "Yekan-bold",
        yekan: "Yekan-light", // Adds a new `font-display` class
      },
    },
    gap: {
      0: "0",
      0.5: "2.5px",
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "40px",
      8: "45px",
      9: "50px",
      50:"500px"
    },
    height: {
      0:'0',
      0.45:'45px',
      0.5: "50px",
      0.6: "60px",
      0.7:'70px',
      1: "100px",
      2: "150px",
      3: "250px",
      4: "350px",
      5: "400px",
      6: "500px",
      7: "600px",
      8: "700px",
      full:'100%'
    },
    width: {
      0:'0',
      0.45:'45px',
      0.5: "50px",
      0.6: "60px",
      0.7:'70px',
      0.75:'75px',
      1: "100px",
      2: "150px",
      3: "250px",
      4: "350px",
      5: "400px",
      6: "500px",
      7: "600px",
      8: "700px",
      full:'100%'
    },
    spacing: {
      0: "0",
      1:"5px",
      1.5:"7px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "50px",
      6: "60px",
      7: "70px",
      8: "80px",
      9: "90px",
      10: "100px",
      50: "500px"
    },
  
  
  },
  plugins: [],
};