import IconArrowRight from "@/assets/icons/ArrowRightIcon";
import { Rammetto_One } from "next/font/google";
import Link from "next/link";
// import { rammettoOne } from "../fonts";

const rammettoOne = Rammetto_One({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});

interface IHeaderProps {
  title: string;
  linkText?: string;
  href?: string;
}

const Header: React.FC<IHeaderProps> = ({
  title,
  href,
  linkText = "see all",
}) => {
  return (
    <header className="flex items-center justify-between">
      <h2 className={`${rammettoOne.className} text-lg capitalize md:text-2xl`}>
        {title}
      </h2>

      {linkText && href && (
        <Link href={href} className="group flex items-center gap-2 text-base">
          <span>{linkText}</span>
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
