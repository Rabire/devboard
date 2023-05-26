import PRStatus from "../utils/enums";
import PRStatusList from "./PRStatusList";

// TODO: header fixed
const PullRequestSection = () => (
  <section className="desktop:overflow-y-scroll">
    <h2 className="mb-2.5">Mes pull-requests</h2>

    <PRStatusList status={PRStatus.Ready} />
    <PRStatusList status={PRStatus.Pending} />
    <PRStatusList status={PRStatus.Rejected} />
    <PRStatusList status={PRStatus.Draft} />
  </section>
);

export default PullRequestSection;
