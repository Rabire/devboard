import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Line } from "react-chartjs-2";
import { lineChartOptions } from "../static/chart-options";
import { LAST_MONTHS } from "../static/calendar";
import THEME_COLORS from "../utils/tailwing-config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const datasets = [
  {
    label: "Dépenses",
    data: LAST_MONTHS.map(() => faker.number.int({ min: 5000, max: 15000 })),
    backgroundColor: THEME_COLORS.theme[1],
    borderColor: THEME_COLORS.theme[1],
  },
  {
    label: "Entrées",
    data: LAST_MONTHS.map(() => faker.number.int({ min: 5000, max: 15000 })),
    backgroundColor: THEME_COLORS.theme[2],
    borderColor: THEME_COLORS.theme[2],
  },
];

const IncomeAndSpendsChart = () => {
  const data = {
    labels: LAST_MONTHS,
    datasets,
  };

  return (
    <section>
      <h2 className="mb-5">Chiffre d’affaire</h2>
      <Line options={lineChartOptions} data={data} />
    </section>
  );
};

export default IncomeAndSpendsChart;
