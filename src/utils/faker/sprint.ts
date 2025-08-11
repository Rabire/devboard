import { rand, randBetweenDate, randNumber } from "@ngneat/falso";
import { SPRINTS } from "../../static/mock-projects";
import { Sprint } from "../types";

const generateSprint = (): Sprint => {
  const now = new Date();
  const oneYearFromNow = new Date(now);
  oneYearFromNow.setFullYear(now.getFullYear() + 1);

  return {
    name: rand(SPRINTS),
    issue: randNumber({ max: 1000 }),
    completionPercentage: randNumber({ max: 99 }),
    deadline: randBetweenDate({
      from: now,
      to: oneYearFromNow,
    }),
  };
};

export default generateSprint;
