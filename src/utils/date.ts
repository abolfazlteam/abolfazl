/**
 * Formats the published date to a specified locale and options.
 * @param {string | Date} publishedAt - The date to format.
 * @param {string} locale - The locale to use for formatting. Default is set to 'en-US'.
 * @param {Intl.DateTimeFormatOptions} options - The options to use for formatting.
 * @returns {string} The formatted date string.
 */

export default function formatPublishedDateHandler(
  publishedAt: string | Date,
  locale: string = "en-US",
  options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  },
): string {
  if (!publishedAt) {
    throw new Error("Error: Invalid Date");
  }

  let date: Date;

  // type guard before creating the date
  if (publishedAt instanceof Date) {
    date = publishedAt;
  } else if (typeof publishedAt === "string") {
    date = new Date(publishedAt);
  } else {
    throw new Error("Invalid type for publishedAt. Expected string or Date.");
  }

  if (isNaN(date.getTime())) {
    throw new Error("Invalid Date");
  }

  return date.toLocaleDateString(locale, options);
}
