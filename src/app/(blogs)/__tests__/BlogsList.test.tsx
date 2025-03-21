import { render } from "../../../../utilities";
import BlogsList from "../_components/BlogsList";

vi.mock("@/constants/content", () => ({
  ALL_BLOGS: [
    {
      _id: "1",
      title: "mock project",
      isDraft: false,
      linkPrefix: "projects",
      slug: "mock-project",
      type: "project",
      publishedAt: "2019-11-28",
      summary: "short summary",
    },
    {
      _id: "2",
      title: "Mock Blog",
      isDraft: false,
      linkPrefix: "blogs",
      slug: "mock-blog",
      type: "blog",
      publishedAt: "2019-11-28",
      summary: "short summary",
    },
  ],
}));

vi.mock("@/http-services/like-counter", () => ({}));
vi.mock("@/http-services/view-counter", () => ({}));
vi.mock("@/hooks/useLiker", () => ({}));

import { ALL_BLOGS } from "@/constants/content";

describe("BlogsList component tests suite", () => {
  it.todo("should render the component properly", () => {
    render(<BlogsList blogs={ALL_BLOGS} />);
  });
});
