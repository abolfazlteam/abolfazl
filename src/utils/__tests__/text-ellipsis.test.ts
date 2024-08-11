/* eslint-disable @typescript-eslint/no-explicit-any */
import textEllipsisFormatter from "../text-ellipsis";

describe("Text ellipsis helper function tests suite", () => {
  it("should the full text whenever count is 0, or count is bigger than or equal text's length", () => {
    const text = "hello world!"; // 12 is the length

    const result = textEllipsisFormatter(text, 0);
    const resultWithBiggerCounter = textEllipsisFormatter(text, 20);
    const resultWithEqualCounter = textEllipsisFormatter(text, 12);

    expect(result).toBe(text);
    expect(resultWithBiggerCounter).toBe(text);
    expect(resultWithEqualCounter).toBe(text);
  });

  it("should truncate the text when the count is smaller than the text's length", () => {
    const text = "hello world!"; // 12 is the length
    const expected = "hello...";

    const result = textEllipsisFormatter(text, 5);

    expect(result).toBe(expected);
  });

  // edge cases
  it("should return empty string when text is an empty string", () => {
    const text = "";

    const result = textEllipsisFormatter(text, 5);

    expect(result).toBe("");
  });

  it("should throw error when text or count type are invalid", () => {
    const text = 124545 as any; // number and not text

    expect(() => textEllipsisFormatter(text, 4)).toThrow();
    expect(() => textEllipsisFormatter("hello", "4" as any)).toThrow();
  });

  it("should throw error when the count is less than 0", () => {
    const text = "hello";
    expect(() => textEllipsisFormatter(text, -2)).toThrowError(
      "Count must be greater than zero",
    );
  });
});
