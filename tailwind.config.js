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
  plugins: [
    addDotThickBackgroundUtility,
    addVariablesForColors,
    animations,
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 1s forwards",
        header: "header 1s forwards",
        headerBar: "headerBar 1s forwards",
        growUp: "growUp 1s forwards",
        rotatePrimary: "rotatePrimary 2s forwards",
        rotateSecondary: "rotateSecondary 2s forwards",
        togglePrimary: "togglePrimary 1.2s forwards",
        toggleSecondary: "toggleSecondary 3.5s forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        header: {
          from: { transform: "translateY(-80px)" },
          to: { transform: "translateY(0)" }
        },
        headerBar: {
          from: { transform: "translateY(-60px)" },
          to: { transform: "translateY(0)" }
        },
        growUp: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" }
        },
        rotatePrimary: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(180deg)" }
        },
        rotateSecondary: {
          from: { transform: "rotateY(180deg)" },
          to: { transform: "rotateY(0deg)" }
        },
        togglePrimary: {
          from: { zIndex: 50 },
          to: { zIndex: 0 }
        },
        toggleSecondary: {
          from: { zIndex: 0 },
          to: { zIndex: 50 }
        },
      },
    },
    screens: {
      "desktop": { max: "2560px" },
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
