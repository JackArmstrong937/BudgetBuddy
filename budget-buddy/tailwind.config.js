/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        xxs: "5px",
        xs: "10px",
        small: "20px",
        medium: "40px",
      },
      backgroundColor: {
        offWhite: "#f8f8ff",
        BBDarkGreen: "#209747",
        BBLightGreen: "#85c443",
        BBOrange: "#f89435",
        BBDarkOrange: "#de7d3d",
        BBYellow: "#e0bc4e",
        black: "#000000",
        DarkGray: "#1E1E1E",
        Charcoal: "#2a2a2a",
        LightGray: "#2E2E2E",
      },
      colors: {
        white: "#ffffff",
        BBDarkGreen: "#209747",
        BBLightGreen: "#85c443",
        BBOrange: "#f89435",
        BBDarkOrange: "#de7d3d",
        BBYellow: "#e0bc4e",
        black: "#000000",
        BBRed: "#e6192e"
      },
      borderColor: {
        BBDarkGreen: "#209747",
        BBLightGreen: "#85c443",
        BBOrange: "#f89435",
        BBDarkOrange: "#de7d3d",
        BBYellow: "#e0bc4e",
        DarkGray: "#1E1E1E",
        Charcoal: "#2a2a2a",
        LightGray: "#2E2E2E",
      },
      fontSize: {
        text_xxs: "8px",
        title_xxs: "11px",
      },
      borderRadius:{
        small: "10px",
        xs: "5px"

      },
      boxShadow: {
        shadow1: "0px 6px 8px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
