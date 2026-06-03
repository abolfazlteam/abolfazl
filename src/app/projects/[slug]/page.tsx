import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/projects/project-detail";
import { getProjectById, PROJECTS } from "@/data";

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
