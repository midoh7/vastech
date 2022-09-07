module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Merriweather", "Montserrat", "Sans-Serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInFromLeft: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0);",
          },
        },
        slideInFromTop: {
          "0%": {
            transform: "translateY(30%)",
          },
          "100%": {
            transform: "translateY(0);",
          },
        },
      },
      animation: {
        slideInFromLeft: "slideInFromTop 1.2s ease-out 0s 1",
        slideInFromTop: "slideInFromTop 0.5s ease-out 0s 1",
        "fade-in": "fade-in 0.5s ease-out",
      },
      backgroundImage: {
        img1: "url('../assets/images/mid.jpg')",
        ceo: "url('../assets/images/CEO.png')",
      },
      colors: {
        "raxi-1": "#134487",
      },
    },
  },
  plugins: [],
};

// {
//   'fade-in-down': {
//       '0%': {
//           opacity: '0',
//           transform: 'translateY(-10px)'
//       },
//       '100%': {
//           opacity: '1',
//           transform: 'translateY(0)'
//       },
//   },
//   'fade-out-down': {
//       'from': {
//           opacity: '1',
//           transform: 'translateY(0px)'
//       },
//       'to': {
//           opacity: '0',
//           transform: 'translateY(10px)'
//       },
//   },
//   'fade-in-up': {
//       '0%': {
//           opacity: '0',
//           transform: 'translateY(10px)'
//       },
//       '100%': {
//           opacity: '1',
//           transform: 'translateY(0)'
//       },
//   },
//   'fade-out-up': {
//       'from': {
//           opacity: '1',
//           transform: 'translateY(0px)'
//       },
//       'to': {
//           opacity: '0',
//           transform: 'translateY(10px)'
//       },
//   }
// },
// animation: {
//   'fade-in-down': 'fade-in-down 0.5s ease-out',
//   'fade-out-down': 'fade-out-down 0.5s ease-out',
//   'fade-in-up': 'fade-in-up 0.5s ease-out',
//   'fade-out-up': 'fade-out-up 0.5s ease-out'
// }
