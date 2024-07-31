import { COMPANIES_DATA } from "@/constants/Companies.constants";

const WorkExperienceSectionSkeleton = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      {COMPANIES_DATA.map((company) => (
        <CompanySkeleton key={company.id} />
      ))}
    </div>
  );
};

export default WorkExperienceSectionSkeleton;

const CompanySkeleton = () => {
  return (
    <article
      className="group flex h-full animate-pulse items-center gap-x-6"
      data-testid="company-component"
    >
      <figure className="relative h-[50px] w-[50px] overflow-hidden rounded-full border-[#abb2bf] bg-gray-400 transition-all duration-150 ease-linear group-hover:border-2 dark:bg-gray-200 md:h-[80px] md:w-[80px]"></figure>

      <div className="flex flex-[6] flex-col justify-between gap-y-2 sm:flex-row">
        <p className="flex w-full flex-col gap-3 text-caption2 font-light leading-6 md:text-caption1">
          <span className="inline-flex h-4 w-56 bg-gray-400 text-caption2 font-light transition-all duration-200 ease-linear group-hover:font-semibold dark:bg-gray-200 sm:m-0 sm:justify-end md:text-base md:font-normal"></span>
          <span className="inline-flex h-3 w-full max-w-28 bg-gray-400 text-caption2 font-light transition-all duration-200 ease-linear group-hover:font-semibold dark:bg-gray-200 sm:m-0 sm:justify-end md:text-base md:font-normal"></span>
        </p>

        <span className="inline-flex h-4 w-full max-w-28 bg-gray-400 text-caption2 font-light transition-all duration-200 ease-linear group-hover:font-semibold dark:bg-gray-200 sm:m-0 sm:justify-end md:max-w-40 md:text-base md:font-normal"></span>
      </div>
    </article>
  );
};
