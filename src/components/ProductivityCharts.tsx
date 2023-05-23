import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartData,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import FilterButton from "./FilterButton";
import useProductivityChart from "../hooks/useProductivityChart";
import { LAST_MONTHS, LAST_WEEKS } from "../static/calendar";
import { color, scales } from "../static/chart-options";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TASKS_OPTIONS = {
  indexAxis: "y",
  plugins: { legend: { display: false } },
  scales,
}; // TODO: type this

const ACTIVITIES_OPTIONS = {
  plugins: {
    legend: {
      position: "bottom",
      labels: { color },
    },
  },
  scales,
}; // TODO: type this

const ProductivityCharts = () => {
  const { isWeek, setIsWeek, activitiesDatasets, tasksDatasets } =
    useProductivityChart();

  const tasksData: ChartData<"bar"> = {
    labels: isWeek ? LAST_WEEKS : LAST_MONTHS,
    datasets: tasksDatasets,
  };

  const projectsData: ChartData<"bar"> = {
    labels: isWeek ? LAST_WEEKS : LAST_MONTHS,
    datasets: activitiesDatasets,
  };

  return (
    <section className="space-y-2.5">
      {/* Header */}
      <div className="flex justify-between items-end">
        <h2 className="txt-title">Tâches terminées</h2>
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
      <Bar options={TASKS_OPTIONS} data={tasksData} />

      <h2 className="txt-title">Heures travaillées</h2>
      <Bar options={ACTIVITIES_OPTIONS} data={projectsData} />
    </section>
  );
};

export default ProductivityCharts;
