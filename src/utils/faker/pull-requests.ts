import { faker } from "@faker-js/faker";
import { PRStatus } from "../types";
import MOCK_PULL_REQUESTS from "../../static/mock-pull-requests";

const PRs = Object.values(PRStatus).map((status) => ({
  pullRequests: faker.helpers.arrayElements(MOCK_PULL_REQUESTS, {
    min: 1,
    max: 2,
  }),
  status,
}));

export default PRs;
