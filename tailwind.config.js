/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, #EE10B0 0%, #0E9EEF 100%)",
      },
      colors: {
        main: {
          500: "#F32E7C",
          700: "#1E1E1E",
          800: "#412C3A",
          900: "#0E1920",
        },

        primary: {
          100: "#FFE0F6",
          200: "#F8BBE7",
          300: "#F367CC",
          400: "#F03FBF",
          500: "#EE10B0",
          600: "#9A0871",
          700: "#750957",
          800: "#55053E",
          900: "#330025",
        },
        secondary: {
          100: "#E0F8FF",
          200: "#C5EFFD",
          300: "#97E3FC",
          400: "#69D8FC",
          500: "#229CC3",
          600: "#1EB7E8",
          700: "#11799A",
          800: "#054A61",
          900: "#002733",
        },
        dark: {
          100: "#CCCCCC",
          200: "#B3B3B3",
          300: "#999999",
          400: "#808080",
          500: "#666666",
          600: "#4D4D4D",
          700: "#333333",
          800: "#1A1A1A",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
