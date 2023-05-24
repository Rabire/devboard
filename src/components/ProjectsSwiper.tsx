import { useStore } from "@nanostores/react";
import Swiper from "./Swiper";
import { project, swipeProject } from "../stores/technical";

const ProjectsSwiper = () => {
  const currentProject = useStore(project);

  return (
    <section className=" flex flex-col justify-center rounded-lg">
      <p className="opacity-50 mb-1">Mes projets</p>
      <div className="flex justify-between items-center gap-5">
        <h2>{currentProject.title}</h2>

        <Swiper
          previous={() => swipeProject("left")}
          next={() => swipeProject("right")}
        />
      </div>
    </section>
  );
};

export default ProjectsSwiper;
