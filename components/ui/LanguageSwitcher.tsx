"use client";

import React from "react";
import "@/app/globals.css";
import { languages } from "@/app/i18n/setting";
import { useRouter } from "next/navigation";

type LanguageProps = {
  params: { lng: string };
};

const LanguageSwitcher: React.FC<LanguageProps> = ({ params }) => {
  const router = useRouter();
  const currentLng = params.lng;

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLng = event.target.value;
    router.push(`/${selectedLng}`);
  };

  return (
    <div className="">
      <div className="language-switcher-container">
        <select className="language-switcher " value={currentLng} onChange={handleLanguageChange}>
          {languages.map((lng) => (
            <option key={lng} value={lng}>
              {lng === "en" ? "English" : lng === "ja" ? "Japanese" : lng}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
