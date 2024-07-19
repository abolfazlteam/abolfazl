import BlogItem from "./BlogItem";

const BlogsList = () => {
  return (
    <div className="flex flex-col gap-8">
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
};

export default BlogsList;
