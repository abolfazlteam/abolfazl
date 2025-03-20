import { act, renderHook } from "@testing-library/react";
import useHash from "../useHash";

describe("useHash hook tests suite", () => {
  it("should initialize with an empty string", () => {
    const { result } = renderHook(() => useHash());
    expect(result.current).toBe("");
  });

  // window.location.hash's change does not trigger the "hashchange" event automatically ==> so we do it manually
  it("should update when the hash changes", () => {
    const { result } = renderHook(() => useHash());

    act(() => {
      window.location.hash = "#newHash";
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });

    expect(result.current).toBe("#newHash");
  });

  it("should clean up event listener on unmount", () => {
    const addSpy = vi.spyOn(window, "addEventListener");
    const removeSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useHash());

    expect(addSpy).toHaveBeenCalledWith("hashchange", expect.any(Function));

    unmount(); // Simulate component unmounting

    expect(removeSpy).toHaveBeenCalledWith("hashchange", expect.any(Function));

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
