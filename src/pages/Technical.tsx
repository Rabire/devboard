import { useStore } from "@nanostores/react";
import cn from "classnames";
import ProgressBarSection from "../components/ProgressBarSection";
import { $project } from "../stores/technical";
import ProjectsSwiper from "../components/ProjectsSwiper";
import PullRequestSection from "../components/PullRequestSection";
import CodeBaseChart from "../components/CodeBaseChart";
import NotesTakingSection from "../components/NotesTakingSection";
import TeamSection from "../components/TeamSection";
import IssuesChart from "../components/IssuesChart";

const Technical = () => {
  const { sprints } = useStore($project);

  const currentProject = sprints[0];

  return (
    <main>
      {/* left */}
      <div className="flex flex-col tablet:grid grid-rows-[1fr_2fr_5fr] gap-5 tablet:h-main">
        <ProjectsSwiper />
        <ProgressBarSection
          title={currentProject.name}
          subTitle="Milestone actuelle"
          percentage={currentProject.completionPercentage}
          deadline={currentProject.deadline}
        />
        <TeamSection />
      </div>

      {/* tablet:left desktop:middle */}
      <div className="flex flex-col gap-5 h-main">
        <NotesTakingSection />
        <IssuesChart />
      </div>

      {/* tablet:full-width desktop:right */}
      <div
        className={cn(
          "flex flex-col tablet:grid grid-rows-[auto_1fr]",
          "desktop:h-main gap-5",
          "tablet:grid-cols-2 desktop:grid-cols-1",
          "tablet:col-span-2 desktop:col-span-1"
        )}
      >
        <PullRequestSection />
        <CodeBaseChart />
      </div>
    </main>
  );
};

export default Technical;
