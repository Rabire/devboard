import { isSameDay, startOfToday } from "date-fns";
import { atom, computed } from "nanostores";
import generateActivities from "../utils/faker/activities";
import generateTasks from "../utils/faker/tasks";

export const activities = atom(generateActivities());
export const selectedDay = atom(startOfToday());

export const setSelectedDay = (day: Date) => selectedDay.set(day);

export const selectedDayActivities = computed(
  [activities, selectedDay],
  (allActivities, day) =>
    allActivities.filter((activity) => isSameDay(activity.start, day))
);

const tasks = atom(generateTasks());

export const todoTasks = computed(tasks, (allTasks) =>
  allTasks.filter((task) => !task.isDone)
);
export const doneTasks = computed(tasks, (allTasks) =>
  allTasks.filter((task) => task.isDone)
);

// TODO: Toggle check
