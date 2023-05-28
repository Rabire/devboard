import { rand, randAvatar, randFullName, randUuid } from "@ngneat/falso";
import { Person, Sprint } from "../types";
import { TEAMS } from "../../static/mock-projects";

const generatePerson = (sprints: Sprint[]): Person => ({
  id: randUuid(),
  name: randFullName(),
  team: rand(TEAMS),
  sprint: rand(sprints),
  image: randAvatar(),
});

export default generatePerson;
