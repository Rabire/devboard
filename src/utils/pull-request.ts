import { pluralize } from "./format";
import { PRStatus } from "./types";

const getStatusTitle = (status: PRStatus, number: number) => {
  switch (status) {
    case "ready":
      return `${pluralize(number, "prête")} à être ${pluralize(
        number,
        "mergée"
      )}`;
    case "pending":
      return "en attente de relecture";
    case "rejected":
      return pluralize(number, "rejetée");
    default:
      return "en draft";
  }
};

export default getStatusTitle;
