import { screen } from "@testing-library/react";
import { render } from "../../../utilities";
import LinkButton from "../ui/LinkButton";
import IconEmail from "@/assets/icons/EmailIcon";

describe("LinkButton Component tests suite", () => {
  it("should render the component properly with initial props", () => {
    render(<LinkButton href="/link">open link</LinkButton>);

    const linkElement = screen.getByRole("link", { name: /open/i });
    // no link icon should be found initially
    const linkElementIcon = screen.queryByTestId("LinkButton-icon");

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/link");

    expect(linkElementIcon).not.toBeInTheDocument();
  });

  it("should render the component with link icon when hasLinkIcon is set to true", () => {
    render(
      <LinkButton href="/link" hasLinkIcon>
        open link
      </LinkButton>,
    );

    const linkElementIcon = screen.getByTestId("LinkButton-icon");
    expect(linkElementIcon).toBeInTheDocument();
  });

  it("should render the custom icon when passed to the component", () => {
    render(
      <LinkButton
        href="/link"
        icon={
          <IconEmail
            className="group-hover:stroke-[2px] [&_path]:stroke-white"
            data-testid="link-btn-custom-icon"
          />
        }
      >
        open link
      </LinkButton>,
    );

    const linkElementIcon = screen.getByTestId("link-btn-custom-icon");
    expect(linkElementIcon).toBeInTheDocument();
  });
});
