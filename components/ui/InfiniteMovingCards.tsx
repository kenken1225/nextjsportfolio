"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { useTranslation } from "@/app/i18n/client";

type InfiniteMovingCards = {
  params: { lng: string };
};

export default function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
  lng,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    img: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  lng: string;
} & InfiniteMovingCards) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { i18n, t } = useTranslation(lng, "Clients");

  // 翻訳の状態管理
  const [scrollerItems, setScrollerItems] = useState(items);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const changeLanguage = async () => {
      await i18n.changeLanguage(lng); // 非同期処理を待機
      updateScrollerItems();
    };

    changeLanguage();
  }, [lng]);

  // アニメーション設定用の関数
  useEffect(() => {
    getDirection();
    getSpeed();
    setStart(true);
  }, []);

  //scrollerItemsを複製してセットする関数
  const updateScrollerItems = () => {
    setScrollerItems([...items, ...items]);
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        className={cn(
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {scrollerItems.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span
                suppressHydrationWarning
                className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal"
              >
                {t(`quote${(idx % items.length) + 1}`) || item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <div className="me-3">
                    <img className="rounded-full" src={item.img} alt={item.title} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className=" text-xl leading-[1.6] text-white font-bold">
                      {" "}
                      {t(`name${(idx % items.length) + 1}`)}
                    </span>
                    <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                      {t(`title${(idx % items.length) + 1}`)}
                    </span>
                  </div>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
