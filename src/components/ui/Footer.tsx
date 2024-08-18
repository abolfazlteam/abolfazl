import { alexandria } from "@/app/fonts";
import GithubIcon from "@/assets/icons/GithubIcon";
import IconLinkedIn from "@/assets/icons/LinkedIcon";
import IconMedium from "@/assets/icons/MediumIcon";
import IconRss from "@/assets/icons/RSS";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer
      className="mt-25 border-t border-border-articles bg-bgColor px-4 py-5 md:mt-45 md:px-0 md:py-8"
      data-testid="footer-element"
    >
      <div className="mx-auto max-w-[800px] space-y-12">
        <div className="flex justify-between">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-4">
              <Logo />
              <Link
                href={"mailto:abolfazljamshididev@gmail.com"}
                className={`text-caption2 text-text-primary md:text-body2 ${alexandria.className}`}
              >
                abolfazljamshididev@gmail.com
              </Link>
            </div>
            <span>front-end engineer</span>
          </div>
          {/* socials */}
          <div className="w-full max-w-max space-y-4">
            <h2
              className={`${alexandria.className} text-start text-body1 font-semibold sm:text-title3 sm:font-bold`}
            >
              Media
            </h2>
            <div className="flex items-center justify-between gap-2 p-1">
              <Link
                href={"https://github.com/abolfazlcodes"}
                className="group"
                target="_blank"
              >
                <GithubIcon className="h-6 w-6 transition-all duration-100 ease-in [&_path]:fill-text-primary group-hover:[&_path]:fill-primary" />
                <span aria-label="github profile" className="sr-only">
                  github profile
                </span>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/abolfazl-jamshidi/"}
                target="_blank"
                className="group"
              >
                <IconLinkedIn className="h-6 w-6 transition-all duration-100 ease-in [&_path]:fill-text-primary [&_path]:stroke-none group-hover:[&_path]:fill-primary" />
                <span className="sr-only">linkedin profile</span>
              </Link>
              <Link
                href={"https://abolfazlcodes.medium.com/"}
                className="group"
                target="_blank"
              >
                <IconMedium
                  viewBox="0 0 48 48"
                  className="h-7 w-7 transition-all duration-100 ease-in [&_path]:fill-text-primary group-hover:[&_path]:fill-primary"
                />
                <span className="sr-only">medium profile</span>
              </Link>
              <Link href={"/rss.xml"} target="_blank" className="group">
                <IconRss
                  viewBox="0 0 32 32"
                  className="h-7 w-7 transition-all duration-100 ease-in [&_path]:fill-text-primary group-hover:[&_path]:fill-primary"
                />
                <span className="sr-only">rss feed</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`text-xs leading-4 text-text-primary md:text-body2 ${alexandria.className} text-center`}
        >
          <span>© 2024 Abolfazl Jamshidi. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
