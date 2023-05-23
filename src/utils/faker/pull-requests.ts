import { faker } from "@faker-js/faker";
import PRStatus from "../enums";
import MOCK_PULL_REQUESTS from "../../static/mock-pull-requests";
import { PRGroup } from "../types";

const generatePullRequests = (): PRGroup[] =>
  Object.values(PRStatus).map((status) => ({
    pullRequests: faker.helpers.arrayElements(MOCK_PULL_REQUESTS, {
      min: 1,
      max: 2,
    }),
    status,
  }));

export default generatePullRequests;
