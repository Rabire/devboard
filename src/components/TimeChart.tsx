import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartData,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import FilterButton from "./FilterButton";
import useProductivityChart from "../hooks/useProductivityChart";
import { LAST_MONTHS, LAST_WEEKS } from "../static/calendar";
import useChartOptions from "../hooks/useChartOptions";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TimeChart = () => {
  const { isWeek, activitiesDatasets, setIsWeek } = useProductivityChart();

  const { color, scales } = useChartOptions();

  const projectsData: ChartData<"bar"> = {
    labels: isWeek ? LAST_WEEKS : LAST_MONTHS,
    datasets: activitiesDatasets,
  };

  const options: ChartOptions<"bar"> = {
    plugins: {
      legend: {
        position: "bottom",
        labels: { color },
      },
    },
    scales,
  };

  return (
    <section className="flex flex-1 gap-5 flex-col justify-around">
      <div className="flex justify-between items-end">
        <h2>Heures travaillées</h2>
        <FilterButton
          buttons={[
            {
              label: "Semaines",
              onClick: () => setIsWeek(true),
              isActive: isWeek,
            },
            {
              label: "Mois",
              onClick: () => setIsWeek(false),
              isActive: !isWeek,
            },
          ]}
        />
      </div>

      <Bar className="max-h-[150px]" options={options} data={projectsData} />
    </section>
  );
};

export default TimeChart;
