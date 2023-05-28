import PRStatusList from "./PRStatusList";

const PullRequestSection = () => (
  <section className="desktop:overflow-y-scroll p-0">
    <h2 className="section-header">Mes pull-requests</h2>

    <PRStatusList status="ready" />
    <PRStatusList status="pending" />
    <PRStatusList status="rejected" />
    <PRStatusList status="draft" />
  </section>
);

export default PullRequestSection;
