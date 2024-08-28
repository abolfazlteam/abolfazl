import { rammettoOne } from "@/app/fonts";

interface ISectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <header className="space-y-4 md:space-y-10">
      <h2 className={`${rammettoOne.className} text-xl capitalize md:text-2xl`}>
        {title}
      </h2>

      {description && (
        <p
          data-testid="section-header-description"
          className="text-body2 font-light md:text-lg"
        >
          {description}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
