"use client";

import React, { createContext, useContext, useState } from "react";

export enum SiteVersion {
  DISCIPLINE = "discipline",
  FREEDOM = "freedom",
}

// Create Context
const SiteVersionContext = createContext<
  | {
      siteVersion: SiteVersion;
      setSiteVersion: React.Dispatch<React.SetStateAction<SiteVersion>>;
      isDiscipline: boolean;
    }
  | undefined
>(undefined);

// Provider Component
export const SiteVersionProvider = ({ children }: { children: React.ReactNode }) => {
  const [siteVersion, setSiteVersion] = useState<SiteVersion>(SiteVersion.FREEDOM);
  const isDiscipline = siteVersion === SiteVersion.DISCIPLINE;

  return (
    <SiteVersionContext.Provider value={{ siteVersion, setSiteVersion, isDiscipline }}>
      {children}
    </SiteVersionContext.Provider>
  );
};

// Custom Hook to use Context
export const useSiteVersion = () => {
  const context = useContext(SiteVersionContext);
  if (!context) {
    throw new Error("useSiteVersion must be used within a SiteVersionProvider");
  }
  return context;
};
