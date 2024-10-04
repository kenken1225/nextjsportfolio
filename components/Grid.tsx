import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import { useTranslation } from "../app/i18n";

type GridProps = {
  params: { lng: string };
};

export default async function Grid({ params: { lng } }: GridProps) {
  const { t } = await useTranslation(lng, "Grid");

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }, index) => (
          <BentoGridItem
            id={id}
            key={id}
            title={t(`title${index + 1}`)}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
