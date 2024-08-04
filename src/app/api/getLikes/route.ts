import { connectDatabase, getOneBlog } from "@/utils/db-utils";
import { NextRequest } from "next/server";
import { TDocumentType } from "../hitSlug/route";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const slug = searchParams.get("slug");

  if (!slug) {
    return Response.json(
      {
        message: "Please provide a slug",
      },
      {
        status: 200,
      },
    );
  }

  let client;

  // connect to database and if not return
  try {
    client = await connectDatabase();
  } catch (err) {
    return Response.json(
      { message: "Connecting to database failed!" },
      {
        status: 500,
      },
    );
  }

  const blogData = (await getOneBlog(client, "counts", slug)) as TDocumentType;

  if (blogData) {
    return Response.json(
      { message: "Successful!", likes: blogData?.likes },
      { status: 200 },
    );
  } else {
    return Response.json({ message: "Rejected!" }, { status: 500 });
  }
}
