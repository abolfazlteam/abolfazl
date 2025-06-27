import { PROJECTS_DATA } from "@/constants/Projects.constants";
import TinderProjectCard from "./TinderProjectCard";

const TinderProjectsWrapper = () => {
  const reversedProjectsOrder = [...PROJECTS_DATA]
    .filter((project) => !project.isDraft)
    .reverse()
    .slice(0, 4);

  return (
    <div className="relative mx-auto flex h-[500px] cursor-grab flex-col items-center justify-center gap-6">
      {reversedProjectsOrder.map((projectData, index) => (
        <TinderProjectCard
          key={projectData.id}
          rotate={index % 2 === 0 ? index - 5 : index + 5}
          index={index}
          width={350}
          height={450}
          {...projectData}
        />
      ))}
    </div>
  );
};

export default TinderProjectsWrapper;
