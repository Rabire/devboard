import { rand, randNumber } from "@ngneat/falso";
import MOCK_PULL_REQUESTS from "../../static/mock-pull-requests";
import { PRGroup } from "../types";

const generatePullRequests = (): PRGroup[] =>
  ["ready", "rejected", "pending", "draft"].map((status) => ({
    pullRequests: rand(MOCK_PULL_REQUESTS, {
      length: randNumber({ min: 1, max: 2 }),
    }),
    status,
  }));

export default generatePullRequests;
