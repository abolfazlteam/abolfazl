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
        title="work"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Egestas purus
          viverra accumsan"
      />

      <WorkExperienceListDynamic />
    </Section>
  );
};

export default WorkExperienceSection;
