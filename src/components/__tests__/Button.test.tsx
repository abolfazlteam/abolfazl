import { render } from "../../../utilities";
import { screen } from "@testing-library/react";
import Button from "../ui/Button";

describe("Button component tests suite", () => {
  it("should render the Button properly", () => {
    render(<Button>click me</Button>);

    const buttonEl = screen.getByRole("button", { name: /click me/i });
    expect(buttonEl).toBeInTheDocument();
  });

  it("should call the callback function when clicked on the button", async () => {
    const callback = vi.fn();

    const { user } = render(<Button onClick={callback}>click me</Button>);
    const buttonEl = screen.getByRole("button", { name: /click me/i });

    await user.click(buttonEl);

    expect(callback).toHaveBeenCalled();
  });
});
