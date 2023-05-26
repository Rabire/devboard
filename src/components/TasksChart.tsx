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
import useProductivityChart from "../hooks/useProductivityChart";
import FilterButton from "./FilterButton";
import { scales } from "../static/chart-options";
import { LAST_MONTHS, LAST_WEEKS } from "../static/calendar";

const TASKS_OPTIONS = {
  indexAxis: "y",
  plugins: { legend: { display: false } },
  scales,
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TasksChart = () => {
  const { isWeek, setIsWeek, tasksDatasets } = useProductivityChart();

  const tasksData: ChartData<"bar"> = {
    labels: isWeek ? LAST_WEEKS : LAST_MONTHS,
    datasets: tasksDatasets,
  };

  return (
    <section className="flex gap-5 flex-col justify-around">
      <div className="flex justify-between items-end">
        <h2>Tâches terminées</h2>
        <FilterButton
          buttons={[
            {
              label: "Week",
              onClick: () => setIsWeek(true),
              isActive: isWeek,
            },
            {
              label: "Month",
              onClick: () => setIsWeek(false),
              isActive: !isWeek,
            },
          ]}
        />
      </div>

      <Bar className="max-h-[150px]" options={TASKS_OPTIONS} data={tasksData} />
    </section>
  );
};

export default TasksChart;
