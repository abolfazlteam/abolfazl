/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render } from "../../../utilities";
import { screen, waitFor } from "@testing-library/react";
import Navigation from "../Navigation/Navigation";

// Mocking `useMatchMedia` before rendering
vi.mock("@/hooks/useMatchMedia", () => ({
  useMatchMedia: vi.fn(() => false), // Default to returning `false`
}));

import { useMatchMedia } from "@/hooks/useMatchMedia"; // Ensure it's imported after mocking

describe("Navigation component tests suite", () => {
  beforeEach(() => {
    vi.mock("@/constants/content", () => ({
      ALL_PUBLISHED_DOCUMENTS: [
        {
          _id: "1",
          title: "mock project",
          isDraft: false,
          linkPrefix: "projects",
          slug: "mock-project",
          type: "project",
        },
        {
          _id: "2",
          title: "Mock Blog",
          isDraft: false,
          linkPrefix: "blogs",
          slug: "mock-blog",
          type: "blog",
        },
      ],
    }));

    afterEach(() => {
      vi.clearAllMocks();
    });
  });

  it("should render the component properly", () => {
    render(<Navigation />);

    const navigationComponent = screen.getByTestId("navigation-menu");
    expect(navigationComponent).toBeInTheDocument();
  });

  it("should not show search modal initially", () => {
    render(<Navigation />);

    const searchModal = screen.queryByTestId("search-modal");
    expect(searchModal).not.toBeInTheDocument();
  });

  it("should show the search modal button when the isSearchSystemReleased is true", () => {
    vi.mock("@/constants/FeatureFlag.constants", () => ({
      isSearchSystemReleased: true,
    }));

    render(<Navigation />);

    const searchBtn = screen.getByTestId("toggle-search-btn");
    expect(searchBtn).toBeInTheDocument();
  });

  it("should show mobile menu button on small screens ", () => {
    // @ts-ignore
    (useMatchMedia as vi.Mock).mockReturnValue(true); // Simulate small screen
    render(<Navigation />);
    expect(
      screen.getByTestId("mobile-navigation-open-btn"),
    ).toBeInTheDocument();
  });

  it("should open mobile menu button list when clicked on the toggle button", () => {
    // @ts-ignore
    (useMatchMedia as vi.Mock).mockReturnValue(true); // Simulate small screen
    const { user } = render(<Navigation />);

    const menuButton = screen.getByTestId("mobile-navigation-open-btn");

    user.click(menuButton);
    const menuListModal = screen.getByTestId("mobile-navigation");
    expect(menuListModal).toBeInTheDocument();
  });

  it("should show search modal when clicked on the search button handler", async () => {
    const { user } = render(<Navigation />);

    const searchBtn = screen.getByTestId("toggle-search-btn");

    user.click(searchBtn);

    // Wait for the modal to appear
    await waitFor(() =>
      expect(screen.getByTestId("search-modal")).toBeInTheDocument(),
    );
  });

  it.todo("should close mobile menu when overlay is clicked", async () => {
    // @ts-ignore
    (useMatchMedia as vi.Mock).mockReturnValue(true);
    const { user } = render(<Navigation />);

    const menuButton = screen.getByTestId("mobile-navigation-open-btn");

    user.click(menuButton);
    const menuListModal = screen.getByTestId("mobile-navigation");
    expect(menuListModal).toBeInTheDocument();

    const overlay = screen.getByTestId("menu-overlay");

    user.click(overlay);
    await waitFor(() => {
      expect(screen.queryByTestId("mobile-navigation")).not.toBeInTheDocument();
    });
  });
});
