import { ReactNode } from "react";

interface ITagProps {
  children: string | ReactNode;
}

const Tag: React.FC<ITagProps> = ({ children }) => {
  return (
    <span className="rounded-[80px] bg-[#282C33] px-2 py-[2px] text-sm capitalize text-white">
      {children}
    </span>
  );
};

export default Tag;
