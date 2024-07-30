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
      className="group flex w-full min-w-[200px] items-center justify-between rounded-10 bg-[#14161A80] px-6 py-4 transition-all duration-200 ease-linear"
    >
      <div className="flex items-center gap-2">
        {icon}
        <span
          className={`text-caption1 font-light ${alexandria.className} capitalize tracking-wide text-white transition-all duration-200 ease-linear group-hover:font-bold`}
        >
          {children}
        </span>
      </div>

      {hasLinkIcon && (
        <IconLink
          data-testid="LinkButton-icon"
          className="relative transition-all duration-100 ease-linear group-hover:translate-x-1 [&_path]:stroke-white"
        />
      )}
    </Link>
  );
};

export default LinkButton;
