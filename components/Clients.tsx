import React from "react";
import InfiniteMovingCards from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";
import { useTranslation } from "@/app/i18n";

type ClientsProps = {
  params: { lng: string };
};

export default async function Clients({ params: { lng } }: ClientsProps) {
  // if (lng === "favicon.ico") {
  //   return null;
  // }
  const { t } = await useTranslation(lng, "Clients");
  console.log("Clients - Current language:", lng);
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading mb-10">
        Kinds Words from
        <span className="text-purple"> satisfied clients </span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" params={{ lng }} lng={lng} />
      </div>

      {/* Comapnies Logos */}
      {/* <div className="flex flex-wrap item-center justify-center gap-4 md:gap-16 mx-lg:mt-10">
                {companies.map(({ id, img, name, nameImg }) => {
                    <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                        <img src="{img}" alt="{name}" className="md:w-10 w-5" />
                        <img src="{nameImg}" alt="name" className="md:w-24 w-20" />
                    </div>;
                })}
            </div> */}
    </div>
  );
}
