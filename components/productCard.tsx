import Link from "next/link";
import { Product } from "@/utils/constants";
import { upperFirst, toLower } from "lodash";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/${product.type}/${product.sku}`}>
      <div className="flex flex-col h-full overflow-hidden bg-[#f3f2f2] items-center justify-between gap-4 p-6 rounded-lg">
        <h1 className="text-4xl font-serif">{upperFirst(toLower(product.name))}</h1>
        <Image src={product.image} alt={product.name} className="w-full h-auto cursor-pointer rounded-md max-w-sm" />
      </div>
    </Link>
  );
};
export default ProductCard;
