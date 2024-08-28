import { render } from "../../../utilities";
import { screen } from "@testing-library/react";
import DotsLoader from "../ui/DotsLoader";

describe("DotsLoader tests suite", () => {
  it("should render the component properly with default size prop", () => {
    render(<DotsLoader />);

    const dotsWrapperEl = screen.getByTestId("dotsloader-wrapper");
    const dots = screen.getAllByTestId("dot");

    expect(dotsWrapperEl).toBeInTheDocument();
    expect(dots.length).toBe(3);
  });

  it("should render the dots properly when the size changes", () => {
    const size = 20;
    render(<DotsLoader size={size} />);

    const dots = screen.getAllByTestId("dot");

    dots.forEach((dot) => {
      expect(dot).toHaveStyle({ width: `${size}px`, height: `${size}px` });
    });
  });
});
