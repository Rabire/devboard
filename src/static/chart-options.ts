import { $settings } from "../stores/theme";
import { MODE_COLORS } from "../styles/themes";

const { mode } = $settings.get();

export const color = mode === "dark" ? MODE_COLORS.white : MODE_COLORS.black;

const scale = {
  stacked: true,
  grid: { color: MODE_COLORS[mode] },
  ticks: { color },
};

export const scales = { x: scale, y: scale };

export const lineChartOptions = {
  plugins: {
    legend: {
      position: "bottom",
      labels: { color },
    },
  },
  scales,
};
