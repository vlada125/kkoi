/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "540px",
      md: "920px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1600px",
      "4xl": "1920px",
      "5xl": "2560px",
    },
    extend: {
      colors: {
        primary: "#7C4FFC",
        secondary: "#51B7FA",
        third: "#FFE3E9",
        appGreen: '#45D95C'
      },
      backgroundImage: {
        'filter-back': "url('src/images/filter-back.png')",
      },
      boxShadow: {
        'card': '0px 4px 16px 0px rgba(0, 0, 0, 0.15)',
      }
    },
    fontFamily: {
      fira: ["Fira Sans Book", "Fira Sans", "Fira Sans Eight", "Fira Sans Four", "Fira Sans Hair", "Fira Sans Thin", "Fira Sans Two", "Fira Sans UltraLight", "Fira Sans ExtraLight", "Fira Sans Light", "Fira Sans Medium", "Fira Sans SemiBold", "Fira Sans ExtraBold", "Fira Sans Heavy", "Fira Sans Ultra", "sans-serif"],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          margin: "0 auto",
          // "@screen sm": {
          //   maxWidth: "460px",
          // },
          "@screen md": {
            maxWidth: "800px",

          },
          "@screen lg": {
            maxWidth: "1000px",
          },
          "@screen xl": {
            maxWidth: "1300px",
          },
        },
        ".bg-primary": {
          background: "linear-gradient(180deg, #7C4FFC 0%, #51B7FA 100%)"
        },
        ".bg-secondary": {
          background: "linear-gradient(180deg, rgb(228 218 253 / 95%) 0%, rgb(205 236 255 / 96%) 100%) !important"
        }
      });
    },
  ],
}