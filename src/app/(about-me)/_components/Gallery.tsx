import {
  ABOLFAZL_AND_BIKE_FIRST_IMAGE,
  ABOLFAZL_AND_BIKE_SECOND_IMAGE,
  ABOLFAZL_FIRST_IMAGE,
  ABOLFAZL_SECOND_IMAGE,
} from "@/constants";
import PhotoCard from "./PhotoCard";

const Gallery = () => {
  return (
    <div className="relative h-[268px]">
      <PhotoCard
        src={ABOLFAZL_FIRST_IMAGE}
        width={290}
        height={219}
        rotate={-6}
        left={-20}
        index={1}
        meta="Me looking at horizon"
        alt="abolfazl looking at horizon"
      />
      <PhotoCard
        src={ABOLFAZL_SECOND_IMAGE}
        width={200}
        height={220}
        rotate={6.3}
        left={186}
        index={2}
        alt="abolfazl looking toward cameraman"
      />
      <PhotoCard
        src={ABOLFAZL_AND_BIKE_FIRST_IMAGE}
        width={250}
        height={225}
        rotate={-5.4}
        left={343}
        index={3}
        alt="abolfazl and his bike"
        meta="me and my bike"
      />
      <PhotoCard
        src={ABOLFAZL_AND_BIKE_SECOND_IMAGE}
        width={200}
        height={230}
        rotate={7.6}
        left={580}
        index={4}
        alt="abolfazl and his bike"
      />
    </div>
  );
};

export default Gallery;
