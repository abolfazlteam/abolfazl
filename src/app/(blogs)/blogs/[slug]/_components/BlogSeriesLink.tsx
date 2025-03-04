import { ReactNode } from "react";
import Link from "next/link";
import { alexandria } from "@/app/fonts";

interface ISeriesLinkItemProps {
  children: ReactNode | string;
  href?: string;
}

const BlogSeriesLink: React.FC<ISeriesLinkItemProps> = ({ children, href }) => {
  if (href) {
    return (
      <li
        className={`${alexandria.className} text-caption2 underline underline-offset-4 transition-all duration-150 ease-linear hover:text-primary`}
      >
        <Link href={href}>{children}</Link>
      </li>
    );
  }

  if (!href) {
    return (
      <li
        className={`${alexandria.className} cursor-not-allowed text-caption2 text-[#626872] transition-all duration-150 ease-linear dark:text-[#ABB2BF]`}
      >
        {children}
      </li>
    );
  }
};

export default BlogSeriesLink;
