// import { screen } from "@testing-library/react";
// import { render } from "../../../utilities";
// import MobileNavList from "../Navigation/MobileNavList";
// import { INavLinksProps } from "@/constants/Navigation.constants";
// import Navigation from "../Navigation/Navigation";

// const SAMPLE_NAVIGATION_LINKS: INavLinksProps[] = [
//   {
//     id: 1,
//     href: "/home",
//     title: "Home",
//   },
//   {
//     id: 2,
//     href: "/about-me",
//     title: "About me",
//   },
// ];

describe("MobileNavList Component Tests Suite", () => {
  // it.todo("should not be visible when isMenuOpen is false", () => {
  //   render(
  //     <MobileNavList isMenuOpen={false} links={[]} onCloseMenu={() => {}} />,
  //   );

  //   const mobileNavigation = screen.queryByRole("list");

  //   expect(mobileNavigation).toBeInTheDocument();
  //   // should not be visible
  //   expect(mobileNavigation).toHaveClass("invisible opacity-0");
  // });

  // it("should be visible when isMenuOpen is true", () => {
  //   render(
  //     <MobileNavList isMenuOpen={true} links={[]} onCloseMenu={() => {}} />,
  //   );

  //   const mobileNavigation = screen.getByRole("list");

  //   expect(mobileNavigation).toBeVisible();
  // });

  // it("should call the onCloseMenu when clicked on the close icon", async () => {
  //   const handleCloseMenuMocked = vi.fn();

  //   const { user } = render(
  //     <MobileNavList
  //       isMenuOpen={true}
  //       links={[]}
  //       onCloseMenu={handleCloseMenuMocked}
  //     />,
  //   );

  //   const closeButton = screen.getByTestId("mobile-navigation-close-btn");

  //   await user.click(closeButton);

  //   expect(handleCloseMenuMocked).toHaveBeenCalledTimes(1);
  // });

  // it("should call the onCloseMenu when clicked outside the menu", async () => {
  //   const handleCloseMenuMocked = vi.fn();

  //   const { user } = render(
  //     <MobileNavList
  //       isMenuOpen={true}
  //       links={[]}
  //       onCloseMenu={handleCloseMenuMocked}
  //     />,
  //   );

  //   await user.click(document.body);

  //   expect(handleCloseMenuMocked).toHaveBeenCalledTimes(1);
  // });

  // it.todo(
  //   "should render the navigation links passed to the component properly",
  //   () => {
  //     render(
  //       <MobileNavList
  //         isMenuOpen={true}
  //         links={SAMPLE_NAVIGATION_LINKS}
  //         onCloseMenu={() => {}}
  //       />,
  //     );

  //     const allLinkElements = screen.getAllByRole("link");

  //     expect(allLinkElements).toHaveLength(SAMPLE_NAVIGATION_LINKS.length);

  //     allLinkElements.forEach((linkEl, idx) => {
  //       expect(linkEl).toHaveAttribute(
  //         "href",
  //         SAMPLE_NAVIGATION_LINKS[idx].href,
  //       );
  //     });
  //   },
  // );

  // it.todo(
  //   "should integrate MobileNavList properly with its parent component - Navigation",
  //   async () => {
  //     Object.defineProperty(window, "matchMedia", {
  //       writable: true,
  //       value: vi.fn().mockImplementation((query) => ({
  //         matches: true,
  //         media: query,
  //         onchange: null,
  //         addListener: vi.fn(), // deprecated
  //         removeListener: vi.fn(), // deprecated
  //         addEventListener: vi.fn(),
  //         removeEventListener: vi.fn(),
  //         dispatchEvent: vi.fn(),
  //       })),
  //     });
  //     const { user } = render(<Navigation />);

  //     const openMobileMenuBtn = screen.getByTestId(
  //       "mobile-navigation-open-btn",
  //     );

  //     await user.click(openMobileMenuBtn);

  //     const mobileNavigationComponent = screen.getByTestId("mobile-navigation");
  //     expect(mobileNavigationComponent).toBeVisible();
  //     expect(mobileNavigationComponent).toHaveClass("visible opacity-100");

  //     // click again to close the navigation menu
  //     await user.click(document.body);
  //     expect(mobileNavigationComponent).toHaveClass("invisible opacity-0");
  //   },
  // );
  it("", () => {});
});
