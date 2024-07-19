import { Alexandria } from "next/font/google";
import Link from "next/link";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: false,
});

const BlogItem = () => {
  return (
    <article>
      <Link
        href={"/blogs/1"}
        className={`flex w-full max-w-[800px] flex-col gap-6 rounded-10 bg-gray-7 px-6 pb-4 pt-6 ${alexandria.className}`}
      >
        {/* date */}
        <span className="text-[16px] font-light leading-6 text-text-secondary">
          Aug 24, 2022
        </span>
        <h2 className="text-xl font-semibold leading-9 text-text-secondary">
          Build-Time Syntax Highlighting: Zero Client-Side JS, Support for 100+
          Languages and Any VSCode Theme
        </h2>

        <p className="text-lg font-light leading-6 text-text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque...
        </p>

        <div className="mt-2 flex items-center gap-11 font-light text-text-secondary">
          <span className="text-sm leading-6">21,189 views</span>
          <span className="text-sm leading-6">225,228 likes</span>
        </div>
      </Link>
    </article>
  );
};

export default BlogItem;
