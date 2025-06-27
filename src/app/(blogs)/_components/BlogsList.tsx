import dynamic from "next/dynamic";
import { TBlogPartial } from "@/types";

const DynamicBlogItem = dynamic(() => import("./BlogItem"), {
  ssr: false,
});

interface IBlogsListProps {
  blogs: TBlogPartial[];
}

const BlogsList: React.FC<IBlogsListProps> = ({ blogs }) => {
  return (
    <ul className="flex flex-col gap-8">
      {blogs.map((blog) => (
        <DynamicBlogItem key={blog.slug} data={blog} />
      ))}
    </ul>
  );
};

export default BlogsList;
