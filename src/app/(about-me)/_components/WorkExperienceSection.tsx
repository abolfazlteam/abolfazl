import dynamic from "next/dynamic";

import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";
import WorkExperienceSectionSkeleton from "./WorkExperienceSkeleton";

const WorkExperienceListDynamic = dynamic(
  () => import("./WorkExperienceList"),
  { ssr: false, loading: () => <WorkExperienceSectionSkeleton /> },
);

const WorkExperienceSection = () => {
  return (
    <Section className="mt-20">
      <SectionHeader
        title="work experience"
        description="With nearly 4 years as a frontend engineer, I specialize in frontend technologies such as React, Next.js, JavaScript, and TypeScript. Skilled in developing reusable components, clean code and structure, and obviously providing simple but useful solutions as I believe that simplicity is the key to everything. Committed to delivering scalable solutions and staying updated with industry trends."
      />

      <WorkExperienceListDynamic />
    </Section>
  );
};

export default WorkExperienceSection;
