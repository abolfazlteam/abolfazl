import { screen } from "@testing-library/react";
import { render } from "../../../utilities";
import ShareButton from "../ui/ShareButton";

describe("ShareButton tests suite", () => {
  it("should render the component properly", () => {
    render(<ShareButton url="/sample-slug" />);

    const shareBtnWrapper = screen.getByTestId("share-btn-wrapper");

    expect(shareBtnWrapper).toBeInTheDocument();
  });

  it("should render the tooltip component after clicked on the share btn", async () => {
    const { user } = render(<ShareButton url="/sample-slug" />);
    // get btn element
    const shareBtnEl = screen.getByTestId("share-btn");
    // simulate click
    await user.click(shareBtnEl);

    const tooltipEl = screen.getByTestId("tooltip-wrapper");
    expect(tooltipEl).toBeInTheDocument();
  });
});
