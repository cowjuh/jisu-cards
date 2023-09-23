"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export enum SiteVersion {
  DISCIPLINE = "discipline",
  FREEDOM = "freedom",
}

const SiteVersionContext = createContext<
  | {
      siteVersion: SiteVersion;
      setSiteVersion: React.Dispatch<React.SetStateAction<SiteVersion>>;
      isDiscipline: boolean;
    }
  | undefined
>(undefined);

export const SiteVersionProvider = ({ children }: { children: React.ReactNode }) => {
  const [siteVersion, setSiteVersion] = useState<SiteVersion>(SiteVersion.FREEDOM);
  const isDiscipline = siteVersion === SiteVersion.DISCIPLINE;

  useEffect(() => {
    const storedSiteVersion = localStorage.getItem("siteVersion");
    if (storedSiteVersion) {
      setSiteVersion(storedSiteVersion as SiteVersion);
    }
  }, []);

  return (
    <SiteVersionContext.Provider value={{ siteVersion, setSiteVersion, isDiscipline }}>
      {children}
    </SiteVersionContext.Provider>
  );
};

export const useSiteVersion = () => {
  const context = useContext(SiteVersionContext);
  if (!context) {
    throw new Error("useSiteVersion must be used within a SiteVersionProvider");
  }
  return context;
};
