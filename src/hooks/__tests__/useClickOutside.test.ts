import { act, renderHook } from "@testing-library/react";
import useClickOutside from "../useClickOutside";

describe("useClickOutside hook tests suite", () => {
  it("should call the handler when clicked outside the element", () => {
    // mocked handler
    const mockedHandler = vi.fn();

    const { result } = renderHook(() => useClickOutside(mockedHandler));

    // create a div element to use as ref
    const divElement = document.createElement("div");
    divElement.textContent = "click me";

    // setting the div as ref
    act(() => {
      result.current.ref.current = divElement;
    });

    // simulate a click outside the element
    act(() => {
      //? should be document as it is outside the divElement
      document.dispatchEvent(new MouseEvent("click", { bubbles: true })); // bubble is true as the default value for this hook is true
    });

    expect(mockedHandler).toHaveBeenCalledTimes(1);
  });

  it("should add and remove event listeners when mounted and unmounted", () => {
    const addEventListenerSpied = vi.spyOn(document, "addEventListener");
    const removeEventListenerSpied = vi.spyOn(document, "removeEventListener");

    const { unmount } = renderHook(() => useClickOutside(() => {}));

    expect(addEventListenerSpied).toHaveBeenCalledTimes(1);
    expect(addEventListenerSpied).toHaveBeenCalledWith(
      "click",
      expect.any(Function),
      true,
    );
    // ? the above line is testing this exactly - the first is the event type and the second a function of any type and third one is capture/bubbling up
    // document.addEventListener("click", () => {}, true);

    // unmount the event listener
    unmount();
    expect(removeEventListenerSpied).toHaveBeenCalledTimes(1);
    expect(removeEventListenerSpied).toHaveBeenCalledWith(
      "click",
      expect.any(Function),
    );
    // ? the above line is testing this exactly - the first is the event type and the second a function of any type
    // document.removeEventListener('click', () => {})
  });

  it("should handle the listenToCapture flag correctly when it is set to false", () => {
    const addEventListenersSpied = vi.spyOn(document, "addEventListener");

    renderHook(() => useClickOutside(() => {}, false));

    expect(addEventListenersSpied).toHaveBeenCalledTimes(1);
    expect(addEventListenersSpied).toHaveBeenCalledWith(
      "click",
      expect.any(Function),
      false,
    );
  });
});
