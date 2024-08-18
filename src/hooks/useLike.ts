import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { MAX_LIKE_NUM } from "@/constants";
import { useLocalStorageState } from "./useLocalStorage";
import {
  getBlogLikesCount,
  updateBlogLikesCount,
} from "@/http-services/like-counter";

export default function useLike(slug: string) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [localStorageValue, setLocalStorageValue] = useLocalStorageState<{
    count: number;
  }>({ count: 0 }, slug);

  const [counter, setCounter] = useState<number>(0);
  const [dbLikes, setDbLikes] = useState<number>(0);
  const [heartIconCounter, setHeartIconCounter] = useState<number>(0);
  const counterDebounced = useDebounce(counter, 1000); // Debounce the counter by 1 second

  const incrementCounterHandler = () => {
    if (counter < MAX_LIKE_NUM) {
      setLocalStorageValue({ count: counter + 1 });
      setHeartIconCounter((prevState) => prevState + 1);
    }
    setCounter((prevState) => prevState + 1);
  };

  // Effect to update the database after debounced value changes
  useEffect(() => {
    if (+counterDebounced > 0) {
      updateBlogLikesCount(slug, {
        count: +counterDebounced,
      }).then((data) => {
        setCounter(0); // Reset local counter after update
        // set update the db counter when successful
        setDbLikes(data?.likes);
      });
    }
  }, [counterDebounced, slug]);

  useEffect(() => {
    const fetcher = async () => {
      const data = await getBlogLikesCount(slug);
      setDbLikes(data?.likes);
      setIsLoading(false);
    };

    fetcher();

    if (localStorageValue) {
      setHeartIconCounter(localStorageValue?.count);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return {
    incrementCounterHandler,
    counter,
    dbLikes,
    heartIconCounter,
    isLoading,
  };
}
