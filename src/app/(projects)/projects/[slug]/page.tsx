// import type { Project as ProjectType } from "contentlayer/generated";
import { allProjects } from "contentlayer/generated";

import BackLink from "@/components/ui/BackLink";
import ProjectHeader from "./_components/ProjectHeader";
import MdxWrapper from "@/app/(blogs)/blogs/[slug]/_components/mdx/MdxWrapper";
import TagsList from "@/app/(blogs)/blogs/[slug]/_components/TagsList";
import Newsletter from "@/components/ui/Newsletter";

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  const projectSLug = params.slug;
  console.log(projectSLug);

  return (
    <main className="pt-6 md:pt-11">
      <BackLink href="/projects">all projects</BackLink>

      <ProjectHeader />

      {/* BODY SECTION */}
      <section className="sm:space-x-6 md:space-x-14">
        <MdxWrapper code={allProjects[0]?.body?.code as string} />
      </section>
      {/* TAGS SECTION */}
      <TagsList tags={["react", "next.js"]} />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
};

export default Page;
