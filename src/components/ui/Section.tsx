import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ISectionProps {
  children: ReactNode;
  className?: string;
}

const Section: React.FC<ISectionProps> = ({ children, className }) => {
  return (
    <section
      className={twMerge(
        "mt-11 flex flex-col gap-8 md:gap-10 lg:mt-[120px]",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
