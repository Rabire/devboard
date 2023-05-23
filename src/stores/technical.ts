import { atom } from "nanostores";
import MOCK_PROJECTS from "../static/mock-projects";

export const project = atom(MOCK_PROJECTS[0]);

export const swipeProject = (direction: "left" | "right") => {
  const currentProject = project.get();
  const currentIndex = MOCK_PROJECTS.indexOf(currentProject);

  const nextIndex =
    currentIndex === MOCK_PROJECTS.length - 1 ? 0 : currentIndex + 1;
  const prevIndex =
    currentIndex === 0 ? MOCK_PROJECTS.length - 1 : currentIndex - 1;

  project.set(MOCK_PROJECTS[direction === "left" ? prevIndex : nextIndex]);
};
