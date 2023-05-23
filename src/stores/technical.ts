import { atom } from "nanostores";
import fakeMockProjects from "../utils/faker/projects";

export const project = atom(fakeMockProjects[0]);

export const swipeProject = (direction: "left" | "right") => {
  const currentProject = project.get();
  const currentIndex = fakeMockProjects.indexOf(currentProject);

  const nextIndex =
    currentIndex === fakeMockProjects.length - 1 ? 0 : currentIndex + 1;
  const prevIndex =
    currentIndex === 0 ? fakeMockProjects.length - 1 : currentIndex - 1;

  project.set(fakeMockProjects[direction === "left" ? prevIndex : nextIndex]);
};
