/* eslint-disable @typescript-eslint/ban-ts-comment */
import { renderHook, act } from "@testing-library/react";
import { useMatchMedia } from "../useMatchMedia";

const createMatchMedia = (matches: boolean) => {
  const addEventListener = vi.fn();
  const removeEventListener = vi.fn();

  return vi.fn().mockImplementation((query) => ({
    matches,
    media: query,
    onchange: null,
    addEventListener: addEventListener,
    removeEventListener: removeEventListener,
    dispatchEvent: vi.fn(),
  }));
};

describe("useMatchMedia tests suite", () => {
  beforeEach(() => {
    // mock matchMedia with default value of false
    window.matchMedia = createMatchMedia(false);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with false value", () => {
    const { result } = renderHook(() => useMatchMedia("(max-width: 600px)"));

    expect(result.current).toBe(false);
  });

  it("should update state based on the media query", () => {
    window.matchMedia = createMatchMedia(true);

    const { result } = renderHook(() => useMatchMedia("(max-width: 600px)"));

    expect(result.current).toBe(true);
  });

  it("should update state when the media query changes", () => {
    const { result } = renderHook(() => useMatchMedia("(max-width: 600px)"));
    // @ts-ignore
    const listener = window.matchMedia("").addEventListener.mock.calls[0][1];

    act(() => {
      listener({ matches: true });
    });

    expect(result.current).toBe(true);

    act(() => {
      listener({ matches: false });
    });

    expect(result.current).toBe(false);
  });

  it("should clean up the event listener on unmount", () => {
    const mockMatchMedia = createMatchMedia(false);
    window.matchMedia = mockMatchMedia;

    const { unmount } = renderHook(() => useMatchMedia("(min-width: 600px)"));
    unmount();

    expect(mockMatchMedia().removeEventListener).toHaveBeenCalled();
    expect(mockMatchMedia().removeEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function),
    );
  });

  it.todo(
    "should handle when window.matchMedia does not have addEventListener",
    () => {
      const originalMatchMedia = window.matchMedia;

      const mockMediaQueryList = {
        matches: false,
        addListener: vi.fn(),
        removeListener: vi.fn(),
      };

      // Mock window.matchMedia to return an object without addEventListener
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockImplementation(() => mockMediaQueryList),
      });

      const { result } = renderHook(() => useMatchMedia("(max-width: 600px)"));

      expect(result.current).toBe(false);
      expect(mockMediaQueryList.addListener).toHaveBeenCalled();

      // Restore the original window.matchMedia
      window.matchMedia = originalMatchMedia;
    },
  );
});
