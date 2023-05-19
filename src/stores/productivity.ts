import { isSameDay, startOfToday } from "date-fns";
import { atom, computed } from "nanostores";
import generateActivities from "../utils/faker/activities";

export const activities = atom(generateActivities());
export const selectedDay = atom(startOfToday());

export const setSelectedDay = (day: Date) => selectedDay.set(day);

export const selectedDayActivities = computed(
  [activities, selectedDay],
  (allActivities, day) =>
    allActivities.filter((activity) => isSameDay(activity.start, day))
);
