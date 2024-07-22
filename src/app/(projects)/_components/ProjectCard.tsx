import Image from "next/image";
import Tag from "./Tag";

const ProjectCard = () => {
  return (
    <article className="group relative h-[240px] w-[240px] cursor-pointer overflow-hidden rounded-10">
      <Image
        src={"/images/sample-project-img.png"}
        fill
        className="z-0 h-full w-full object-cover object-center"
        alt="project title"
      />

      <div className="absolute left-0 top-full z-[2] h-full w-full space-y-6 bg-project-card-hover px-4 pb-3 pt-[41px] transition-all duration-200 ease-in-out group-hover:top-0">
        <div className="space-y-3">
          <h4 className="text-lg font-extrabold capitalize text-white">
            React query
          </h4>
          <p className="text-base leading-6 text-white">
            Simplifies the use of React Query by offering a...
          </p>
        </div>
        {/* tags */}
        <div className="flex flex-wrap items-center gap-2">
          <Tag>typescript</Tag>
          <Tag>javascript</Tag>
          <Tag>vite</Tag>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
