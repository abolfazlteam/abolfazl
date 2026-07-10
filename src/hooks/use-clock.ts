"use client";

import { useSyncExternalStore } from "react";

export interface Clock {
  hh: string;
  mm: string;
  ss: string;
}

// Shared ticking store. The snapshot is `null` until the clock starts on the
// client, so the server snapshot and the first client render agree (no Date is
// read during render) — which is what keeps hydration stable.
let cachedEpoch: number | null = null;
let intervalId: number | null = null;
const listeners = new Set<() => void>();

function tick() {
  cachedEpoch = Date.now();
  for (const listener of listeners) listener();
}

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  if (intervalId === null) {
    cachedEpoch = Date.now();
    intervalId = window.setInterval(tick, 1000);
  }
  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0 && intervalId !== null) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
  };
}

const getSnapshot = (): number | null => cachedEpoch;
const getServerSnapshot = (): number | null => null;

/**
 * A live clock in a fixed UTC offset (hours). Returns `null` before it starts
 * (server render + first client paint), then ticks every second.
 */
export function useClock(offsetHours = 3.5): Clock | null {
  const epoch = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (epoch === null) return null;

  const now = new Date(epoch);
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
  const local = new Date(utcMs + offsetHours * 3_600_000);
  const pad = (value: number) => String(value).padStart(2, "0");

  return {
    hh: pad(local.getHours()),
    mm: pad(local.getMinutes()),
    ss: pad(local.getSeconds()),
  };
}
