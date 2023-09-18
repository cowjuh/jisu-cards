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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch grid-auto-rows-md:auto md:grid-rows-1">
          {filteredProducts.map((product) => (
            <div className="flex flex-col">
              <ProductCard key={product.sku} product={product} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
