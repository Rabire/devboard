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
      <div className="grid grid-rows-[1fr_2fr_5fr] gap-5 max-h-content">
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
      <div className="gap-5 flex flex-col max-h-content">
        <NotesTakingSection />
        <IssuesChart />
      </div>

      {/* Right */}
      <div className="grid grid-rows-[auto_1fr] gap-5 max-h-content">
        <PullRequestSection />
        <CodeBaseChart />
      </div>
    </main>
  );
};

export default Technical;
