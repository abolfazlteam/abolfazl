export const revalidate = 60 * 60 * 24 * 7; // each week

import { Metadata } from "next";

import BackLink from "@/components/ui/BackLink";
import ProjectHeader from "./_components/ProjectHeader";
import MdxWrapper from "@/app/(blogs)/blogs/[slug]/_components/mdx/MdxWrapper";
import TagsList from "@/app/(blogs)/blogs/[slug]/_components/TagsList";
import Newsletter from "@/components/ui/Newsletter";
import { IS_PRODUCTION } from "@/constants";
import { notFound } from "next/navigation";
import { ALL_PROJECTS } from "@/constants/content";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // finding blog data
  const projectData = ALL_PROJECTS?.find((project) => project.slug === slug);

  return {
    metadataBase: projectData?.baseUrl as unknown as URL,
    title: `Abolfazl Jamshidi - ${projectData?.title}`,
    description: projectData?.metaDescription,
    authors: { name: projectData?.author },
    keywords: projectData?.keywords,
    openGraph: {
      images: [projectData?.ogImage as string],
      type: "website",
      description: projectData?.ogDescription,
      title: projectData?.ogTitle,
      url: projectData?.ogUrl,
    },
    robots: projectData?.robots,
    alternates: {
      canonical:
        projectData?.canonical ||
        `${projectData?.baseUrl}${projectData?.shareLink}`,
    },
    twitter: {
      card: "summary_large_image",
      creator: projectData?.author,
      description: projectData?.twitterDescription,
      title: projectData?.twitterTitle,
      images: projectData?.twitterImage,
    },
  };
}

const Page = ({ params }: Props) => {
  const projectSLug = params.slug;
  const project = ALL_PROJECTS.find(
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

export async function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}
