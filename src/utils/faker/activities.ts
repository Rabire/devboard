import { eachDayOfInterval, isSaturday, isSunday, set } from "date-fns";
import { faker } from "@faker-js/faker";
import { Activity, Slot } from "../types";
import { $project } from "../../stores/technical";
import {
  AM_SLOTS,
  MOCK_ACTIVITIES,
  PM_SLOTS,
} from "../../static/mock-activities";

const project = $project.get();

const generateSlotActivity = (day: Date, slot: Slot) => {
  const activity: Activity = {
    name: faker.helpers.arrayElement(MOCK_ACTIVITIES),
    project,
    start: set(day, { hours: slot.start }),
    end: set(day, { hours: slot.end }),
  };
  return activity;
};

const generateActivities = () => {
  // all weekdays between 01/03/23 and 31/05/23
  const weekDays = eachDayOfInterval({
    start: new Date(2023, 2, 1),
    end: new Date(2023, 4, 331),
  }).filter((day) => !isSaturday(day) && !isSunday(day));

  // generate activities for each week days
  const activities = weekDays.map((day) => {
    const amSlot = faker.helpers.arrayElement(AM_SLOTS);
    const pmSlot = faker.helpers.arrayElement(PM_SLOTS);

    return [
      generateSlotActivity(day, amSlot[0]),
      generateSlotActivity(day, amSlot[1]),
      generateSlotActivity(day, pmSlot[0]),
      generateSlotActivity(day, pmSlot[1]),
    ];
  });

  return activities.flat(1);
};

export default generateActivities;

// TODO: tests
