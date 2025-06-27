import { Metadata } from "next";

import Header from "@/components/ui/Header";
import Section from "@/components/ui/Section";
import BlogItem from "../_components/BlogItem";
import Newsletter from "@/components/ui/Newsletter";
import { ALL_BLOGS, PUBLISHED_BLOGS } from "@/constants/content";
import { IS_PRODUCTION } from "@/constants";
import { mergeSortHandler } from "@/utils/index.utils";

export const metadata: Metadata = {
  title: "Blogs | Abolfazl Jamshidi",
  authors: { name: "Abolfazl Jamshidi", url: "http://iabolfazl.dev" },
  description:
    "You can find blog posts that Abolfazl writes about tech, and lifestyle",
  keywords: [
    "react",
    "engineer",
    "tech",
    "personal weblog",
    "frontend articles",
    "front-end",
    "software engineering",
    "abolfazl jamshidi",
    "developer",
    "JavaScript",
  ],
  alternates: {
    canonical: "https://iabolfazl.dev/blogs",
  },
  openGraph: {
    title: "Blogs | Abolfazl Jamshidi",
    description:
      "You can find blog posts that Abolfazl writes about tech, and lifestyle",
    images: ["https://iabolfazl.dev/images/hero-img.jpg"],
    url: "http://iabolfazl.dev/blogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "Abolfazl Jamshidi",
    title: "Blogs | Abolfazl Jamshidi",
    description:
      "You can find blog posts that Abolfazl writes about tech, and lifestyle",
    images: ["https://iabolfazl.dev/images/hero-img.jpg"],
    site: "http://iabolfazl.dev/blogs",
  },
};

const Page = () => {
  const displayedArticles = IS_PRODUCTION ? PUBLISHED_BLOGS : ALL_BLOGS;
  const reverseSortedBlogsByPublishedAt = mergeSortHandler(displayedArticles);

  return (
    <main className="min-h-[500px]">
      <Section className="lg:mt-[80px]">
        <Header title="my blogs" />
      </Section>

      <section className="mt-6 space-y-8 lg:mt-8">
        {reverseSortedBlogsByPublishedAt.map((blog, index) => (
          <BlogItem
            key={blog.slug}
            data={blog}
            shouldHaveAnimation
            animationDirection={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </section>

      <Newsletter />
    </main>
  );
};

export default Page;

// changes:
// 5. cache the website static parts --> no refresh should be triggered
