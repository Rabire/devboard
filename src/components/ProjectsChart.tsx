import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useProjectsChart from "../hooks/useProjectsChart";
import { LAST_MONTHS, LAST_WEEKS } from "../static/calendar";
import { settings } from "../stores/theme";
import THEME_COLORS from "../utils/tailwing-config";

ChartJS.defaults.font.size = 12;
ChartJS.defaults.font.family = "Nunito";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const { mode } = settings.get();

const OPTIONS = {
  plugins: {
    legend: {
      position: "bottom",
      labels: { color: THEME_COLORS.white },
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: { color: THEME_COLORS[mode] },
      ticks: { color: THEME_COLORS.white },
    },
    y: {
      stacked: true,
      grid: { color: THEME_COLORS[mode] },
      ticks: { color: THEME_COLORS.white },
    },
  },
};

const ProjectsChart = () => {
  const { isWeek, setIsWeek, datasets } = useProjectsChart();

  const DATA: ChartData<"bar"> = {
    labels: isWeek ? LAST_WEEKS : LAST_MONTHS,
    datasets,
  };

  return (
    <section className="card space-y-2.5">
      {/* Header */}
      <div className="flex justify-between items-end">
        <h2 className="txt-title">Heures travaillées</h2>
        <div className="text-xs">
          <button
            onClick={() => setIsWeek(true)}
            className={`px-1 ${isWeek && "txt-active"}`}
          >
            Week
          </button>
          <button
            onClick={() => setIsWeek(false)}
            className={`px-1 ${!isWeek && "txt-active"}`}
          >
            Month
          </button>
        </div>
      </div>

      {/* Graph */}
      <Bar options={OPTIONS} data={DATA} />
    </section>
  );
};

export default ProjectsChart;
