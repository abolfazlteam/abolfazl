import { render } from "../../../utilities";
import { screen } from "@testing-library/react";
import BackLink from "../ui/BackLink";

describe("BackLink component tests suite", () => {
  it("should render the BackLink component properly with link href", () => {
    render(<BackLink href="/sample-link">link title</BackLink>);

    const linkElement = screen.getByRole("link", { name: /link title/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/sample-link");
  });
});
