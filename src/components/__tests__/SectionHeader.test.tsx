import { render } from "../../../utilities";
import { screen } from "@testing-library/react";
import SectionHeader from "../ui/SectionHeader";

describe("SectionHeader test suite", () => {
  it("should render the component properly", () => {
    render(<SectionHeader title="section title" />);

    const headingElement = screen.getByRole("heading", { name: /section ti/i });
    const descriptionText = screen.queryByTestId("section-header-description");

    expect(headingElement).toBeInTheDocument();
    expect(descriptionText).not.toBeInTheDocument();
  });

  it("should render the description when it exists", () => {
    render(<SectionHeader title="section title" description="description" />);

    const descriptionText = screen.getByTestId("section-header-description");

    expect(descriptionText).toBeInTheDocument();
  });
});
