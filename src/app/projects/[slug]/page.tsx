import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/projects/project-detail";
import { getProjectById, PROJECTS } from "@/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) return {};
  const url = `/projects/${project.id}`;
  return {
    title: `${project.name} Frontend Case Study`,
    description: `${project.blurb} Built with ${project.stack.slice(0, 4).join(", ")}.`,
    keywords: [
      project.name,
      project.tag,
      ...project.stack,
      "frontend case study",
      "React project",
      "Next.js project",
      "TypeScript project",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${project.name} Frontend Case Study | Abolfazl Jamshidi`,
      description: project.blurb,
      url,
      type: "article",
    },
  };
}

// No `unstable_instant` here: the route is fully prerendered via
// generateStaticParams (a fixed project set), so Next prefetches the entire
// static route and navigation is already instant — there is no dynamic shell to
// validate. (Instant validation on param routes additionally demands a literal
// `samples` list, which would just duplicate the slugs below.)
export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
