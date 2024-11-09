/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: '#6B8E23', // Define your primary color here
        primaryGreen: "#23878E",
        background: "#f3f3f3",
        secondaryGreen: "#8AC9B9",
        secondarySlate: "#D5F0E7",
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
