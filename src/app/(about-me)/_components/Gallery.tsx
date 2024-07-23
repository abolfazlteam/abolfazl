import PhotoCard from "./PhotoCard";
import sampleImage from "../../../../public/images/blog-hover-img.png";

const Gallery = () => {
  return (
    <div className="relative h-[268px]">
      <PhotoCard
        src={sampleImage}
        width={290}
        height={219}
        rotate={-6}
        left={-20}
        index={1}
        meta="hi"
      />
      <PhotoCard
        src={sampleImage}
        width={200}
        height={220}
        rotate={6.3}
        left={186}
        index={2}
      />
      <PhotoCard
        src={sampleImage}
        width={250}
        height={205}
        rotate={-5.4}
        left={343}
        index={3}
      />
      <PhotoCard
        src={sampleImage}
        width={200}
        height={230}
        rotate={7.6}
        left={580}
        index={4}
      />
    </div>
  );
};

export default Gallery;
