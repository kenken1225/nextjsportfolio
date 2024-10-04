import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";
import { useTranslation } from "@/app/i18n";

type ExperienceProps = {
  params: { lng: string };
};

export default async function Experience({ params: { lng } }: ExperienceProps) {
  const { t } = await useTranslation(lng, "Experience");

  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading mb-10">
        My
        <span className="text-purple"> Work Experience </span>
      </h1>
      <div className="w-full mt-12 grid lg:grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, index) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-natural-200 dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 mb:p-5 lg:p-10 gap-2">
              <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16" />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">{t(`title${index + 1}`)}</h1>
                <p className="text-start text-white-100 mt-3 font-semibold">{t(`des${index + 1}`)}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
