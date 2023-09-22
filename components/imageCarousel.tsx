"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

type ImageCarouselProps = {
  images: StaticImageData[];
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <div>
      <div className="flex overflow-x-scroll gap-4">
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
    </div>
  );
};

export default ImageCarousel;
