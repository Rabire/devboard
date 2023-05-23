import { faker } from "@faker-js/faker";
import { startOfToday } from "date-fns";
import { Project } from "../types";
import generatePullRequests from "./pull-requests";

const fakeMockProjects: Project[] = [
  {
    title: "Projet X",
    completionPercentage: faker.number.int(99),
    currentSprint: "Sprint #3 - Feature parcours souscription",
    deadline: new Date("2023-12-31"),
    pullRequests: generatePullRequests(),
  },
  {
    title: "Projet Y",
    completionPercentage: faker.number.int(99),
    currentSprint: "Sprint #13 - Refactoring legacy code",
    deadline: startOfToday(),
    pullRequests: generatePullRequests(),
  },
  {
    title: "Projet Z",
    completionPercentage: faker.number.int(99),
    currentSprint: "Sprint #8 - Feature partage de fichiers",
    deadline: new Date("2023-06-30"),
    pullRequests: generatePullRequests(),
  },
];

export default fakeMockProjects;
