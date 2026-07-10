import { incrementBlogView, isKnownBlogSlug } from "@/lib/server/blog-stats";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  if (!slug || !isKnownBlogSlug(slug)) {
    return Response.json({ message: "Blog was not found." }, { status: 404 });
  }

  try {
    const stats = await incrementBlogView(slug);
    return Response.json(stats, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return Response.json({ message: "Could not update blog views." }, { status: 500 });
  }
}
