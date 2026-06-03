import { WorkGallery } from "@/components/projects/work-gallery";
import { WorkList } from "@/components/projects/work-list";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";

export const unstable_instant = { prefetch: "static" };

export default function WorkPage() {
  return (
    <div className="px-[clamp(20px,4vw,52px)] pt-[clamp(40px,5vw,72px)]">
      <PageHeader
        page="work"
        title="Things I've made"
        intro="Some shipped to real customers, some shipped only to me at 2am. I learned something from every one — usually the hard way."
      />

      <WorkGallery />

      <section className="mt-[clamp(56px,7vw,88px)]">
        <Reveal>
          <SectionHead n="02" title="Index" />
        </Reveal>
        <Reveal delay={60}>
          <WorkList />
        </Reveal>
      </section>
    </div>
  );
}
