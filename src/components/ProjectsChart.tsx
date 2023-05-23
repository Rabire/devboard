import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useProjectsChart from "../hooks/useProjectsChart";
import { LAST_MONTHS, LAST_WEEKS } from "../static/calendar";
import FilterButton from "./FilterButton";
import { scales, color } from "../static/chart-options";

ChartJS.defaults.font.size = 12;
ChartJS.defaults.font.family = "Nunito";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const OPTIONS = {
  plugins: {
    legend: {
      position: "bottom",
      labels: { color },
    },
  },
  scales,
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
        <FilterButton
          buttons={[
            { label: "Week", onClick: () => setIsWeek(true), isActive: isWeek },
            {
              label: "Month",
              onClick: () => setIsWeek(false),
              isActive: !isWeek,
            },
          ]}
        />
      </div>

      {/* Chart */}
      <Bar options={OPTIONS} data={DATA} />
    </section>
  );
};

export default ProjectsChart;
