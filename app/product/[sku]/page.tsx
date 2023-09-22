"use client";

import ProductDisplay from "@/components/productPage";
import { PRODUCTS, Product } from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { sku: string } }) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state
  const router = useRouter();

  useEffect(() => {
    setLoading(true); // Set loading to true when starting to fetch
    if (params.sku !== params.sku.toLowerCase()) {
      console.log("rerouting to", params.sku.toLowerCase());
      router.push(`/product/${params.sku.toLowerCase()}`);
      return;
    }
    const product = PRODUCTS.find((p) => p.sku.toLowerCase() === params.sku);
    if (!product) {
      router.push(`/404`);
    } else {
      setProduct(product);
    }
    setLoading(false); // Set loading to false when done
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div> // Show loading message while fetching
      ) : (
        product && (
          <div>
            <Link href={`/${product.type}`}>
              <button>{`<- All ${product.type}`}</button>
            </Link>
            <ProductDisplay product={product} />
          </div>
        )
      )}
    </>
  );
};

export default Page;
