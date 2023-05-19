import { useState } from "react";
import { useStore } from "@nanostores/react";
import { faker } from "@faker-js/faker";
import { activities as activitiesStore } from "../stores/productivity";
import { LAST_MONTHS, LAST_WEEKS } from "../static/calendar";

import THEME_COLORS from "../utils/tailwing-config";

const useProjectsChart = () => {
  const [isWeek, setIsWeek] = useState(false);

  const activities = useStore(activitiesStore);

  const datasets = [...new Set(activities.map((act) => act.project))].map(
    (project, i) => ({
      label: project,
      data: isWeek
        ? LAST_WEEKS.map(() => faker.number.int(12))
        : LAST_MONTHS.map(() => faker.number.int(40)),
      backgroundColor: THEME_COLORS.theme[i + 1],
    })
  );

  return { isWeek, setIsWeek, datasets };
};

export default useProjectsChart;
