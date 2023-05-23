import { useStore } from "@nanostores/react";
import ProgressBarSection from "../components/ProgressBarSection";
import { project } from "../stores/technical";

const Technical = () => {
  const currentProject = useStore(project);

  return (
    <main className="grid-cols-3">
      {/* Left */}
      <div className="space-y-5">
        <section>
          <h1>Project Picker</h1>
        </section>
        <ProgressBarSection
          title={currentProject.title}
          subTitle="Milestone actuelle"
          percentage={currentProject.completionPercentage}
          deadline={currentProject.deadline}
        />
        <section>
          <h2>Issues statistiques</h2>
        </section>
        <section>
          <h2>Teams</h2>
          <h2>Travail sur</h2>
        </section>
      </div>

      {/* Middle */}
      <div className="space-y-5">
        <section>
          <h2>Notes rapides</h2>
        </section>
        <section>
          <h2>Codebase actuelle</h2>
        </section>
      </div>

      {/* Right */}
      <div className="space-y-5">
        <section>
          <h2>Mes pull-requests</h2>
        </section>
        <section>
          <h2>Notifications</h2>
        </section>
      </div>
    </main>
  );
};

export default Technical;
