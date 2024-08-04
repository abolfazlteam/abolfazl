/* eslint-disable @typescript-eslint/no-explicit-any */
// import { IGetSubscribersResponse } from "@/types/newsletter.types";

export async function getBlogViewsCount(slug: string): Promise<any> {
  const response = await fetch(`/api/hitSlug?slug=${slug}`);

  const data = await response.json();

  console.log(data, "data from httpservice");

  return data;
}
