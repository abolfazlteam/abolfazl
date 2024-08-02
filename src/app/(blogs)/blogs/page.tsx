// import { Metadata } from "next";

import Header from "@/components/ui/Header";
import Section from "@/components/ui/Section";
import BlogItem from "../_components/BlogItem";

// export const metadata: Metadata = {
//   title: "Blogs | Abolfazl Jamshidi",
//   authors: { name: "Abolfazl Jamshidi", url: "http://iabolfazl.dev" },
//   description:
//     "You can find blog posts that Abolfazl writes about tech, and lifestyle",
//   keywords: [
//     "react",
//     "engineer",
//     "tech",
//     "personal weblog",
//     "frontend articles",
//   ],
//   alternates: {
//     canonical: "https://iabolfazl.dev/blogs",
//   },
//   openGraph: {
//     title: "Blogs | Abolfazl Jamshidi",
//     description:
//       "You can find blog posts that Abolfazl writes about tech, and lifestyle",
//     images: ["https://iabolfazl.dev/images/hero-img.jpg"],
//     url: "http://iabolfazl.dev/blogs",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     creator: "Abolfazl Jamshidi",
//     title: "Blogs | Abolfazl Jamshidi",
//     description:
//       "You can find blog posts that Abolfazl writes about tech, and lifestyle",
//     images: ["https://iabolfazl.dev/images/hero-img.jpg"],
//     site: "http://iabolfazl.dev/blogs",
//   },
// };

const Page = () => {
  return (
    <main className="min-h-svh">
      <Section className="lg:mt-[80px]">
        <Header title="my blogs" />
      </Section>

      <section className="mt-6 space-y-8 lg:mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((blog, index) => (
          <BlogItem
            key={blog}
            shouldHaveAnimation
            animationDirection={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </section>
    </main>
  );
};

export default Page;
