import { render } from "../../../utilities";
import { screen } from "@testing-library/react";
import ToolbarLinks from "../Navigation/ToolbarLinks";
import { toolbarLinks } from "@/constants/toolbarlinks.constants";

describe("ToolbarLinks Tests Suite", function () {
  it("should render the component properly with the correct number of links", () => {
    const totalLinks = toolbarLinks.length;

    render(<ToolbarLinks links={toolbarLinks} />);

    const toolbarLinksWrapper = screen.getByTestId("toolbar-links-wrapper");
    const allToolbarLinks = screen.getAllByRole("link");

    // to be in the document
    expect(toolbarLinksWrapper).toBeInTheDocument();
    // expect the length to be equal
    expect(allToolbarLinks.length).toEqual(totalLinks);

    // expecting they have correct href
    allToolbarLinks.forEach((link, index) => {
      expect(link).toHaveAttribute("href", toolbarLinks[index].href);
    });
  });
});
