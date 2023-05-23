import PRStatus from "./enums";

const getStatusTitle = (status: PRStatus) => {
  switch (status) {
    case PRStatus.Ready:
      return "prête à être mergée";
    case PRStatus.Pending:
      return "attente de relecture";
    case PRStatus.Rejected:
      return "rejetée";
    default:
      return "en draft";
  }
};

export default getStatusTitle;
