import { IGetBlogLikesCountResponseProps } from "@/types/view-counter";

export async function getBlogLikesCount(
  slug: string,
): Promise<IGetBlogLikesCountResponseProps> {
  const response = await fetch(`/api/getLikes?slug=${slug}`);
  const data = await response.json();

  // check if status is 200
  if (response?.status === 200) {
    return data;
  } else {
    return {
      message: "Unsuccessful!",
      likes: 0,
    };
  }
}
