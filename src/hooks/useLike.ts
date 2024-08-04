import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { MAX_LIKE_NUM } from "@/constants";
import { useLocalStorageState } from "./useLocalStorage";
import { getBlogLikesCount } from "@/http-services/like-counter";

export default function useLike(slug: string) {
  const [localStorageValue, setLocalStorageValue] = useLocalStorageState<{
    count: number;
  }>({ count: 0 }, slug);

  const [counter, setCounter] = useState<number>(0);
  const [dbLikes, setDbLikes] = useState<number>(0);
  const counterDebounced = useDebounce(counter);

  const incrementCounterHandler = () => {
    if (counter < MAX_LIKE_NUM) {
      setLocalStorageValue({ count: counter + 1 });
    }

    setCounter((prevState) => prevState + 1);
  };

  useEffect(() => {
    const fetcher = async () => {
      const data = await getBlogLikesCount(slug);
      setDbLikes(data?.likes);
    };

    fetcher();

    if (localStorageValue) {
      setCounter(localStorageValue?.count);
    }
  }, [slug]);

  return {
    incrementCounterHandler,
    counterDebounced,
    counter,
    dbLikes,
  };
}
