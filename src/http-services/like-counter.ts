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

export async function updateBlogLikesCount(
  slug: string,
  countData: { count: number },
): Promise<IGetBlogLikesCountResponseProps> {
  const response = await fetch(`/api/hitLike?slug=${slug}`, {
    method: "POST",
    body: JSON.stringify(countData),
  });
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
