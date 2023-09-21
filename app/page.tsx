import { PRODUCTS, ProductTypeEnum } from "@/utils/constants";
import CategoryCard from "../components/categoryCard";
import { getFirstProduct } from "@/utils/helpers";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full flex flex-col flex-grow gap-16 my-8">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-4xl">JISU S/S 23</h1>
          <p>
            The collection blurs the boundaries between labels, dissolving distinctions such as masculine x feminine,
            sensual x religious, and fact x fiction to embody a dance that is both elegant and laden with palpable
            tension. Drawing inspiration from literary and philosophical musings, each handcrafted piece tells a story
            of desire, devotion, and the delicate balance of light and shadow.
            <br />
            <br />
            The motivation to break down these labels and expectations originates from Jisu&apos;s own life journey,
            which diverges from the conventional path of a designer - having attended Harvard Law School over a design
            school, later transitioning into tech and digital design, ultimately culminating in the creation of JISU.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full items-start">
          <CategoryCard
            img={getFirstProduct(ProductTypeEnum.EARRINGS).image}
            imgAlt="earrings"
            categoryName="Earrings"
            link="/earrings"
          />
          <CategoryCard
            img={getFirstProduct(ProductTypeEnum.NECKLACES).image}
            imgAlt="necklaces"
            categoryName="Necklaces"
            link="/necklaces"
          />
          <CategoryCard
            img={getFirstProduct(ProductTypeEnum.BRACELETS).image}
            imgAlt="Bracelets"
            categoryName="Bracelets"
            link="/bracelets"
          />
          <CategoryCard
            img={getFirstProduct(ProductTypeEnum.RINGS).image}
            imgAlt="rings"
            categoryName="Rings"
            link="/rings"
          />
        </div>
      </div>
    </main>
  );
}
