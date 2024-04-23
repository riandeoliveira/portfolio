/** @type {import('tailwindcss').Config} */

import animations from "tailwindcss-animate";

module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  plugins: [animations],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        alert: "var(--alert)",
        default: "var(--default)",
        neutral: {
          darker: "var(--neutral-darker)",
          dark: "var(--neutral-dark)",
          light: "var(--neutral-light)",
          lighter: "var(--neutral-lighter)",
        },
      },
      fontFamily: {
        "montserrat": ["Montserrat"]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      screens: {
        "max-desktop": { max: "2560px" },
        "max-laptop-l": { max: "1440px" },
        "max-laptop-m": { max: "1280px" },
        "max-laptop-s": { max: "1024px" },
        "max-tablet-l": { max: "900px" },
        "max-tablet-m": { max: "768px" },
        "max-tablet-s": { max: "600px" },
        "max-mobile-l": { max: "425px" },
        "max-mobile-m": { max: "375px" },
        "max-mobile-s": { max: "320px" },
      }
    },
  },
};
