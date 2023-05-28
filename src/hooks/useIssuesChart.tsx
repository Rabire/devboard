import { useState } from "react";
import { randNumber } from "@ngneat/falso";
import { LAST_MONTHS } from "../static/calendar";
import THEME_COLORS from "../utils/tailwing-config";

const useIssuesChart = () => {
  const [allStats, setAllStats] = useState(false);

  const datasets = [
    {
      label: "Ouvertes",
      data: LAST_MONTHS.map(
        () => randNumber({ max: 12 }) * (allStats ? 10 : 1)
      ),
      backgroundColor: THEME_COLORS.theme[1],
      borderColor: THEME_COLORS.theme[1],
    },
    {
      label: "Résolues",
      data: LAST_MONTHS.map(
        () => randNumber({ max: 10 }) * (allStats ? 10 : 1)
      ),
      backgroundColor: THEME_COLORS.theme[2],
      borderColor: THEME_COLORS.theme[2],
    },
    {
      label: "Documentées",
      data: LAST_MONTHS.map(
        () => randNumber({ max: 10 }) * (allStats ? 10 : 1)
      ),
      backgroundColor: THEME_COLORS.theme[3],
      borderColor: THEME_COLORS.theme[3],
    },
  ];

  return { datasets, allStats, setAllStats };
};

export default useIssuesChart;
