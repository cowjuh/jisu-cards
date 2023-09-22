import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  img: StaticImageData;
  imgAlt: string;
  categoryName: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ img, imgAlt, categoryName, link }) => {
  return (
    <Link href={link}>
      <div className="overflow-hidden bg-[#f3f2f2] flex flex-col justify-center gap-6 items-center p-6 rounded-lg">
        <Image src={img} alt={imgAlt} id={imgAlt} />
        <h2 className="text-4xl font-serif text-center">{categoryName}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard;
