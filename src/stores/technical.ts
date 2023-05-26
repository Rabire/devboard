import { atom, computed } from "nanostores";
import projects from "../utils/projects";

export const $project = atom(projects[0]);

export const swipeProject = (direction: "left" | "right") => {
  const currentProject = $project.get();
  const currentIndex = projects.indexOf(currentProject);

  const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;

  $project.set(projects[direction === "left" ? prevIndex : nextIndex]);
};

export const teams = computed($project, ({ members }) =>
  [...new Set(members.map((member) => member.team))].map((team) => ({
    name: team,
    members: members.filter((member) => member.team === team),
  }))
);

export const membersSprints = computed($project, ({ members, sprints }) =>
  [...new Set(sprints)].map((sprint) => ({
    sprint,
    members: members.filter((member) => member.sprint === sprint),
  }))
);
