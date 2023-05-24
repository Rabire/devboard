import { useState } from "react";
import { faker } from "@faker-js/faker";
import { useStore } from "@nanostores/react";
import { activities as activitiesStore } from "../stores/productivity";
import { LAST_MONTHS, LAST_WEEKS } from "../static/calendar";
import { settings } from "../stores/theme";
import THEME_COLORS from "../utils/tailwing-config";

const useProductivityChart = () => {
  const [isWeek, setIsWeek] = useState(false);
  const activities = useStore(activitiesStore);
  const { theme } = settings.get();

  const tasksDatasets = [
    {
      label: "Done tasks",
      data: (isWeek ? LAST_WEEKS : LAST_MONTHS).map(() => faker.number.int(40)),
      backgroundColor: theme, // TODO: current theme in hex (get it in store maybe ?)
    },
  ];

  const activitiesDatasets = [
    ...new Set(activities.map((act) => act.project)),
  ].map((project, i) => ({
    label: project.title,
    data: isWeek
      ? LAST_WEEKS.map(() => faker.number.int(12))
      : LAST_MONTHS.map(() => faker.number.int(40)),
    backgroundColor: THEME_COLORS.theme[i + 1],
  }));

  return { isWeek, setIsWeek, tasksDatasets, activitiesDatasets };
};

export default useProductivityChart;
