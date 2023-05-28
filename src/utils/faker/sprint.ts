import { rand, randNumber, randBetweenDate } from "@ngneat/falso";
import { Sprint } from "../types";
import { SPRINTS } from "../../static/mock-projects";

const generateSprint = (): Sprint => ({
  name: rand(SPRINTS),
  issue: randNumber({ max: 1000 }),
  completionPercentage: randNumber({ max: 99 }),
  deadline: randBetweenDate({
    from: new Date(),
    to: "2024-01-01T00:00:00.000Z",
  }),
});

export default generateSprint;
