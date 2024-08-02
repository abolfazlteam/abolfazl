import BackLink from "@/components/ui/BackLink";
import BlogHeader from "./_components/BlogHeader";
import BlogHeroImage from "./_components/BlogHeroImage";
import BlogSeries from "./_components/BlogSeries";
import SidebarLinks from "./_components/SidebarLinks";
import TagsList from "./_components/TagsList";
import Newsletter from "@/components/ui/Newsletter";

const Page = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);

  return (
    <main className="pt-6 md:pt-11">
      <BackLink href="/blogs">all blogs</BackLink>

      <BlogHeader />
      <BlogHeroImage src="/images/blog-hover-img.png" />

      {/* body section */}
      <section className="flex sm:gap-x-6 md:gap-x-14">
        <div
          // className={`${article?.hasSidebarLinks ? "max-w-[600px]" : "w-full"} space-y-6`}
          className={`w-full space-y-6`}
        >
          <BlogSeries
            seriesLinks={[
              { episode: 1, title: "hihi", isCurrent: true, link: "/" },
              { episode: 2, title: "hihi2", isCurrent: false },
            ]}
          />

          {/* main content */}
          {/* <MdxWrapper code={article?.body?.code as string} /> */}
        </div>

        {/* SIDEBAR OF SINGLE ARTICLES */}
        <SidebarLinks
          links={[
            { title: "ihihh", href: "/" },
            { title: "ihihh78", href: "/" },
          ]}
        />
      </section>

      {/* TAGS SECTION */}
      <TagsList tags={["react", "next.js", "typescript"]} />

      {/* Newsletter */}
      <Newsletter />

      {/* JSON+LD data */}
      {/* <JsonLd data={jsonLd} /> */}
    </main>
  );
};

export default Page;
