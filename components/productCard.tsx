import Link from "next/link";
import { Product } from "@/utils/constants";
import { upperFirst, toLower } from "lodash";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/${product.type}/${product.sku}`}>
      <div className="overflow-hidden bg-[#f3f2f2] flex flex-col gap-4 p-6 rounded-lg">
        <h1 className="text-4xl">{upperFirst(toLower(product.name))}</h1>
        <img src={product.image} alt={product.name} className="w-full h-auto cursor-pointer rounded-md" />
      </div>
    </Link>
  );
};

export default ProductCard;
