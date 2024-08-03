import { PROJECTS_DATA } from "@/constants/Projects.constants";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  const publishedProjects = PROJECTS_DATA.filter((project) => !project.isDraft);

  return (
    <div className="flex flex-wrap items-center gap-6">
      {publishedProjects?.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectsList;
