import { useStore } from "@nanostores/react";
import ProgressBarSection from "../components/ProgressBarSection";
import { project } from "../stores/technical";
import ProjectsSwiper from "../components/ProjectsSwiper";
import PullRequestSection from "../components/PullRequestSection";
import CodeBaseChart from "../components/CodeBaseChart";
import NotesTakingSection from "../components/NotesTakingSection";

const Technical = () => {
  const currentProject = useStore(project);

  return (
    <main className="grid-cols-3">
      {/* Left */}
      <div className="space-y-5">
        <ProjectsSwiper />
        <ProgressBarSection
          title={currentProject.currentSprint}
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
      <div className="gap-5 flex flex-col">
        <NotesTakingSection />
        <CodeBaseChart />
      </div>

      {/* Right */}
      <div className="space-y-5">
        <PullRequestSection />
        <section>
          <h2>Notifications</h2>
        </section>
      </div>
    </main>
  );
};

export default Technical;
