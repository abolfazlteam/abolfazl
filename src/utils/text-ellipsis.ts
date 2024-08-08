/**
 * Formats the given text to a specified length with an ellipsis if it exceeds that length.
 * @param {string} text - The text to format.
 * @param {number} count - The maximum number of characters to keep.
 * @returns {string} The formatted text string with "..." if truncated.
 */
export default function textEllipsisFormatter(
  text: string,
  count: number,
): string {
  // type guard
  if (typeof text !== "string" || typeof count !== "number") {
    throw new Error("Invalid input type.");
  }

  // count less than 0
  if (count < 0) {
    throw new Error("Count must be greater than zero!");
  }

  // return the complete text if the count is 0
  if (count === 0) {
    return text;
  }

  if (text.length <= count) {
    return text;
  }

  return text.slice(0, count) + "...";
}
