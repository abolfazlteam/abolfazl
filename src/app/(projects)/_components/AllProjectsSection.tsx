import { PROJECTS_DATA } from "@/constants/Projects.constants";
import ProjectCard from "./ProjectCard";

const AllProjectsSection = () => {
  const evenIndexedProjects = PROJECTS_DATA.filter(
    (_, index) => index % 2 === 0,
  );

  const oddIndexedProjects = PROJECTS_DATA.filter(
    (_, index) => index % 2 !== 0,
  );

  return (
    <section className="mt-6 flex flex-col justify-center gap-8 gap-x-8 md:flex-row lg:mt-8">
      <div className="flex w-full flex-col justify-center gap-8">
        {evenIndexedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            height={index % 2 === 0 ? 350 : 250}
            width={384}
            className="mx-auto w-full"
          />
        ))}
      </div>
      <div className="flex w-full flex-col gap-8">
        {oddIndexedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            height={index % 2 !== 0 ? 350 : 250}
            width={384}
            className="mx-auto w-full"
          />
        ))}
      </div>
    </section>
  );
};

export default AllProjectsSection;
