import { Blog as BlogType } from "contentlayer/generated";
import BlogItem from "./BlogItem";

interface IBlogsListProps {
  blogs: BlogType[];
}

const BlogsList: React.FC<IBlogsListProps> = ({ blogs }) => {
  return (
    <ul className="flex flex-col gap-8">
      {blogs.map((blog) => (
        <BlogItem key={blog.slug} data={blog} />
      ))}
    </ul>
  );
};

export default BlogsList;
