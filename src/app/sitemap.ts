/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MetadataRoute } from "next";
// import { allArticles, Article as ArticleType } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  // const publishedArticles: ArticleType[] = allArticles?.filter(
  //   (article) => !article?.isDraft,
  // );

  // const articlesUrls = publishedArticles?.map((article) => ({
  //   url: `${article?.baseUrl}articles/${article?.slug}`,
  //   lastModified: article?.updatedAt
  //     ? new Date(Date.parse(article?.updatedAt as string))
  //     : new Date(article?.publishedAt),
  //   priority: 0.6,
  //   changeFrequency: "monthly",
  // }));

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
    // ...articlesUrls,
  ];
}
