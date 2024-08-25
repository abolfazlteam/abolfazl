import { rammettoOne } from "@/app/fonts";
import IconArrowRight from "@/assets/icons/ArrowRightIcon";
import Link from "next/link";

// conditional type
type THeaderWithoutLinkProps = {
  title: string;
};

type THeaderWithLinkProps = {
  title: string;
  href: string;
  linkText?: string; // Optional, with a default provided later
};

// Union type
type THeaderProps = THeaderWithLinkProps | THeaderWithoutLinkProps;

const Header: React.FC<THeaderProps> = (props) => {
  const { title } = props;

  return (
    <header className="flex items-center justify-between">
      <h2 className={`${rammettoOne.className} text-lg capitalize md:text-2xl`}>
        {title}
      </h2>

      {"href" in props && (
        <Link
          href={props.href}
          className="group flex items-center gap-2 text-base"
        >
          <span>{props.linkText ?? "see all"}</span>
          <IconArrowRight
            viewBox="0 0 22 22"
            className="relative left-0 mt-1 h-5 w-5 transition-all duration-75 ease-linear group-hover:left-1 [&_path]:stroke-text-primary dark:[&_path]:stroke-white"
          />
        </Link>
      )}
    </header>
  );
};

export default Header;
