import { faker } from "@faker-js/faker";
import { Sprint } from "../types";
import { SPRINTS } from "../../static/mock-projects";

const generateSprint = (): Sprint => ({
  name: faker.helpers.arrayElement(SPRINTS),
  issue: faker.number.int(1000),
  completionPercentage: faker.number.int(99),
  deadline: faker.date.between({
    from: new Date(),
    to: "2024-01-01T00:00:00.000Z",
  }),
});

export default generateSprint;
