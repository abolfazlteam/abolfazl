import LinkButton from "@/components/ui/LinkButton";
import formatPublishedDateHandler from "@/utils/date";

interface IProjectHeaderProps {
  title: string;
  publishedAt: string;
  description: string;
  websiteUrl: string;
}

const ProjectHeader: React.FC<IProjectHeaderProps> = ({
  title,
  description,
  publishedAt,
  websiteUrl,
}) => {
  return (
    <header className="mb-11 mt-12 space-y-2 border-b border-[#ABB2BF] pb-4 md:mb-12 md:mt-14 md:space-y-5">
      <span className="text-body2 text-gray-4">
        {formatPublishedDateHandler(publishedAt, "en-US", {
          year: "numeric",
        })}
      </span>

      <h1 className="text-body2 font-semibold text-heading md:text-xl">
        {title}
      </h1>

      <div className="flex items-center justify-between py-2 md:py-4">
        <p className="space-x-2">{description}</p>
      </div>

      {websiteUrl && (
        <button>
          <LinkButton hasLinkIcon icon={null} href={websiteUrl}>
            Open project
          </LinkButton>
        </button>
      )}
    </header>
  );
};

export default ProjectHeader;
