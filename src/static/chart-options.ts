import { settings } from "../stores/theme";
import THEME_COLORS from "../utils/tailwing-config";

const { mode } = settings.get();

export const color = mode === "dark" ? THEME_COLORS.white : THEME_COLORS.black;

const scale = {
  stacked: true,
  grid: { color: THEME_COLORS[mode] },
  ticks: { color },
};

export const scales = { x: scale, y: scale };
