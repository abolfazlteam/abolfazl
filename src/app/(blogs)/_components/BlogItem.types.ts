
import { IBlogsProps } from "@/constants/content";
export interface IBlogItemProps {
  shouldHaveAnimation?: boolean;
  animationDirection?: "left" | "right";
  data: IBlogsProps;
}