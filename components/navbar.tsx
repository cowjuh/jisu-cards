import Image from "next/image";
import React from "react";
import jisuLogo from "@/images/jisu-logo.png";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-white sticky top-0 border-b border-black">
      <div className="container mx-auto flex justify-center items-center h-16">
        <Link href="/">
          <Image src={jisuLogo} alt="Jisu Logo" height={50} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
