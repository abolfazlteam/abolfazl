/* eslint-disable @typescript-eslint/no-explicit-any */

import { throttle } from "../index.utils";

// setting a fake timer as we need to compare
vi.useFakeTimers();

describe("throttle function tests suite", () => {
  let callback: () => any; // this is our callback function
  let throttledFunc: (...args: any[]) => any;
  const delay = 100;

  beforeEach(() => {
    callback = vi.fn();
    throttledFunc = throttle(callback, delay);
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  it("should call the callback func immediately after the first call", () => {
    throttledFunc();

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should not call the callback function immediately within the delay period", () => {
    throttledFunc(); // has called the callback ==> one time
    throttledFunc(); // should have called the callback ==> still one time

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should call the callback function after the delay period", () => {
    throttledFunc(); // called first time - delay is 100ms now
    vi.advanceTimersByTime(delay - 1);
    throttledFunc(); // still should not call the callback ==> delay is 100 - 1 = 99 ms ===> it is still withing the delay period

    expect(callback).toHaveBeenCalledTimes(1);

    // now we move time 1 second forward ==> 1 second is 100ms
    vi.advanceTimersByTime(1);
    throttledFunc(); // it should call the call back now

    expect(callback).toHaveBeenCalledTimes(2);
  });
});
