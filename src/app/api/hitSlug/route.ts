import {
  connectDatabase,
  getOneBlog,
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
    // if the blog slug actually exists but not in the database ==> create one for it and insert to the db
    // finding the slug data from db
    console.log(blogData, "blog data");

    // if it is development ==> we do not want to increment the view number
    // but if it is production ==> we have to increment it
    // both ways we get the view number first from data base and then will replace it with viewCounter
    // in production we need to add 1 to viewCounter

    return Response.json({ message: "hi", views: 39 }, { status: 200 });
  }
}
