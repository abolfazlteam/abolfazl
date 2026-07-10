import { deleteStoredComment, isKnownCommentContentId } from "@/lib/server/comments";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ contentId: string; commentId: string }> },
) {
  const { contentId, commentId } = await params;

  if (!contentId || !isKnownCommentContentId(contentId)) {
    return Response.json({ message: "Content was not found." }, { status: 404 });
  }

  try {
    const deleted = await deleteStoredComment({
      contentId,
      commentId,
      ownerToken: request.headers.get("x-comment-owner-token") ?? "",
    });

    if (!deleted) {
      return Response.json({ message: "Comment was not found." }, { status: 404 });
    }

    return Response.json(
      { deleted: true },
      {
        headers: { "Cache-Control": "no-store" },
      },
    );
  } catch {
    return Response.json({ message: "Could not delete comment." }, { status: 500 });
  }
}
