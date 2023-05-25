import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import FilterButton from "./FilterButton";
import useDoughnutChart from "../hooks/useDoughnutChart";
import { color } from "../static/chart-options";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      position: "bottom",
      labels: { color },
    },
  },
  borderWidth: 0,
};

const DoughnutSection = () => {
  const { year, setYear, data } = useDoughnutChart();

  return (
    <section>
      <div className="flex justify-between items-end mb-5">
        <h2>Chiffre d’affaire</h2>
        <FilterButton
          buttons={[
            {
              label: "2022",
              onClick: () => setYear(2022),
              isActive: year === 2022,
            },
            {
              label: "2023",
              onClick: () => setYear(2023),
              isActive: year === 2023,
            },
          ]}
        />
      </div>

      <Doughnut options={options} data={data} />
    </section>
  );
};

export default DoughnutSection;
