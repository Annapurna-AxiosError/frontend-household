/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_orcher: "#23AA49",
        primary_green: "#23878E",
        background: "#f3f3f3",
        secondary_green: "#8AC9B9",
        secondary_slategray: "#D5F0E7",
        accent: "#a6ef5c",
      },
      fontFamily: {
        marcellus: "Marcellus",
        fira: ["Fira Sans", "sans-serif"],
        poppins: "Poppins",
        cameraObscura: "Camera Obscura",
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
