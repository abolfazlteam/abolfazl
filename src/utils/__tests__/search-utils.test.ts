/* eslint-disable @typescript-eslint/ban-ts-comment */
import searchQueryHandler from "../search-utils";

describe("search helper function tests suite", () => {
  // Sample data
  const mockData = [
    { title: "Apple" },
    { title: "Banana" },
    { title: "Orange" },
    { title: "Grape" },
    { title: "Pineapple" },
    { title: "Kiwi" },
    { title: null }, // Test case where title is null
    {}, // Test case where title is undefined
  ];

  it("it should return a message when query is empty string", () => {
    const message = "Please enter a valid query!";
    // @ts-ignore
    const result = searchQueryHandler(mockData, "");

    expect(result).toBe(message);
  });

  it("should return all items that match the query (case insensitive)", () => {
    const query = "apple";
    // @ts-ignore
    const result = searchQueryHandler(mockData, query);

    expect(result).toEqual([{ title: "Apple" }, { title: "Pineapple" }]);
  });

  it("should return an empty array when no matching data found", () => {
    const query = "test";
    // @ts-ignore
    const result = searchQueryHandler(mockData, query);

    expect(result).toEqual([]);
    expect(result).toHaveLength(0);
  });

  it("should return all items that match the query with partial match", () => {
    const query = "an";
    // @ts-ignore
    const result = searchQueryHandler(mockData, query);

    expect(result).toEqual([{ title: "Banana" }, { title: "Orange" }]);
  });

  it("should return all items that match the query with special characters", () => {
    const specialCharData = [
      { title: "C#" },
      { title: "C++" },
      { title: "Python" },
      { title: "JavaScript" },
    ];
    const result = searchQueryHandler(specialCharData, "c#");
    expect(result).toEqual([{ title: "C#" }]);
  });
});
