import { ReactNode } from "react";

const Tag = ({ children }: { children: string | ReactNode }) => {
  return (
    <span className="rounded-10 bg-text-link px-4 py-1 text-center text-body2 font-light text-white transition-all duration-150 ease-linear hover:bg-[#14161A]">
      {children}
    </span>
  );
};

export default Tag;
