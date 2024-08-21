import { Metadata } from "next";

import type { Blog as BlogType } from "contentlayer/generated";

import BackLink from "@/components/ui/BackLink";
import BlogHeader from "./_components/BlogHeader";
import BlogHeroImage from "./_components/BlogHeroImage";
import BlogSeries from "./_components/BlogSeries";
import SidebarLinks from "./_components/SidebarLinks";
import TagsList from "./_components/TagsList";
import Newsletter from "@/components/ui/Newsletter";
import { IS_PRODUCTION } from "@/constants";
import { notFound } from "next/navigation";
import MdxWrapper from "./_components/mdx/MdxWrapper";
import readingTime from "@/utils/reading-time";
import { ALL_BLOGS } from "@/constants/content";
import JsonLd from "@/components/seo/JsonLd";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // finding blog data
  const blogData = ALL_BLOGS?.find((blog) => blog.slug === slug);

  return {
    metadataBase: blogData?.baseUrl as unknown as URL,
    title: `Abolfazl Jamshidi - ${blogData?.title}`,
    description: blogData?.metaDescription,
    authors: { name: blogData?.author },
    keywords: blogData?.keywords,
    openGraph: {
      images: [blogData?.ogImage as string],
      type: "website",
      description: blogData?.ogDescription,
      title: blogData?.ogTitle,
      url: blogData?.ogUrl,
    },
    robots: blogData?.robots,
    alternates: {
      canonical:
        blogData?.canonical || `${blogData?.baseUrl}${blogData?.shareLink}`,
    },
    twitter: {
      card: "summary_large_image",
      creator: blogData?.author,
      description: blogData?.twitterDescription,
      title: blogData?.twitterTitle,
      images: blogData?.twitterImage,
    },
  };
}

const Page = async ({ params }: Props) => {
  const blog = ALL_BLOGS.find((post: BlogType) => post.slug === params.slug);
  const isBlogDraft = IS_PRODUCTION && blog?.isDraft;
  const noBlogFound = !blog;

  // create JSON+LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${blog?.baseUrl}blogs/${blog?.slug}`,
    },
    author: {
      "@type": "Person",
      name: "Arman Ahmadi",
      url: "https://armancodes.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "armancodes.com",
      logo: {
        "@type": "ImageObject",
        url: "https://armancodes.com/images/dark-logo.png",
      },
    },
    headline: blog?.title,
    image: blog?.image,
    datePublished: new Date(blog?.publishedAt as string),
    dateModified: new Date(blog?.updatedAt as string),
  };

  // handle redirect when article is draft or slut not found
  if (isBlogDraft || noBlogFound) {
    notFound();
  }

  const sidebarLinks: { title: string; href: string }[] =
    blog?.sidebarLinks?.map((linkItem: string) => ({
      title: linkItem,
      href: linkItem?.toLowerCase()?.split(" ")?.join("-"),
    }));

  const readingTimeData = readingTime(blog?.body?.raw as string);

  return (
    <main className="pt-6 md:pt-11">
      <BackLink href="/blogs">all blogs</BackLink>

      <BlogHeader
        title={blog?.title}
        slug={blog?.slug}
        publishedAt={blog?.publishedAt}
        shareLink={blog?.shareLink}
        readTime={readingTimeData?.minutes}
      />
      {blog?.image && <BlogHeroImage src={blog?.image} />}

      {/* body section */}
      <section className="flex sm:gap-x-6 md:gap-x-14">
        <div
          className={`${blog?.hasSidebarLinks ? "max-w-[600px]" : "w-full"} space-y-6`}
        >
          {blog?.hasSeries && (
            <BlogSeries seriesLinks={blog?.blogSeriesLinks} />
          )}

          {/* main content */}
          <MdxWrapper code={blog?.body?.code as string} />
        </div>

        {/* SIDEBAR OF SINGLE ARTICLES */}
        {sidebarLinks && sidebarLinks.length > 0 && (
          <SidebarLinks links={sidebarLinks} />
        )}
      </section>

      {/* TAGS SECTION */}
      <TagsList tags={blog?.tags} />

      {/* Newsletter */}
      <Newsletter />

      {/* JSON+LD data */}
      <JsonLd data={jsonLd} />
    </main>
  );
};

export default Page;
