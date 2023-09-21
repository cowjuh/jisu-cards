import ProductDisplay from "@/components/productPage";
import { PRODUCTS } from "@/utils/constants";
import Link from "next/link";

export default function Page({ params }: { params: { sku: string } }) {
  const product = PRODUCTS.find((p) => p.sku === params.sku);

  // If product with the given SKU is not found, return a message or handle the case accordingly.
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Link href={`/${product.type}`}>
        <button>{`<- All ${product.type}`}</button>
      </Link>
      <ProductDisplay product={product} />
    </div>
  );
}
