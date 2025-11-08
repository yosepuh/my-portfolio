module.exports = {
  darkMode: 'class', // wajib
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkTheme: { DEFAULT: "#fbcfe8", text: "#831843" },
        blueTheme: { DEFAULT: "#bfdbfe", text: "#1e3a8a" },
      },
    },
  },
  plugins: [],
};
