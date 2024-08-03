// import type { Project as ProjectType } from "contentlayer/generated";
import { allProjects } from "contentlayer/generated";

import BackLink from "@/components/ui/BackLink";
import ProjectHeader from "./_components/ProjectHeader";
import MdxWrapper from "@/app/(blogs)/blogs/[slug]/_components/mdx/MdxWrapper";
import TagsList from "@/app/(blogs)/blogs/[slug]/_components/TagsList";
import Newsletter from "@/components/ui/Newsletter";
import { IS_PRODUCTION } from "@/constants";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  const projectSLug = params.slug;
  const project = allProjects.find(
    (projectItem) => projectItem.slug === projectSLug,
  );
  const isProjectDraft = IS_PRODUCTION && project?.isDraft;
  const noProjectFound = !project;

  // handle redirect when project is draft or slut not found
  if (isProjectDraft || noProjectFound) {
    notFound();
  }

  return (
    <main className="pt-6 md:pt-11">
      <BackLink href="/projects">all projects</BackLink>

      <ProjectHeader
        title={project.title}
        description={project.summary}
        publishedAt={project.publishedAt}
        websiteUrl={project.websiteUrl}
      />

      {/* BODY SECTION */}
      <section className="sm:space-x-6 md:space-x-14">
        <MdxWrapper code={project?.body?.code as string} />
      </section>
      {/* TAGS SECTION */}
      <TagsList tags={project.tags} />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
};

export default Page;
