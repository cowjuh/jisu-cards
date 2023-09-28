"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useSiteVersion } from "@/context/SiteVersionContext"; // Import the hook

interface CategoryCardProps {
  img: StaticImageData;
  imgAlt: string;
  categoryName: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ img, imgAlt, categoryName, link }) => {
  const { isDiscipline } = useSiteVersion();

  return (
    <Link href={link}>
      <div
        className={`overflow-hidden flex justify-center items-center rounded-lg flex-col-reverse border border-gray-950 gap-2`}
      >
        <Image src={img} alt={imgAlt} id={imgAlt} />
        <h2 className="text-4xl font-serif text-center mt-6">{categoryName}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard;
