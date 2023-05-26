import { useState } from "react";
import { faker } from "@faker-js/faker";
import { LAST_MONTHS, LAST_WEEKS } from "../static/calendar";
import { $settings } from "../stores/theme";
import THEME_COLORS from "../utils/tailwing-config";
import projects from "../utils/projects";

const useProductivityChart = () => {
  const [isWeek, setIsWeek] = useState(false);
  const { theme } = $settings.get();

  const tasksDatasets = [
    {
      label: "Done tasks",
      data: (isWeek ? LAST_WEEKS : LAST_MONTHS).map(() => faker.number.int(40)),
      backgroundColor: theme, // TODO: current theme in hex (get it in store maybe ?)
    },
  ];

  const activitiesDatasets = projects.map((project, i) => ({
    label: project.title,
    data: isWeek
      ? LAST_WEEKS.map(() => faker.number.int(12))
      : LAST_MONTHS.map(() => faker.number.int(40)),
    backgroundColor: THEME_COLORS.theme[i + 1],
  }));

  return { isWeek, setIsWeek, tasksDatasets, activitiesDatasets };
};

export default useProductivityChart;
