import { Product } from "@/utils/constants";
import ProductCard from "./productCard";

type ProductDisplayProps = {
  product: Product;
};

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-6 py-6">
      <ProductCard product={product} />
      <p className="whitespace-pre-line">{product.description}</p>
      <hr className="border-t border-black h-0.5 mb-2" />
      <p className="whitespace-pre-line">{product.materials}</p>
      <hr className="border-t border-black h-0.5 mb-2" />
      <p className="whitespace-pre-line">{product.additionalDetails}</p>
      <hr className="border-t border-black h-0.5 mb-2" />
      <p className="text-2xl">${product.price}</p>
    </div>
  );
};

export default ProductDisplay;
