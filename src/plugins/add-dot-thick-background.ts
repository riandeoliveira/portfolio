import svgToDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

type Colors = {
  [key: string | number]: string | Colors;
};

type PluginParams = {
  matchUtilities(data: unknown, options: unknown): unknown;
  theme(params: string): Colors;
};

const addDotThickBackground = ({ matchUtilities, theme }: PluginParams) => {
  return matchUtilities(
    {
      "bg-dot-thick": (value: string): { backgroundImage: string } => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
        )}")`,
      }),
    },
    {
      values: flattenColorPalette(theme("backgroundColor")),
      type: "color",
    },
  );
};

export default addDotThickBackground;
