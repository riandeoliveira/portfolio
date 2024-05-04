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

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: ["class"],
  plugins: [
    addVariablesForColors,
    animations,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" },
      );
    },
  ],
  prefix: "",
  theme: {
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
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      animation: {
        rotatePrimary: "rotatePrimary 2s forwards",
        rotateSecondary: "rotateSecondary 2s forwards",
        togglePrimary: "togglePrimary 1.2s forwards",
        toggleSecondary: "toggleSecondary 3.5s forwards",
        aurora: "aurora 60s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        rotatePrimary: {
          from: {
            transform: "rotateY(0deg)"
          },
          to: {
            transform: "rotateY(180deg)"
          }
        },
        rotateSecondary: {
          from: {
            transform: "rotateY(180deg)"
          },
          to: {
            transform: "rotateY(0deg)"
          }
        },
        togglePrimary: {
          from: {
            zIndex: 50
          },
          to: {
            zIndex: 0
          }
        },
        toggleSecondary: {
          from: {
            zIndex: 0
          },
          to: {
            zIndex: 50
          }
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
  },
};
