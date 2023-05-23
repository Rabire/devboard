import { useState } from "react";
import { faker } from "@faker-js/faker";
import { LAST_MONTHS, LAST_WEEKS } from "../static/calendar";
import { settings } from "../stores/theme";

const useTasksChart = () => {
  const [isWeek, setIsWeek] = useState(false);

  const { theme } = settings.get();

  const datasets = [
    {
      label: "Done tasks",
      data: (isWeek ? LAST_WEEKS : LAST_MONTHS).map(() => faker.number.int(40)),
      backgroundColor: theme, // TODO: current theme in hex (get it in store maybe ?)
    },
  ];

  return { isWeek, setIsWeek, datasets };
};

export default useTasksChart;
