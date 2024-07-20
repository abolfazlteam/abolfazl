/* eslint-disable @typescript-eslint/no-explicit-any */
// This function limits the rate at which a function given to it can fire
// it accepts a function (func) and a delay as arguments and returns a function
// that, when called, will only call the func function at most once per every delay milliseconds

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let lastCall = 0;

  return (...args: Parameters<T>) => {
    const now = new Date().getTime();

    if (now - lastCall < delay) {
      return;
    }

    lastCall = now;
    return func(...args);
  };
}
