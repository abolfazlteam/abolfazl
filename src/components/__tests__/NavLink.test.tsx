/* eslint-disable @typescript-eslint/ban-ts-comment */
import { usePathname } from "next/navigation";
import { render } from "../../../utilities";
import NavLink from "../Navigation/NavLink";
import { screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

describe("NavLink Component Tests Suite", () => {
  it("should render the component properly", () => {
    render(<NavLink href="/sample-link">click me</NavLink>);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/sample-link");
  });

  it("should apply active classes when link is active", () => {
    // @ts-ignore
    (usePathname as vi.Mock).mockReturnValue("/sample-link");
    render(<NavLink href="/sample-link">click me</NavLink>);

    const link = screen.getByRole("link");

    expect(link).toHaveClass("font-medium text-primary");
  });

  it("should not apply active classes when link is inactive", () => {
    // @ts-ignore
    (usePathname as vi.Mock).mockReturnValue("/current-link");
    render(<NavLink href="/sample-link">click me</NavLink>);

    const link = screen.getByRole("link");

    expect(link).not.toHaveClass("font-medium text-primary");
    expect(link).toHaveClass("text-gray-1 hover:text-primary");
  });
});
