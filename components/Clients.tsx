import React from "react";
import InfiniteMovingCards from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";
import { useTranslation } from "@/app/i18n";

type ClientsProps = {
  params: { lng: string };
};

export default async function Clients({ params: { lng } }: ClientsProps) {
  const { t } = await useTranslation(lng, "Clients");
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading mb-10">
        Kinds Words from
        <span className="text-purple"> satisfied clients </span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" params={{ lng }} lng={lng} />
      </div>
    </div>
  );
}
