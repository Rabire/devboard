import { useStore } from "@nanostores/react";
import { ChartOptions } from "chart.js";
import { $settings } from "../stores/theme";
import { MODE_COLORS } from "../styles/themes";

const useChartOptions = () => {
  const { mode } = useStore($settings);

  const color = mode === "dark" ? MODE_COLORS.white : MODE_COLORS.black;

  const scale = {
    stacked: true,
    grid: { color: MODE_COLORS[mode] },
    ticks: { color },
  };

  const scales = { x: scale, y: scale };

  const lineChartOptions: ChartOptions<"line"> = {
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
