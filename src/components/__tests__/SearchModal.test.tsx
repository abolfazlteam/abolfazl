import { screen, waitFor } from "@testing-library/react";
import { render } from "../../../utilities";
import SearchModal from "../ui/SearchModal";

describe("SearchModal Component tests suite", () => {
  // it("tobe added", () => {});
  beforeEach(() => {
    // In your test file or a setup file
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
  });

  it("should render the component properly - initially the component should be invisible as isOpen prop is false", () => {
    render(<SearchModal isOpen={false} onClose={() => {}} />);

    const searchModalWrapper = screen.getByTestId("search-modal");

    expect(searchModalWrapper).toBeInTheDocument();
    expect(searchModalWrapper).toHaveClass("invisible opacity-0");
  });

  it("should render the component properly - when the isOpen prop is set to true", () => {
    render(<SearchModal isOpen={true} onClose={() => {}} />);

    const searchModalWrapper = screen.getByTestId("search-modal");

    expect(searchModalWrapper).not.toHaveClass("invisible opacity-0");
    expect(searchModalWrapper).toHaveClass("visible opacity-100");
  });

  it("should call the onClose handler when clicked outside the modal", async () => {
    const onClose = vi.fn();
    const { user } = render(<SearchModal isOpen={true} onClose={onClose} />);

    await user.click(document.body);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should update the query state properly - typing in the input should update its value", async () => {
    const query = "mock b";
    const { user } = render(<SearchModal isOpen={true} onClose={() => {}} />);

    const inputEl = screen.getByRole("textbox");
    await user.type(inputEl, query);

    expect(inputEl).toHaveValue(query);
  });

  it("should render the list of links based on the search query", async () => {
    const { user } = render(<SearchModal isOpen={true} onClose={() => {}} />);

    const inputEl = screen.getByRole("textbox");
    await user.type(inputEl, "mock p");

    await waitFor(
      () => {
        const searchResults = screen.getAllByRole("link"); // Assuming SearchLink renders an anchor tag
        expect(searchResults).toHaveLength(1); // Expect one result as one document is with "Mock Project"
      },
      { timeout: 600 },
    );
  });

  it("should render a message when no document was found with the query", async () => {
    const { user } = render(<SearchModal isOpen={true} onClose={() => {}} />);

    const inputEl = screen.getByRole("textbox");
    await user.type(inputEl, "something that does not exist");

    await waitFor(
      () => {
        const notFoundMessageEl = screen.getByTestId("search-not-found-text");
        expect(notFoundMessageEl).toBeInTheDocument();
      },
      { timeout: 600 },
    );
  });
});
