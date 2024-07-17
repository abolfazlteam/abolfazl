import { NAVIGATION_LINKS } from "@/constants/Navigation.constants";
import { screen } from "@testing-library/react";
import { render } from "../../../utilities";
import NavList from "../Navigation/NavList";

describe("NavList Component Tests Suite", () => {
  it("should render the component properly with correct number of links given to it", () => {
    const totalLinksNum = NAVIGATION_LINKS.length;

    render(<NavList links={NAVIGATION_LINKS} />);

    const allLinks = screen.getAllByRole("link");
    expect(allLinks).toHaveLength(totalLinksNum);

    // correct href attribute
    allLinks.forEach((linkElement, index) =>
      expect(linkElement).toHaveAttribute("href", NAVIGATION_LINKS[index].href),
    );
  });
});
