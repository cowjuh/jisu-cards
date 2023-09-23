"use client";

import Image from "next/image";
import React from "react";
import jisuLogo from "@/images/jisu-logo.png";
import Link from "next/link";
import { SiteVersion, useSiteVersion } from "@/context/SiteVersionContext";
import { toUpper } from "lodash";

const Navbar: React.FC = () => {
  const { isDiscipline, setSiteVersion } = useSiteVersion();

  const handleSwitchSiteVersion = () => {
    const version = isDiscipline ? SiteVersion.FREEDOM : SiteVersion.DISCIPLINE;
    setSiteVersion(version);
    localStorage.setItem("siteVersion", version);
  };

  return (
    <div className="w-full bg-white sticky top-0">
      <div className="w-full border-b border-black container mx-auto flex items-center h-16 justify-center">
        <Link href="/">
          <Image src={jisuLogo} alt="Jisu Logo" height={40} />
        </Link>
      </div>
      <div
        onClick={handleSwitchSiteVersion}
        className="h-8 border-b border-black flex justify-center text-sm items-center cursor-pointer"
      >
        Switch to {isDiscipline ? toUpper(SiteVersion.FREEDOM) : toUpper(SiteVersion.DISCIPLINE)} {`->`}
      </div>
    </div>
  );
};

export default Navbar;
