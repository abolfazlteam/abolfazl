import Header from "@/components/ui/Header";
import Section from "@/components/ui/Section";
import AllProjectsSection from "../_components/AllProjectsSection";

const Page = () => {
  return (
    <div className="min-h-svh">
      <Section className="lg:mt-[80px]">
        <Header title="my projects" />
      </Section>

      <AllProjectsSection />
    </div>
  );
};

export default Page;
