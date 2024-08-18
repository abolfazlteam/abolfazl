/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useTheme } from "next-themes";
import { render } from "../../../utilities";
import Footer from "../ui/Footer";
import { screen } from "@testing-library/react";

// mock the themes
vi.mock("next-themes", () => ({
  useTheme: vi.fn(),
}));

describe("Footer Component Test Suite", () => {
  beforeEach(() => {
    // @ts-ignore
    useTheme.mockReturnValue({ resolvedTheme: "light" });
  });

  it("should render the component properly", () => {
    render(<Footer />);
    const mailHref = "mailto:abolfazljamshididev@gmail.com";

    const emailElement = screen.getByRole("link", {
      name: /abolfazljamshididev/i,
    });

    expect(screen.getByTestId("footer-element")).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(emailElement).toHaveAttribute("href", mailHref);
  });

  // it("should render the correct logo when the theme is set to light", () => {
  //   render(<Footer />);

  //   const imageElement = screen.getByRole("img");
  //   expect(imageElement).toBeInTheDocument();
  //   expect(imageElement).toHaveAttribute("src", DARK_LOGO_SVG);
  // });

  // it("should render the correct logo when the theme is set to dark", () => {
  //   //@ts-ignore
  //   useTheme.mockReturnValue({ resolvedTheme: "dark" });
  //   render(<Footer />);

  //   const imageElement = screen.getByRole("img");
  //   expect(imageElement).toBeInTheDocument();

  //   expect(imageElement).toHaveAttribute("src", WHITE_LOGO_SVG);
  // });

  it("should render the links properly in the footer", () => {
    render(<Footer />);

    const githubLink = "https://github.com/abolfazlcodes";
    const linkedInLink = "https://www.linkedin.com/in/abolfazl-jamshidi/";
    const mediumLink = "https://abolfazlcodes.medium.com/";
    const rssLink = "/rss.xml";

    const githubLinkElement = screen.getByRole("link", {
      name: /github/i,
    });
    const linkedInLinkElement = screen.getByRole("link", {
      name: /linkedin/i,
    });
    const mediumLinkElement = screen.getByRole("link", {
      name: /medium/i,
    });
    const rssLinkElement = screen.getByRole("link", {
      name: /rss/i,
    });

    expect(githubLinkElement).toHaveAttribute("href", githubLink);
    expect(linkedInLinkElement).toHaveAttribute("href", linkedInLink);
    expect(mediumLinkElement).toHaveAttribute("href", mediumLink);
    expect(rssLinkElement).toHaveAttribute("href", rssLink);
  });
});
