/* eslint-disable @typescript-eslint/no-explicit-any */
import formatPublishedDateHandler from "../date";

describe("date formatter helper function tests suite", () => {
  it("should return the correct format when no locale is or options are provided - either string/Date passed to it", () => {
    const sampleDateString = "2023-07-20";
    const sampleDate = new Date("2023-07-20");
    const expectedResult = "Jul 20, 2023";

    const result = formatPublishedDateHandler(sampleDateString);
    const dateResult = formatPublishedDateHandler(sampleDate);

    expect(result).toBe(expectedResult);
    expect(dateResult).toBe(expectedResult);
  });

  it("should return the correct format when the locale is changed", () => {
    const sampleDate = "2023-07-20";
    const franceExpectedResult = "20 juil. 2023"; // for france locale

    const franceResult = formatPublishedDateHandler(sampleDate, "fr-FR");

    expect(franceResult).toBe(franceExpectedResult);
    expect(
      formatPublishedDateHandler("2023-07-20", "de-DE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    ).toBe("20.07.2023");
  });

  it("should return the correct format when the options has changed", () => {
    const sampleDate = "2023-07-20";
    const expectedResult = "Thursday, July 20, 23";

    const result = formatPublishedDateHandler(sampleDate, "en-US", {
      day: "numeric",
      month: "long",
      year: "2-digit",
      weekday: "long",
    });

    expect(result).toBe(expectedResult);
  });

  // edge cases
  it("should throw error when null is passed", () => {
    expect(() => formatPublishedDateHandler(null as any)).toThrow();
  });

  it("should throw error when undefined is passed", () => {
    expect(() => formatPublishedDateHandler(undefined as any)).toThrow();
  });

  it("should throw error for invalid date string", () => {
    expect(() => formatPublishedDateHandler("invalid-date", "en-US")).toThrow(
      "Invalid Date",
    );
  });

  it("should throw error for non-string, non-Date input", () => {
    expect(() => formatPublishedDateHandler(23233 as any, "en-Us")).toThrow(
      "Invalid type for publishedAt. Expected string or Date.",
    );

    expect(() => formatPublishedDateHandler(true as any, "en-Us")).toThrow(
      "Invalid type for publishedAt. Expected string or Date.",
    );
  });
});
