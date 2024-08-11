/**
 * Gets the relative coordinates of a mouse event relative to a reference element.
 * @param {React.MouseEvent<T>} event - The mouse event.
 * @param {K} referenceElement - The reference element.
 * @returns {{ x: number; y: number }} The relative coordinates.
 */

export default function getRelativeCoordinates<T, K extends HTMLElement>(
  event: React.MouseEvent<T>,
  referenceElement: K,
): { x: number; y: number } {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.clientTop,
  };

  let reference: HTMLElement = referenceElement.offsetParent as HTMLElement;

  while (reference) {
    offset.left += reference?.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent as HTMLElement;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
  };
}
