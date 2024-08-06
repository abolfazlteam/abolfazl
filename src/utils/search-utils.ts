export default function searchQueryHandler<T extends { title?: string }>(
  data: T[],
  query: string,
): T[] | undefined | string {
  if (!query) {
    return `Please enter a valid query!`;
  }

  const queriedData = data?.filter((item) =>
    item?.title?.toLowerCase()?.includes(query.toLowerCase()),
  );

  return queriedData;
}
