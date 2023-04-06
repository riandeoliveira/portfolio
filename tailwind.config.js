/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: "0px 0px 24px #EF2EF2",
      },
      colors: {
        "black-alpha": "#060526",
        "cyan-alpha": "#05F2DB",
        "pink-alpha": "#EF2EF2",
        "purple-alpha": "#7338F2",
        "purple-dark-alpha": "#361973",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
      screens: {
        desktop: "2560px",
        "laptop-l": "1440px",
        "laptop-m": "1280px",
        "laptop-s": "1024px",
        "tablet-l": "900px",
        "tablet-m": "768px",
        "tablet-s": "600px",
        "mobile-l": "425px",
        "mobile-m": "375px",
        "mobile-s": "320px",
      },
    },
  },
  plugins: [],
};
