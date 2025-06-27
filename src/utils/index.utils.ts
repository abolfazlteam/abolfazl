/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// This function limits the rate at which a function given to it can fire
// it accepts a function (func) and a delay as arguments and returns a function
// that, when called, will only call the func function at most once per every delay milliseconds

import { TBlogPartial } from "@/types";

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

/**
 * It sorts the blogs array based on the publishedAt date - Merge sort.
 * @param {Blog[]} blogs - The Blogs Type.
 * @returns {Blog[]} The sorted Blogs Data
 */
export function mergeSortHandler(blogs: TBlogPartial[]): TBlogPartial[] {
  // base case ==> if the blog's length is 1 or 0, it is already sorted
  if (blogs.length <= 1) {
    return blogs;
  }

  // step 1: split the blogs data into two halves
  const middlePoint = Math.floor(blogs.length / 2);
  const left = blogs?.slice(0, middlePoint);
  const right = blogs?.slice(middlePoint);

  // step 2: recursively sort the two halves
  const sortedLeftSide = mergeSortHandler(left);
  const sortedRightSide = mergeSortHandler(right);

  // step 3: Merge the sorted halves
  return mergeSortDatesHandler(sortedLeftSide, sortedRightSide);
}

function mergeSortDatesHandler(
  leftSide: TBlogPartial[],
  rightSide: TBlogPartial[],
): TBlogPartial[] {
  const result: TBlogPartial[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // step 4: compare elements from left and right arrays and merge them in order
  while (leftIndex < leftSide?.length && rightIndex < rightSide?.length) {
    // @ts-ignore
    if (new Date(leftSide[leftIndex]) >= new Date(rightSide[rightIndex])) {
      result.push(leftSide[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightSide[rightIndex]);
      rightIndex++;
    }
  }

  // step 5: concatenate any remaining elements
  return result
    .concat(leftSide.slice(leftIndex))
    .concat(rightSide.slice(rightIndex));
}
