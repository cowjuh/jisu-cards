"use client";

import ProductDisplay from "@/components/productPage";
import { SiteVersion, useSiteVersion } from "@/context/SiteVersionContext";
import { PRODUCTS, Product } from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { sku: string } }) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const router = useRouter();
  const { setSiteVersion } = useSiteVersion();

  useEffect(() => {
    setLoading(true);
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
    setLoading(false);
  }, []);

  useEffect(() => {
    const storedSiteVersion = localStorage.getItem("siteVersion");
    if (!storedSiteVersion) {
      setIsDialogOpen(true);
    }
  }, []);

  const handleSiteVersionClick = (version: SiteVersion) => {
    setSiteVersion(version);
    localStorage.setItem("siteVersion", version);
    setIsDialogOpen(false);
  };

  return (
    <>
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50 backdrop-blur-sm">
          <div className="bg-white p-4 rounded border border-black flex flex-col gap-6">
            <h1 className="text-3xl">CHOOSE YOUR ENTRANCE</h1>
            <div
              onClick={() => handleSiteVersionClick(SiteVersion.FREEDOM)}
              className="p-4 border border-black text-3xl font-serif text-center"
            >
              Freedom
            </div>
            <div
              onClick={() => handleSiteVersionClick(SiteVersion.DISCIPLINE)}
              className="p-4 border border-black text-3xl font-serif text-center"
            >
              Discipline
            </div>
          </div>
        </div>
      )}
      {loading ? (
        <div>Loading...</div>
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
