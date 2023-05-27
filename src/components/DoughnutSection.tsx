import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import FilterButton from "./FilterButton";
import useDoughnutChart from "../hooks/useDoughnutChart";
import useChartOptions from "../hooks/useChartOptions";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  type: "incomes" | "turnover";
};

const DoughnutSection = ({ type }: Props) => {
  const { year, setYear, data } = useDoughnutChart(type);
  const { color } = useChartOptions();

  const options = {
    plugins: {
      legend: {
        position: "right",
        labels: { color },
      },
    },
    borderWidth: 0,
  };

  return (
    <section className="flex-1">
      <div className="flex justify-between items-end mb-5">
        <h2>
          {type === "incomes" ? "Revenus par clients" : "Chiffre d’affaire"}
        </h2>
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

      <Doughnut className="max-h-48" options={options} data={data} />
    </section>
  );
};

export default DoughnutSection;
