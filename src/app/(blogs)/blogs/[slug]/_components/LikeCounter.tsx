import DotsLoader from "@/components/ui/DotsLoader";

interface ILikeCounterProps {
  totalLikes: number;
  isLoading: boolean;
}

const LikeCounter: React.FC<ILikeCounterProps> = ({
  isLoading,
  totalLikes,
}) => {
  return (
    <div className="space-x-2">
      {isLoading ? (
        <DotsLoader />
      ) : (
        <span className="text-xs tracking-wide md:text-caption2">
          {totalLikes} {totalLikes === 1 ? "like" : "likes"}
        </span>
      )}
    </div>
  );
};

export default LikeCounter;
