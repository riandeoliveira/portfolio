/** @type {import('tailwindcss').Config} */

import animations from "tailwindcss-animate";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const addVariablesForColors = ({ addBase, theme }) => {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  plugins: [addVariablesForColors, animations],
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
      boxShadow: {
        arduino: "0 0 20px var(--arduino)",
        azure: "0 0 20px var(--azure)",
        bash: "0 0 20px var(--bash)",
        bootstrap: "0 0 20px var(--bootstrap)",
        cs: "0 0 20px var(--cs)",
        css: "0 0 20px var(--css)",
        cypress: "0 0 20px var(--cypress)",
        docker: "0 0 20px var(--docker)",
        dotnet: "0 0 20px var(--dotnet)",
        express: "0 0 20px var(--express)",
        figma: "0 0 20px var(--figma)",
        firebase: "0 0 20px var(--firebase)",
        git: "0 0 20px var(--git)",
        github: "0 0 20px var(--github)",
        html: "0 0 20px var(--html)",
        jest: "0 0 20px var(--jest)",
        js: "0 0 20px var(--js)",
        laravel: "0 0 20px var(--laravel)",
        linux: "0 0 20px var(--linux)",
        materialui: "0 0 20px var(--materialui)",
        md: "0 0 20px var(--md)",
        mongodb: "0 0 20px var(--mongodb)",
        mysql: "0 0 20px var(--mysql)",
        nextjs: "0 0 20px var(--nextjs)",
        nodejs: "0 0 20px var(--nodejs)",
        php: "0 0 20px var(--php)",
        postgresql: "0 0 20px var(--postgresql)",
        powershell: "0 0 20px var(--powershell)",
        prisma: "0 0 20px var(--prisma)",
        py: "0 0 20px var(--py)",
        react: "0 0 20px var(--react)",
        redux: "0 0 20px var(--redux)",
        sass: "0 0 20px var(--sass)",
        sqlite: "0 0 20px var(--sqlite)",
        styledcomponents: "0 0 20px var(--styledcomponents)",
        tailwind: "0 0 20px var(--tailwind)",
        threejs: "0 0 20px var(--threejs)",
        ts: "0 0 20px var(--ts)",
        ubuntu: "0 0 20px var(--ubuntu)",
        vercel: "0 0 20px var(--vercel)",
        vite: "0 0 20px var(--vite)",
        vitest: "0 0 20px var(--vitest)",
        vscode: "0 0 20px var(--vscode)",
        windows: "0 0 20px var(--windows)",
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
