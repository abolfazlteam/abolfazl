import { Blog as BlogType } from "contentlayer/generated";

export interface IBlogItemProps {
  shouldHaveAnimation?: boolean;
  animationDirection?: "left" | "right";
  data: BlogType;
}
