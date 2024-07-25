import { ICompanyInfoProps } from "@/constants/Companies.constants";
import Image from "next/image";

const Company: React.FC<ICompanyInfoProps> = ({
  companyName,
  endData,
  image,
  location,
  role,
  jobType,
  startDate,
}) => {
  return (
    <article
      className="group flex h-full items-center gap-x-6"
      data-testid="company-component"
    >
      <figure className="relative h-[50px] w-[50px] overflow-hidden rounded-full border-[#abb2bf] transition-all duration-150 ease-linear group-hover:border-2 md:h-[80px] md:w-[80px]">
        <Image
          src={image}
          alt={`${companyName} logo`}
          fill
          className="h-full w-full object-cover object-center"
        />
      </figure>

      <div className="flex flex-[6] flex-col justify-between gap-y-2 sm:flex-row">
        <p className="text-caption2 font-light leading-6 md:text-caption1">
          <span className="leading-7 transition-all duration-200 ease-linear group-hover:font-bold">
            {role} at {companyName}{" "}
          </span>
          <span className="hidden text-text-primary sm:inline-block"> - </span>
          <span className="inline-block w-full leading-6 text-gray-5 sm:w-fit">
            {" "}
            {location} · {jobType}
          </span>
        </p>

        <span className="inline-flex w-full max-w-28 text-caption2 font-light transition-all duration-200 ease-linear group-hover:font-semibold sm:m-0 sm:justify-end md:max-w-40 md:text-base md:font-normal">
          {startDate} - {endData}
        </span>
      </div>
    </article>
  );
};

export default Company;
