import { useStore } from "@nanostores/react";
import ProgressBarSection from "../components/ProgressBarSection";
import { project } from "../stores/technical";
import ProjectsSwiper from "../components/ProjectsSwiper";
import PullRequestSection from "../components/PullRequestSection";
import CodeBaseChart from "../components/CodeBaseChart";
import NotesTakingSection from "../components/NotesTakingSection";
import TeamSection from "../components/TeamSection";
import IssuesChart from "../components/IssuesChart";

const Technical = () => {
  const { sprints } = useStore(project);

  const currentProject = sprints[0];

  return (
    <main className="grid-cols-3">
      {/* Left */}
      <div className="grid grid-rows-[1fr_2fr_5fr] gap-5 max-h-[var(--content-height)]">
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
      <div className="flex flex-col gap-5">
        <PullRequestSection />
        <IssuesChart />
      </div>
    </main>
  );
};

export default Technical;
