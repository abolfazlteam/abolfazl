import {
  createStoredComment,
  isKnownCommentContentId,
  listStoredComments,
} from "@/lib/server/comments";

function getOwnerToken(request: Request): string {
  return request.headers.get("x-comment-owner-token") ?? "";
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ contentId: string }> },
) {
  const { contentId } = await params;

  if (!contentId || !isKnownCommentContentId(contentId)) {
    return Response.json({ message: "Content was not found." }, { status: 404 });
  }

  try {
    const comments = await listStoredComments(contentId, getOwnerToken(request));
    return Response.json(
      { comments },
      {
        headers: { "Cache-Control": "no-store" },
      },
    );
  } catch {
    return Response.json({ message: "Could not load comments." }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ contentId: string }> },
) {
  const { contentId } = await params;

  if (!contentId || !isKnownCommentContentId(contentId)) {
    return Response.json({ message: "Content was not found." }, { status: 404 });
  }

  const body = (await request.json().catch(() => null)) as {
    name?: unknown;
    text?: unknown;
  } | null;

  if (typeof body?.text !== "string" || !body.text.trim()) {
    return Response.json({ message: "Comment text is required." }, { status: 400 });
  }

  try {
    const comment = await createStoredComment({
      contentId,
      name: typeof body.name === "string" ? body.name : "",
      text: body.text,
      ownerToken: getOwnerToken(request),
    });

    return Response.json(
      { comment },
      {
        status: 201,
        headers: { "Cache-Control": "no-store" },
      },
    );
  } catch {
    return Response.json({ message: "Could not save comment." }, { status: 500 });
  }
}
