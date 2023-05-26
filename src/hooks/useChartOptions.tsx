import { useStore } from "@nanostores/react";
import { $settings } from "../stores/theme";
import THEME_COLORS from "../utils/tailwing-config";

const useChartOptions = () => {
  const { mode } = useStore($settings);

  const color = mode === "dark" ? THEME_COLORS.white : THEME_COLORS.black;

  const scale = {
    stacked: true,
    grid: { color: THEME_COLORS[mode] },
    ticks: { color },
  };

  const scales = { x: scale, y: scale };

  const lineChartOptions = {
    plugins: {
      legend: {
        position: "bottom",
        labels: { color },
      },
    },
    scales,
  };
  return { scales, lineChartOptions, color };
};

export default useChartOptions;
