import { atom } from "nanostores";
import projects from "../utils/projects";

export const project = atom(projects[0]);

export const swipeProject = (direction: "left" | "right") => {
  const currentProject = project.get();
  const currentIndex = projects.indexOf(currentProject);

  const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;

  project.set(projects[direction === "left" ? prevIndex : nextIndex]);
};
