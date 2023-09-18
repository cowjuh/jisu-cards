import CategoryCard from "../components/categoryCard";

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
