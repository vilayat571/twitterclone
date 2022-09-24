module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./atoms/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#1DA1F2"
        },
        gray: {
          dark: "#657786",
          light: "#AAB8C2",
          extralight: "#E1E8ED",
          lightness: "#F5F8FA"
        },
        black: "#14171A"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};