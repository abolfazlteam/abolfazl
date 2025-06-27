import { Blog } from "contentlayer/generated";

export declare type TBlogPartial = Pick<
  Blog,
  "summary" | "image" | "title" | "publishedAt" | "slug"
>;
