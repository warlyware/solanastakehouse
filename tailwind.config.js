/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        deep: "11px 20px 19px 0px rgba(0,0,0,0.53);",
        "deep-float": "8px 20px 24px 4px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
