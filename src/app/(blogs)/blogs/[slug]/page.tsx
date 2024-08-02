import BackLink from "@/components/ui/BackLink";
import BlogHeader from "./_components/BlogHeader";

const Page = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);

  return (
    <main className="pt-6 md:pt-11">
      <BackLink href="/blogs">all blogs</BackLink>

      <BlogHeader />
    </main>
  );
};

export default Page;
