import { Product } from "@/utils/constants";
import ProductCard from "./productCard";
import ImageCarousel from "./imageCarousel";

type ProductDisplayProps = {
  product: Product;
};

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-8 py-8">
      <ProductCard product={product} />
      <p className="whitespace-pre-line">{product.description}</p>
      <hr className="border-t border-black h-0.5" />
      <p className="whitespace-pre-line">{product.materials}</p>
      <hr className="border-t border-black h-0.5" />
      <p className="whitespace-pre-line">{product.additionalDetails}</p>
      <hr className="border-t border-black h-0.5" />
      <p className="text-2xl">${product.price}</p>
      <ImageCarousel images={product.supportingFreedomImgs} />
    </div>
  );
};

export default ProductDisplay;
