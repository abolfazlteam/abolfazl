import BlogItem from "./BlogItem";

const BlogsList = () => {
  return (
    <ul className="flex flex-col gap-8">
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </ul>
  );
};

export default BlogsList;
