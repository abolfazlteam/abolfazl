import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ISearchLinkProps {
  href: string;
  children: string;
  category: string;
  className?: string;
  onClose: () => void;
}

const SearchLink: React.FC<ISearchLinkProps> = ({
  children,
  href,
  category,
  onClose,
  className,
}) => {
  return (
    <li
      className={twMerge("group border-b border-gray-2 px-6 py-4", className)}
    >
      <button onClick={onClose} className="w-full">
        <Link href={href} className="flex items-center justify-between">
          <p className="text-caption2 font-medium capitalize text-heading transition-all duration-200 ease-linear group-hover:font-bold md:text-body2">
            {children}
          </p>
          <p className="text-caption2 font-bold capitalize tracking-wider text-gray-2">
            {category}
          </p>
        </Link>
      </button>
    </li>
  );
};

export default SearchLink;
