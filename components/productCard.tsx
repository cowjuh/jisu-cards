import Link from "next/link";
import { Product } from "@/utils/constants";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/${product.type}/${product.sku}`}>
      <img src={product.image} alt={product.name} className="w-full h-auto cursor-pointer" />
    </Link>
  );
};

export default ProductCard;
