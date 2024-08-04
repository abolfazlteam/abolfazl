import { VIEWS_COUNTER_DEFAULT_VALUE } from "@/constants";
import { IGetBlogViewsCountResponseProps } from "@/types/view-counter";

export async function updateBlogViewsCount(
  slug: string,
): Promise<IGetBlogViewsCountResponseProps> {
  const response = await fetch(`/api/hitSlug?slug=${slug}`);
  const data = await response.json();

  // check if status is 200
  if (response?.status === 200) {
    return data;
  } else {
    return {
      message: "Unsuccessful!",
      views: VIEWS_COUNTER_DEFAULT_VALUE,
    };
  }
}

export async function getBlogViewsCount(
  slug: string,
): Promise<IGetBlogViewsCountResponseProps> {
  const response = await fetch(`/api/getViews?slug=${slug}`);
  const data = await response.json();

  // check if status is 200
  if (response?.status === 200) {
    return data;
  } else {
    return {
      message: "Unsuccessful!",
      views: VIEWS_COUNTER_DEFAULT_VALUE,
    };
  }
}
