// import { screen } from "@testing-library/react";
// import { render } from "../../../utilities";
// import SearchModal from "../ui/SearchModal";

describe("SearchModal Component tests suite", () => {
  it("tobe added", () => {});
  // beforeEach(() => {
  //   // In your test file or a setup file
  //   vi.mock("@/constants/content", () => ({
  //     ALL_PUBLISHED_DOCUMENTS: [
  //       {
  //         _id: "1",
  //         title: "Mock Project",
  //         isDraft: false,
  //         linkPrefix: "projects",
  //         slug: "mock-project",
  //         type: "project",
  //       },
  //       {
  //         _id: "2",
  //         title: "Mock Blog",
  //         isDraft: false,
  //         linkPrefix: "blogs",
  //         slug: "mock-blog",
  //         type: "blog",
  //       },
  //     ],
  //   }));
  // });

  // it("should render the component properly - initially the component should be invisible as isOpen prop is false", () => {
  //   render(<SearchModal isOpen={false} onClose={() => {}} />);

  //   const searchModalWrapper = screen.getByTestId("search-modal");

  //   expect(searchModalWrapper).toBeInTheDocument();
  //   expect(searchModalWrapper).toHaveClass("invisible opacity-0");
  // });

  // it("should render the component properly - when the isOpen prop is set to true", () => {
  //   render(<SearchModal isOpen={true} onClose={() => {}} />);

  //   const searchModalWrapper = screen.getByTestId("search-modal");

  //   expect(searchModalWrapper).not.toHaveClass("invisible opacity-0");
  //   expect(searchModalWrapper).toHaveClass("visible opacity-100");
  // });

  // it("should call the onClose handler when clicked outside the modal", () => {
  //   const onClose = () => vi.fn();

  //   const { user } = render(<SearchModal isOpen={true} onClose={onClose} />);

  //   user.click(document.body);

  //   expect(onClose).toHaveBeenCalledTimes(1);
  // });
});
