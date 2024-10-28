"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useOutsideClick } from "@/_hooks/use-outside-click";

interface ExpandableCardProps {
  imageUrl: string;
  title: string;
  description: string;
  content: string;
  className?: string;
}

export function ExpandableCard({
  imageUrl,
  title,
  description,
  content,
}: ExpandableCardProps) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(false));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key="button"
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(false)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId="card"
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId="image">
                <Image
                  priority
                  width="1000"
                  height="1000"
                  src={imageUrl}
                  alt={title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId="title"
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {title}
                    </motion.h3>

                    <motion.p
                      layoutId="description"
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {description}
                    </motion.p>
                  </div>
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <motion.div
        layoutId="card"
        onClick={() => setActive(true)}
        className="bg-white/35 z-40 h-[200px] absolute rounded-2xl flex p-3 bottom-10 left-4 cursor-pointer backdrop-blur-sm hover:backdrop-blur-lg"
      >
        <motion.div layoutId="image" className="w-[200px]">
          <Image
            src="/offshore-farm.jpg"
            width="1000"
            height="1000"
            className="h-full w-full rounded-2xl object-cover"
            alt="offshore farm"
          />
        </motion.div>

        <div className="flex flex-col text-white py-3 pl-5 w-[350px] gap-3">
          <motion.h3 layoutId="title" className="text-xl font-medium">
            {title}
          </motion.h3>
          <motion.p layoutId="description" className="text-base font-light">
            {description}
          </motion.p>
        </div>
      </motion.div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default ExpandableCard;
