import {
  connectDatabase,
  getOneBlog,
  insertNewDoc,
  updateOneBlogViews,
} from "@/utils/db-utils";
import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";

type TDocumentType = {
  _id: ObjectId;
  slug: string;
  views: number;
  likes: number;
};

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

  let viewCounter = 0;
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

  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction) {
    // the slug exists in the database
    if (blogData) {
      viewCounter = blogData?.views;

      // increment by 1
      viewCounter += 1;
      // update the views inside db
      await updateOneBlogViews(client, "counts", slug, viewCounter);

      return Response.json(
        { message: "The request was successful!", views: viewCounter },
        { status: 200 },
      );
    } else {
      // if the blog slug actually exists but not in the database ==>insert to the db
      const newDocument = { slug: slug, views: 1, likes: 0 };
      await insertNewDoc(client, "counts", newDocument);
      return Response.json(
        {
          message: "Document was successfully added to database.",
          views: newDocument?.views,
        },
        { status: 200 },
      );
    }
  } else {
    // we're in development mode
    // 1. still the blogData existed in the db - just return its views
    if (blogData) {
      return Response.json(
        { message: "The request was successful!", views: blogData?.views },
        { status: 200 },
      );
    } else {
      // 2. still we create and insert it into the db
      const newDocument = { slug: slug, views: 1, likes: 0 };
      await insertNewDoc(client, "counts", newDocument);
      return Response.json(
        {
          message: "Document was successfully added to database.",
          views: newDocument?.views,
        },
        { status: 200 },
      );
    }
  }
}
