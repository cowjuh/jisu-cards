import ProductCard from "@/components/productCard";
import { PRODUCTS } from "@/utils/constants";
import { upperCase } from "lodash";
import Link from "next/link";

type CategoryPageProps = {
  params: { category: string };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const filteredProducts = PRODUCTS.filter((p) => p.type.toLowerCase() === params.category.toLowerCase());

  // If no products are found for the given category, return a message or handle the case accordingly.
  if (filteredProducts.length === 0) {
    return <div>No products found for this category</div>;
  }

  return (
    <main className="flex flex-col items-center gap-6">
      <div className="w-full flex flex-col flex-grow gap-6">
        <Link href="/">
          <button className="mb-4">{`<- All categories`}</button>
        </Link>
        <div className="w-full">
          <h1 className="text-4xl">{upperCase(params.category)}</h1>
        </div>
        <div className="flex flex-col w-full items-start gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
