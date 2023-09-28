"use client";

import Link from "next/link";
import { Product } from "@/utils/constants";
import { toLower } from "lodash";
import Image from "next/image";
import { useSiteVersion } from "@/context/SiteVersionContext";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isDiscipline } = useSiteVersion();

  return (
    <Link href={`/product/${product.sku.toLowerCase()}`}>
      <div
        className={`overflow-hidden flex h-full flex-col items-center rounded-lg border border-gray-950 gap-2 justify-between max-w-sm`}
      >
        <h1 className={`text-4xl font-serif px-4 text-center mt-6`}>{toLower(product.name)}</h1>
        <Image
          src={isDiscipline ? product.displayImgDiscipline : product.displayImgFreedom}
          alt={product.name}
          className="w-full h-auto cursor-pointer rounded-md max-w-sm"
        />
      </div>
    </Link>
  );
};
export default ProductCard;
