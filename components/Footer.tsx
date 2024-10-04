import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { log } from "console";
import { useTranslation } from "@/app/i18n";
import LanguageSwitcher from "./ui/LanguageSwitcher";

type FooterProps = {
  params: { lng: string };
};

export default async function Footer({ params: { lng } }: FooterProps) {
  const today = new Date();
  const year = today.getFullYear();
  const { t } = await useTranslation(lng, "Footer");

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[55vw]">{t("title")}</h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">{t("subtitle")}</p>
        <a href="mailto:kenya@kenglobaltech.com?subject=How can I help you:)&body=Let's do a wonderful project together!">
          <MagicButton title={t("contact")} icon={<FaLocationArrow />} position="right" />
        </a>
      </div>
      <LanguageSwitcher params={{ lng }} />
      <div className="text-center mt-5">
        <p>Copyright©{year} Ken</p>
      </div>
    </footer>
  );
}
