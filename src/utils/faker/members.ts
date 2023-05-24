import { faker } from "@faker-js/faker";
import { Person, Sprint } from "../types";
import { TEAMS } from "../../static/mock-projects";

const generatePerson = (sprints: Sprint[]): Person => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  team: faker.helpers.arrayElement(TEAMS),
  sprint: faker.helpers.arrayElement(sprints),
  image: faker.image.avatarGitHub(),
});

export default generatePerson;
