/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "theme-gradient":
          "linear-gradient(180deg, rgba(232, 125, 179, 0.5) 0%, rgba(140, 103, 226, 0.5) 100%)",
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here
  ],
};
