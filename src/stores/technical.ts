import { atom } from "nanostores";
import MOCK_PROJECTS from "../static/mock-projects";

export const project = atom(MOCK_PROJECTS[0]);

export const swipeProject = (direction: "left" | "right") => {
  const currentProject = project.get();
  const currentIndex = MOCK_PROJECTS.indexOf(currentProject);
  const previousIndex =
    (currentIndex + direction === "right" ? 1 : -1) % MOCK_PROJECTS.length;
  project.set(MOCK_PROJECTS[previousIndex]);
};
