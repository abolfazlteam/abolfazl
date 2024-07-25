import { IToolbarLinkItemProps } from "@/constants/toolbarlinks.constants";
import Link from "next/link";

interface IToolbarLinkProps {
  links: IToolbarLinkItemProps[];
}

const ToolbarLinks: React.FC<IToolbarLinkProps> = ({ links }) => {
  return (
    <article
      className="absolute top-0 z-30 hidden h-[311px] w-[32px] flex-col items-center gap-2 xl:left-52 xl:flex 2xl:left-96"
      data-testid="toolbar-links-wrapper"
    >
      {/* line */}
      <div className="h-full max-h-[191px] w-[1px] bg-gray-2" />

      {/* links */}
      <div className="flex flex-col gap-2">
        {links?.map((link) => (
          <div
            key={link.href}
            className="group flex h-8 w-8 items-center justify-center"
          >
            <Link href={link.href} target="_blank">
              {link.icon}
              <span aria-label={link.ariaLabel} className="sr-only">
                {link.ariaLabel}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ToolbarLinks;
