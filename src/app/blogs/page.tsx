import { BlogList } from "@/components/blog/blog-list";
import { PageHeader } from "@/components/ui/page-header";

export const unstable_instant = { prefetch: "static" };

export default function BlogsPage() {
  return (
    <div className="px-[clamp(20px,4vw,52px)] pt-[clamp(40px,5vw,72px)]">
      <PageHeader
        page="writing"
        title="Notes to my past self"
        intro="If something cost me half a Saturday to figure out, I write it down so the next person (often future me) doesn't lose theirs."
      />
      <BlogList />
    </div>
  );
}
