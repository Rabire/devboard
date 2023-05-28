import PRStatus from "./enums";
import { pluralize } from "./format";

const getStatusTitle = (status: PRStatus, number: number) => {
  switch (status) {
    case PRStatus.Ready:
      return `${pluralize(number, "prête")} à être ${pluralize(
        number,
        "mergée"
      )}`;
    case PRStatus.Pending:
      return "en attente de relecture";
    case PRStatus.Rejected:
      return pluralize(number, "rejetée");
    default:
      return "en draft";
  }
};

export default getStatusTitle;
