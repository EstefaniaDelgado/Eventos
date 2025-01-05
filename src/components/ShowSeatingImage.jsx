import { useState } from "react";
import FullSizeSeatingImage from "./FullSizeSeatingImage";

const ShowSeatingImage = ({ imageSrc, eventName }) => {
  const [isImageFullSize, setIsImageFullSize] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClickImage = (src) => {
    setIsImageFullSize(true);
    setSelectedImage(src);
  };

  const handleCloseFullSizeImage = () => {
    setIsImageFullSize(false);
    setSelectedImage("");
  };

  return (
    <>
      <figure className="rounded-lg py-2 lg:p-2 h-4/5">
        <img
          src={imageSrc}
          alt={eventName}
          className="rounded-lg w-full h-full cursor-pointer"
          onClick={() => handleClickImage(imageSrc)}
        />
      </figure>
      {isImageFullSize && (
        <FullSizeSeatingImage
          imageSrc={selectedImage}
          closeImage={handleCloseFullSizeImage}
        />
      )}
    </>
  );
};

export default ShowSeatingImage;
