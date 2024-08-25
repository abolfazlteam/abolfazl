import { render } from "../../../utilities";
import { screen } from "@testing-library/react";
import Header from "../ui/Header";

describe("Header component tests suite", () => {
  it("should render the component properly", () => {
    render(<Header title="My Projects" />);

    const headingEl = screen.getByRole("heading", { name: /my projects/i });
    expect(headingEl).toBeInTheDocument();
  });

  it("should render the component with correct link element when href is given as prop and default link text", () => {
    render(<Header title="My Projects" href="/projects" />);

    const linkEl = screen.getByRole("link");
    expect(linkEl).toBeInTheDocument();
    expect(linkEl).toHaveAttribute("href", "/projects");
    expect(linkEl).toHaveTextContent("see all");
  });

  it("should render the linkText given correctly when href and linkText are give as props", () => {
    render(
      <Header
        title="My Projects"
        href="/projects"
        linkText="see my projects"
      />,
    );

    const linkEl = screen.getByRole("link", { name: /see my projects/i });
    expect(linkEl).toBeInTheDocument();
  });
});
