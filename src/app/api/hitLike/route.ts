import { IS_PRODUCTION } from "@/constants";
import {
  connectDatabase,
  getOneBlog,
  insertNewDoc,
  updateOneBlogLikes,
} from "@/utils/db-utils";
import { NextRequest } from "next/server";
import { TDocumentType } from "../hitSlug/route";

export async function POST(req: NextRequest) {
  const searchParams = req?.nextUrl.searchParams;
  const slug = searchParams.get("slug");

  if (!slug) {
    return Response.json(
      {
        message: "Please provide a slug",
      },
      {
        status: 404,
      },
    );
  }

  // request body - getting counter
  const data = await req.json();
  const count = data?.count;

  if (!count) {
    return Response.json(
      {
        message: "No valid count value received!",
      },
      {
        status: 404,
      },
    );
  }

  let client;

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

  // find the blog with slug
  const blogData = (await getOneBlog(client, "counts", slug)) as TDocumentType;

  if (IS_PRODUCTION) {
    // the slug exists in db
    if (blogData) {
      await updateOneBlogLikes(client, "counts", slug, count);
      const updatedBlog = (await getOneBlog(
        client,
        "counts",
        slug,
      )) as TDocumentType;

      return Response.json(
        {
          message: "Blog updated successfully!",
          likes: updatedBlog?.likes,
        },
        { status: 200 },
      );
    } else {
      // if the blog slug actually exists but not in the database ==>insert to the db
      const newDocument = { slug: slug, views: 1, likes: count };
      await insertNewDoc(client, "counts", newDocument);
      return Response.json(
        {
          message: "Document was successfully added to database.",
          views: newDocument?.views,
          likes: newDocument.likes,
        },
        { status: 200 },
      );
    }
  } else {
    if (blogData) {
      return Response.json(
        { message: "The request was successful!", likes: blogData?.likes },
        { status: 200 },
      );
    } else {
      // 2. still we create and insert it into the db
      const newDocument = { slug: slug, views: 1, likes: count };
      await insertNewDoc(client, "counts", newDocument);
      return Response.json(
        {
          message: "Document was successfully added to database.",
          views: newDocument?.views,
          likes: newDocument.likes,
        },
        { status: 200 },
      );
    }
  }
}
