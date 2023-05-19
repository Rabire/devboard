import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

const THEME_COLORS = fullConfig.theme.colors;

export default THEME_COLORS;
