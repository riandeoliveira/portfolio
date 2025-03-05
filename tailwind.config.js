/** @type {import('tailwindcss').Config} */

import svgToDataUri from "mini-svg-data-uri";
import animations from "tailwindcss-animate";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const addVariablesForColors = ({ addBase, theme }) => {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
};

const addDotThickBackgroundUtility = ({ matchUtilities, theme }) => {
  return matchUtilities(
    {
      "bg-dot-thick": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme("backgroundColor")), type: "color" },
  );
};

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [addDotThickBackgroundUtility, addVariablesForColors, animations],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in 1s forwards",
        grow: "grow 1s forwards",
        "rotate-primary": "rotate-primary 2s forwards",
        "rotate-secondary": "rotate-secondary 2s forwards",
        "slide-in-down": "slide-in-down 1s forwards",
        "toggle-primary": "toggle-primary 1.2s forwards",
        "toggle-secondary": "toggle-secondary 3.5s forwards",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        grow: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
        "rotate-primary": {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(180deg)" },
        },
        "rotate-secondary": {
          from: { transform: "rotateY(180deg)" },
          to: { transform: "rotateY(0deg)" },
        },
        "slide-in-down": {
          from: { transform: "translateY(-80px)" },
          to: { transform: "translateY(0)" },
        },
        "toggle-primary": {
          from: { zIndex: 50 },
          to: { zIndex: 0 },
        },
        "toggle-secondary": {
          from: { zIndex: 0 },
          to: { zIndex: 50 },
        },
      },
    },
    screens: {
      desktop: { max: "2560px" },
      "laptop-l": { max: "1440px" },
      "laptop-m": { max: "1280px" },
      "laptop-s": { max: "1024px" },
      "tablet-l": { max: "900px" },
      "tablet-m": { max: "768px" },
      "tablet-s": { max: "600px" },
      "mobile-l": { max: "425px" },
      "mobile-m": { max: "375px" },
      "mobile-s": { max: "320px" },
    },
  },
};
