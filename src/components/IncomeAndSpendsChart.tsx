import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { randNumber } from "@ngneat/falso";
import { Line } from "react-chartjs-2";
import { LAST_MONTHS } from "../static/calendar";
import THEME_COLORS from "../utils/tailwing-config";
import useChartOptions from "../hooks/useChartOptions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const data = {
  labels: LAST_MONTHS,
  datasets: [
    {
      label: "Dépenses",
      data: LAST_MONTHS.map(() => randNumber({ min: 5000, max: 15000 })),
      backgroundColor: THEME_COLORS.theme[1],
      borderColor: THEME_COLORS.theme[1],
    },
    {
      label: "Entrées",
      data: LAST_MONTHS.map(() => randNumber({ min: 5000, max: 15000 })),
      backgroundColor: THEME_COLORS.theme[2],
      borderColor: THEME_COLORS.theme[2],
    },
  ],
};

const IncomeAndSpendsChart = () => {
  const { lineChartOptions } = useChartOptions();

  return (
    <section>
      <h2 className="mb-5">Chiffre d’affaire</h2>
      <Line options={lineChartOptions} data={data} />
    </section>
  );
};

export default IncomeAndSpendsChart;
