"use client";

import { useEffect, useState } from "react";

export interface Clock {
  hh: string;
  mm: string;
  ss: string;
}

/**
 * A live clock ticking every second in a fixed UTC offset (hours).
 * The displayed value differs between server prerender and the client, so the
 * element that renders it should use `suppressHydrationWarning`.
 */
export function useClock(offsetHours = 3.5): Clock {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
  const local = new Date(utcMs + offsetHours * 3_600_000);
  const pad = (value: number) => String(value).padStart(2, "0");

  return {
    hh: pad(local.getHours()),
    mm: pad(local.getMinutes()),
    ss: pad(local.getSeconds()),
  };
}
