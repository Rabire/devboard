import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { useStore } from "@nanostores/react";
import { Radar } from "react-chartjs-2";
import { $settings } from "../stores/theme";
import { color } from "../static/chart-options";
import THEME_COLORS from "../utils/tailwing-config";
import LABELS from "../static/codebase";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const CodeBaseChart = () => {
  const { theme, mode } = useStore($settings);

  const data = {
    labels: LABELS,
    datasets: [
      {
        label: "% de satisfaction",
        data: LABELS.map(() => faker.number.int({ min: 20, max: 100 })),
        backgroundColor: theme,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      r: {
        ticks: {
          display: false,
        },
        beginAtZero: true,
        grid: { color: THEME_COLORS[mode] },
        angleLines: { color: THEME_COLORS[mode] },
        pointLabels: {
          font: { size: 12 },
          color,
        },
      },
    },
  };

  return (
    <section>
      <h2 className="mb-5">Codebase actuelle</h2>
      <Radar className="max-h-[300px]" options={options} data={data} />
    </section>
  );
};

export default CodeBaseChart;
