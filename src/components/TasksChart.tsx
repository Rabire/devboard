import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import FilterButton from "./FilterButton";
import useTasksChart from "../hooks/useTasksChart";
import { LAST_MONTHS, LAST_WEEKS } from "../static/calendar";
import { scales } from "../static/chart-options";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const OPTIONS = {
  indexAxis: "y",
  plugins: { legend: { display: false } },
  scales,
};

const TasksChart = () => {
  const { isWeek, setIsWeek, datasets } = useTasksChart();

  const data: ChartData<"bar"> = {
    labels: isWeek ? LAST_WEEKS : LAST_MONTHS,
    datasets,
  };

  return (
    <section className="card space-y-2.5">
      {/* Header */}
      <div className="flex justify-between items-end">
        <h2 className="txt-title">Tâches terminées</h2>
        <FilterButton
          buttons={[
            { label: "Week", onClick: () => setIsWeek(true), isActive: false },
            { label: "Month", onClick: () => setIsWeek(false), isActive: true },
          ]}
        />
      </div>

      {/* Chart */}
      <Bar options={OPTIONS} data={data} />
    </section>
  );
};

export default TasksChart;
