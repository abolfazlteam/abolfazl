import { useState, useEffect } from "react";

export function useLocalStorageState<T>(initialState: T, key: string) {
  const [value, setValue] = useState(function () {
    const storedValue =
      typeof window !== "undefined" && localStorage.getItem(key);
    return storedValue ? JSON?.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      if (window.localStorage) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    },
    [value, key],
  );

  return [value, setValue];
}
