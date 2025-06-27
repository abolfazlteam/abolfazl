import { TBlogPartial } from "@/types";

export interface IBlogItemProps {
  shouldHaveAnimation?: boolean;
  animationDirection?: "left" | "right";
  data: TBlogPartial;
}
