import { useStore } from "@nanostores/react";
import ProgressBarSection from "../components/ProgressBarSection";
import { project } from "../stores/technical";
import ProjectsSwiper from "../components/ProjectsSwiper";
import PullRequestSection from "../components/PullRequestSection";
import CodeBaseChart from "../components/CodeBaseChart";
import NotesTakingSection from "../components/NotesTakingSection";
import TeamSection from "../components/TeamSection";

const Technical = () => {
  const { sprints } = useStore(project);

  const currentProject = sprints[0];

  return (
    <main className="grid-cols-3">
      {/* Left */}
      <div className="flex flex-col gap-5">
        <ProjectsSwiper />
        <ProgressBarSection
          title={currentProject.name}
          subTitle="Milestone actuelle"
          percentage={currentProject.completionPercentage}
          deadline={currentProject.deadline}
        />
        <TeamSection />
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
          <h2>Issues statistiques</h2>
        </section>
      </div>
    </main>
  );
};

export default Technical;
