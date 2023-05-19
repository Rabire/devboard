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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const OPTIONS = {
  plugins: { title: { display: false }, legend: { position: "bottom" } },
  responsive: true,
  scales: {
    x: { stacked: true },
    y: { stacked: true },
  },
};

const LABELS = ["January", "February", "March", "April", "May", "June", "July"];

const DATA: ChartData<"bar"> = {
  labels: LABELS,
  datasets: [
    {
      label: "Dataset 1",
      data: LABELS.map(() => 445),
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: LABELS.map(() => 888),
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Dataset 3",
      data: LABELS.map(() => 222),
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

const TimeByProjectGraph = () => (
  <section className="card">
    {/* Header */}
    <div className="flex justify-between items-end">
      <h2 className="txt-title">Temps par projet</h2>
      <div className="text-xs">
        <button className="px-1">Week</button>
        <button className="px-1 txt-active">Month</button>
      </div>
    </div>

    {/* Graph */}
    <Bar options={OPTIONS} data={DATA} />
  </section>
);

export default TimeByProjectGraph;
