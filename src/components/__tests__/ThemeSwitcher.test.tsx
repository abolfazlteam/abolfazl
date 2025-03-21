/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render } from "../../../utilities";
import { screen, waitFor } from "@testing-library/react";
import ThemeSwitcher from "../ThemeSwitcher";

vi.mock("next-themes", () => ({
  useTheme: vi.fn().mockImplementation(() => ({
    themes: ["light", "dark"],
    resolvedTheme: "light",
    setTheme: () => {},
  })),
}));

import { useTheme } from "next-themes";

// Mock useClickOutside
vi.mock("@/hooks/useClickOutside", () => ({
  default: vi.fn(() => ({ ref: { current: null } })),
}));

describe("ThemeSwitcher component tests suite", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the component properly", () => {
    render(<ThemeSwitcher />);

    const switcherElement = screen.getByTestId("theme-switcher-component");

    expect(switcherElement).toBeInTheDocument();
  });

  it("should render the sun icon when the theme is light", () => {
    render(<ThemeSwitcher />);

    const sunIconEl = screen.getByLabelText(/sun icon/i);
    expect(sunIconEl).toBeInTheDocument();
  });

  it("should render the Moon icon when the theme is set to dark", () => {
    // @ts-ignore
    (useTheme as vi.Mock).mockReturnValue({
      resolvedTheme: "dark",
      setTheme: vi.fn(),
      themes: ["light", "dark", "system"],
    });

    render(<ThemeSwitcher />);

    const moonIconEl = screen.getByLabelText(/moon icon/i);

    expect(moonIconEl).toBeInTheDocument();
  });

  it("should render the correct number of theme buttons", () => {
    render(<ThemeSwitcher />);
    const themeBtns = screen.getAllByTestId("theme-btn");
    expect(themeBtns).toHaveLength(3); // system - dark - light
  });

  it("should toggle the the menu when icon is clicked", async () => {
    // @ts-ignore
    (useTheme as vi.Mock).mockReturnValue({
      resolvedTheme: "light",
      setTheme: vi.fn(),
      themes: ["light", "dark", "system"],
    });

    const { user } = render(<ThemeSwitcher />);

    const sunIconEl = screen.getByLabelText(/sun icon/i);
    const themeMenuListEl = screen.getByTestId("theme-menu-list");

    expect(themeMenuListEl).toHaveClass("invisible");

    await user.click(sunIconEl);
    waitFor(() => {
      expect(themeMenuListEl).toHaveClass("visible");
    });

    // click again and should become invisible
    await user.click(sunIconEl);
    waitFor(() => {
      expect(themeMenuListEl).toHaveClass("invisible");
    });
  });

  it("should toggle the theme when clicked on the theme button", async () => {
    const setTheme = vi.fn();
    // @ts-ignore
    (useTheme as vi.Mock).mockReturnValue({
      resolvedTheme: "light",
      setTheme: setTheme,
      themes: ["light", "dark", "system"],
    });

    const { user } = render(<ThemeSwitcher />);

    const sunIconEl = screen.getByLabelText(/sun icon/i);
    user.click(sunIconEl);

    const darkThemeBtn = screen.getByText(/dark/i);
    await user.click(darkThemeBtn);
    expect(setTheme).toHaveBeenCalledWith("dark");
  });
});
