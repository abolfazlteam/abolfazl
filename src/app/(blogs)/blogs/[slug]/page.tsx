export const revalidate = 60 * 60 * 24 * 7; // each week

import { Metadata } from "next";

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
import { ALL_BLOGS, IBlogsProps } from "@/constants/content";
import JsonLd from "@/components/seo/JsonLd";
import formatPublishedDateHandler from "@/utils/date";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // finding blog data
  const blogData = ALL_BLOGS?.find((blog) => blog.slug === slug);

  const ogTitle = `${blogData?.title} | by Abolfazl Jamshidi | ${formatPublishedDateHandler(blogData?.publishedAt as string, "en-US", { month: "short", year: "numeric" })}`;

  return {
    metadataBase: blogData?.baseUrl as unknown as URL,
    title: ogTitle,
    description: blogData?.metaDescription,
    authors: { name: blogData?.author },
    keywords: blogData?.keywords,
    openGraph: {
      images: [blogData?.ogImage as string],
      type: "article",
      description: blogData?.ogDescription,
      title: ogTitle,
      url: blogData?.ogUrl,
      siteName: blogData?.baseUrl,
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
      title: ogTitle,
      images: blogData?.twitterImage,
      site: blogData?.baseUrl,
    },
  };
}

const Page = async ({ params }: Props) => {
  const blog = ALL_BLOGS.find((post: IBlogsProps) => post.slug === params.slug);
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
      <div className="relative">
        {blog?.image && <BlogHeroImage src={blog?.image} alt={blog?.title} />}

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
        </section>

        {/* SIDEBAR OF SINGLE ARTICLES */}
        {sidebarLinks && sidebarLinks.length > 0 && (
          <SidebarLinks links={sidebarLinks} />
        )}
      </div>

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

export async function generateStaticParams() {
  return ALL_BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}
