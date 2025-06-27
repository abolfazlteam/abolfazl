import { screen } from "@testing-library/react";
import { render } from "../../../utilities";
import MobileNavList from "../Navigation/MobileNavList";
import { INavLinksProps } from "@/constants/Navigation.constants";

const SAMPLE_NAVIGATION_LINKS: INavLinksProps[] = [
  {
    id: 1,
    href: "/home",
    title: "Home",
  },
  {
    id: 2,
    href: "/about-me",
    title: "About me",
  },
];

describe("MobileNavList Component Tests Suite", () => {
  it.skip("should not be visible when isOpen is false", () => {
    render(<MobileNavList isOpen={false} links={[]} onCloseMenu={() => {}} />);

    const mobileNavigation = screen.queryByRole("list");

    expect(mobileNavigation).toBeInTheDocument();
    // should not be visible
    expect(mobileNavigation).toHaveClass("invisible opacity-0");
  });

  it("should be visible when isOpen is true", () => {
    render(<MobileNavList isOpen={true} links={[]} onCloseMenu={() => {}} />);

    const mobileNavigation = screen.getByRole("list");

    expect(mobileNavigation).toBeVisible();
  });

  it.skip("should call the onCloseMenu when clicked on the close icon", async () => {
    const handleCloseMenuMocked = vi.fn();

    const { user } = render(
      <MobileNavList
        isOpen={true}
        links={[]}
        onCloseMenu={handleCloseMenuMocked}
      />,
    );

    const closeButton = screen.getByTestId("mobile-navigation-close-btn");

    await user.click(closeButton);

    expect(handleCloseMenuMocked).toHaveBeenCalledTimes(1);
  });

  it.skip("should call the onCloseMenu when clicked outside the menu", async () => {
    const handleCloseMenuMocked = vi.fn();

    const { user } = render(
      <MobileNavList
        isOpen={true}
        links={[]}
        onCloseMenu={handleCloseMenuMocked}
      />,
    );

    await user.click(document.body);

    expect(handleCloseMenuMocked).toHaveBeenCalledTimes(1);
  });

  it("should render the navigation links passed to the component properly", () => {
    render(
      <MobileNavList
        isOpen={true}
        links={SAMPLE_NAVIGATION_LINKS}
        onCloseMenu={() => {}}
      />,
    );

    const allLinkElements = screen.getAllByRole("link");

    expect(allLinkElements).toHaveLength(SAMPLE_NAVIGATION_LINKS.length);

    allLinkElements.forEach((linkEl, idx) => {
      expect(linkEl).toHaveAttribute("href", SAMPLE_NAVIGATION_LINKS[idx].href);
    });
  });
});
