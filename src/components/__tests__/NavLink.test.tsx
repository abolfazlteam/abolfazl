import { render } from "../../../utilities";
import NavLink from "../Navigation/NavLink";
import { screen, act } from "@testing-library/react";

describe("NavLink Component Tests Suite", () => {
  it("should render the component properly", () => {
    render(<NavLink href="/sample-link">click me</NavLink>);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/sample-link");
  });

  it.todo("should change the url when clicked on the link", async () => {
    const { user } = render(<NavLink href="/sample-link">click me</NavLink>);

    const link = screen.getByRole("link");

    await user.click(link);

    act(() => {
      window.location.pathname = "/sample-link";
      console.log(window.location.pathname);
    });
  });
});
