// import { Metadata } from "next";

import type { Blog as BlogType } from "contentlayer/generated";
import { allBlogs } from "contentlayer/generated";

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

type Props = {
  params: { slug: string };
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   // read route params
//   const slug = params.slug;

//   // finding article data
//   const articleData = allArticles?.find((article) => article.slug === slug);

//   return {
//     metadataBase: articleData?.baseUrl as unknown as URL,
//     title: `Arman Ahmadi - ${articleData?.title}`,
//     description: articleData?.metaDescription,
//     authors: { name: articleData?.author },
//     keywords: articleData?.keywords,
//     openGraph: {
//       images: [articleData?.ogImage as string],
//       type: "website",
//       description: articleData?.ogDescription,
//       title: articleData?.ogTitle,
//       url: articleData?.ogUrl,
//     },
//     robots: articleData?.robots,
//     alternates: {
//       canonical:
//         articleData?.canonical ||
//         `${articleData?.baseUrl}${articleData?.shareLink}`,
//     },
//     twitter: {
//       card: "summary_large_image",
//       creator: articleData?.author,
//       description: articleData?.twitterDescription,
//       title: articleData?.twitterTitle,
//       images: articleData?.twitterImage,
//     },
//   };
// }

const Page = async ({ params }: Props) => {
  const blog = allBlogs.find((post: BlogType) => post.slug === params.slug);
  const isBlogDraft = IS_PRODUCTION && blog?.isDraft;
  const noBlogFound = !blog;

  // create JSON+LD data
  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "Article",
  //   mainEntityOfPage: {
  //     "@type": "WebPage",
  //     "@id": `${blog?.baseUrl}blogs/${blog?.slug}`,
  //   },
  //   author: {
  //     "@type": "Person",
  //     name: "Arman Ahmadi",
  //     url: "https://armancodes.com/",
  //   },
  //   publisher: {
  //     "@type": "Organization",
  //     name: "armancodes.com",
  //     logo: {
  //       "@type": "ImageObject",
  //       url: "https://armancodes.com/images/dark-logo.png",
  //     },
  //   },
  //   headline: blog?.title,
  //   image: blog?.image,
  //   datePublished: new Date(blog?.publishedAt as string),
  //   dateModified: new Date(blog?.updatedAt as string),
  // };

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
      <BlogHeroImage src="/images/blog-hover-img.png" />

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
      {/* <JsonLd data={jsonLd} /> */}
    </main>
  );
};

export default Page;
