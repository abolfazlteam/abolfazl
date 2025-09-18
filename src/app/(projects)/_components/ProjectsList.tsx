import { PROJECTS_DATA } from "@/constants/Projects.constants";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  const publishedProjects = PROJECTS_DATA.filter((project) => !project.isDraft);
  const firstThreeProjects = publishedProjects.slice(0, 3);
  const astrobloomTheme = publishedProjects?.find(
    (item) => item?.slug === "astrobloom-theme",
  );

  const finalList = [astrobloomTheme!, ...firstThreeProjects];

  return (
    <div className="flex flex-wrap items-center gap-6">
      {finalList?.map((project) => (
        <ProjectCard key={project?.id} {...project} width={372} />
      ))}
    </div>
  );
};

export default ProjectsList;
