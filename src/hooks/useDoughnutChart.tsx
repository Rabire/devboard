import { faker } from "@faker-js/faker";
import { useState } from "react";
import TURNOVER_LABELS from "../static/mock-incomes";
import THEME_COLORS from "../utils/tailwing-config";

const useDoughnutChart = () => {
  const [year, setYear] = useState(2023);

  const data = {
    labels: TURNOVER_LABELS,
    datasets: [
      {
        label: "Montant en euros",
        data: TURNOVER_LABELS.map(() =>
          faker.number.int({ min: 2000, max: 10000 })
        ),
        backgroundColor: TURNOVER_LABELS.map(
          (_, i) => THEME_COLORS.theme[i + 1]
        ),
      },
    ],
  };

  return { year, setYear, data };
};

export default useDoughnutChart;
