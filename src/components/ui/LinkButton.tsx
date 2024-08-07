import { alexandria } from "@/app/fonts";
import IconLink from "@/assets/icons/LinkIcon";
import { ICommunicationLinkProps } from "@/constants/CommunicationLinks.constants";
import Link from "next/link";

const LinkButton: React.FC<ICommunicationLinkProps> = ({
  hasLinkIcon = false,
  children,
  icon,
  href,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex w-full min-w-[160px] items-center justify-between rounded-10 bg-[#282c33] px-6 py-4 transition-all duration-200 ease-linear md:min-w-[200px]"
    >
      <div className="flex items-center gap-2">
        {icon}
        <span
          className={`text-caption2 font-light md:text-caption1 ${alexandria.className} capitalize tracking-wide text-white transition-all duration-200 ease-linear group-hover:font-bold`}
        >
          {children}
        </span>
      </div>

      {hasLinkIcon && (
        <IconLink
          data-testid="LinkButton-icon"
          className="relative h-4 w-4 transition-all duration-100 ease-linear group-hover:translate-x-1 md:h-5 md:w-5 [&_path]:stroke-white"
        />
      )}
    </Link>
  );
};

export default LinkButton;
