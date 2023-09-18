import { Product } from "@/utils/constants";

type ProductDisplayProps = {
  product: Product;
};

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
      <p className="mb-2">{product.description}</p>
      <hr className="border-t border-black h-0.5 mb-2" />
      <p className="mb-2">{product.materials}</p>
      <hr className="border-t border-black h-0.5 mb-2" />
      <p className="mb-2">{product.additionalDetails}</p>
      <hr className="border-t border-black h-0.5 mb-2" />
      <p className="text-2xl">${product.price}</p>
    </div>
  );
};

export default ProductDisplay;
