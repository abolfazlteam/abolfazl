import Image from "next/image";
import Tag from "./Tag";
import { TProjectProps } from "@/constants/Projects.constants";

const ProjectCard: React.FC<TProjectProps> = ({
  description,
  src,
  tags,
  title,
  // repoLink,
  // siteLink,
}) => {
  return (
    <article className="group relative h-[240px] w-[240px] cursor-pointer overflow-hidden rounded-10">
      <Image
        src={src}
        fill
        className="z-0 h-full w-full object-cover object-center"
        alt="project title"
      />

      <div className="invisible absolute h-full w-full bg-project-card-hover opacity-0 duration-300 ease-linear first-letter:transition-all group-hover:visible group-hover:opacity-100"></div>

      <div className="absolute left-0 top-full z-[2] h-full w-full space-y-6 px-4 pb-3 pt-[41px] transition-all duration-500 ease-in-out group-hover:top-0">
        <div className="space-y-3">
          <h4 className="text-lg font-extrabold capitalize text-white">
            {title}
          </h4>
          <p className="text-base leading-6 text-white">
            {description.slice(0, 35)}
          </p>
        </div>
        {/* tags */}
        <div className="flex flex-wrap items-center gap-2">
          {tags.slice(0, 3).map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
