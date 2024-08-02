import BackLink from "@/components/ui/BackLink";
import BlogHeader from "./_components/BlogHeader";
import BlogHeroImage from "./_components/BlogHeroImage";
import BlogSeries from "./_components/BlogSeries";

const Page = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);

  return (
    <main className="pt-6 md:pt-11">
      <BackLink href="/blogs">all blogs</BackLink>

      <BlogHeader />
      <BlogHeroImage src="/images/blog-hover-img.png" />

      {/* body section */}
      <section className="flex border border-white sm:gap-x-6 md:gap-x-14">
        <div
          // className={`${article?.hasSidebarLinks ? "max-w-[600px]" : "w-full"} space-y-6`}
          className={`w-full space-y-6 border border-white`}
        >
          <BlogSeries
            seriesLinks={[
              { episode: 1, title: "hihi", isCurrent: true, link: "/" },
              { episode: 2, title: "hihi2", isCurrent: false },
            ]}
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
