import { act, renderHook } from "@testing-library/react";
import { useLocalStorageState } from "../useLocalStorage";

describe("useLocalStorage tests suite", () => {
  it("should initialize the hook with the default state if no data was found", () => {
    localStorage.clear(); // Ensure no stored value
    const { result } = renderHook(() => useLocalStorageState("default", "key"));

    expect(result.current[0]).toBe("default");
  });

  it("should retrieve the value from localStorage if it exists", () => {
    localStorage.setItem("sampleKey", JSON.stringify("200"));

    const { result } = renderHook(() =>
      useLocalStorageState("default", "sampleKey"),
    );

    expect(result.current[0]).toBe("200");
  });

  it("should update the local storage if the value changes", () => {
    localStorage.clear();

    const { result } = renderHook(() =>
      useLocalStorageState("200", "sampleKey"),
    );

    expect(result.current[0]).toBe("200");

    // trigger change
    act(() => {
      result.current[1]("500");
    });

    expect(result.current[0]).toBe("500");
  });

  it("should work properly with any type of data, string, object, etc", () => {
    const initialObject = { name: "John", age: 30 };
    const { result } = renderHook(() =>
      useLocalStorageState(initialObject, "user"),
    );

    expect(result.current[0]).toEqual(initialObject);

    // change the data type
    act(() => {
      result.current[1]({ name: "Jane", age: 25 }); // Update state
    });

    expect(JSON.parse(localStorage.getItem("user")!)).toEqual({
      name: "Jane",
      age: 25,
    });
  });
});
