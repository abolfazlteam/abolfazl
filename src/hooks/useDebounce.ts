import { useEffect, useState } from "react";

export default function useDebounce(
  value: string | number,
  delay: number = 500,
) {
  const [debouncedValue, setDebouncedValue] = useState<string | number>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
}
