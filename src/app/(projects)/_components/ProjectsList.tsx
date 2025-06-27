import { PROJECTS_DATA } from "@/constants/Projects.constants";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  const publishedProjects = PROJECTS_DATA.filter((project) => !project.isDraft);
  const firstThreeProjects = publishedProjects.slice(0, 2);

  return (
    <div className="flex flex-wrap items-center gap-6">
      {firstThreeProjects?.map((project) => (
        <ProjectCard key={project.id} {...project} width={372} />
      ))}
    </div>
  );
};

export default ProjectsList;
