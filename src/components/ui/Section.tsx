import { ReactNode } from "react";

interface ISectionProps {
  children: ReactNode;
}

const Section: React.FC<ISectionProps> = ({ children }) => {
  return (
    <section className="flex flex-col gap-8 md:gap-10 lg:mt-[120px]">
      {children}
    </section>
  );
};

export default Section;
