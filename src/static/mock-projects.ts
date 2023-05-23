import { faker } from "@faker-js/faker";
import { startOfToday } from "date-fns";
import { Project } from "../utils/types";

const MOCK_PROJECTS: Project[] = [
  {
    title: "Projet X",
    completionPercentage: faker.number.int(99),
    currentSprint: "Sprint #3 - Feature parcours souscription",
    deadline: new Date("2023-12-31"),
  },
  {
    title: "Projet Y",
    completionPercentage: faker.number.int(99),
    currentSprint: "Sprint #13 - Refactoring legacy code",
    deadline: startOfToday(),
  },
  {
    title: "Projet Z",
    completionPercentage: faker.number.int(99),
    currentSprint: "Sprint #8 - Feature partage de fichiers",
    deadline: new Date("2023-06-30"),
  },
];

export default MOCK_PROJECTS;
