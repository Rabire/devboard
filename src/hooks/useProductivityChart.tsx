import { useState } from "react";
import { randNumber } from "@ngneat/falso";
import { useStore } from "@nanostores/react";
import { LAST_MONTHS, LAST_WEEKS } from "../static/calendar";
import { $settings } from "../stores/theme";
import { THEME_COLORS } from "../styles/themes";
import projects from "../utils/projects";

const useProductivityChart = () => {
  const [isWeek, setIsWeek] = useState(false);
  const { theme } = useStore($settings);

  const tasksDatasets = [
    {
      label: "Done tasks",
      data: (isWeek ? LAST_WEEKS : LAST_MONTHS).map(() =>
        randNumber({ max: 40 })
      ),
      backgroundColor: theme,
    },
  ];

  const activitiesDatasets = projects.map((project, i) => ({
    label: project.title,
    data: isWeek
      ? LAST_WEEKS.map(() => randNumber({ max: 12 }))
      : LAST_MONTHS.map(() => randNumber({ max: 40 })),
    backgroundColor: THEME_COLORS[i + 1],
  }));

  return { isWeek, setIsWeek, tasksDatasets, activitiesDatasets };
};

export default useProductivityChart;
