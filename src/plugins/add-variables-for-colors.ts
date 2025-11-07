import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

type Colors = {
  [key: string | number]: string | Colors;
};

type PluginParams = {
  addBase(params: Record<string, unknown>): void;
  theme(params: string): Colors;
};

const addVariablesForColors = ({ addBase, theme }: PluginParams) => {
  const allColors = flattenColorPalette(theme("colors"));

  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
};

export default addVariablesForColors;
