"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

type ImageCarouselProps = {
  images: StaticImageData[];
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImg, setCurrentImg] = useState<StaticImageData>(images[0]);
  const [open, setOpen] = useState<boolean>(false);

  const handleSetCurrentImg = (img: StaticImageData) => () => {
    setCurrentImg(img);
  };

  const handleClick = () => {
    console.log("pls");
    alert("pls");
  };

  return (
    <div className="flex overflow-x-scroll gap-4">
      <button onClick={handleClick}>hey</button>
      {images.map((img, i) => (
        <div className="flex-none h-60 w-52 relative max-w-screen-sm sm:h-60 md:h-72 lg:h-80" key={i}>
          <Image
            src={img}
            alt={`Supporting product image ${i + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
