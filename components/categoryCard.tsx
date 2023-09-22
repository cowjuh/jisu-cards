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
    <div className="overflow-hidden bg-[#f3f2f2] flex flex-col justify-center gap-4 items-center px-1 py-6 rounded-lg">
      <Link href={link}>
        <Image src={img} alt={imgAlt} id={imgAlt} />
        <h2 className="text-4xl font-serif">{categoryName}</h2>
      </Link>
    </div>
  );
};

export default CategoryCard;
