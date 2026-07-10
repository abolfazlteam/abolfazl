import { applyBlogLikeDelta, isKnownBlogSlug } from "@/lib/server/blog-stats";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  if (!slug || !isKnownBlogSlug(slug)) {
    return Response.json({ message: "Blog was not found." }, { status: 404 });
  }

  const body = (await request.json().catch(() => null)) as { delta?: unknown } | null;
  const delta = body?.delta === -1 ? -1 : 1;

  try {
    const stats = await applyBlogLikeDelta(slug, delta);
    return Response.json(stats, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return Response.json({ message: "Could not update blog likes." }, { status: 500 });
  }
}
