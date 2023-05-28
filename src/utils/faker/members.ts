import { rand, randFullName, randUuid } from "@ngneat/falso";
import { Person, Sprint } from "../types";
import { TEAMS } from "../../static/mock-projects";
import MOCK_AVATARS from "../../static/mock-avatars";

const generatePerson = (sprints: Sprint[]): Person => ({
  id: randUuid(),
  name: randFullName(),
  team: rand(TEAMS),
  sprint: rand(sprints),
  image: rand(MOCK_AVATARS),
});

export default generatePerson;
