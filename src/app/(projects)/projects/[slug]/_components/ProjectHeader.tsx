import LinkButton from "@/components/ui/LinkButton";

const ProjectHeader = () => {
  return (
    <header className="mb-11 mt-12 space-y-2 border-b border-[#ABB2BF] pb-4 md:mb-12 md:mt-14 md:space-y-5">
      <span className="text-body2 text-gray-4">2022</span>

      <h1 className="text-body2 font-semibold text-heading md:text-xl">
        Build-Time Syntax Highlighting: Zero Client-Side JS, Support for
        Languages and Any VSCode Theme
      </h1>

      <div className="flex items-center justify-between py-2 md:py-4">
        <p className="space-x-2">
          Designing and developing Internal software used to manage the
          companies $95.79 billion of dollars in private real-estate assets.
        </p>
      </div>
      <button>
        <LinkButton hasLinkIcon icon={null} href="/">
          Open project
        </LinkButton>
      </button>
    </header>
  );
};

export default ProjectHeader;
