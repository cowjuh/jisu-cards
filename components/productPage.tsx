"use client";

import { Product } from "@/utils/constants";
import ProductCard from "./productCard";
import ImageCarousel from "./imageCarousel";
import { SiteVersion, useSiteVersion } from "@/context/SiteVersionContext";

type ProductDisplayProps = {
  product: Product;
};

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  const { isDiscipline } = useSiteVersion();

  return (
    <div className="flex flex-col gap-8 py-8 items-center">
      <ProductCard product={product} />
      <div className="flex flex-col gap-8 w-full">
        <p className="whitespace-pre-line">{product.description}</p>
        <hr className="border-t border-black h-0.5" />
        <p className="whitespace-pre-line">{product.materials}</p>
        <hr className="border-t border-black h-0.5" />
        <p className="whitespace-pre-line">{product.additionalDetails}</p>
        <hr className="border-t border-black h-0.5" />
        <p className="text-2xl">${product.price}</p>
        <ImageCarousel
          images={
            isDiscipline
              ? product.supportingDisciplineImgs
              : [product.displayImgDiscipline, ...product.supportingFreedomImgs]
          }
        />
      </div>
    </div>
  );
};

export default ProductDisplay;
