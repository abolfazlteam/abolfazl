import { scrollToSection } from "../scroll-into-view";

describe("scrollToSection tests suite", () => {
  beforeEach(() => {
    document.body.innerHTML = `
     <div id="section1" style="height: 1000px;">Section 1</div>
    `;
  });

  afterEach(() => {
    window.location.hash = "";
  });

  it("should scroll to the element with the specific id", () => {
    const element = document.getElementById("section1");

    if (element) {
      element.scrollIntoView = vi.fn(); // we have to mock it
    }

    scrollToSection("section1");

    expect(element?.scrollIntoView).toHaveBeenCalledWith({
      block: "start",
      behavior: "smooth",
    });

    expect(window.location.hash).toBe("#section1");
  });

  it("should not scroll to the element and hash should be empty", () => {
    const element = document.getElementById("section2");

    if (element) {
      element.scrollIntoView = vi.fn(); // we have to mock it
    }

    scrollToSection("section2");

    expect(window.location.hash).toBe("");
  });
});
