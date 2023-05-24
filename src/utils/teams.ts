import { project } from "../stores/technical";

const { members, sprints } = project.get();

export const teams = [...new Set(members.map((member) => member.team))].map(
  (team) => ({
    name: team,
    members: members.filter((member) => member.team === team),
  })
);

export const membersSprints = sprints.map((sprint) => ({
  sprint,
  members: members.filter((member) => member.sprint === sprint),
}));
