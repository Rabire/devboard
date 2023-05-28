import { randNumber } from "@ngneat/falso";
import { useState } from "react";
import { TURNOVER_LABELS, CLIENTS } from "../static/mock-incomes";
import { THEME_COLORS } from "../styles/themes";

const useDoughnutChart = (type: "incomes" | "turnover") => {
  const [year, setYear] = useState(2023);

  const labels = type === "incomes" ? CLIENTS : TURNOVER_LABELS;

  const data = {
    labels,
    datasets: [
      {
        label: "Montant en euros",
        data: labels.map(() => randNumber({ min: 2000, max: 10000 })),
        backgroundColor: labels.map((_, i) => THEME_COLORS[i + 1]),
      },
    ],
  };

  return { year, setYear, data };
};

export default useDoughnutChart;
