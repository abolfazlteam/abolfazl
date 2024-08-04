interface IDotsLoaderProps {
  size?: number;
}

const DotsLoader: React.FC<IDotsLoaderProps> = ({ size = 8 }) => {
  return (
    <div className="flex w-max items-center gap-1">
      <span
        className="inline-block animate-pulse rounded-full bg-black dark:bg-white"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      ></span>
      <span
        className="inline-block animate-pulse rounded-full bg-black dark:bg-white"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      ></span>
      <span
        className="inline-block animate-pulse rounded-full bg-black dark:bg-white"
        style={{ width: `${size}px`, height: `${size}px` }}
      ></span>
    </div>
  );
};

export default DotsLoader;
