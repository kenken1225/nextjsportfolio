import { projects } from "@/data";
import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { PinContainer } from "./pin";
import { FaLocationArrow } from "react-icons/fa";
import { useTranslation } from "@/app/i18n";

type RecentProJectsProps = {
  params: { lng: string };
};

export default async function RecentProjects({ params: { lng } }: RecentProJectsProps) {
  const { t } = await useTranslation(lng, "RecentProjects");

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small section of {""}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }, index) => (
          <div
            key={id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center lg:w-[50%] w-[80vw]"
          >
            <PinContainer title={t(`title${index + 1}`)} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-[-6px] rounded-2xl rotate-2 opacity-95" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{t(`title${index + 1}`)}</h1>
              <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2">{t(`des${index + 1}`)}</p>
              <a href={link}>
                <div className="flex items-center justify-center mt-7 mb-3">
                  {/* <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: "translateX(-${5 * index * 2}px)" }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div> */}

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs test-sm text-pruple">Check Live Site</p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </a>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
