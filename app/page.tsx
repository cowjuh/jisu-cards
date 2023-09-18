import Link from "next/link";
import CategoryCard from "../components/categoryCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full flex flex-col flex-grow gap-16">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-4xl">JISU S/S 23</h1>
          <p>
            The collection melds celestial motifs with religious symbolism, encapsulating a dance between ethereal
            elegance and tangible tension. Drawing inspiration from literary and philosophical musings, each handcrafted
            piece tells a story of desire, devotion, and the delicate balance of light and shadow.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full items-start">
          <CategoryCard
            imgSrc="https://file.rendit.io/n/acc6M8QnZuZ64OZp6jMn.png"
            imgAlt="earrings"
            categoryName="Earrings"
            link="/earrings"
          />
          <CategoryCard
            imgSrc="https://file.rendit.io/n/BVS95Ekpx69xDRh8J12b.png"
            imgAlt="necklaces"
            categoryName="Necklaces"
            link="/necklaces"
          />
          <CategoryCard
            imgSrc="https://file.rendit.io/n/opkRemWR3PtNy3D3vcg0.png"
            imgAlt="Bracelets"
            categoryName="Bracelets"
            link="/bracelets"
          />
          <CategoryCard
            imgSrc="https://file.rendit.io/n/AZbA8FjmGp2EBAwEN4j7.png"
            imgAlt="rings"
            categoryName="Rings"
            link="/rings"
          />
        </div>
      </div>
    </main>
  );
}
