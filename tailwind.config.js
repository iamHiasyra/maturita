/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        light : "Darker Grotesque, sans-serif",
        dark : "Montserrat, sans-serif",
      },
      colors : {
        dark : {
          "brown" : "#E0BB9B",
          "white" : "#F8F0E9",
          "yellow" : "#FEFAE0",
          "grey" : "#302F2F",
        },
        light : {
          "yellow" : "#ffd166",
          "blue" : "#357AE8",
          "pink" : "#FF338B"
        }
      }
    },
  },
  plugins: [],
}

