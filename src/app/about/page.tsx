import { AboutIntro } from "@/components/about/about-intro";
import { ExperienceList } from "@/components/about/experience-list";
import { SkillsGrid } from "@/components/about/skills-grid";
import { Timeline } from "@/components/about/timeline";
import { PageHeader } from "@/components/ui/page-header";

export const unstable_instant = { prefetch: "static" };

export default function AboutPage() {
  return (
    <div className="px-[clamp(20px,4vw,52px)] pt-[clamp(40px,5vw,72px)]">
      <PageHeader page="about" title="Hi, I'm Abolfazl." />
      <AboutIntro />
      <ExperienceList />
      <SkillsGrid />
      <Timeline />
    </div>
  );
}
