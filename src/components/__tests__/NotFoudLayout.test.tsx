import { render } from "../../../utilities";
import { screen } from "@testing-library/react";
import NotFoundLayout from "../ui/NotFoundLayout";
import ThemeProvider from "../ThemeProvider";

describe("NotFoundLayout tests suite", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it("should render the component properly", () => {
    render(<NotFoundLayout />);

    const wrapperEl = screen.getByTestId("notFoundLayout-wrapper");

    expect(wrapperEl).toBeInTheDocument();
  });

  it("should render the correct ico when theme is light", () => {
    render(
      <ThemeProvider defaultTheme="light">
        <NotFoundLayout />
      </ThemeProvider>,
    );

    const lightIcon = screen.getByTestId("light-notFound-icon");

    expect(lightIcon).toBeInTheDocument();
  });

  it("should render the correct ico when theme is dark", () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <NotFoundLayout />
      </ThemeProvider>,
    );

    const darkIcon = screen.getByTestId("dark-notFound-icon");

    expect(darkIcon).toBeInTheDocument();
  });
});
