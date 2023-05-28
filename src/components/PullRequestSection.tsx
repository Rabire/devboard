import PRStatus from "../utils/enums";
import PRStatusList from "./PRStatusList";

const PullRequestSection = () => (
  <section className="desktop:overflow-y-scroll p-0">
    <h2 className="section-header">Mes pull-requests</h2>

    <PRStatusList status={PRStatus.Ready} />
    <PRStatusList status={PRStatus.Pending} />
    <PRStatusList status={PRStatus.Rejected} />
    <PRStatusList status={PRStatus.Draft} />
  </section>
);

export default PullRequestSection;
