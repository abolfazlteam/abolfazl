import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div className="flex items-center gap-6">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectsList;
