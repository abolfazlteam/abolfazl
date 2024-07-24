import SectionHeader from "@/components/ui/SectionHeader";
import WorkExperienceList from "./WorkExperienceList";
import Section from "@/components/ui/Section";

const WorkExperienceSection = () => {
  return (
    <Section className="mt-20">
      <SectionHeader
        title="work"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Egestas purus
          viverra accumsan"
      />

      <WorkExperienceList />
    </Section>
  );
};

export default WorkExperienceSection;
