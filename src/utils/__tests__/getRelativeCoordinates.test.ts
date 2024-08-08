import getRelativeCoordinates from "../getRelativeCoordinates";

describe("getRelativeCoordinates tests suite", () => {
  let mockEvent: React.MouseEvent;
  let referenceElement: HTMLElement;

  beforeEach(() => {
    mockEvent = {
      pageX: 150,
      pageY: 200,
    } as React.MouseEvent;
    referenceElement = document.createElement("div");
    document.body.appendChild(referenceElement);

    Object.defineProperty(referenceElement, "offsetLeft", {
      value: 50,
    });
    Object.defineProperty(referenceElement, "clientTop", {
      value: 100,
    });
  });

  afterEach(() => {
    document.body.removeChild(referenceElement);
  });

  it("should return relative coordinates give a mouse event and reference element", () => {
    const coordinates = getRelativeCoordinates(mockEvent, referenceElement);
    const expectedCoordinates = {
      x: 100, // initial x - offsetLeft
      y: 100, // initial y - offsetTop
    };

    expect(coordinates).toEqual(expectedCoordinates);
  });
});
