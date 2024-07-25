import { PROJECTS_DATA } from "@/constants/Projects.constants";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {PROJECTS_DATA?.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectsList;
