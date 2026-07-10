import { getBlogStats, isKnownBlogSlug } from "@/lib/server/blog-stats";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  if (!slug || !isKnownBlogSlug(slug)) {
    return Response.json({ message: "Blog was not found." }, { status: 404 });
  }

  try {
    const stats = (await getBlogStats(slug)) ?? { slug, views: 0, likes: 0 };
    return Response.json(stats, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return Response.json({ message: "Could not load blog stats." }, { status: 500 });
  }
}
