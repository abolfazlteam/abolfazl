/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ALL_BLOGS, IBlogsProps } from "@/constants/content";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedBlogs: IBlogsProps[] = ALL_BLOGS?.filter(
    (blog) => !blog?.isDraft,
  );

  const blogsUrls = publishedBlogs?.map((blog) => ({
    url: `${blog?.baseUrl}blogs/${blog?.slug}`,
    lastModified: blog?.updatedAt
      ? new Date(Date.parse(blog?.updatedAt as string))
      : new Date(blog?.publishedAt),
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [
    {
      url: "https://iabolfazl.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://iabolfazl.dev/about-me",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://iabolfazl.dev/blogs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // @ts-ignore
    ...blogsUrls,
  ];
}
