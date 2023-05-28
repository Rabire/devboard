import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import FilterButton from "./FilterButton";
import { LAST_MONTHS } from "../static/calendar";
import useIssuesChart from "../hooks/useIssuesChart";
import useChartOptions from "../hooks/useChartOptions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const IssuesChart = () => {
  const { datasets, allStats, setAllStats } = useIssuesChart();

  const { lineChartOptions } = useChartOptions();

  const data = {
    labels: LAST_MONTHS,
    datasets,
  };

  return (
    <section className="space-y-5">
      <div className="flex justify-between items-end">
        <h2>Issues statistiques</h2>
        <FilterButton
          buttons={[
            {
              label: "All",
              onClick: () => setAllStats(true),
              isActive: allStats,
            },
            {
              label: "Vôtres",
              onClick: () => setAllStats(false),
              isActive: !allStats,
            },
          ]}
        />
      </div>

      <Line options={lineChartOptions} data={data} />
    </section>
  );
};

export default IssuesChart;
