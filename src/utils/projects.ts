import { Project } from "./types";
import generatePullRequests from "./faker/pull-requests";
import { PROJECTS } from "../static/mock-projects";
import generatePerson from "./faker/members";
import generateSprint from "./faker/sprint";

const generateProject = (title: string): Project => {
  const sprints = Array.from({ length: 3 }, generateSprint);
  const members = Array.from({ length: 15 }, () => generatePerson(sprints));

  return {
    title,
    pullRequests: generatePullRequests(),
    sprints,
    members,
  };
};

const projects = PROJECTS.map((projectTitle) => generateProject(projectTitle));

export default projects;
