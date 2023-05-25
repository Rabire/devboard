import { faker } from "@faker-js/faker";
import { useState } from "react";
import { TURNOVER_LABELS, CLIENTS } from "../static/mock-incomes";
import THEME_COLORS from "../utils/tailwing-config";

const useDoughnutChart = (type: "incomes" | "turnover") => {
  const [year, setYear] = useState(2023);

  const labels = type === "incomes" ? CLIENTS : TURNOVER_LABELS;

  const data = {
    labels,
    datasets: [
      {
        label: "Montant en euros",
        data: labels.map(() => faker.number.int({ min: 2000, max: 10000 })),
        backgroundColor: labels.map((_, i) => THEME_COLORS.theme[i + 1]),
      },
    ],
  };

  return { year, setYear, data };
};

export default useDoughnutChart;
