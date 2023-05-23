import { useStore } from "@nanostores/react";
import Swiper from "./Swiper";
import { project, swipeProject } from "../stores/technical";

const ProjectsSwiper = () => {
  const currentProject = useStore(project);

  return (
    <section className="flex justify-between items-center gap-5 py-2.5 rounded-lg">
      <h2>{currentProject.title}</h2>

      <Swiper
        previous={() => swipeProject("left")}
        next={() => swipeProject("right")}
      />
    </section>
  );
};

export default ProjectsSwiper;
